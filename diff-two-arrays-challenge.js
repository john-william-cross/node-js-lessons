function diffArray(arr1, arr2) {
   let newArr = [];
   combinedArr = arr1.concat(arr2);
   //so I can compare items in the list to other items in same list

   for (let i = 0; i < combinedArr.length; i++) {
      const item = combinedArr[i];
      console.log(`Here's the item: `, item);

      if (newArr.includes(item) === false) {
         newArr = combinedArr.concat(item);
         console.log(`Here's the newArr: `, newArr);
      } else {
         newArr = newArr;
      }
   }

   return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
