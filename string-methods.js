const name = `  John Cross           `;

const trimmedName = name.trim();
console.log(`The trimmed name is ${trimmedName}.`);

const startTrimmedName = name.trimStart();
console.log(`The start/left trimmed name is ${startTrimmedName}.`);

const endTrimmedName = name.trimEnd();
console.log(`The end/righttrimmed  name is ${endTrimmedName}.`);

const nameLength = trimmedName.length;
console.log(`The length of ${trimmedName} is ${nameLength}.`);

const upperCasedName = trimmedName.toUpperCase();
console.log(`HEY ${upperCasedName}`);

const lowerCasedName = trimmedName.toLowerCase();
console.log(`shhhhhh... hi ${lowerCasedName}....`);
