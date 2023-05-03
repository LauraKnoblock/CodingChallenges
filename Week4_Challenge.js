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
