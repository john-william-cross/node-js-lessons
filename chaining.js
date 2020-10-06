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

// what if we just want username and facebook username?

/*
 In code below: 
 it's saying in this list of users, just give me the facebook users
 we want it in a new format (just name and fbName), so that's why .map
 is needed. So, map over everything, put it into this new format, then run filter
 on it to give me only the ones matching the criteria
 */
const fbUsers = users
   .map((user) => {
      // name & fb name only
      const newUser = {
         name: user.name,
         fbName: getFbNameUsingFP(user),
      };
      return newUser;
   })
   .filter((user) => {
      return user.fbName !== ``;
   });
console.log(fbUsers);

// // WE CAN CHAIN ARRAY METHODS SIMILARLY TO HOW WE CAN CHAIN
// // STRING METHODS:
// const name = " Mike          ".trim().toLocaleLowerCase();
// console.log(name);

//give us just users with fb names

// function getFbName(user) {
//    let fbName = ``;
//    user.socialProfiles.forEach((profile) => {
//       if (profile.site === `facebook`) {
//          fbName = profile.username;
//       }
//    });
//    return fbName;
//    //return the username
// }

function getFbNameUsingFP(user) {
   const fbProfiles = user.socialProfiles.filter((profile) => {
      return profile.site === `facebook`; // if this returns true,
      //it will be added to the new list
   });
   if (fbProfiles.length > 0) {
      return fbProfiles[0].username;
   }
   return ``;
}
