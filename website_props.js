// supported web links list
let othoba_link = "othoba.com";
let steam_link = "store.steampowered.com";
let amazon_link = "amazon.com"
let walmart_link = "walmart.com"
let crutchfield_link = "crutchfield.com"
let playstation_link = "store.playstation.com"
let priceminister_link = "fr.shopping.rakuten.com"
let ebay_link = "ebay.com"
let ebags_link = "ebags.com"
let bikroy_link = "bikroy.com"

// web datas (hardcoded data for every web) like selector, siteName etc.
const webs = {
  othoba: {
    uri: othoba_link,
    site: "Othoba",
    selector: {
      price: [
        'span[itemprop="price"]'
      ],
      name: [
        'h1[itemprop="name"]'
      ]
    },
  },
  steam: {
    uri: steam_link,
    site: "Steam",
    selector: {
      price: [
        'div.game_purchase_price',
        'div.discount_final_price'
      ],
      name: [
        'div#appHubAppName_responsive'
      ]
    }
  },
  amazon: {
    uri: amazon_link,
    site: "Amazon",
    selector: {
      price: [
        'span.a-price span.a-offscreen'
      ],
      name: [
        '#title'
      ]
    }
  },
  walmart: {
    uri: walmart_link,
    site: "Walmart",
    selector: {
      price: [
        'span[itemprop="price"]'
      ],
      name: [
        'h1[itemprop="name"]'
      ]
    }
  },
  crutchfield: {
    uri: crutchfield_link,
    site: "Crutchfield",
    selector: {
      price: [
        'div.price.js-price'
      ],
      name: [
        'h1.prod-title'
      ]
    }
  },
  playstation: {
    uri: playstation_link,
    site: "PlayStation",
    selector: {
      price: [
        'span.psw-t-title-m'
      ],
      name: [
        'h1[data-qa="mfe-game-title#name"]'
      ]
    }
  },
  priceminister: {
    uri: priceminister_link,
    site: "PriceMinister",
    selector: {
      price: [
        'span.price'
      ],
      name: [
        'h1'
      ]
    }
  },
  ebay: {
    uri: ebay_link,
    site: "E-Bay",
    selector: {
      price: [
        'div.display-price',
        //'span.vi-bin-primary-price__main-price'
      ],
      name: [
        'h1.product-title',
        //'h1[itemprop="name"]'
      ]
    }
  },
  ebags: {
    uri: ebags_link,
    site: "E-Bags",
    selector: {
      price: [
        'span.price-current'
      ],
      name: [
        'h1[itemprop="name"]'
      ]
    }
  },
  bikroy: {
    uri: bikroy_link,
    site: "Bikroy.com",
    selector: {
      price: [
        'div.amount--3NTpl'
      ],
      name: [
        'h1.title--3s1R8'
      ]
    }
  },
};

export default webs