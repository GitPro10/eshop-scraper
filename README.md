# Eshop Scraper (eShop-scraper)

**Eshop Scraper is a npm package.**
```txt 
npm i eshop-scraper -S
```
___
This package is under heavy development process but you can use it in your local projects but don't use it in production for now. Sorry for incovience 🙏
___

## What is does (in short)

This package can be used for getting some important data like **price, currency, name** from various famous websites like **Amazon, Steam, Nintendo etc.**

## Example code snippet

```js
import getPrice from "eshop-scraper";

const config_params = {
  currency: "EUR" // currently supports only "currency" option
};
(async()=> {
  const res = await getPrice("https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color", config_params);
  console.log(res)
})()
```
## Output

```js
{
  price: 280,
  currency: 'BDT',
  name: "Men's S.s T-shirt Anthra Melange",
  site: 'Othoba',
  link: 'https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color'
}
```

## More info
The module takes **2 parameters**.
First parameter is the absolute **URI** of an item and the second parameter is **Options** object (it's optional).

## Features
1. Can get Price of an item
2. Can get the Currency Code
3. Can automatically determine the website from just a link (only for supported websites)
4. Can convert price to almost any country's local money, only by the Currency Code

## Supported websites
Really sorry to share that it doesn't supports many websites ☹️ But it's extendable so, I am working on it and if any of the bottom websites does not works please connect with VPN and try again because everyone website is working just fine in Termux and from Bangladesh.
### List:
1. Othoba (othoba.com)
2. Steam (store.steampowered.com)
3. Amazon (amazon.com)
4. Walmart (walmart.com)
5. Nintendo (nintendo.com)
6. Crutchfield (crutchfield.com)
7. Playstation (store.playstation.com)
8. Priceminister (fr.shopping.rakuten.com)
9. Ebay (ebay.com)
10. Ebags (ebags.com)
11. Bikroy.com (bikroy.com)
