// in (pass it something) -->

// do something 1.
// 1. Purely related to the input and ouput (pure functio)
// 2. Or cause an effect elsewhere in the app (a side effect)

// get something out (return) -->

// Input a string
// Reverse it
// Output that reversed string

// function toReverse(str) {
//    return str; // return str[0] would return H from line 17 below
// }

// const reversedString = toReverse(`Hello`);

// console.log(reversedString);

// function toReverse(str) {
//    if (typeof str === `string`) {
//       const chars = str.split(""); //first we have to split the string, making it into an array of substrings
//       //    console.log(chars);
//       const reversedChars = chars.reverse(); //then run the reverse() function on the string
//       //    console.log(reversedChars);
//       const reversedStr = reversedChars.join(""); //join(``) puts each substring back into one string
//       //    console.log(reversedStr);
//       return reversedStr;
//    } else {
//       return `Error: please input a string`;
//    }
// }

// const reversedString = toReverse(`john`);
// console.log(reversedString);

/* ANOTHER WAY TO DO WHAT'S ABOVE */

//this is a good utility function to use in your code :)
// function toReverse(str) {
//    if (str === ``) {
//       throw Error(`String cannot be empty`);
//    }
//    try {
//       const chars = str.split("");
//       const reversedChars = chars.reverse();
//       const reversedStr = reversedChars.join(``);
//       return reversedStr;
//    } catch {
//       return `Error: There is a problem with toReverse()`; //what if input is not defined, i.e. toReverse(apple)
//    }
// }

// const reversedString = toReverse(`cat`);
// console.log(reversedString);

// given a string and a number
// check the length of the string
// if the length is over the number, return true
// else return false

function checkIsOver(str, num) {
   return str.length > num;

   //    if (str.length > num) {
   //       return true;
   //    } else {
   //       return false;
   //    }
   // instead of the if/else block, you could also just put `return str.lognth > num`
}

const userInput = "Hello world";
const maxChars = 240;
const isOver = checkIsOver(userInput, maxChars);
console.log(hasError);

const id = `#char-counter`;
const message = `You have exceeded the character limit`;
showError(hasError, id, message);

function showError(hasError, id, message) {
   const errorId = `${id}-error`;

   if (hasError) {
      $(id).show(errorId);
      $(errorId).html(message);
   } else {
      $(id).hide(errorId);
   }
}
