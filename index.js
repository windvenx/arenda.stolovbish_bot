require('dotenv').config();
const { Telegraf } = require('telegraf');
const LocalSession = require('telegraf-session-local');
const photoService = require('./services/photoService');
const messageService = require('./services/messageService');
const orderService = require('./services/orderService');
const menuService = require('./services/menuService');
const translations = require('./translations');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Middleware для сессий
bot.use((new LocalSession({ database: 'session.json' })).middleware());

// Middleware для инициализации сессии и языка
bot.use((ctx, next) => {
  if (!ctx.session) {
    ctx.session = {};
  }
  if (!ctx.session.lang) {  // Добавьте проверку: устанавливаем lang только если он не существует
    ctx.session.lang = ctx.from?.language_code || 'ru';
    if (!['ru', 'en', 'ky'].includes(ctx.session.lang)) {
      ctx.session.lang = 'ru';
    }
  }
  console.log('Middleware lang:', ctx.session.lang);  // Добавьте отладку для проверки lang на входе в каждый запрос
  return next();
});

// Команда /start
bot.start(async (ctx) => {
  ctx.session = { lang: ctx.session.lang };
  await menuService.showMainMenu(ctx);
});

// Команда /lang
bot.command('lang', async (ctx) => {
  await menuService.showLanguageMenu(ctx);
});

// Обработка callback
bot.on('callback_query', async (ctx) => {
  const data = ctx.callbackQuery.data;
  await ctx.answerCbQuery();

  try {
    // Главное меню
    if (data === 'main_menu') {
          // Удалите эту строку: ctx.session = { lang: ctx.session.lang || 'ru' };
          console.log('Opening main menu with lang:', ctx.session.lang); // Отладка
          await menuService.showMainMenu(ctx, true);
          return;
        }
    
        // Добавьте это: Обработка кнопки смены языка из главного меню
        if (data === 'change_language') {
          await menuService.showLanguageMenu(ctx);
          return;
        }
    
        // Выбор языка
        // Выбор языка
        if (data.startsWith('lang_')) {
          const newLang = data.split('_')[1];
          ctx.session.lang = newLang;
          console.log('Language changed to:', newLang); // Отладка
    
          // Удалите это: await ctx.session.save();
    
          // Затем отредактируйте на главное меню
          const t = translations[newLang];
          const text = t.mainMenuWelcome;
          const options = { parse_mode: 'Markdown', reply_markup: menuService.getMainMenuMarkup(newLang).reply_markup };
          await ctx.editMessageText(text, options);
          return;
        }

        if (data === 'menu_about') {
              console.log('Showing about with lang:', ctx.session.lang); // Отладка
              await menuService.showAbout(ctx);
              return;
            }
            if (data === 'menu_contacts') {
              console.log('Showing contacts with lang:', ctx.session.lang); // Отладка
              await menuService.showContacts(ctx);
              return;
            }
            if (data === 'menu_faq') {
              console.log('Showing FAQ with lang:', ctx.session.lang); // Отладка
              await menuService.showFAQ(ctx);
              return;
            }
            if (data === 'menu_prices') {
              console.log('Showing prices with lang:', ctx.session.lang); // Отладка
              await menuService.showPrices(ctx);
              return;
            }

    // Начало заказа
    if (data === 'start_order') {
      ctx.session = { lang: ctx.session.lang, step: 'type' };
      await orderService.askTableType(ctx);
      return;
    }

    // Выбор типа стола
    if (data.startsWith('type_')) {
      await orderService.handleTableType(ctx, data);
      return;
    }

    // Выбор длины
    if (data.startsWith('length_')) {
      await orderService.handleLength(ctx, data);
      return;
    }

    // Выбор цвета
    if (data.startsWith('color_')) {
      await orderService.handleColor(ctx, data);
      return;
    }

    // Вариант стульев
    if (data.startsWith('chair_variant_')) {
      await orderService.handleChairVariant(ctx, data);
      return;
    }

    // Подтверждение заказа
    if (data === 'confirm') {
      await orderService.confirmOrder(ctx, bot);
      return;
    }

    // Изменить заказ
    if (data === 'edit_order') {
      ctx.session = { lang: ctx.session.lang, step: 'type' };
      await ctx.reply(translations[ctx.session.lang].restartOrder);
      await orderService.askTableType(ctx);
      return;
    }

  } catch (error) {
    console.error('Ошибка обработки callback:', error);
    await ctx.reply(translations[ctx.session.lang].errorGeneral);
  }
});

// Обработка текстовых сообщений
bot.on('text', async (ctx) => {
  const lang = ctx.session.lang;
  try {
    if (!ctx.session || !ctx.session.step) {
      await ctx.reply(translations[lang].useStart);
      return;
    }

    if (ctx.session.step === 'chairs_count') {
      await orderService.handleChairsCount(ctx, ctx.message.text);
      return;
    }

    if (ctx.session.step === 'name') {
      ctx.session.name = ctx.message.text;
      ctx.session.step = 'phone';
      await ctx.reply(translations[lang].enterPhone, { parse_mode: 'Markdown' });
    } 
    else if (ctx.session.step === 'phone') {
      ctx.session.phone = ctx.message.text;
      ctx.session.step = 'address';
      await ctx.reply(translations[lang].enterAddress, { parse_mode: 'Markdown' });
    } 
    else if (ctx.session.step === 'address') {
      ctx.session.address = ctx.message.text;
      ctx.session.step = 'dateTime';
      await ctx.reply(translations[lang].enterDateTime, { parse_mode: 'Markdown' });
    } 
    else if (ctx.session.step === 'dateTime') {
      ctx.session.dateTime = ctx.message.text;
      await orderService.showOrderSummary(ctx);
    }
  } catch (error) {
    console.error('Ошибка обработки текста:', error);
    await ctx.reply(translations[lang].errorGeneral);
  }
});

// Обработка ошибок
bot.catch((err, ctx) => {
  console.error('Ошибка бота:', err);
  const lang = ctx.session?.lang || 'ru';
  ctx.reply(translations[lang].errorGeneral).catch(console.error);
});

// Запуск бота
bot.launch()
  .then(() => console.log('🤖 Бот запущен и готов к работе!'))
  .catch((err) => console.error('Ошибка запуска:', err));

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));