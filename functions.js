// in (pass it something) -->

// do something 1.
// 1. Purely related to the input and ouput (pure functio)
// 2. Or cause an effect elsewhere in the app (a side effect)

// get something out (return) -->

// Input a string
// Reverse it
// Output that reversed string

function toReverse(str) {
   return str; // return str[0] would return H from line 17 below
}

const reversedString = toReverse(`Hello`);

console.log(reversedString);
