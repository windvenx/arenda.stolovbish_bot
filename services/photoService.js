// services/photoService.js
const fs = require('fs').promises;
const config = require('../config');

class PhotoService {
  /**
   * Получить источник фото (локальный файл или URL)
   */
  async getPhotoSource(key) {
    const localPath = config.photos[key];
    
    try {
      await fs.access(localPath);
      return { source: localPath, isLocal: true };
    } catch {
      const fallbackUrl = config.photos.fallback[key];
      if (fallbackUrl) {
        return { url: fallbackUrl, isLocal: false };
      }
      return null;
    }
  }

  async sendPhoto(ctx, key, caption, replyMarkup) {
    const photo = await this.getPhotoSource(key);
    
    if (!photo) {
      // Если фото нет вообще, отправляем текст
      return await ctx.reply(caption + '\n\n_(Фото временно недоступно)_', {
        parse_mode: 'Markdown',
        reply_markup: replyMarkup
      });
    }

    try {
      return await ctx.replyWithPhoto(photo.isLocal ? { source: photo.source } : { url: photo.url }, {
        caption,
        parse_mode: 'Markdown',
        reply_markup: replyMarkup
      });
    } catch (error) {
      console.error(`Ошибка загрузки фото ${key}:`, error.message);
      // Если не удалось загрузить фото, отправляем текст
      return await ctx.reply(caption + '\n\n_(Фото временно недоступно)_', {
        parse_mode: 'Markdown',
        reply_markup: replyMarkup
      });
    }
  }

  /**
   * Отправить несколько фото последовательно (для выбора цвета)
   */
  async sendPhotoGallery(ctx, items, getKeyFn, getCaptionFn, getButtonFn) {
    const results = [];
    
    for (const item of items) {
      const key = getKeyFn(item);
      const caption = getCaptionFn(item);
      const button = getButtonFn(item);
      
      const photo = await this.getPhotoSource(key);
      
      try {
        if (photo) {
          const result = await ctx.replyWithPhoto(photo.isLocal ? { source: photo.source } : { url: photo.url }, {
            caption,
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: [[button]]
            }
          });
          results.push(result);
        } else {
          const result = await ctx.reply(caption + '\n\n_(Фото временно недоступно)_', {
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: [[button]]
            }
          });
          results.push(result);
        }
        
        // Небольшая задержка между сообщениями для избежания лимитов Telegram
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Ошибка отправки фото ${key}:`, error.message);
      }
    }
    
    return results;
  }
}

module.exports = new PhotoService();