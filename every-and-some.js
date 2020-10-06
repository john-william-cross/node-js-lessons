/*  Every and some RETURN true or false.Filter is returning an array 
based on true or false. Every and some are going to look at some condition 
and return true or false.

e.g. does everything fulfill this condition?

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // expected output: true


Meanwhile, SOME will check if SOME of the conditions are met. If even one
condition is met, it will return true. 

e.g. 
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

*/

const users = [
   {
      name: "Mike",
      isActive: true,
      createdAt: 1601910841140,
      socialProfiles: [
         {
            site: `twitter`,
            username: `mzetlow`,
         },
         {
            site: `facebook`,
            username: `fbmikezetlow`,
            profilePhoto: {
               sm: `small.jpg`,
               lg: `large.jpg`,
            },
         },
      ],
   },
   {
      name: "John",
      isActive: true,
      createdAt: 1601910841130,
      socialProfiles: [
         {
            site: `facebook`,
            username: `fbjsmith`,
            profilePhoto: {
               sm: `small.jpg`,
               lg: `large.jpg`,
            },
         },
      ],
   },
   {
      name: "Michelle",
      isActive: false,
      createdAt: 1601910841150,
      socialProfiles: [
         {
            site: `twitter`,
            username: `michelledoe`,
         },
      ],
   },
];

//check if every user is on facebook

const isEveryUserOnFb = users.every((user) => {
   // go through all the social profiles
   const siteNames = user.socialProfiles.map((profile) => {
      //create a new list of all social profile sites
      return profile.site;
   });
   console.log(siteNames);
   return siteNames.includes(`facebook`); //for this user does it include facebook? if true, keep going through users
   //    this is what the line above is doing:
   //
   //    if (siteNames.includes(`facebook`)) {
   //       return true;
   //    } else {
   //       return false;
   //    }
   // this user is on facebook, so return true
   // else return false
});

console.log(`Is every user on fb? `, isEveryUserOnFb); //returns false as not every user is on fb

// .some does the in

const hasGithubUsers = users.some((user) => {
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site;
   });
   return siteNames.includes(`github`); //for this user does it include facebook? if true, keep going through users
});

console.log(`Do we have any Github users? `, hasGithubUsers); //returns false as not every user is on fb
