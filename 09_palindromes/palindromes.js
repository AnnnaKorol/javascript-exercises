const palindromes = function (string) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');
  
    // Create a new reversed string for comparison
    const reversedString = cleanedString.split('').reverse().join('');
  
    // Return the outcome of the comparison which will either be true or false
    return cleanedString === reversedString;
  };

// Do not edit below this line
module.exports = palindromes;





// Possible solution:

// const palindromes = function (str) {
//     //1) combine all words together without spaces and //2) convert all letters in the combinedWordsString to the Lower case:
//     // Using split() and join(): You can split the string into an array of words (using a space as the delimiter) and then join them back together without spaces:
// let combinedWordsString = str.split(' ').join('').toLowerCase(); //split() - make an array, join - convert the array to string;
//     //3) create a reverse string:
// let reverseCombinedWordsString = combinedWordsString.split('').reverse().join(''); // reverse - cannot be done on string, therefore it is important to convert this string to the array again.
//     //3)compare the original string with the revert string:
// return combinedWordsString === reverseCombinedWordsString;
// };






// // !!Strings in JavaScript don’t have a reverse() method. The reverse() method is available only for arrays, so you’ll need to convert the string into an array, reverse it, and then convert it back to a string.
// // !!You're calling str.join('') directly, which would work for an array of words, but if str is a single string, you'll need to split it into an array first.
