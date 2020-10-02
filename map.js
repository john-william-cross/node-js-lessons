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

// map allows us to transform each thing within a list of things all together
// if we wanted to add another property to all of the users..

//map over this data and do what's in the function
const formattedUsers = users.map((user) => {
   //map has no side effects
   //    return user.name; //turns list of objects into list of strings
   const newUser = { ...user };
   newUser.createAt = Date.now(); //adding something to each user object... if you do something in
   //the codeblock, it DOES update the original array. So in this case, we make a shallow copy on
   //line 23 since the data is only one level deep
   delete newUser.isActive; //subtracting isActive from all objects...
   newUser.name = user.name.toLowerCase();
   return newUser; //this is a new array

   //if you just wanted to make a list of strings it would not mutate the original
});

console.log(formattedUsers); //does not change users at all; map returns a new array doing
//whatever changes you ask it to do

console.log(users);
