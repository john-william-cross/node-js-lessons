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
   const stringSplitAtSpaces = str.split(` `);
   const lengthOfStringSplitAtSpaces = stringSplitAtSpaces.length;
   console.log(stringSplitAtSpaces);
   //    console.log(lengthOfStringSplitAtSpaces);

   if (lengthOfStringSplitAtSpaces > num) {
      //   console.log(`tooshort!`);
      slicedString = stringSplitAtSpaces.slice([num]);
      console.log(slicedString);
      str = slicedString;
      console.log(str);
   }
   return str;
}

truncateString("Hello Everybody! Hi Doctor Nick!", 3);
