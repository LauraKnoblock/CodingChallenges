// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sen) { 
  // code goes here  
  const cleanSen = sen.replace(/[^\w\s]|_/g, '');
  let words = cleanSen.split(' ');
  let longestWord = words[0];
   for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
    sen = longestWord;
  }
  return sen; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
