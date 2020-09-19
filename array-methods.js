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

const mikesBirthday = `Mike's Birthday (April 21)`;

if (holidays.indexOf(mikesBirthday) === -1) {
   console.log(`No, ${mikesBirthday} is not a holiday.`);
} else {
   console.log(`Yes, ${mikesBirthday} is a holiday}`);
}
