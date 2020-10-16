//find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function(data) {
  data.sort((a, b) => a - b);
  return data[data.length -1] + data[data.length -2];
};


//For test
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
