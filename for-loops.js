// const holidays = [
//    ["Holiday", "Date", "Is a federal holiday?"],
//    ["New Year's Day", 20200101, true],
//    ["Martin Luther King, Jr. Day", 20200120, true],
//    ["Mike's Birthday", 20200421, false],
//    ["Memorial Day", 20200525, true],
//    ["Independence Day", 20200704, true],
//    ["Labor Day", 20200907, true],
//    ["Veterans Day", 20201111, true],
//    ["Thanksgiving Day", 20201126, true],
//    ["Christmas Day", 20201225, true],
// ];

// //create a new array from an old one using for loops

// //create a list of only federal holidays
// let federalHolidays = [];
// for (let i = 0; i < holidays.length; i++) {
//    //console.log(holidays[i]);
//    // if it is a federal holiday...
//    const holiday = holidays[i];
//    const isFederalHoliday = holiday[2]; //true or false (checks what's at index 2)

//    if (typeof isFederalHoliday === "boolean" && isFederalHoliday) {
//       federalHolidays = federalHolidays.concat([holiday]);
//    }

//    //    federalHolidays = federalHolidays.concat(holidays[i]); //stores the new array inside the array I created (federalHolidays)
//    // else do nothing, skip it...

//    // concatinating arrays is almost like flattening them.
//    // federalHolidays = federalHolidays.concat([holidays[i]]); --> this would keep the original structure
// }
// //console.log(federalHolidays);

// //create a list of holiday dates; only the dates from holidays

// const holidayValues = holidays.flat();
// console.log(holidayValues);

// let holidayDates = [];
// for (let i = 0; i < holidayValues.length; i++) {
//    const value = holidayValues[i]; //gets current index of one you're on, store it in the variable 'holiday'
//    // if the value is a number, concat it with holidayDates
//    if (typeof value === `number`) {
//       //convert them to strings:
//       const numAsString = String(value);
//       holidayDates = holidayDates.concat(numAsString);
//    }

//    //  ["New Year's Day", 20200101, true + "Memorial Day", 20200525, true]
// }
// console.log(holidayDates);

//Nesting For Loops

const users = [
   ["MIKE", "ZETLOW", "MIKE@GMAIL.COM", "met him at Demo Day"],
   ["John", "John@gmail.com"],
   [20200921, "sue"],
];
// Please provide normalized data for each user field (everything lower cased)
// Please keep in their original rows
let normalizedUsers = []; //create empty array 'normalizedUsers'
for (let i = 0; i < users.length; i++) {
   //for every index in array 'users'
   const userFields = users[i]; //grab the data at the current index
   let newUserFields = []; //create new blank array 'newUserFields'
   for (let i2 = 0; i2 < userFields.length; i2++) {
      //for each item in each array in users
      const userField = String(userFields[i2]); //turn each of those items into a string
      const lowerCasedField = userField.toLowerCase(); //make each of those strings lower case
      newUserFields = newUserFields.concat(lowerCasedField); //take all lower-cased string items from each index of original
      //`users` array and put each one into its own array `newUserFields
   }
   normalizedUsers = normalizedUsers.concat([newUserFields]); //put each of those arrays into its own index
   // in the normalizedUsers array
}
console.log(normalizedUsers);
