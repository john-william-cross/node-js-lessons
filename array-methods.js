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

const name = `Mike`;
const firstLetter = name[0];

const firstDay = holidays[0];

console.log(
   `The first day in this array is ${firstDay} and the first letter of the name is ${firstLetter}.`
);
const daysLength = holidays.length;
console.log(`The length of this array is ${daysLength}`);
const lastDay = holidays[daysLength - 1];
console.log(`The last day in this array is ${lastDay}.`);

//arrays have index numbers just like strings (a string is a list/array of characters!)

const favoriteHoliday = `Independence Day (July 4)`;
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday);
console.log(
   `${favoriteHoliday} is found at the ${indexOfIndependenceDay} of the holidays array.`
);

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
   console.log(
      `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
         specificHoliday
      )} index in the list of holidays}.`
   );
} else {
   console.log(`No, ${specificHoliday} is not a holiday.`);
}

const replaceableHoliday = `Washington's Birthday (Third Monday in February)`;
//if you ever want to change something in an array, you need to know its index
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);
console.log(
   `We are going to replace ${replaceableHoliday} at the ${indexOfReplaceableHoliday} index of the holidays list`
);

const newHolidays = [
   ...holidays,
]; /*use spread element (...) to make a copy of holidays array
without spread element, we are just putting an array inside an array. Spread element unpacks the holidays
array and adds each item into this new array*/
newHolidays[indexOfReplaceableHoliday] = specificHoliday;
console.log(`Here's a list of our old holidays:\n `, holidays);
console.log(`Here's a list of our new holidays:\n `, newHolidays);

//another way to copy an array is Array.from: on line 66 it would look like this: const newHolidays = Array.from(holidays)
