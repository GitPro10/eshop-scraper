import price_finder from '../main.js';

// product links
const othoba = `https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color`
const steam = `https://store.steampowered.com/app/460930/Tom_Clancys_Ghost_Recon_Wildlands/`
const amazon = `https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JF9WMR9/`
const walmart = `https://www.walmart.com/ip/Pompeian-Organic-Robust-Extra-Virgin-Olive-Oil-16-fl-oz/13281639`
const crutchfield = `https://www.crutchfield.com/p_500ILXF409/Alpine-Halo9-iLX-F409.html`
const playstation = `https://store.playstation.com/en-gb/product/EP0082-PPSA03233_00-SOPFFORIGINDDE00`
const priceminister = `https://fr.shopping.rakuten.com/offer/buy/7307367871/le-grand-monde-format-broche.html`
const ebay = `https://www.ebay.com/p/13010391607`
const ebags = `https://www.ebags.com/backpacks/laptop-backpacks/belcourt-backpack/141770XXXX.html`
const bikroy = `https://bikroy.com/en/ad/fully-new-condition-for-sale-dhaka-division-3`

// expected results
const othoba_expected_price = 182
const othoba_expected_name = `Men's S.s T-shirt Anthra Melange`
const othoba_expected_currency = `BDT`

const steam_expected_price = 7.39
const steam_expected_name = `Tom Clancy's Ghost Recon® Wildlands`
const steam_expected_currency = `USD`

const amazon_expected_price = 979
const amazon_expected_name = `Apple Iphone 12 Pro Max, 128gb, Pacific Blue - Unlocked (renewed Premium)`
const amazon_expected_currency = `USD`

const walmart_expected_price = 5.78
const walmart_expected_name = `Pompeian Organic Robust Extra Virgin Olive Oil, 16 Fl Oz`
const walmart_expected_currency = `USD`

const crutchfield_expected_price = 899.95
const crutchfield_expected_name = `Alpine Halo9 Ilx-f409`
const crutchfield_expected_currency = `USD`

const playstation_expected_price = 84.99
const playstation_expected_name = `Stranger of Paradise Final Fantasy Origin Digital Deluxe Edition Ps4 & Ps5`
const playstation_expected_currency = `GBP`

const priceminister_expected_price = 2290
//const priceminister_expected_name = ``
const priceminister_expected_currency = `EUR`

const ebay_expected_price = 25.99
const ebay_expected_name = `Otterbox 7756603 Rugged Case for Iphone 7, 8 - Black`
const ebay_expected_currency = `USD`

const ebags_expected_price = 89.99
const ebags_expected_name = `Belcourt Backpack`
const ebags_expected_currency = `USD`

const bikroy_expected_price = 15500
const bikroy_expected_name = `Cycle Sale`
const bikroy_expected_currency = `BDT`

// jest timeout configuration
jest.setTimeout(15000)

// function for testing sites
function testSite(link, txt, currencyExpected, priceExpected, nameExpected) {
  test(txt, async ()=> {
  const {
    price,
    name,
    currency
  } = await price_finder(link)
  if (priceExpected) expect(price).toBe(priceExpected)
  if (currencyExpected) expect(currency).toBe(currencyExpected)
  if (nameExpected) expect(name).toBe(nameExpected)
})
}


describe("|| SHOULD WORK ALL WEBSITES ||", ()=>{
 
 // all tests
 testSite(othoba, "should fetch price, currency and name of Othoba website", othoba_expected_currency, othoba_expected_price, othoba_expected_name);
 
 testSite(steam, "should fetch price, currency and name of Steam website", steam_expected_currency, steam_expected_price, steam_expected_name);
 
 testSite(amazon, "should fetch price, currency and name of Amazon website", amazon_expected_currency, amazon_expected_price, amazon_expected_name);
 
 testSite(walmart, "should fetch price, currency and name of Walmart website", walmart_expected_currency, walmart_expected_price, walmart_expected_name);
 
 testSite(crutchfield, "should fetch price, currency and name of Crutchfield website", crutchfield_expected_currency, crutchfield_expected_price, crutchfield_expected_name);
 
 testSite(playstation, "should fetch price, currency and name of PlayStation website", playstation_expected_currency, playstation_expected_price, playstation_expected_name);
 
 testSite(priceminister, "should fetch price, currency and name of PriceMinister website", priceminister_expected_currency, priceminister_expected_price);
 
 testSite(ebay, "should fetch price, currency and name of E-Bay website", ebay_expected_currency, ebay_expected_price, ebay_expected_name);
 
 testSite(ebags, "should fetch price, currency and name of E-Bags website", ebags_expected_currency, ebags_expected_price, ebags_expected_name);
 
 testSite(bikroy, "should fetch price, currency and name of Bikroy.com website", bikroy_expected_currency, bikroy_expected_price, bikroy_expected_name);
 
})

// end of the main test file