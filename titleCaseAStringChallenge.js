function titleCase(str) {
   var strToArray = str.toLowerCase().split(" ");
   var capitalizedWords = strToArray.map((str) => {
      return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
   });
   console.log(capitalizedWords.join(` `));
   return capitalizedWords.join(" ");
}

titleCase("I'm a little tea pot");

// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case. For the purpose of this
// exercise, you should also capitalize connecting words like "the" and "of".

// const users = [
//    {
//       name: `john`,
//       isActive: true,
//    },
//    {
//       name: `mike`,
//       isActive: true,
//    },
//    {
//       name: `michelle`,
//       isActive: false,
//    },
// ];

// let activeUsers = [];

// users.forEach((user) => {
//    if (user.isActive) {
//       activeUsers = activeUsers.concat(user);
//    }
// });
// console.log(activeUsers);
