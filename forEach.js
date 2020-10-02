// function getUserId(num) {
//    return num;
// }

// function getUser(callback) {
//    const userId = callback(Date.now());
//    return {
//       name: `john`,
//       id: userId,
//    };
// }

// const user = getUser(getUserId);
// // console.log(user);

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

// for (let i = 0; i < users.length; i++) {
//    //this does what the arrow function below does
//    const user = users[i];
//    console.log(user.name);
// }

// users.forEach(function (user) {
//    //anonymous function
//    //    console.log(user.name);
// });

// users.forEach((user) => {
//    //arrow function, same as anonymous function except uses arrow syntax
//    //    console.log(user);
// });

const users = [
   {
      name: `john`,
      isActive: true,
   },
   {
      name: `mike`,
      isActive: true,
   },
   {
      name: `michelle`,
      isActive: false,
   },
];

let activeUsers = [];

users.forEach((user) => {
   if (user.isActive) {
      activeUsers = activeUsers.concat(user);
   }
});
console.log(activeUsers);
