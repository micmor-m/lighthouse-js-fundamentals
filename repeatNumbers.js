/*
The input data for this exercise will be two dimensional array (an array of arrays),
where each sub-array will have two numeric values
he first will be the value to repeat, the second will be the amount of times to repeat that value.
*/

const repeatNumbers = function(data) {
  let stringInner;
  const array = [];

//each bidimentional array passed as argument
//print it as many time as the value of element [1] in the array
  for (let each of data){
    console.log(each);
    stringInner =" " //a blankspace
    for (let j = 0; j < each[1]; j++ ){
      stringInner = stringInner + each[0];
    }
    //each string it's added at one array
    array.push(stringInner);
  }
  //to print out all elements of array as tring and get the comma use tostring build in function
  return (array.toString());
};


//For test
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
