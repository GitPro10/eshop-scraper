import axios from 'axios';
import _ from 'lodash';
import titleCase from "./utils/titleCase.js" // function used for title case the product name
import {
  JSDOM
} from "jsdom";
const $ = (dom, selecetor) => dom.window.document.querySelector(selecetor) // select the html tag based on "selecetor"
import {
  headers,
  setHeader
} from "./utils/headers.js" // function for setting axios headers
import separatePriceAndCurrency from "./utils/separator.js" // function used for separating price and currency from a string
import fetch from "node-fetch";


function isObject(val) {
  if (val === null) {
    return false;
  }
  return ((typeof val === 'function') || (typeof val === 'object'));
}
async function getPriceConverted(price, baseCode, code) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/522bf58887ecce0f6af15527/latest/${baseCode}`)
  const data = await response.json()
  const exchangeRate = data.conversion_rates[code]
  return {
    price_converted: parseFloat((price*exchangeRate).toFixed(2)),
    converted_to_country_code: code
  }
}

// supported web links list
let othoba_link = "othoba.com";
let steam_link = "store.steampowered.com";
let amazon_link = "amazon.com"
let walmart_link = "walmart.com"
let nintendo_link = "nintendo.com"
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
  nintendo: {
    uri: nintendo_link,
    site: "Nintendo",
    selector: {
      price: [
        'span.klmBHV'
      ],
      name: [
        'h1.HUGKw'
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

// get the data based on the product "link"
function siteProps(link) {
  try {
    const webObjectName = _.findKey(webs, {
      uri: link.replace("www.", '').split("/")[2].trim() // analyze the link and get the name (get the key from "webs" object based on link)
    }) || null
    if (webObjectName === null) throw new Error("No site found");

    // prepare variables to return
    const siteName = webs[webObjectName].site
    const selectorsList = webs[webObjectName].selector
    const priceSelector = selectorsList.price.join(", ")
    const nameSelector = selectorsList.name.join(", ")
    const siteUri = webs[webObjectName].uri
    const fullPathLink = link
    return ({
      site: siteName,
      selectors: {
        priceSelector,
        nameSelector
      },
      uri: siteUri,
      link: fullPathLink
    })
  } catch (err) {
    return {
      IsError: true,
      ErrorMsg: err.message
    }
  }
}
export default async function getData(link, options) {
  try {
    var currencyCode;
    // options handling
    if (options) {
      if (isObject(options)) {
        currencyCode = options.currency || null
      } else {
        throw new Error("Options parameter must be an Object")
      }
    } else {
      currencyCode = null
    }

    const propsData = siteProps(link) // receive all returned data in a variable
    const {
      data
    } = await axios.get(propsData.link, {
        headers: setHeader(headers)
      }); // getting all resources from page
    const dom = new JSDOM(data)
    if (!$(dom, propsData.selectors.priceSelector)) throw new Error("Unable to get the product price")

    const price_raw_string = $(dom, propsData.selectors.priceSelector).textContent.toLowerCase().trim() // price and currency raw string
    var price = separatePriceAndCurrency(price_raw_string).price // price filtered


    var currency = separatePriceAndCurrency(price_raw_string).currency // currency filtered


    if (currencyCode != null) {
      const priceandcurrency_coverted = await getPriceConverted(price, currency, currencyCode)
      price = priceandcurrency_coverted.price_converted
      currency = priceandcurrency_coverted.converted_to_country_code
    }


    if (!$(dom, propsData.selectors.nameSelector)) throw new Error("Unable to get the product name")

    const name = titleCase($(dom, propsData.selectors.nameSelector).textContent.trim()) // title cased name

    const site = propsData.site // the site name
    return {
      price,
      currency,
      name,
      site,
      link
    }
  } catch (err) {
    return {
      IsError: true,
      ErrorMsg: err.message
    }
  }
}