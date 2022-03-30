# Eshop Scraper (eshop-scraper)

**Eshop Scraper is a npm package.**
```
npm i eshop-scraper
```

## What is does (in short)

This package can be used for getting some important data like **price, currency, name** from various famous websites like **Amazon, Steam, Walmart etc.**

## Example code snippet
### Code:
```js
import getPrice from "eshop-scraper";

// async-await
(async()=> {
  const res = await getPrice("https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color", "USD");
  console.log("\n"+ "// async-await method")
  console.log(res)
})();

// then-catch
getPrice("https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color", "USD").then(res => {
  console.log("\n" + "// then-catch method")
  console.log(res)
  console.log("\n")
});
```
### Output:

```console

// then-catch method
{
  price: 2.13,
  currency: 'USD',
  name: "Men's S.s T-shirt Anthra Melange",
  site: 'Othoba',
  link: 'https://www.othoba.com/mens-ss-t-shirt-anthra-melange-wc201709l-win00354-color'
}

// async-await method
{
  price: 2.13,
  currency: 'USD',
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
Really sorry to share that it doesn't support many websites ☹️. But it's extendable so, you can add many more websites very easily (check `website_props.js` and `main.test.js` files). If any of the bottom websites doesn't work then please connect with VPN and try again because every website is working just fine in Termux and from Bangladesh.
### List:
1. Othoba (othoba.com)
2. Steam (store.steampowered.com)
3. Amazon (amazon.com, amazon.in)
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
___
**<p align="center">Proudly Made In Bangladesh 🇧🇩</p>**