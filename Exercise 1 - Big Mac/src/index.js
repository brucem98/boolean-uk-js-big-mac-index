/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

/* We use let instead of const because big mac prices and index can change */

console.log('Big Mac Prices');

let usbigmac = 5.66;
let indiabigmac = 130.07;
let swedenbigmac = 52.88;
let israelbigmac = 17.00;
let turkeybigmac = 14.99; 


console.log('Implied Purchasing Powers')

let usindiaIPP = usbigmac/indiabigmac;
let usswedenIPP = usbigmac/swedenbigmac;
let usisraeIPP = usbigmac/israelbigmac;
let usturkeyIPP = usbigmac/turkeybigmac;

console.log(usindiaIPP)

