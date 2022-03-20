# Eshop Scraper (eshop-scraper)

**Eshop Scraper is a npm package.**
```
npm i eshop-scraper
```
___
This package is under heavy development process but you can use it in your local projects but don't use it in production for now. Sorry for incovience 🙏
___

## What is does (in short)

This package can be used for getting some important data like **price, currency, name** from various famous websites like **Amazon, Steam, Walmart etc.**

## Example code snippet
### Code:
```js
import getPrice from "eshop-scraper";

(async()=> {
  const res = await getPrice("https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color", "EUR");
  console.log(res)
})()
```
### Output:

```js
{
  price: 160.63,
  currency: 'INR',
  name: "Men's S.s T-shirt Anthra Melange",
  site: 'Othoba',
  link: 'https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color'
}
```

## More info
The module takes **2 parameters**.
First parameter is the absolute **URI** of an item and the second parameter is the **Currency Code** in string (it's optional).

## Features
1. Can get Price of an item
2. Can get the Currency Code
3. Can automatically determine the website from just a link (only for supported websites)
4. Can convert price to almost any country's local currency, only by the Currency Code

## Supported websites
Really sorry to share that it doesn't supports many websites ☹️ But it's extendable so, I am working on it and if any of the bottom websites does not works please connect with VPN and try again because every website is working just fine in Termux and from Bangladesh.
### List:
1. Othoba (othoba.com)
2. Steam (store.steampowered.com)
3. Amazon (amazon.com)
4. Walmart (walmart.com)
4. Crutchfield (crutchfield.com)
6. Playstation (store.playstation.com)
6. Priceminister (fr.shopping.rakuten.com)
8. Ebay (ebay.com)
9. Ebags (ebags.com)
10. Bikroy.com (bikroy.com)

## Tests
```
npm run test
```
OR
```
npm run test:watch
```