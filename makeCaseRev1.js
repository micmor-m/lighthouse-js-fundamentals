
//FUNCTION CAMEL
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

//FUNCTION PASCAL
const pascalCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace the first character of the word with the uppercase
  for (let i = 0; i < newArray.length; i++){
    newArray[0]  = newArray[0].toUpperCase(); //also the first letter of the string
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

//FUNCTION SNAKE
const snakeCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace the space between words with the underscore
  for (let i = 0; i < newArray.length; i++){
    if (newArray[i] === " "){
      //newArray[i+1]  = newArray[i+1].toUpperCase();
      newArray[i] = "_";
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


//FUNCTION KEBAB
const kebabCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace the space between words with the hyphen
  for (let i = 0; i < newArray.length; i++){
    if (newArray[i] === " "){
      //newArray[i+1]  = newArray[i+1].toUpperCase();
      newArray[i] = "-";
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


//FUNCTION TITLE
const titleCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace the first character of the word with the uppercase
  for (let i = 0; i < newArray.length; i++){
    newArray[0]  = newArray[0].toUpperCase(); //also the first letter of the string
    if (newArray[i] === " "){
      newArray[i+1]  = newArray[i+1].toUpperCase();
    }
  }

  //return back each values of the array as tring
  return (newArray.join(""));
};


//FUNCTION VOWEL
const vowelCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace all small vowel in the string with uppercase
  for (let i = 0; i < newArray.length; i++){
    if ((newArray[i] === "a")||(newArray[i] === "e")||(newArray[i] === "i")||(newArray[i] === "o")||(newArray[i] === "u")){
      newArray[i]  = newArray[i].toUpperCase();
      //if some capital consonant make them small
    } else {
      newArray[i]  = newArray[i].toLowerCase();
    }
  }

  //return back each values of the array as tring
  return (newArray.join(""));
};


//FUNCTION CONSONANT
const consonantCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace all small consonant in the string with uppercase
  for (let i = 0; i < newArray.length; i++){
    if (!((newArray[i] === "A")||(newArray[i] === "E")||(newArray[i] === "I")||(newArray[i] === "O")||(newArray[i] === "U"))){
      if (!((newArray[i] === "a")||(newArray[i] === "a")||(newArray[i] === "i")||(newArray[i] === "o")||(newArray[i] === "u"))){
      newArray[i]  = newArray[i].toUpperCase();
      //if some capital vowel make them small
      } 
    } else {
      newArray[i]  = newArray[i].toLowerCase();
    }
      
  }

  //return back each values of the array as tring
  return (newArray.join(""));
};

//FUNCTION UPPER
const upperCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace all characters of the word with the uppercase
  for (let i = 0; i < newArray.length; i++){
    newArray[i]  = newArray[i].toUpperCase();
  }
  //return back each values of the array as tring
  return (newArray.join(""));
};

//FUNCTION LOWER
const loverCase = function(input) {
  const newArray =[];

  //convert the string into array
  for (let i = 0; i < input.length; i++){
    newArray.push(input[i]);
  }

  //replace all characters of the word with the lowercase
  for (let i = 0; i < newArray.length; i++){
    newArray[i]  = newArray[i].toLowerCase();
  }
  //return back each values of the array as tring
  return (newArray.join(""));
};


//////MAIN
const makeCase = function(input, caseStr) {

  //declare a array of casestyle sting
  let caseArray = [camelCase, pascalCase, snakeCase, kebabCase, titleCase, vowelCase, consonantCase, upperCase, loverCase];
  let caseArrayMenu = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];
  let str = input;
  let caseStrOrdered = [];

    
  //check if the caseStr is a string or a array of strings
  if (typeof(caseStr) === "string"){
    for (let inner = 0; inner < caseArray.length; inner++){  //if a string check its match and execute it
      if (caseArrayMenu[inner] === caseStr){
        //console.log(caseArrayMenu[inner]);
        //console.log(caseStr);
        str = caseArray[inner](str);
      }
    }
  } else { //if not a string means an array execute all of them one by one
    //but before need to order the array of desire case in proper order
    for (let eachCase of caseStr){
      if ((eachCase === "camel") ||(eachCase === "pascal") ||(eachCase === "snake") ||(eachCase === "kebab") ||(eachCase === "title")){
        caseStrOrdered.splice(0,0, eachCase);
      }
      if ((eachCase === "vowel") ||(eachCase === "consonant")){
        if (caseStrOrdered.length === 0){
          caseStrOrdered.push(eachCase); 
        } else if (caseStrOrdered.length > 0){
          //console.log(caseStrOrdered);
          let done =0 ;
          for (i = 0; i < caseStrOrdered.length && !done; i++){
            if ((caseStrOrdered[i] === "camel") ||(caseStrOrdered[i] === "pascal") ||(caseStrOrdered[i] === "snake") ||(caseStrOrdered[i] === "kebab") ||(caseStrOrdered[i] === "title")){
              //do nothing
            } else {
              //console.log(i);
              //console.log(caseStrOrdered[i]);
              caseStrOrdered.splice(i, 0, eachCase);
              //console.log(caseStrOrdered[i]);
              //caseStrOrdered.push(eachCase);
              done = 1;
            }
          }  
        }
      }
      if ((eachCase === "upper") ||(eachCase === "lower")){
        caseStrOrdered.push(eachCase);
      }
    }   
    console.log(caseStrOrdered); 
    //execute the case function in proper order
    for (let i = 0; i < caseStrOrdered.length; i++){  
      for (let inner = 0; inner < caseStrOrdered.length; inner++){
        if (caseArrayMenu[inner] === caseStrOrdered[i]){
          str = caseArray[inner](str);
        }
      }
    }
  }


//console.log(str);
return str;
}

//For test
//console.log(makeCase("this is a string", "camel"));
//console.log(makeCase("this is a string", "pascal"));
//console.log(makeCase("this is a string", "snake"));
//console.log(makeCase("this is a string", "kebab"));
//console.log(makeCase("this is a string", "title"));
//console.log(makeCase("this is a string", "vowel"));
//console.log(makeCase("this is a string", "consonant"));
//console.log(makeCase("this is a string", ["upper", "snake"]));



