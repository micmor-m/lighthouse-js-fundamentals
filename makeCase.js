
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

    
  //check if the caseStr is a string or an array of strings
  if (typeof(caseStr) === "string"){
    for (let inner = 0; inner < caseArray.length; inner++){  //if a string check its matching function and execute it
      if (caseArrayMenu[inner] === caseStr){
        //console.log(caseArrayMenu[inner]);
        //console.log(caseStr);
        str = caseArray[inner](str);
      }
    }
  } else { //if not a string means an array execute all of them one by one
    //but before need to order the array of desire cases base on priority order:
    //Precedence of each of the casing styles are as follows;
    //1. camel, pascal, snake, kebab, title
    //2. vowel, consonant
    //3. upper, lower

    for (let eachCase of caseStr){
      if ((eachCase === "camel") ||(eachCase === "pascal") ||(eachCase === "snake") ||(eachCase === "kebab") ||(eachCase === "title")){ //if the case has priority 1
        //caseStrOrdered.splice(0,0, eachCase);
        if (caseStrOrdered.length === 0){  //and the array is empty
          caseStrOrdered.push(eachCase);   //just add the current case
        } else if (caseStrOrdered.length > 0){  //if not empty
          //console.log(caseStrOrdered);
          let done =0 ;
          for (i = 0; i < caseStrOrdered.length && !done; i++){ //check the element already present in the array
            if ((caseStrOrdered[i] === "camel") ||(caseStrOrdered[i] === "pascal") ||(caseStrOrdered[i] === "snake") ||(caseStrOrdered[i] === "kebab") ||(caseStrOrdered[i] === "title")){
              if ((caseStrOrdered.length -1) === i){   //if all element preset already are with priority 1
                caseStrOrdered.splice(i + 1, 0, eachCase); //add the current element at the end of the array
                done = 1; //and set the bit done
              }
            } else {  //if the element already in the array have lower priority add the current element before them
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
      if ((eachCase === "vowel") ||(eachCase === "consonant")){ //if the case has priority 2
        if (caseStrOrdered.length === 0){ //and the array is empty
          caseStrOrdered.push(eachCase); //just add the current case
        } else if (caseStrOrdered.length > 0){ //if not empty
          //console.log(caseStrOrdered);
          let done =0 ;
          for (i = 0; i < caseStrOrdered.length && !done; i++){ //check the element already present in the array
            if ((caseStrOrdered[i] === "camel") ||(caseStrOrdered[i] === "pascal") ||(caseStrOrdered[i] === "snake") ||(caseStrOrdered[i] === "kebab") ||(caseStrOrdered[i] === "title")|| (caseStrOrdered[i]  === "vowel") || (caseStrOrdered[i]  === "consonant")){
              if ((caseStrOrdered.length -1) === i){   //if all element preset already are with priority 1 or 2 (same priority of the actual)
                caseStrOrdered.splice(i + 1, 0, eachCase); //add the current element at the end of the array
                done = 1; //and set the bit done
              }
            } else {  //if the element already in the array have lower priority add the current element before them
              //console.log(i);
              //console.log(caseStrOrdered[i]);
              caseStrOrdered.splice(i, 0, eachCase); //if the element already in the array have lower priority add the current element before them
              //console.log(caseStrOrdered[i]);
              //caseStrOrdered.push(eachCase);
              done = 1;
            }
          }  
        }
      }
      if ((eachCase === "upper") ||(eachCase === "lower")){  //if the case has with priority 3
        //caseStrOrdered.push(eachCase);
        if (caseStrOrdered.length === 0){  //and the array is empty
          caseStrOrdered.push(eachCase); //just add the current case
        } else if (caseStrOrdered.length > 0){ //if not empty
          //console.log(caseStrOrdered);
          let done =0 ;
          for (i = 0; i < caseStrOrdered.length && !done; i++){ //check the element already present in the array
            if ((caseStrOrdered[i] === "camel") ||(caseStrOrdered[i] === "pascal") ||(caseStrOrdered[i] === "snake") ||(caseStrOrdered[i] === "kebab") ||(caseStrOrdered[i] === "title") || (caseStrOrdered[i]  === "vowel") || (caseStrOrdered[i]  === "consonant") || (caseStrOrdered[i]  === "upper") || (caseStrOrdered[i]  === "lower")){
              if ((caseStrOrdered.length -1) === i){  //if all element preset already are with priority 1 or 2 or 3 (same priority of the actual)
                caseStrOrdered.splice(i + 1, 0, eachCase); //add the current element at the end of the array
                done = 1; //and set the bit done
              }
            } else { //if the element already in the array have lower priority add the current element before them
              //console.log(i);
              //console.log(caseStrOrdered[i]);
              caseStrOrdered.splice(i, 0, eachCase);  //if the element already in the array have lower priority add the current element before them
              //console.log(caseStrOrdered[i]);
              //caseStrOrdered.push(eachCase);
              done = 1;
            }
          }  
        }
      }
    }  
    //!!!!!!!!!!!!!!!!!!!!!!!uncomment next line to see the order of the array style after re-arrange base on priority  
    //console.log(caseStrOrdered); 
    //execute the case function in proper order
    for (let i = 0; i < caseStrOrdered.length; i++){  
      for (let inner = 0; inner < caseArray.length; inner++){
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
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["camel","upper", "snake","consonant"]));



