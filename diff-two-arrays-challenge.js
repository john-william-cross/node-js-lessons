function diffArray(arr1, arr2) {
   let newArr = [];

   arr2.forEach((item2) => {
      if (!arr1.includes(item2)) {
         newArr = newArr.concat(item2);
      }
   });

   arr1.forEach((item1) => {
      if (!arr2.includes(item1)) {
         newArr = newArr.concat(item1);
      }
   });

   return newArr;
}

// Go through things one by one, mentally substituting data
// for the variables; also, be sure to use more than one test case

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

// when I go through arr1 and look at each item, ask `is this item
// also in arr2?` If it isn't in arr2, put that item into a new array.
// otherwise, don't.
