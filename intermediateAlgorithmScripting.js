var strings = [
   "Dolce & Gabbana",

   "Hamburgers < Pizza < Tacos",

   "Sixty > twelve",

   'Stuff in "quotation marks"',

   "Schindler's List",

   "<>",

   "abc",
];

// for (let i = 0; i < strings.length; i++) {
//    const singleString = strings[i];
//    console.log(singleString);
// }

strings.map((string) => {
   console.log(string);
});

const conversions = strings.map((char) => {
   if ((char = `<`)) {
      return `&lt`;
   } else if ((char = `>`)) {
      return `&gt`;
   } else if ((char = `&`)) {
      return `&amp`;
   } else if ((char = `"`)) {
      return `&quot`;
   } else if ((char = `<>`)) {
      return `&lt&gt`;
   } else {
      return char;
   }
});

// let newString = strings.map((char) => {
//     return { title: movie.Title, rating: movie.imdbRating };
//     // returns new object with a property of title and rating
//  });
