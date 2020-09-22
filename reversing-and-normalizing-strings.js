const email = "mike@gmail.com";

//**** Split converts a string to an array ********/

// const listOfEmailChars = email.split(``);
// console.log(listOfEmailChars);
// //outputs ['m', 'i', 'k', 'e', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm']
// console.log(listOfEmailChars[0]);
// //outputs m

// listOfEmailChars = email.split(); //same as [email]
// console.log(listOfEmailChars);
// //outputs [`mike@gmail.com`]

// const listOfEmailChars = email.split(`@`);
// console.log(listOfEmailChars);
// //outputs [ 'mike', 'gmail.com' ]

// const todaysDate = `2020-09-11`;
// const dateParts = todaysDate.split(`-`);
// // console.log(dateParts);
// //outputs [ `2020`, `09`, `11` ]
// const year = dateParts[0];
// const month = dateParts[1];
// const day = dateParts[2];
// console.log(year, month, day);
// //outputs 2020 09 11

const greeting = `hello`;
const greetingChars = greeting.split(``);
//console.log(greetingChars);
//outputs [ 'h', 'e', 'l', 'l', 'o' ]
const copyOfGreetingChars = [...greetingChars];
const reverseGreetingChars = copyOfGreetingChars.reverse();
//reverse destroys original data so make a copy
//console.log(`Reversed chars: `, reverseGreetingChars);
//outputs Reversed chars:  [ 'o', 'l', 'l', 'e', 'h' ]
//console.log(`original chars: `, greetingChars);
//outputs original chars:  [ 'h', 'e', 'l', 'l', 'o' ]
const newGreeting = reverseGreetingChars.join(``);
//console.log(`Here's our new greeting:\n`, newGreeting);
//outputs Here's our new greeting: olleh

const query = "           GOOGLe FONTS        ";
const dbEntries = [`    Google Fonts    `, `Google Maps`];
// const dbEntry = dbEntries[0];
// const lowerCasedDbEntry = dbEntry.toLowerCase(); // `google fonts`
// console.log(lowerCasedDbEntry);
// const trimmedDbEntry = lowerCasedDbEntry.trim();
// console.log(trimmedDbEntry);
// const lowerCasedQuery;
// const trimmedQuery
const isInDb = query.toLowerCase().trim() === dbEntries[0].toLowerCase().trim();
if (isInDb) {
   console.log(`We found a result!`);
} else {
   console.log(`Sorry, couldn't find anything for ${query}`);
}
