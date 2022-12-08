const fetch = require("node-fetch");

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then((response) => response.json())
.then((data) => console.log(`The price of BitCoin as of ${data.time.updateduk} is ${data.bpi.GBP.rate}`))