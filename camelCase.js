/*
receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings
*/

const camelCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace the first character of the word with the uppercase
  for (let i = 0; i < newArray.length; i++){
    if (newArray[i] === " "){
      newArray[i+1]  = newArray[i+1].toUpperCase();
    }
  }

  //remove all spaces in between
  for (let i = 0; i < newArray.length; i++){
    if (newArray[i] === " "){
      newArray.splice(i, 1); 
    }
  }
  //return back each values of the array as tring
  return (newArray.join(""));
};


//For test
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
