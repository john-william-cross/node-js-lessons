const nums = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const posInts = nums
   .filter((num) => {
      if (Number.isInteger(num) && num >= 0) {
         return num;
      }
   })
   .map((num) => {
      const numSquared = Math.pow(num, 2);
      console.log(numSquared);
      return numSquared;
   });

// const squareList = (arr) => {
//    // Only change code below this line
//    arr.filter((num) => {
//     if (Number.isInteger(num) && num >= 0) {
//        return num;
//     }
//  })
//  .map((num) => {
//     const numSquared = Math.pow(num, 2);
//     console.log(numSquared);
//    return arr
//    // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

//first filter for those kind of numbers,
//then use map to go through and square them

// We have defined a function named squareList.
// You need to complete the code for the squareList
// function using any combination of map(), filter(),
// and reduce() so that it returns a new array containing
// only the square of only the positive integers
// (decimal numbers are not integers) when an array of real
// numbers is passed to it. An example of an array containing
// only real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or
// while loops or the forEach() function.

// squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
// should return [16, 1764, 36].
