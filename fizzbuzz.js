let nums = [];

for (let i = 0; i < 100; i++) {
   // starting at index i, set the value of index i to i + 1
   nums[i] = i + 1;
}
console.log(nums);

const fizzBuzzArray = nums.map((num) => {
   if (num % 3 === 0 && num % 5 === 0) {
      num = "FizzBuzz";
   }
   if (num % 3 === 0) {
      num = "Fizz";
   }
   if (num % 5 === 0) {
      num = "Buzz";
   }
   return num;
});

console.log(fizzBuzzArray);
// console.log(`Nums Array: `, nums);

// Write a program that generates an array of integers from 1 to 100 (inclusive). But:

// for multiples of 3, add "Fizz" to the array instead of the number
// for multiples of 5, add "Buzz" to the array instead of the number
// for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number
