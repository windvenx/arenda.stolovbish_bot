// config.js
module.exports = {
  colors: ['white', 'black', 'brown'],
  chairsVariants: ['gray', 'white'],
  
  photos: {
    // Локальные пути
    low_white: './images/low_white.png',
    low_black: './images/low_black.png',
    low_brown: './images/low_brown.png',
    high_white: './images/high_white.png',
    high_black: './images/high_black.png',
    high_brown: './images/high_brown.png',
    chair_gray: './images/chair_gray.png',
    chair_white: './images/chair_white.png',
    
    // Fallback URL из интернета
    fallback: {
      low_white: 'https://expandfurniture.com/cdn/shop/files/New-Alzare-Transforming-table-opened-in-dining-mode-in-glossy-white-1.jpg',
      low_black: 'https://www.sobefurniture.com/wp-content/uploads/texas-black-extendable-coffee-table-1-scaled.jpg',
      low_brown: 'https://m.media-amazon.com/images/I/81rM4g9sL-L._AC_SL1500_.jpg',
      high_white: 'https://expandfurniture.com/cdn/shop/files/Flip-Console-Counter-Height-table-that-expands-open-1.jpg',
      high_black: 'https://m.media-amazon.com/images/I/61DsAB9SF5L._AC_UF894,1000_QL80_.jpg',
      high_brown: 'https://m.media-amazon.com/images/I/71XJ0e9b0pL._AC_SL1500_.jpg',
      chair_gray: 'https://m.media-amazon.com/images/I/71CuSjkRh8L._AC_UF894,1000_QL80_.jpg',
      chair_white: 'https://m.media-amazon.com/images/I/61y9jN4qGSL._AC_UF894,1000_QL80_.jpg',
    }
  },
  
  prices: {
    low: { '2.5': 2000, '3': 2000, '3.5': 2000, '4': 2000 },
    high: { '2.5': 3000, '3': 3000, '3.5': 3000, '4': 3000 },
    colorAddon: { white: 0, black: 0, brown: 0 },
    chair: { gray: 500, white: 200 }
  }
};