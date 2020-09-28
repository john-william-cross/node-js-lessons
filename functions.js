// in (pass in) ->
// do something
// 1. Purely related to the input and outupt (pure function)
// 2. Or cause an effect elsewhere in the app (a side effect)

// get something out (return) ->

// input a string
// reverse it
// output that reversed string

function toReverse(str) {
   try {
      const chars = str.split(``);
      const reversedChars = chars.reverse();
      const reversedStr = reversedChars.join(``);
      return reversedStr;
   } catch {
      return `Error: there is a problem with toReverse`;
   }
}
const reversedString = toReverse(["asdf"]);
console.log(reversedString);
