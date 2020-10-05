function convertHTML(str) {
   const splitStr = str.split(``);

   const updatedStr = splitStr.map((char) => {
      if (char === `&`) {
         return `&amp;`;
      } else if (char === `<`) {
         return `&lt;`;
      } else if (char === `>`) {
         return `&gt;`;
      } else if (char === `"`) {
         return `&quot;`;
      } else if (char === `'`) {
         return `&apos;`;
      } else {
         return char;
      }
   });

   const joinUpdatedStr = updatedStr.join(``);
   const stringed = joinUpdatedStr.toString();
   return stringed;
}

const x = convertHTML('Stuff in "quotation marks"');
console.log(x);
