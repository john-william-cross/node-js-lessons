const testString = toReverse("Hello");
console.log(`Here is the reversed test string: `, testString); // returns o,l,l,e,H
function toReverse(str) {
   if (str === "") {
      throw Error("String cannot be empty.");
   }
   try {
      const chars = str.split("");
      console.log(`Split chars: `, chars); // returns ["H", "e", "l", "l", "o"]
      const copyOfChars = [...chars];
      console.log(`spread chars: `, copyOfChars); // returns ["H", "e", "l", "l", "o"]
      const reversedChars = copyOfChars.reverse();
      console.log(`reversed chars: `, reversedChars); // returns ["o", "l", "l", "e", "H"]
      const reversedStr = reversedChars.join("");
      console.log(`join characters: `, reversedChars); // returns ["o", "l", "l", "e", "H"]
      return reversedStr;
   } catch {
      return "Error: there is a problem with toReverse().";
   }
}
