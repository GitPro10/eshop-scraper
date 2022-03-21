import price_finder from '../main.js';

function strCheck(str) {
  if (typeof str === 'string')
    return true
  else
    return false
}
function numCheck(num) {
  if (typeof num === 'number')
    return true
  else
    return false
}

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
const othoba_expected_currency = `BDT`
const steam_expected_currency = `USD`
const amazon_expected_currency = `USD`
const walmart_expected_currency = `USD`
const crutchfield_expected_currency = `USD`
const playstation_expected_currency = `GBP`
const priceminister_expected_currency = `EUR`
const ebay_expected_currency = `USD`
const ebags_expected_currency = `USD`
const bikroy_expected_currency = `BDT`

// jest timeout configuration
jest.setTimeout(30000)
// county code for testing currency conversion
const countryCode = "EUR"

// function for testing sites
function testSite(link, txt, currencyExpected) {
  test(txt, async ()=> {

    // asynchronous data fetching test without currency conversion
    const {
      price,
      name,
      currency
    } = await price_finder(link)
    expect(numCheck(parseInt(price))).toBeTruthy()
    expect(currency).toBe(currencyExpected)
    expect(strCheck(name)).toBeTruthy()

    // then-catch data fetching test with/only currency conversion
    price_finder(link, countryCode).then(res => {
      const currency_converted = res.currency;
      const price_converted = res.price;
      expect(currency_converted).toBe(countryCode)
      expect(price_converted).not.toBeNaN()
    })
  })
}


describe("|| SHOULD WORK ALL WEBSITES ||", ()=> {

  // all tests

  testSite(othoba, "should fetch price, currency and name of Othoba website", othoba_expected_currency);

  testSite(steam, "should fetch price, currency and name of Steam website", steam_expected_currency);

  testSite(amazon, "should fetch price, currency and name of Amazon website", amazon_expected_currency);

  testSite(walmart, "should fetch price, currency and name of Walmart website", walmart_expected_currency);

  testSite(crutchfield, "should fetch price, currency and name of Crutchfield website", crutchfield_expected_currency);

  testSite(playstation, "should fetch price, currency and name of PlayStation website", playstation_expected_currency);
  
  testSite(priceminister, "should fetch price, currency and name of PriceMinister website",
    priceminister_expected_currency);
    
  testSite(ebay, "should fetch price, currency and name of E-Bay website", ebay_expected_currency);

  testSite(ebags, "should fetch price, currency and name of E-Bags website", ebags_expected_currency);

  testSite(bikroy, "should fetch price, currency and name of Bikroy.com website",
    bikroy_expected_currency);

})

// end of the main test file