/*
given an array of numbers and a condition, 
add up only the values which match that condition.
If no values match the condition, return 0.
*/

const conditionalSum = function(values, condition) {
  const array = [];
  let total = 0;

  if (condition === "even"){
    //create even array if even
    for (let i = 0; i < values.length; i++){
       if (values[i] % 2 === 0){
       array.push(values[i]);
      }
    }
  }

  if (condition === "odd"){
    //create odd array if odd
    for (let i = 0; i < values.length; i++){
       if (values[i] % 2 !== 0){
       array.push(values[i]);
      }
    }
  }  
  
  //sum elements of array
  for (let i = 0; i < array.length; i++){
    total += array[i];
  }

  return total
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
