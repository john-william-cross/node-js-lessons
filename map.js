const users = [
   {
      name: `John`,
      isActive: true,
   },
   {
      name: `Mike`,
      isActive: true,
   },
   {
      name: `Michelle`,
      isActive: false,
   },
];

// map transforms data. you have to assign its result to
// a constant

// const newUsers = users.map(() => {}) skeleton of map function
// map returns a new array doing whatever changes you ask it to
const newUsers = users.map((user) => {
   //for every user, in this list of users, return a user
   //    return user.name; //returns just a list of objects as a list of strings
   const newUser = { ...user }; // if you do something inside the code block it will update the old array
   // we have to make a copy!!!
   newUser.createdAt = Date.now(); //adds a new property to user called createdAt
   delete newUser.isActive; // removes a property
   newUser.name = user.name.toLowerCase(); // updates a property
   return newUser;
});

console.log(`new users: `, newUsers);
console.log(`users: `, users);
