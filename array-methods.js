// arrays === lists

//array names should be plural
const holidays = [
   `New Year's Day (January 1)`,
   `Birthday of Martin Luther King, Jr.`,
   `Washington's Birthday (Third Monday in February)`,
   `Memorial Day (Last Monday in May)`,
   `Independence Day (July 4)`,
   `Labor Day (First Monday in September)`,
   `Columbus Day (Second Monday in October)`,
];

const newHolidaysFromHr = [
   [`Veterans Day (November 11)`, 2020, `Megan`],
   [`Thanksgiving Day (Fourth Thursday in November`, 2020, `Megan`],
   [`Christmas Day (December 25)`, 2020, `Megan`],
];

const name = `Mike`;
const firstLetter = name[0];

const firstDay = holidays[0];

const daysLength = holidays.length;
// console.log(`The length of this array is ${daysLength}`);
const lastDay = holidays[daysLength - 1];
// console.log(`The last day in this array is ${lastDay}.`);

//arrays have index numbers just like strings (a string is a list/array of characters!)

const favoriteHoliday = `Independence Day (July 4)`;
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday);

const specificHoliday = `John's birthday (May 2)`;

//how to find if something is in a list or not using index
// if (holidays.indexOf(specificHoliday) === -1) {
//    console.log(`No, ${specificHoliday} is not a holiday.`);
// } else {
//    console.log(
//       `Yes, ${specificHoliday} is a holiday. It was found at the
//       ${holidays.indexOf(specificHoliday)} index in the list of holidays}`
//    );
// }
//works the same with lastIndexOf() method; it just searches backwords from right to left

//How to do this using .includes:
if (holidays.includes(specificHoliday)) {
} else {
   // console.log(`No, ${specificHoliday} is not a holiday.`);
}

const replaceableHoliday = `Washington's Birthday (Third Monday in February)`;
//if you ever want to change something in an array, you need to know its index
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);

const newHolidays = [
   ...holidays,
]; /*use spread element (...) to make a copy of holidays array
without spread element, we are just putting an array inside an array. Spread element unpacks the holidays
array and adds each item into this new array*/
newHolidays[indexOfReplaceableHoliday] = specificHoliday; //newHolidays[2] = `John's birthday (May 2)`
//console.log(`Here's a list of our old holidays:\n `, holidays);
console.log(`Here's a list of our new holidays:\n `, newHolidays);

//another way to copy an array is Array.from: on line 66 it would look like this: const newHolidays = Array.from(holidays)

console.log(`Here's a list of our new holidays from HR:\n`, newHolidaysFromHr);

//how to combine (concatinate) two arrays

// const array1 = [`a`, `b`, `c`];
// const array2 = [`d`, `e`, `f`];
// const array3 = array1.concat(array2);
// console.log(array3);

// const allHolidays = newHolidays.concat(newHolidaysFromHr);
const allHolidays = [...newHolidays, ...newHolidaysFromHr]; //you can use ... (spread syntax) instead of concat
console.log(`Here's a list of ALL holidays:\n`, allHolidays);
const allFlatHolidays = allHolidays.flat();
console.log(`Here's a list of ALL holidays, BUT FLAT!:\n`, allFlatHolidays);
const allUniqHolidays = [...new Set(allFlatHolidays)]; //  <---change a set into an array like this
console.log(`Here's a list of ALL UNIQUE holidays:\n`, allUniqHolidays);

//always declar what you want first with const!

const firstHolidays = allUniqHolidays.slice(0, allUniqHolidays.indexOf(2020)); //we want to slice up to 2020
console.log(`Here are the first holidays:\n`, firstHolidays); // ********> \n puts things on a new line
const secondHolidays = allUniqHolidays.slice(
   allUniqHolidays.indexOf("Thanksgiving Day (Fourth Thursday in November") //we could just put slice(10); because thanksgiving
   //is the tenth
);
console.log(`Here are the second holidays:\n`, secondHolidays);

const allCleanedUpHolidays = firstHolidays.concat(secondHolidays);
console.log(`Here are all the holidays:\n`, allCleanedUpHolidays);
