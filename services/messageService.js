// services/messageService.js
const config = require('../config');
const translations = require('../translations');

class MessageService {
  /**
   * Get table type name
   */
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
    const total = basePrice + colorAddon + chairsPrice + deliveryPrice;
    
    return `${t.orderDetails}` +
      `${t.typeLabel}${typeText}\n` +
      t.sizeLabel.replace('{length}', session.length) +
      `${t.colorLabel}${colorText}\n` +
      `${t.chairsLabel}${chairsText}\n\n` +
      `${t.nameLabel}${session.name}\n` +
      `${t.phoneLabel}${session.phone}\n` +
      `${t.addressLabel}${session.address}\n` +
      `${t.dateTimeLabel}${session.dateTime}\n\n` +
      `${t.cost}` +
      t.tableRent.replace('{price}', basePrice) +
      (colorAddon > 0 ? t.colorAddon.replace('{color}', colorText).replace('{addon}', colorAddon) : '') +
      (chairsPrice > 0 ? t.chairsCost.replace('{price}', chairsPrice) : '') +
      t.delivery.replace('{price}', deliveryPrice) +
      t.total.replace('{total}', total);
  }
}

module.exports = new MessageService();