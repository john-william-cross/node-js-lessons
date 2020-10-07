const authors = [
   {
      name: `Margaret Atwood`,
      books: [
         {
            title: `Oryx and Crake`,
         },
         {
            title: `The Year of the Flood`,
         },
      ],
   },
   { name: `Philip Roth`, books: [{ title: `American Pastoral` }] },
   {
      name: `Franz Kafka`,
      books: [{ title: `The Castle` }, { title: `The Hunger Artist` }],
   },
   {
      name: `Philip Roth`,
      books: [{ title: `Sabbath's Theater` }],
   },
   {
      name: `Franz Kafka`,
      books: [{ title: `The Castle` }, { title: `The Hunger Artist` }],
   },
   {
      name: `Philip Roth`,
      books: [{ title: `Sabbath's Theater` }],
   },
];

//find returns the first truthy thing that meets the condition. stops when condition is met
const query = `philip roth`;
const author = authors.find((author) => {
   return author.name.toLowerCase() === query.toLowerCase();
});

// console.log(author); //returns the entire object (in the case of philip roth, only returns the first thing)

//can we return the first author with the duplicate name?
const dupeAuthorIndex = authors
   .map((author) => {
      //[`Margaret Atwood`, `Franz Kafka`, ] map is building an array of strings
      return author.name;
   })
   .findIndex((name, i, arr) => {
      return arr.indexOf(name) !== i; //where we're finding the index of the name which starts from 0
   });

console.log(`Remove this: `, authors[dupeAuthorIndex]);

//findIndex is the same as find, it just gives you the index number of that name rather than the name
