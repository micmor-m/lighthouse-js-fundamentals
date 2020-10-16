//Function will receive a URL encoded string, and return the a JavaScript object that represents that data.

const urlDecode = function(text) {
  
  arrayKey = [];
  let newObject = {};

  //trim whitespace outside of the string
  let textTrimmed = text.trim();
  
  //get index of first =
  for (let eachCh of textTrimmed)
    textTrimmed.indexOf
  

};

//For test
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/* expected result
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/