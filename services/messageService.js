// services/messageService.js
const config = require('../config');
const translations = require('../translations');

class MessageService {
  getTableTypeName(lang, type) {
    return translations[lang].tableTypeNames[type];
  }

  /**
   * Get color name
   */
  getColorName(lang, color) {
    return translations[lang].colorNames[color];
  }

  /**
   * Get chair variant name
   */
  getChairVariantName(lang, variant) {
    return translations[lang].chairVariantNames[variant];
  }

  /**
   * Form order summary
   */
  getOrderSummary(lang, session) {
    const t = translations[lang];
    // Check required data
    if (!session.type || !session.length || !session.color) {
      throw new Error('Insufficient data for order formation');
    }

    const typeText = this.getTableTypeName(lang, session.type);
    const colorText = this.getColorName(lang, session.color);
    
    // FIX: Установить tables_count по умолчанию, если не задан
    const tablesCount = session.tables_count || 1;
    const days = session.days || 1;
    
    // NEW: Add guests and tables
    const tablesText = tablesCount > 1 
      ? t.tablesCombo.replace('{count}', tablesCount).replace('{length}', session.length) 
      : session.length + 'м';
    
    // Calculate price
    const basePrice = config.prices[session.type][session.length];
    const colorAddon = config.prices.colorAddon[session.color] || 0;
    
    let chairsPrice = 0;
    let chairsText = t.no;
    
    if (session.chairs_count && session.chairs_count > 0) {
      if (!session.chair_variant) {
        throw new Error('Chair variant not selected');
      }
      const chairPrice = config.prices.chair[session.chair_variant] || 100;
      chairsPrice = session.chairs_count * chairPrice;
      const variantName = this.getChairVariantName(lang, session.chair_variant);
      chairsText = `${session.chairs_count}${t.pcs}${variantName})`;
    }
    
    const deliveryPrice = 0; // Free according to price list
    
    // FIX: Правильный расчет total
    const tableTotalPrice = (basePrice + colorAddon) * tablesCount * days;
    const chairsTotalPrice = chairsPrice * days;
    const total = tableTotalPrice + chairsTotalPrice + deliveryPrice;
    
    // FIX: Формируем сводку с проверкой на guests
    let summary = `${t.orderDetails}`;
    
    if (session.guests) {
      summary += `${t.guestsLabel}${session.guests}\n`;
    }
    
    summary += `${t.tablesLabel}${tablesText}\n` +
      `${t.typeLabel}${typeText}\n` +
      `${t.colorLabel}${colorText}\n` +
      `${t.chairsLabel}${chairsText}\n\n` +
      `${t.daysLabel}${days}\n` +
      `${t.startDateLabel}${session.start_date}\n` +
      `${t.endDateLabel}${session.end_date}\n\n` +
      `${t.nameLabel}${session.name}\n` +
      `${t.phoneLabel}${session.phone}\n` +
      `${t.addressLabel}${session.address}\n\n` +
      `${t.cost}` +
      t.tableRent.replace('{price}', tableTotalPrice) +
      (colorAddon > 0 ? t.colorAddon.replace('{color}', colorText).replace('{addon}', colorAddon * tablesCount * days) : '') +
      (chairsPrice > 0 ? t.chairsCost.replace('{price}', chairsTotalPrice) : '') +
      t.delivery.replace('{price}', deliveryPrice) +
      t.total.replace('{total}', total);
    
    return summary;
  }
}

module.exports = new MessageService();