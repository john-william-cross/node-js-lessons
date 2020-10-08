const regex = /REGEX/gm; // gm= global multiline

//way to search within a string

const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const userInput = `(525) 444-3428`;

const isValidPhone = phonePattern.test(userInput);
console.log(isValidPhone);

//regex solution comment
// ^[0-9a-zA-Z_].*@[a-zA-Z0-9]{1}\w+-*x?.[a-zA-Z]{2,}$
