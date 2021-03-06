// JSON stands for javascript object notation. It's a way to store data.
const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
   socialProfiles: [
      {
         site: `facebook`,
         username: `mikez`,
         id: `0060433dd07`,
         profilePic: ``,
         image: {
            small: `small.jpg`,
            medium: `medium.jpg`,
            large: `large.jpg`, // how to make it go to large2.jpg?
         },
      },
      {
         site: `twitter`,
         username: `mikezetlow`,
         id: `48aec43982`,
         thumbnail: ``,
      },
   ],
};

const indexOfFacebook = 0;

// console.log(user.socialProfiles[indexOfFacebook].image.small); // this gives us small.jpg

//see video at 26 minutes for example from las vegas developers
const userAsJson = JSON.stringify(user);
const userAsObj = JSON.parse(userAsJson);
// console.log(userAsObj);
console.log(userAsJson); //Math.round(), Object.assign({}) JSON.stringify  =>global objects

//********** ~~~ update an object: ~~~ *********//

// newUser = JSON.parse(JSON.stringify(user)); // deep copy, losing all previous references

//other way to make deep copy:
newUser = deepCopy(undefined);
console.log(newUser);
if (newUser !== undefined) {
   newUser.socialProfiles[indexOfFacebook].image.large = `large3.jpg`; //THIS MUTATES THE ORIGINAL DON'T DO IT
   console.log(`----------------`);
   console.log(newUser.socialProfiles);
}
console.log(`HERE"S THE FUNCTION: `, newUser);

function deepCopy(obj) {
   /// here's a deep copy function you can use

   const str = JSON.stringify(obj);
   return safelyParseJson(str);
}

function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      // if error return the original value
      return str;
   }
   return JSON.parse(str);
}

console.log(`----------------`);
console.log(user.socialProfiles);

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
