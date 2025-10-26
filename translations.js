module.exports = {
  ru: {
    // Menu
    mainMenuWelcome: '🎉 *Добро пожаловать в аренду столов-трансформеров!*\n\n🪄 Мы предлагаем стильные столы для любого мероприятия:\n• Низкие столы для уютных посиделок 🪑\n• Высокие столы для банкетов и фуршетов 🍽️\n• Современный дизайн в 3 цветах\n• Быстрая доставка и сборка 🚚\n\nВыберите действие:',
    makeOrder: '🛒 Сделать заказ',
    priceList: '💰 Прайс-лист',
    about: '📜 О нас',
    contacts: '📞 Контакты',
    faq: '❓ Вопросы / Ответы',
    mainMenu: '🏠 Главное меню',
    changeLanguage: '🌐 Сменить язык',

    // Language selection
    chooseLanguage: '🌐 *Выберите язык:*',
    languageSelected: '✅ Язык изменён!',

    // Order
    chooseTableType: '🎯 *Выберите тип стола:*',
    lowTable: '🍱 Низкий стол',
    highTable: '🪑 Высокий стол',
    choseTypeText: '✨ Вы выбрали *{type}*!\n\n📏 Выберите размер (ширина всех столов: *1.5 м*):',
    size2_5: '📐 2.5 метра',
    size3: '📐 3 метра',
    size3_5: '📐 3.5 метра',
    size4: '📐 4 метра',
    back: '⬅️ Назад',
    chooseColor: '🎨 *Выберите цвет стола:*\n\nСейчас покажу фото каждого цвета ⬇️',
    choose: '✅ Выбрать ',
    choseColor: '🎨 Отлично! Вы выбрали цвет: *{color}*',
    howManyChairs: '🪑 *Сколько стульев вам нужно?*\n\nДля стола {length}м рекомендуется до {recommended} стульев.\nВведите число (или 0, если не нужны):',
    invalidNumber: '❌ Пожалуйста, введите целое число >= 0.',
    warningMaxChairs: '⚠️ Рекомендуемое максимум - {recommended} стульев для этого стола. Если нужно больше, свяжитесь с нами напрямую.',
    chooseChairVariant: '🎨 *Выберите дизайн стульев:*\n\nСейчас покажу варианты ⬇️',
    choseChairVariant: '🪑 Отлично! Вы выбрали: *{variant}*',
    enterName: '👤 *Введите ваше имя для связи:*',
    enterPhone: '📱 *Введите ваш номер телефона:*\n\n_Например: +996 555 123 456_',
    enterAddress: '📍 *Введите адрес доставки:*\n\n_Например: ул. Манаса 123, кв. 45_',
    enterDateTime: '📅 *Введите дату и время мероприятия:*\n\n_Например: 25.12.2024 18:00_',
    confirmOrder: '\n\n*Подтвердите заказ:*',
    confirm: '✅ Подтвердить заказ',
    edit: '✏️ Изменить заказ',
    orderDetails: '━━━━━━━━━━━━━━━━━\n📋 *ДЕТАЛИ ЗАКАЗА*\n━━━━━━━━━━━━━━━━━\n\n',
    typeLabel: '🪑 *Тип стола:* ',
    sizeLabel: '📏 *Размер:* {length} м × 1.5 м\n',
    colorLabel: '🎨 *Цвет:* ',
    chairsLabel: '🪑 *Стулья:* ',
    nameLabel: '👤 *Имя:* ',
    phoneLabel: '📱 *Телефон:* ',
    addressLabel: '📍 *Адрес:* ',
    dateTimeLabel: '📅 *Дата/Время:* ',
    cost: '━━━━━━━━━━━━━━━━━\n💰 *СТОИМОСТЬ*\n━━━━━━━━━━━━━━━━━\n\n',
    tableRent: 'Аренда стола: {price} сом\n',
    colorAddon: 'Цвет ({color}): +{addon} сом\n',
    chairsCost: 'Стулья: +{price} сом\n',
    delivery: 'Доставка: {price} сом\n\n',
    total: '*ИТОГО: {total} сом* 💰',
    no: 'Нет',
    pcs: ' шт. (',
    orderSent: '✅ *Заявка успешно отправлена!*',
    errorSend: '⚠️ Заявка сохранена, но возникла ошибка при отправке. Свяжитесь с нами напрямую: @scrownxx',
    restartOrder: '🔄 Хорошо, давайте начнём заново!',
    errorGeneral: '⚠️ Произошла ошибка. Попробуйте снова: /start',
    useStart: 'Используйте /start для начала работы с ботом.',

    // Colors, types, variants
    colorNames: {
      white: 'Белый ⚪',
      black: 'Чёрный ⚫',
      brown: 'Коричневый 🟤'
    },
    chairVariantNames: {
      gray: 'Серые 🪑',
      white: 'Белые 🪑'
    },
    tableTypeNames: {
      low: 'Низкий 🍱',
      high: 'Высокий 🪑'
    },

    // Info texts
    aboutText: `📜 *О НАС*

Мы — бизнес по аренде столов-трансформеров в Бишкеке! 🏡

🎯 *Наша миссия:*
Сделать ваше мероприятие комфортным и стильным без больших затрат.

👨‍👩‍👦 *Наша команда:*
• Опытные мастера по сборке 
• Ответственные курьеры
• Внимательные менеджеры

✨ *Что мы предлагаем:*
🪑 Низкие столы-трансформеры 
🍽️ Высокие столы-трансформеры 
🎨 3 цвета: белый, чёрный, коричневый
🪑 Стулья для высоких столов (серые и белые)
🚚 Доставка по всему Бишкеку
⚡ Быстрая сборка за 10-15 минут

🎉 *Идеально для:*
• Свадеб и юбилеев
• Корпоративов и презентаций
• Домашних вечеринок
• Торжественных ужинов
• Семейных праздников

💪 *Наши преимущества:*
✅ Профессиональная сборка
✅ Современный дизайн
✅ Гибкие условия аренды
✅ Доступные цены

_Доверьте нам создание комфорта на вашем мероприятии!_ 🎊`,
    contactsText: `📞 *КОНТАКТЫ*

*Основной контакт:*
👤 @scrownxx
📱 \\+996 554 721 722 

*График работы:*
🕐 Пн\\-Вс: 9:00 \\- 22:00
📅 Без выходных

*Зона доставки:*
📍 Бишкек и ближайшие пригороды

*Как с нами связаться:*
💬 Telegram: @scrownxx
📞 Телефон: +996 (554) 721 722 
🌐 Instagram: https://www.instagram.com/arenda.stolovbish

*Адрес склада:*
📍 г\\. Бишкек, ул\\. Таганрогская, 16
_Самовывоз возможен по предварительной договоренности_

*Способы оплаты:*
💵 Наличные
💳 Перевод на карту
📱 Мбанк / О!Банк / 

⚡ *Быстрая связь:*
Отвечаем в течение 30 минут\\!`,
    faqText: `❓ *ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ*

*1️⃣ Как происходит аренда?*
• Оформляете заказ через бота
• Мы подтверждаем наличие
• Привозим и собираем стол
• После мероприятия забираем

*2️⃣ Минимальный срок аренды?*
От 1 дня. Можно продлить по договорённости.

*3️⃣ Сколько стоит доставка?*
Доставка по Бишкеку бесплатная. За город - обсуждается.

*4️⃣ Кто собирает столы?*
Мы собираем бесплатно! Занимает 10-15 минут. Также прилагаем инструкцию.

*5️⃣ Можно ли арендовать только на несколько часов?*
Нет, минимум 1 день (сутки).

*7️⃣ Что если стол повредится?*
Обычный износ - нормально. При серьёзных повреждениях - удерживается из залога.

*9️⃣ Есть ли скидки?*
• При заказе от 3 столов - скидка 10%
• Постоянным клиентам - индивидуальные условия
• На длительную аренду - обсуждается

*🔟 Как оплачивать?*
50% при заказе, 50% при доставке.

*📞 Остались вопросы?*
Пишите @scrownxx - ответим на всё! 😊`,
    priceListText: `💰 *ПРАЙС-ЛИСТ*

━━━━━━━━━━━━━━━━━
🪑 *НИЗКИЕ СТОЛЫ* 
━━━━━━━━━━━━━━━━━

📏 *Размеры:* (все столы шириной 1.5 м)
• 2.5 м - 2000 сом/сутки
• 3.0 м - 2000 сом/сутки
• 3.5 м - 2000 сом/сутки
• 4.0 м - 2000 сом/сутки

━━━━━━━━━━━━━━━━━
🍽️ *ВЫСОКИЕ СТОЛЫ* 
━━━━━━━━━━━━━━━━━

📏 *Размеры:* (все столы шириной 1.5 м)
• 2.5 м - 3000 сом/сутки
• 3.0 м - 3000 сом/сутки
• 3.5 м - 3000 сом/сутки
• 4.0 м - 3000 сом/сутки

━━━━━━━━━━━━━━━━━
🎨 *ЦВЕТА*
━━━━━━━━━━━━━━━━━

⚪ Белый - 
⚫ Чёрный - 
🟤 Коричневый - (только для низких столов)

━━━━━━━━━━━━━━━━━
🪑 *СТУЛЬЯ* (только для высоких столов)
━━━━━━━━━━━━━━━━━

• Серые - 500 сом/шт
• Белые - 200 сом/шт

_Количество: любое, в зависимости от размера стола (рекомендуется 6-14 шт. в зависимости от длины)_

━━━━━━━━━━━━━━━━━
🚚 *ДОСТАВКА И УСЛУГИ*
━━━━━━━━━━━━━━━━━

• Доставка по Бишкеку - БЕСПЛАТНО
• Сборка/разборка - БЕСПЛАТНО

━━━━━━━━━━━━━━━━━
🎁 *СКИДКИ*
━━━━━━━━━━━━━━━━━

• От 3 столов - 10%
• Аренда от 7 дней - 15%
• Постоянным клиентам - 20%

📞 Заказать: @scrownxx`
  },
  en: {
    // Menu
    mainMenuWelcome: '🎉 *Welcome to transformable tables rental!*\n\n🪄 We offer stylish tables for any event:\n• Low tables for cozy gatherings 🪑\n• High tables for banquets and buffets 🍽️\n• Modern design in 3 colors\n• Fast delivery and assembly 🚚\n\nChoose action:',
    makeOrder: '🛒 Make order',
    priceList: '💰 Price list',
    about: '📜 About us',
    contacts: '📞 Contacts',
    faq: '❓ FAQ',
    mainMenu: '🏠 Main menu',
    changeLanguage: '🌐 Change language',

    // Language selection
    chooseLanguage: '🌐 *Choose language:*',
    languageSelected: '✅ Language changed!',

    // Order
    chooseTableType: '🎯 *Choose table type:*',
    lowTable: '🍱 Low table',
    highTable: '🪑 High table',
    choseTypeText: '✨ You chose *{type}*!\n\n📏 Choose size (all tables width: *1.5 m*):',
    size2_5: '📐 2.5 meters',
    size3: '📐 3 meters',
    size3_5: '📐 3.5 meters',
    size4: '📐 4 meters',
    back: '⬅️ Back',
    chooseColor: '🎨 *Choose table color:*\n\nI will show photos of each color ⬇️',
    choose: '✅ Choose ',
    choseColor: '🎨 Great! You chose color: *{color}*',
    howManyChairs: '🪑 *How many chairs do you need?*\n\nFor {length}m table, recommended up to {recommended} chairs.\nEnter number (or 0 if not needed):',
    invalidNumber: '❌ Please enter an integer >= 0.',
    warningMaxChairs: '⚠️ Recommended maximum - {recommended} chairs for this table. If you need more, contact us directly.',
    chooseChairVariant: '🎨 *Choose chairs design:*\n\nI will show variants ⬇️',
    choseChairVariant: '🪑 Great! You chose: *{variant}*',
    enterName: '👤 *Enter your name for contact:*',
    enterPhone: '📱 *Enter your phone number:*\n\n_Example: +996 555 123 456_',
    enterAddress: '📍 *Enter delivery address:*\n\n_Example: Manas st. 123, apt. 45_',
    enterDateTime: '📅 *Enter event date and time:*\n\n_Example: 25.12.2024 18:00_',
    confirmOrder: '\n\n*Confirm order:*',
    confirm: '✅ Confirm order',
    edit: '✏️ Edit order',
    orderDetails: '━━━━━━━━━━━━━━━━━\n📋 *ORDER DETAILS*\n━━━━━━━━━━━━━━━━━\n\n',
    typeLabel: '🪑 *Table type:* ',
    sizeLabel: '📏 *Size:* {length} m × 1.5 m\n',
    colorLabel: '🎨 *Color:* ',
    chairsLabel: '🪑 *Chairs:* ',
    nameLabel: '👤 *Name:* ',
    phoneLabel: '📱 *Phone:* ',
    addressLabel: '📍 *Address:* ',
    dateTimeLabel: '📅 *Date/Time:* ',
    cost: '━━━━━━━━━━━━━━━━━\n💰 *COST*\n━━━━━━━━━━━━━━━━━\n\n',
    tableRent: 'Table rent: {price} som\n',
    colorAddon: 'Color ({color}): +{addon} som\n',
    chairsCost: 'Chairs: +{price} som\n',
    delivery: 'Delivery: {price} som\n\n',
    total: '*TOTAL: {total} som* 💰',
    no: 'No',
    pcs: ' pcs. (',
    orderSent: '✅ *Order sent successfully!*',
    errorSend: '⚠️ Order saved, but there was an error sending. Contact us directly: @scrownxx',
    restartOrder: '🔄 Okay, let\'s start over!',
    errorGeneral: '⚠️ An error occurred. Try again: /start',
    useStart: 'Use /start to start working with the bot.',

    // Colors, types, variants
    colorNames: {
      white: 'White ⚪',
      black: 'Black ⚫',
      brown: 'Brown 🟤'
    },
    chairVariantNames: {
      gray: 'Gray 🪑',
      white: 'White 🪑'
    },
    tableTypeNames: {
      low: 'Low 🍱',
      high: 'High 🪑'
    },

    // Info texts
    aboutText: `📜 *ABOUT US*

We are a transformable tables rental business in Bishkek! 🏡

🎯 *Our mission:*
Make your event comfortable and stylish without large expenses.

👨‍👩‍👦 *Our team:*
• Experienced assembly masters
• Responsible couriers
• Attentive managers

✨ *What we offer:*
🪑 Low transformable tables
🍽️ High transformable tables
🎨 3 colors: white, black, brown
🪑 Chairs for high tables (gray and white)
🚚 Delivery across all Bishkek
⚡ Quick assembly in 10-15 minutes

🎉 *Perfect for:*
• Weddings and anniversaries
• Corporates and presentations
• Home parties
• Solemn dinners
• Family holidays

💪 *Our advantages:*
✅ Professional assembly
✅ Modern design
✅ Flexible rental terms
✅ Affordable prices

_Trust us to create comfort at your event!_ 🎊`,
    contactsText: `📞 *CONTACTS*

*Main contact:*
👤 @scrownxx
📱 \\+996 554 721 722 

*Working hours:*
🕐 Mon\\-Sun: 9:00 \\- 22:00
📅 No days off

*Delivery area:*
📍 Bishkek and nearby suburbs

*How to contact us:*
💬 Telegram: @scrownxx
📞 Phone: +996 (554) 721 722 
🌐 Instagram: https://www.instagram.com/arenda.stolovbish

*Warehouse address:*
📍 Bishkek, Taganrogskaya st., 16
_Self-pickup possible by prior agreement_

*Payment methods:*
💵 Cash
💳 Card transfer
📱 Mbank / O!Bank / 

⚡ *Quick response:*
We reply within 30 minutes\\!`,
    faqText: `❓ *FREQUENTLY ASKED QUESTIONS*

*1️⃣ How does the rental work?*
• Place order through the bot
• We confirm availability
• Deliver and assemble the table
• Pick up after the event

*2️⃣ Minimum rental period?*
From 1 day. Can extend by agreement.

*3️⃣ How much is delivery?*
Delivery in Bishkek is free. Outside - discussed.

*4️⃣ Who assembles the tables?*
We assemble for free! Takes 10-15 minutes. Instructions included.

*5️⃣ Can I rent for a few hours only?*
No, minimum 1 day (24 hours).

*7️⃣ What if the table is damaged?*
Normal wear is okay. For serious damage - deducted from deposit.

*9️⃣ Are there discounts?*
• For 3+ tables - 10% discount
• Regular customers - individual terms
• Long-term rental - discussed

*🔟 How to pay?*
50% on order, 50% on delivery.

*📞 Still have questions?*
Write to @scrownxx - we'll answer everything! 😊`,
    priceListText: `💰 *PRICE LIST*

━━━━━━━━━━━━━━━━━
🪑 *LOW TABLES* 
━━━━━━━━━━━━━━━━━

📏 *Sizes:* (all tables 1.5 m wide)
• 2.5 m - 2000 som/day
• 3.0 m - 2000 som/day
• 3.5 m - 2000 som/day
• 4.0 m - 2000 som/day

━━━━━━━━━━━━━━━━━
🍽️ *HIGH TABLES* 
━━━━━━━━━━━━━━━━━

📏 *Sizes:* (all tables 1.5 m wide)
• 2.5 m - 3000 som/day
• 3.0 m - 3000 som/day
• 3.5 m - 3000 som/day
• 4.0 m - 3000 som/day

━━━━━━━━━━━━━━━━━
🎨 *COLORS*
━━━━━━━━━━━━━━━━━

⚪ White - 
⚫ Black - 
🟤 Brown - (only for low tables)

━━━━━━━━━━━━━━━━━
🪑 *CHAIRS* (only for high tables)
━━━━━━━━━━━━━━━━━

• Gray - 500 som/pc
• White - 200 som/pc

_Quantity: any, depending on table size (recommended 6-14 pcs depending on length)_

━━━━━━━━━━━━━━━━━
🚚 *DELIVERY AND SERVICES*
━━━━━━━━━━━━━━━━━

• Delivery in Bishkek - FREE
• Assembly/disassembly - FREE

━━━━━━━━━━━━━━━━━
🎁 *DISCOUNTS*
━━━━━━━━━━━━━━━━━

• From 3 tables - 10%
• Rental from 7 days - 15%
• Regular customers - 20%

📞 Order: @scrownxx`
  },
  ky: {
    // Menu
    mainMenuWelcome: '🎉 *Трансформер үстөлдөрдү ижарага алууга кош келиңиз!*\n\n🪄 Биз ар бир иш-чара үчүн стилдүү үстөлдөрдү сунуштайбыз:\n• Жайлуу отуруулар үчүн төмөн үстөлдөр 🪑\n• Банкеттер жана фуршеттер үчүн жогорку үстөлдөр 🍽️\n• 3 түстө заманбап дизайн\n• Тез жеткирүү жана кураштыруу 🚚\n\nАракетти тандаңыз:',
    makeOrder: '🛒 Буйрутма берүү',
    priceList: '💰 Баалар тизмеси',
    about: '📜 Биз жөнүндө',
    contacts: '📞 Байланыштар',
    faq: '❓ Суроолор / Жооптор',
    mainMenu: '🏠 Башкы меню',
    changeLanguage: '🌐 Тилди өзгөртүү',

    // Language selection
    chooseLanguage: '🌐 *Тилди тандаңыз:*',
    languageSelected: '✅ Тил өзгөртүлдү!',

    // Order
    chooseTableType: '🎯 *Үстөл түрүн тандаңыз:*',
    lowTable: '🍱 Төмөн үстөл',
    highTable: '🪑 Жогорку үстөл',
    choseTypeText: '✨ Сиз *{type}* тандадыңыз!\n\n📏 Өлчөмүн тандаңыз (бардык үстөлдөрдүн туурасы: *1.5 м*):',
    size2_5: '📐 2.5 метр',
    size3: '📐 3 метр',
    size3_5: '📐 3.5 метр',
    size4: '📐 4 метр',
    back: '⬅️ Артка',
    chooseColor: '🎨 *Үстөл түсүн тандаңыз:*\n\nАзыр ар бир түстүн сүрөттөрүн көрсөтөм ⬇️',
    choose: '✅ Тандаңыз ',
    choseColor: '🎨 Сонун! Сиз түс тандадыңыз: *{color}*',
    howManyChairs: '🪑 *Сизге канча отургуч керек?*\n\n{length}м үстөл үчүн {recommended} отургучка чейин сунушталат.\nСан киргизиңиз (же керек болбосо 0):',
    invalidNumber: '❌ Сураныч, бүтүн сан >= 0 киргизиңиз.',
    warningMaxChairs: '⚠️ Сунушталган максимум - бул үстөл үчүн {recommended} отургуч. Көбүрөөк керек болсо, биз менен түз байланышыңыз.',
    chooseChairVariant: '🎨 *Отургучтардын дизайнын тандаңыз:*\n\nАзыр варианттарды көрсөтөм ⬇️',
    choseChairVariant: '🪑 Сонун! Сиз тандадыңыз: *{variant}*',
    enterName: '👤 *Байланыш үчүн атыңызды киргизиңиз:*',
    enterPhone: '📱 *Телефон номериңизди киргизиңиз:*\n\n_Мисалы: +996 555 123 456_',
    enterAddress: '📍 *Жеткирүү дарегин киргизиңиз:*\n\n_Мисалы: Манас көч. 123, батир. 45_',
    enterDateTime: '📅 *Иш-чаранын датасын жана убактысын киргизиңиз:*\n\n_Мисалы: 25.12.2024 18:00_',
    confirmOrder: '\n\n*Буйрутманы ырастаңыз:*',
    confirm: '✅ Буйрутманы ырастоо',
    edit: '✏️ Буйрутманы өзгөртүү',
    orderDetails: '━━━━━━━━━━━━━━━━━\n📋 *БУЙРУТМА ДЕТАЛДАРЫ*\n━━━━━━━━━━━━━━━━━\n\n',
    typeLabel: '🪑 *Үстөл түрү:* ',
    sizeLabel: '📏 *Өлчөмү:* {length} м × 1.5 м\n',
    colorLabel: '🎨 *Түсү:* ',
    chairsLabel: '🪑 *Отургучтар:* ',
    nameLabel: '👤 *Аты:* ',
    phoneLabel: '📱 *Телефон:* ',
    addressLabel: '📍 *Дареги:* ',
    dateTimeLabel: '📅 *Дата/Убакыт:* ',
    cost: '━━━━━━━━━━━━━━━━━\n💰 *БААСЫ*\n━━━━━━━━━━━━━━━━━\n\n',
    tableRent: 'Үстөл ижарасы: {price} сом\n',
    colorAddon: 'Түс ({color}): +{addon} сом\n',
    chairsCost: 'Отургучтар: +{price} сом\n',
    delivery: 'Жеткирүү: {price} сом\n\n',
    total: '*ЖАЛПЫ: {total} сом* 💰',
    no: 'Жок',
    pcs: ' даана (',
    orderSent: '✅ *Буйрутма ийгиликтүү жөнөтүлдү!*',
    errorSend: '⚠️ Буйрутма сакталды, бирок жөнөтүүдө ката кетти. Биз менен түз байланышыңыз: @scrownxx',
    restartOrder: '🔄 Жакшы, кайра баштайлы!',
    errorGeneral: '⚠️ Ката кетти. Кайра аракет кылыңыз: /start',
    useStart: 'Бот менен иштөөнү баштоо үчүн /start колдонуңуз.',

    // Colors, types, variants
    colorNames: {
      white: 'Ак ⚪',
      black: 'Кара ⚫',
      brown: 'Күрөң 🟤'
    },
    chairVariantNames: {
      gray: 'Боз 🪑',
      white: 'Ак 🪑'
    },
    tableTypeNames: {
      low: 'Төмөн 🍱',
      high: 'Жогорку 🪑'
    },

    // Info texts
    aboutText: `📜 *БИЗ ЖӨНҮНДӨ*

Биз — Бишкекте үстөл-трансформерлерди ижарага берүү бизнеси! 🏡

🎯 *Биздин миссиябыз:*
Сиздин иш-чараңызды чоң чыгымсыз ыңгайлуу жана стилдүү кылуу.

👨‍👩‍👦 *Биздин команда:*
• Монтаждоо боюнча тажрыйбалуу мастерлер 
• Жоопкерчиликтүү курьерлер
• Көңүл буруучу менеджерлер

✨ *Биз эмне сунуштайбыз:*
🪑 Төмөн үстөл-трансформерлер 
🍽️ Жогорку үстөл-трансформерлер 
🎨 3 түс: ак, кара, күрөң
🪑 Жогорку үстөлдөр үчүн отургучтар (боз жана ак)
🚚 Бүт Бишкек боюнча жеткирүү
⚡ 10-15 мүнөттө тез монтаждоо

🎉 *Идеалдуу:*
• Үйлөнүү тою жана юбилейлер
• Корпоративдер жана презентациялар
• Үй кечелери
• Салтанаттуу кечки тамактар
• Үй-бүлөлүк майрамдар

💪 *Биздин артыкчылыктарыбыз:*
✅ Профессионалдык монтаждоо
✅ Заманбап дизайн
✅ Ижаранын ийкемдүү шарттары
✅ Жеткиликтүү баалар

_Бизге иш-чараңызда ыңгайлуулукту түзүүнү ишениңиз!_ 🎊`,
    contactsText: `📞 *БАЙЛАНЫШТАР*

*Негизги байланыш:*
👤 @scrownxx
📱 \\+996 554 721 722 

*Иштөө графиги:*
🕐 Дүй\\-Жек: 9:00 \\- 22:00
📅 Дем алышсыз

*Жеткирүү аймагы:*
📍 Бишкек жана жакынкы чет-жакалар

*Биз менен кантип байланышса болот:*
💬 Telegram: @scrownxx
📞 Телефон: +996 (554) 721 722 
🌐 Instagram: https://www.instagram.com/arenda.stolovbish

*Склад дареги:*
📍 ш\\. Бишкек, Таганрогская көч., 16
_Өз алдынча алып кетүү алдын ала макулдашуу менен мүмкүн_

*Төлөм ыкмалары:*
💵 Накталай
💳 Картага которуу
📱 Мбанк / О!Банк / 

⚡ *Тез байланыш:*
30 мүнөттүн ичинде жооп беребиз\\!`,
    faqText: `❓ *КӨП БЕРИЛГЕН СУРООЛОР*

*1️⃣ Ижара кантип жүргүзүлөт?*
• Бот аркылуу буйрутма бересиз
• Биз бар экендигин ырастайбыз
• Үстөлдү жеткирип, кураштырабыз
• Иш-чарадан кийин алып кетебиз

*2️⃣ Минималдуу ижара мөөнөтү?*
1 күндөн. Макулдашуу боюнча узартууга болот.

*3️⃣ Жеткирүү канча турат?*
Бишкекте жеткирүү бекер. Шаардан тышкары - талкууланат.

*4️⃣ Үстөлдөрдү ким кураштырат?*
Биз бекер кураштырабыз! 10-15 мүнөттү алат. Нускама да берилет.

*5️⃣ Бир нече саатка гана ижарага алса болобу?*
Жок, минимум 1 күн (сутка).

*7️⃣ Үстөл бузулса эмне болот?*
Кадимки эскирүү - жакшы. Олуттуу бузулуулар үчүн - күрөөдөн кармалып калат.

*9️⃣ Арзандатуулар барбы?*
• 3 үстөлдөн - 10% арзандатуу
• Туруктуу кардарларга - жеке шарттар
• Узак мөөнөттүү ижарага - талкууланат

*🔟 Кантип төлөө керек?*
50% буйрутмада, 50% жеткирүүдө.

*📞 Дагы суроолор калдыбы?*
@scrownxx жазыңыз - баарына жооп беребиз! 😊`,
    priceListText: `💰 *БААЛАР ТИЗМЕСИ*

━━━━━━━━━━━━━━━━━
🪑 *ТӨМӨН ҮСТӨЛДӨР* 
━━━━━━━━━━━━━━━━━

📏 *Өлчөмдөрү:* (бардык үстөлдөр 1.5 м туурасында)
• 2.5 м - 2000 сом/күн
• 3.0 м - 2000 сом/күн
• 3.5 м - 2000 сом/күн
• 4.0 м - 2000 сом/күн

━━━━━━━━━━━━━━━━━
🍽️ *ЖОГОРКУ ҮСТӨЛДӨР* 
━━━━━━━━━━━━━━━━━

📏 *Өлчөмдөрү:* (бардык үстөлдөр 1.5 м туурасында)
• 2.5 м - 3000 сом/күн
• 3.0 м - 3000 сом/күн
• 3.5 м - 3000 сом/күн
• 4.0 м - 3000 сом/күн

━━━━━━━━━━━━━━━━━
🎨 *ТҮСТӨР*
━━━━━━━━━━━━━━━━━

⚪ Ак - 
⚫ Кара - 
🟤 Күрөң - (төмөн үстөлдөр үчүн гана)

━━━━━━━━━━━━━━━━━
🪑 *ОТУРГУЧТАР* (жогорку үстөлдөр үчүн гана)
━━━━━━━━━━━━━━━━━

• Боз - 500 сом/даана
• Ак - 200 сом/даана

_Саны: ар кандай, үстөл өлчөмүнө жараша (узундугуна жараша 6-14 даана сунушталат)_

━━━━━━━━━━━━━━━━━
🚚 *ЖЕТКИРҮҮ ЖАНА КЫЗМАТТАР*
━━━━━━━━━━━━━━━━━

• Бишкекте жеткирүү - БЕКЕР
• Кураштыруу/ажыратуу - БЕКЕР

━━━━━━━━━━━━━━━━━
🎁 *АРЗАНДАТУУЛАР*
━━━━━━━━━━━━━━━━━

• 3 үстөлдөн - 10%
• 7 күндөн ижара - 15%
• Туруктуу кардарларга - 20%

📞 Буйрутма берүү: @scrownxx`
  }
};