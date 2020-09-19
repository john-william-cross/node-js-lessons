// arrays === lists

const days = [
   `Sunday`,
   `Monday`,
   `Tuesday`,
   `Wednesday`,
   `Thursday`,
   `Friday`,
   `Saturday`,
];

const name = `Mike`;
const firstLetter = name[0];

const firstDayOfTheWeek = days[0];

console.log(
   `The first day of the week is ${firstDayOfTheWeek} and the first letter of the name is ${firstLetter}.`
);
const daysLength = days.length;
console.log(`The length of this array of days is ${daysLength}`);
const lastDayOfTheWeek = days[daysLength - 1];
console.log(`The last day of the week is ${lastDayOfTheWeek}.`);
