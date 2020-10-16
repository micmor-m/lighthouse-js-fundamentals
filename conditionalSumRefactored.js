/*
given an array of numbers and a condition, 
add up only the values which match that condition.
If no values match the condition, return 0.
*/

const conditionalSum = function (values, condition) {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = 0;
  let reference = 0;

  if (condition === "odd") {
    reference = 1;
  }

  const array = values.filter(value => value % 2 === reference);
  total = array.reduce(reducer, 0);

  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([1, 3, 5], "even"));
