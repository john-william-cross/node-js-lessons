unacceptablePasswordsForwardAndReversed.forEach((password) => {
   let passwordChars = unacceptablePasswordStrings[i].split(``);
   const copyOfPasswordChars = [...passwordChars];
   const reversePasswordChars = copyOfPasswordChars.reverse();
   const password = reversePasswordChars.join(``);
   unacceptablePasswordsForwardAndReversed = unacceptablePasswordsForwardAndReversed.concat(
      password
   );
});
