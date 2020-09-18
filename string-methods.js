// const name = `  John Cross           `;

// const trimmedName = name.trim();
// // console.log(`The trimmed name is ${trimmedName}.`);

// const startTrimmedName = name.trimStart(); // can also use trimLeft()
// // console.log(`The start/left trimmed name is ${startTrimmedName}.`);

// const endTrimmedName = name.trimEnd(); // can also use trimRight()
// // console.log(`The end/right trimmed  name is ${endTrimmedName}.`);

// const nameLength = trimmedName.length;
// // console.log(`The length of ${trimmedName} is ${nameLength}.`);

// const upperCasedName = trimmedName.toUpperCase();
// // console.log(`HEY ${upperCasedName}`);

// const lowerCasedName = trimmedName.toLowerCase();
// // console.log(`shhhhhh... hi ${lowerCasedName}....`); // random commentasdfasd

// const birthday = `4/21/1981`;

// const indexOfMonth = birthday.indexOf(`4`);
// console.log(`The string "4" is found at the ${indexOfMonth} of ${birthday}.`);

// const firstChar = birthday[0];
// console.log(`The first char of ${birthday} is ${firstChar}.`);

// const indexOfFirstSlash = birthday.indexOf(`/`);
// console.log(
//    `The first slash in ${birthday} is found at the ${indexOfFirstSlash} index.`
// );

// const indexOfSecondSlash = birthday.indexOf(`/`, 3); //the 3 means start the search from this index
// console.log(
//    `The second slash in ${birthday} is found at the ${indexOfSecondSlash} index.`
// );

// const indexOfLastSlash = birthday.lastIndexOf(`/`);
// console.log(
//    `The last slash in ${birthday} is found at the ${indexOfLastSlash} index.`
// );

const phoneNumber = `515-333-7651`;
const firstIndexOfDash = phoneNumber.indexOf(`-`);
console.log(`The first index of dash is found at index of ${firstIndexOfDash}`);
const secondIndexOfDash = phoneNumber.indexOf(`-`, 4); //this excludes characters before those at index 4 (but still knows they are there)
console.log(
   `The second index of dash is found at index of ${secondIndexOfDash}.`
);

const childhoodNumber = `515-285-7925`;
const lastIndexOfFive = childhoodNumber.lastIndexOf(`5`);
console.log(
   `The last index of five in my childhood phone number is at index number ${lastIndexOfFive}`
);
const middleIndexOfFive = childhoodNumber.lastIndexOf(`5`, 8); //why start from the back? if you know it's near the end of the string??
console.log(
   `The middle index of five in my childhood phone number is at index number ${middleIndexOfFive}`
);

// const indexOfSecondToLastSlash = birthday.lastIndexOf(`/`, 3); //lastIndexOf searches from right to left.
// console.log(
//    `The second to last slash in ${birthday} is found at the ${indexOfSecondToLastSlash} index.` //ask for another explanation of this :)
// );

// const strToSearchFor = `1981`;
// const indexOfStr = birthday.indexOf(strToSearchFor);
// console.log(
//    `The string of ${strToSearchFor} in ${birthday} is found at the ${indexOfStr} index.`
// );

// if (birthday.indexOf(strToSearchFor) >= 0) {
//    console.log(`${birthday} has this character in it: ${strToSearchFor}.`);
// } else {
//    console.log(
//       `${birthday} does not have this string in it: ${strToSearchFor}.`
//    );
// }
