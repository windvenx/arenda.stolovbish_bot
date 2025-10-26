const translations = require('../translations');

class MenuService {
  /**
   * Get main menu markup
   */
  getMainMenuMarkup(lang) {
    const t = translations[lang];
    return {
      reply_markup: {
        inline_keyboard: [
          [{ text: t.makeOrder, callback_data: 'start_order' }],
          [{ text: t.priceList, callback_data: 'menu_prices' }],
          [{ text: t.about, callback_data: 'menu_about' }],
          [{ text: t.contacts, callback_data: 'menu_contacts' }],
          [{ text: t.faq, callback_data: 'menu_faq' }],
          [{ text: t.changeLanguage, callback_data: 'change_language' }]
        ]
      }
    };
  }
  
  getBackToMenuMarkup(lang) {
    const t = translations[lang];
    return {
      reply_markup: {
        inline_keyboard: [[{ text: t.mainMenu, callback_data: 'main_menu' }]]
      }
    };
  }

  /**
   * Show language selection menu
   */
   async showLanguageMenu(ctx) {
       const lang = ctx.session.lang || 'ru';
       console.log('Showing language menu with lang:', lang); // Добавьте отладку
       const t = translations[lang];
       await ctx.reply(t.chooseLanguage, {
         parse_mode: 'Markdown',
         reply_markup: {
           inline_keyboard: [
             [{ text: 'Русский 🇷🇺', callback_data: 'lang_ru' }],
             [{ text: 'English 🇬🇧', callback_data: 'lang_en' }],
             [{ text: 'Кыргызча 🇰🇬', callback_data: 'lang_ky' }],
             [{ text: t.mainMenu, callback_data: 'main_menu' }]
           ]
         }
       });
     }

  /**
   * Show main menu
   */
   async showMainMenu(ctx, isEdit = false) {
       const lang = ctx.session.lang || 'ru'; // Fallback на русский, если язык не установлен
       console.log('Showing main menu with lang:', lang); // Отладка
       const t = translations[lang];
       const text = t.mainMenuWelcome;
   
       const options = { parse_mode: 'Markdown', ...this.getMainMenuMarkup(lang) };
   
       if (isEdit) {
         try {
           await ctx.editMessageText(text, options);
         } catch (error) {
           console.error('Error editing main menu:', error);
           await ctx.reply(text, options);
         }
       } else {
         await ctx.reply(text, options);
       }
     }

  /**
   * Show about
   */
   /**
    * Show about
    */
    async showAbout(ctx) {
        const lang = ctx.session.lang || 'ru';
        console.log('In showAbout, using lang:', lang); // Добавьте отладку
        await ctx.reply(translations[lang].aboutText, { 
          parse_mode: 'Markdown', 
          ...this.getBackToMenuMarkup(lang) 
        });
      }
 
   /**
    * Show contacts
    */
   async showContacts(ctx) {
     const lang = ctx.session.lang || 'ru';
     console.log('In showContacts, using lang:', lang); // Добавьте отладку
     await ctx.reply(translations[lang].contactsText, { 
       parse_mode: 'Markdown', 
       ...this.getBackToMenuMarkup(lang) 
     });
   }
 
   /**
    * Show FAQ
    */
   async showFAQ(ctx) {
     const lang = ctx.session.lang || 'ru';
     console.log('In showFAQ, using lang:', lang); // Добавьте отладку
     await ctx.reply(translations[lang].faqText, { 
       parse_mode: 'Markdown', 
       ...this.getBackToMenuMarkup(lang) 
     });
   }
 
   /**
    * Show price list
    */
   async showPrices(ctx) {
     const lang = ctx.session.lang || 'ru';
     console.log('In showPrices, using lang:', lang); // Добавьте отладку
     await ctx.reply(translations[lang].priceListText, { 
       parse_mode: 'Markdown', 
       ...this.getBackToMenuMarkup(lang) 
     });
   }
}

module.exports = new MenuService();