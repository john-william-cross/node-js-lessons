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
