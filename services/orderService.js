// services/orderService.js
const config = require('../config');
const translations = require('../translations');
const photoService = require('./photoService');
const messageService = require('./messageService');
const moment = require('moment');

class OrderService {
  getRecommendedChairs(length) {
    const len = parseFloat(length);
    if (len === 2.5) return 8;
    if (len === 3) return 10;
    if (len === 3.5) return 12;
    if (len === 4) return 14;
    if (len === 4.5) return 16;
    return 10; // fallback
  }

  /**
   * NEW: Get recommended length based on places per table
   */
  getRecommendedLength(places) {
    if (places <= 8) return '2.5';
    if (places <= 10) return '3';
    if (places <= 12) return '3.5';
    if (places <= 14) return '4';
    return '4.5';
  }

  /**
   * NEW: Ask guests count
   */
  async askGuestsCount(ctx) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    await ctx.reply(t.enterGuestsCount, {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [[{ text: t.mainMenu, callback_data: 'main_menu' }]]
      }
    });
  }

  /**
   * NEW: Handle guests count (text)
   */
  async handleGuestsCount(ctx, text) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    const guests = parseInt(text.trim());
    if (isNaN(guests) || guests < 1 || guests > 50) { // Arbitrary max
      await ctx.reply(t.invalidGuests);
      return;
    }
    ctx.session.guests = guests;

    // Calculate recommendations
    const maxPerTable = config.maxChairsPerLength['4.5']; // 16
    ctx.session.tables_count = Math.ceil(guests / maxPerTable);
    const recommendedLength = this.getRecommendedLength(guests / ctx.session.tables_count);

    await ctx.reply(t.guestsConfirmed.replace('{guests}', guests).replace('{tables}', ctx.session.tables_count), { parse_mode: 'Markdown' });

    ctx.session.step = 'type';
    await this.askTableType(ctx);
  }

  /**
   * Ask table type
   */
  async askTableType(ctx) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    await ctx.reply(t.chooseTableType, {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: t.lowTable, callback_data: 'type_low' }],
          [{ text: t.highTable, callback_data: 'type_high' }],
          [{ text: t.mainMenu, callback_data: 'main_menu' }]
        ]
      }
    });
  }

  /**
   * Handle table type selection
   */
  async handleTableType(ctx, data) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    ctx.session.type = data.split('_')[1];
    ctx.session.step = 'length';
    
    const typeName = messageService.getTableTypeName(lang, ctx.session.type);
    
    await photoService.sendPhoto(
      ctx,
      `${ctx.session.type}_white`,
      t.choseTypeText.replace('{type}', typeName),
      {
        inline_keyboard: config.lengths.map(len => ([{ text: t[`size${len.replace('.', '_')}`], callback_data: `length_${len}` }])).concat(
          [[{ text: t.back, callback_data: 'start_order' }]]
        )
      }
    );
  }

  /**
   * Handle length selection
   */
  async handleLength(ctx, data) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    ctx.session.length = data.split('_')[1];
    ctx.session.step = 'color';
    
    await ctx.reply(t.chooseColor, {
      parse_mode: 'Markdown'
    });
    
    // Show photos of each color with button
    await photoService.sendPhotoGallery(
      ctx,
      config.colors,
      (color) => `${ctx.session.type}_${color}`,
      (color) => messageService.getColorName(lang, color),
      (color) => ({ 
        text: `${t.choose}${messageService.getColorName(lang, color)}`, 
        callback_data: `color_${color}` 
      })
    );
  }

  /**
   * Handle color selection
   */
  async handleColor(ctx, data) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    ctx.session.color = data.split('_')[1];
    const colorName = messageService.getColorName(lang, ctx.session.color);
    
    await ctx.reply(t.choseColor.replace('{color}', colorName), { parse_mode: 'Markdown' });
    
    if (ctx.session.type === 'high') {
      ctx.session.step = 'chairs_count';
      const recommended = this.getRecommendedChairs(ctx.session.length);
      await ctx.reply(t.howManyChairs.replace('{length}', ctx.session.length).replace('{recommended}', recommended), {
        parse_mode: 'Markdown'
      });
    } else {
      ctx.session.step = 'name';
      await ctx.reply(t.enterName, { parse_mode: 'Markdown' });
    }
  }

  /**
   * Handle chairs count input (text message)
   */
  async handleChairsCount(ctx, text) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    const count = parseInt(text.trim());
    if (isNaN(count) || count < 0) {
      await ctx.reply(t.invalidNumber);
      return;
    }

    const recommended = this.getRecommendedChairs(ctx.session.length);
    if (count > recommended) {
      await ctx.reply(t.warningMaxChairs.replace('{recommended}', recommended));
      // Allow but warn
    }

    ctx.session.chairs_count = count;

    if (ctx.session.chairs_count === 0) {
      ctx.session.step = 'name';
      await ctx.reply(t.enterName, { parse_mode: 'Markdown' });
    } else {
      ctx.session.step = 'chair_variant';
      await ctx.reply(t.chooseChairVariant, {
        parse_mode: 'Markdown'
      });
      
      // Show chairs variants photos
      await photoService.sendPhotoGallery(
        ctx,
        config.chairsVariants,
        (variant) => `chair_${variant}`,
        (variant) => messageService.getChairVariantName(lang, variant),
        (variant) => ({ 
          text: `${t.choose}${messageService.getChairVariantName(lang, variant)}`, 
          callback_data: `chair_variant_${variant}` 
        })
      );
    }
  }

  /**
   * Handle chair variant selection
   */
  async handleChairVariant(ctx, data) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    ctx.session.chair_variant = data.split('_')[2];
    const variantName = messageService.getChairVariantName(lang, ctx.session.chair_variant);
    
    await ctx.reply(t.choseChairVariant.replace('{variant}', variantName), { parse_mode: 'Markdown' });
    ctx.session.step = 'name';
    await ctx.reply(t.enterName, { parse_mode: 'Markdown' });
  }

  /**
   * NEW: Handle days count (text)
   */
  async handleDaysCount(ctx, text) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    const days = parseInt(text.trim());
    if (isNaN(days) || days < 1) {
      await ctx.reply(t.invalidDays);
      return;
    }
    ctx.session.days = days;
    ctx.session.step = 'start_date';
    await ctx.reply(t.enterStartDate, { parse_mode: 'Markdown' });
  }

  /**
   * NEW: Handle start date (text)
   */
  async handleStartDate(ctx, text) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    const date = moment(text, 'DD.MM.YYYY', true);
    if (!date.isValid()) {
      await ctx.reply(t.invalidDate);
      return;
    }
    ctx.session.start_date = date.format('DD.MM.YYYY');
    ctx.session.end_date = date.clone().add(ctx.session.days - 1, 'days').format('DD.MM.YYYY'); // Calculate end
    await this.showOrderSummary(ctx);
  }

  /**
   * Show order summary
   */
  async showOrderSummary(ctx) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    try {
      const summary = messageService.getOrderSummary(lang, ctx.session);
      
      await photoService.sendPhoto(
        ctx,
        `${ctx.session.type}_${ctx.session.color}`,
        `${summary}${t.confirmOrder}`,
        {
          inline_keyboard: [
            [{ text: t.confirm, callback_data: 'confirm' }],
            [{ text: t.edit, callback_data: 'edit_order' }],
            [{ text: t.mainMenu, callback_data: 'main_menu' }]
          ]
        }
      );
    } catch (error) {
      console.error('Ошибка формирования заказа:', error);
      await ctx.reply(t.errorGeneral);
    }
  }

  /**
   * Confirm order and send to group
   */
  async confirmOrder(ctx, bot) {
    const lang = ctx.session.lang;
    const t = translations[lang];
    const groupId = process.env.TELEGRAM_GROUP_ID;
    console.log('confirmOrder: GROUP_ID=', groupId);
  
    if (!groupId) {
      console.error('GROUP_ID не установлен в .env');
      await ctx.reply(t.errorGeneral);
      return;
    }
  
    try {
      // Check if bot can see the chat
      const chatInfo = await bot.telegram.getChat(String(groupId));
      console.log('getChat OK:', chatInfo);
    } catch (err) {
      console.error('getChat failed:', err && err.response ? err.response : err);
      await ctx.reply(t.errorGeneral);
      return;
    }
  
    try {
      const user = ctx.from.username ? `@${ctx.from.username}` : `ID: ${ctx.from.id}`;
      const summary = messageService.getOrderSummary(lang, ctx.session);
      const message = `📩 *New order from ${user}!*\n\n${summary}`;
  
      // Send
      await bot.telegram.sendMessage(String(groupId), message, { parse_mode: 'Markdown' });
      console.log('sendMessage OK');
  
      await ctx.reply(t.orderSent, { parse_mode: 'Markdown' });
      ctx.session = { lang: lang };
    } catch (error) {
      console.error('Ошибка отправки в группу (sendMessage):', error && error.response ? error.response : error);
      await ctx.reply(t.errorSend);
    }
  }
}

module.exports = new OrderService();