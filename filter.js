const users = [
   { name: "John", isActive: true, createdAt: 1601910841140 },
   { name: "Mike", isActive: true, createdAt: 1601910841130 },
   { name: "Michelle", isActive: false, createdAt: 1601910841150 },
];

//get just active users

//filter returns a new array just like map.

//filter EXPECTS something to come across as true or false
//In the code below, if something is true it will add it to
//the new activeUsers list

//Filter function is ALWAYS waiting for true or false.

//each array method we learn has different things happening

const activeUsers = users.filter((user) => {
   //    return user.name === `Michelle`; //evaluates to false on two
   //of the objects and true on one of them

   //if you wanted to return most recent users:
   // filter for created after or equal to john created at
   return user.createdAt >= 1601910841140;

   return user.isActive; //returns john and mike since isActive === true
});

console.log(activeUsers);
