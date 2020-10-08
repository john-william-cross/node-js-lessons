// const regex = /REGEX/gm; // gm= global multiline

//way to search within a string

const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const userInput = `(525) 444-3428`;

const isValidPhone = phonePattern.test(userInput);
// console.log(isValidPhone);

//regex solution comment
// ^[0-9a-zA-Z_].*@[a-zA-Z0-9]{1}\w+-*x?.[a-zA-Z]{2,}$

const scrapedHtmlText = `<h1>Hello World</h1><p>This is my first webpage</p>`;

const tagPattern = /<.*?>/;

const htmlStrings = scrapedHtmlText.split(tagPattern);
// console.log(
//    htmlStrings.filter((str) => {
//       return str !== ``;
//    })
// );

const h1Pattern = /h1/g; //needed to add g because there's more than one.

const editedHtmlText = scrapedHtmlText.replace(h1Pattern, `p`); //iif you use a string pattern it just replaces
//the first one, so have to add global flag (g) in regex

console.log(editedHtmlText);

const sentence = `     The quick brown fox jumps over the lazy dog.`; //find index of first word
const wordPattern = /\b/;
const firstWordIndex = sentence.search(wordPattern); //search returns an index number
console.log(firstWordIndex);
