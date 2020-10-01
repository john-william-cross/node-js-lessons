function getUserId(num) {
   return num;
}

function getUser(callback) {
   const userId = callback(Date.now());
   return {
      name: `john`,
      id: userId,
   };
}

const user = getUser(getUserId);
console.log(user);
