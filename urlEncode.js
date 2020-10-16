//receive a string of words, and return that string with all of the whitespace characters converted to %20
//whitespace on the outside of the string will be removed firs
const urlEncode = function(text) {

  //trim whitespace outside of the string
  let textTrimmed = text.trim();
  
  //console.log(textTrimmed);

  const textArray = [];
  //const textArray = [];

  //convert string in to array
  for (let i = 0; i < textTrimmed.length; i++){
    textArray.push(textTrimmed[i]);
  }

  //replace space with %20
  for (let i = 0; i < textArray.length; i++){
    if (textArray[i] === " "){
      textArray[i] = "%20"    
    } 
  }

  //convert array to string
  console.log(textArray.join(''));
};


//For test
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


