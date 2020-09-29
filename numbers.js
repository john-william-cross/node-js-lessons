const priceOfSquirtgun = 3.5;
const floorOfSquirtgun = Math.floor(priceOfSquirtgun);
// console.log(`the floor of this item is: ${floorOfSquirtgun}`);
const ceilOfSquirtgun = Math.ceil(priceOfSquirtgun);
// console.log(`the ceiling of this item is: ${ceilOfSquirtgun}`);
const roundedPrice = Math.round(priceOfSquirtgun);
// console.log(`the rounded price of this itme is: ${roundedPrice}`);
const smallestNumber = Math.min(3, 5, 1);
// console.log(`the smallest number is: ${smallestNumber}`);
const prices = [3.99, 7.99, 0.99];
const lowestPrice = Math.min(...prices); //Math.min expects actual numbers, so we have to use the spread syntax
// console.log(`the lowest price is: ${lowestPrice}`);
const highestPrice = Math.max(...prices);
// console.log(`the highest price is: ${highestPrice}`);

//Math.random()

// console.log(`Here is your random number: ${Math.random()}`); // always gets value between 0 and 1

function getRandomArbitrary(min, max) {
   // always gets a decimal
   return Math.random() * (max - min) + min;
}

const randomArbitraryNum = getRandomArbitrary(1, 16);
// console.log(`Random num between 1 and 16: ${randomArbitraryNum}`);

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min); //gives entire range plus minimum
}

const randomInt = getRandomInt(1, 16);
console.log(`Random integer between 1 and 16: ${randomInt}`);

const weirdness = Math.round(55);

const isNaN = Number.isNaN(weirdness); // Number.isNan outputs true or false; checks if something is NaN
//could also use typeof to check this
// console.log(`The weirdness is not a number: ${isNaN}`);

Number.parseFloat; // don't use this

// const convertedNum = Number.parseFloat(`3pizza`); // Number(`3`) // Number.parseFloat tries to change it to a number
const convertedNum = Number(`3pizza`); // use this, not Number.parseFloat, because we want to get NaN if it's not a number

// console.log(convertedNum);

const priceOfCup = 3.2555;

// use toFixed to round to 2 decimal places
function round(num, numOfDecPlaces) {
   return Number(Number(num).toFixed(numOfDecPlaces)); // wrapping everything in Number() converts it from a string
   // to a number (toFIxed changes something to a string!!)
}

const roundedPriceOfCup = round(priceOfCup, 2); //round to two decimals; good to use for prices
// console.log(roundedPriceOfCup);
