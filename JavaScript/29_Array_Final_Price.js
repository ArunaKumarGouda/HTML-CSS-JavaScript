// Q: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];

let n = prices.length;

for(let i = 0; i < n; i++) {
    let tenPercent = (10/100) * prices[i];
    prices[i] -= tenPercent;
    console.log(prices[i])
}
