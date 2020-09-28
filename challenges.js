// function bouncer(arr) {
//    let newArray = []; //create a new array
//    for (let i = 0; i < arr.length; i++) { //loop through the array
//       if (arr[i]) {   // if the item at index i of array evaluates to true
//          newArray = newArray.concat(arr[i]); //put that value into newArray
//       }
//    }
//    console.log(newArray);
//    return arr;
// }

// bouncer([7, "ate", "", false, 9]);

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//    let newStr = ``;

//    for (let i = num; i > 0; i--) {
//       //   console.log(str);
//       newStr = newStr.concat(str);
//    }
//    console.log(newStr);
//    return newStr;
// }

// repeatStringNumTimes(`*`, 8);

function mutation(arr) {
   const strTwo = arr[1].toLowerCase();
   const strOne = arr[0].toLowerCase();
   const strTwoChars = strTwo.split(``);
   const strOneChars = strOne.split(``);
   for (let i = 0; i < strTwoChars.length; i++) {
      if (strOneChars.includes(strTwoChars[i]) === false) {
         return false;
      }
   }
   return true;
}

const answer = mutation(["hello", "hey"]);
console.log(answer);

// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array

// For example, ["hello", "Hello"], should return true because all of the
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string
// "hello" does not contain a "y".

//Lastly, ["Alien", "line"], should return because all of the letters in
//"line" are present in "Alien".
