// Based on MDN example:
// const arrayOfNums = [1, 2, 3, 4, 5];

// const checkPositive = (num) => num > 0;

// console.log(arrayOfNums.every(checkPositive));

const arrayOfNums = [1, 2, 3, 4, 5];

const hasPositiveNums = arrayOfNums.some((num) => {
   return num > 0;
});

// console.log(hasPositiveNums);

console.log(checkPositive([1, 2, -3, 4, 5]));

function checkPositive(arr) {
   return arr.some((num) => {
      return num > 0;
   });
}

// video example:
// const hasGithubUsers = users.every((user) => {
//    const siteNames = user.socialProfiles.map((profile) => {
//       return profile.site;
//    });
//    return siteNames.includes(`github`);
//    //for this user does it include facebook? if true, keep going through users
// });

// console.log(`Do we have any Github users? `, hasGithubUsers);
// //returns false as not every user is on fb
// */
