// JSON stands for javascript object notation. It's a way to store data.
const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

console.log(user);

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
