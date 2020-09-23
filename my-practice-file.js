// var names = [
//    "Hole-in-one!",
//    "Eagle",
//    "Birdie",
//    "Par",
//    "Bogey",
//    "Double Bogey",
//    "Go Home!",
// ];
// function golfScore(par, strokes) {
//    if (strokes === 1) {
//       return console.log("Hole-in-one!");
//    } else if (strokes <= par - 2) {
//       return console.log("Eagle");
//    } else if (strokes === par - 1) {
//       return console.log("Birdie");
//    } else if (strokes === par) {
//       return console.log("Par");
//    } else if (strokes === par + 1) {
//       return console.log("Bogey");
//    } else if (strokes === par + 2) {
//       return console.log("Double Bogey");
//    }
//    return console.log("Go Home!");
// }
// // 4, 4 says "birdie"; it should say "par"
// golfScore(1, 1);

// Truncate a string (first argument) if it is longer
// than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
   const strLength = str.length;

   if (strLength > num) {
      splitString = str.split(``);
      slicedString = str.slice(0, num);
      str = slicedString + `...`;
      console.log(str);
      return str;
   } else {
      console.log(str);
      return str;
   }
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// truncateString("Peter Piper picked a peck of pickled peppers", 11);

// truncateString(
//    "A-tisket a-tasket A green and yellow basket",
//    "A-tisket a-tasket A green and yellow basket".length
// );

// truncateString(
//    "A-tisket a-tasket A green and yellow basket",
//    "A-tisket a-tasket A green and yellow basket".length + 2
// );

// truncateString("A-", 1);

// truncateString("Absolutely Longer", 2);
