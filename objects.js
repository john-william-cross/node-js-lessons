const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

// adding properties to an object does mutate the object, so we have to make a copy first

// you can use the ... (spread operator) on an object to make a copy

console.log(`Original user: `, user);

const copyOfUser = {
   //this is a shallow copy
   ...user,
};

copyOfUser.isActive = true; // this adds an `isActive` key/property with a value of true
copyOfUser.tokenExpiredAt = user.createdAt + 86400000; //gets us the value at the property/key `createdAt`
//and adds 24 hours (in milliseconds) to that time, hence making it expire in 24 hours
copyOfUser.isCoolPerson = true;

copyOfUser.isCoolPerson = false; //change this value to false; only logs the last value of the property

console.log(`Copy of original user: `, copyOfUser);

//to delete a property from an object
delete copyOfUser.isCoolPerson;
console.log(`Copy of original user: `, copyOfUser);

/// functions start here ///

function getEmail() {
   // get the user's email from the input with jQuery
   return `mike@gmail.com`;
}

function getPassword() {
   // get the user's password from the input with jQuery

   return `mikepassword`;
}

function getCreatedAt() {
   // generate createdAt number, e.g. 160020200921
   return Date.now();
}

function getId() {
   // generate id string, e.g. `005061`
   return `005061`;
}
