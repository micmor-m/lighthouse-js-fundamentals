//receive a string and return the number of vowels in that string
const numberOfVowels = function(data) {
  number = 0;

  //check if the element is a vowel
  for (let each of data){
    if (each === "a" || each === "e" || each === "i" || each === "o" || each === "u" || each === "A" || each === "E" || each === "I" || each === "O" || each === "U" ){
      number += 1;
    }
  }
  return number;
};


//For test
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("AEIOU"));
