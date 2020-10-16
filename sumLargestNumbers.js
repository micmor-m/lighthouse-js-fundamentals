//find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function(data) {
  let max1 = 0;
  let max1i = 0;

  //look for the largest
  for (i = 0; i < data.length; i++){
    if (data[i] > max1){
      max1 = data[i];
      max1i = i;
    }
  }
  
  //remove the largest from array
  data.splice(max1i,1);
  let max2 = 0;
  //let max2i = 0;

  //look for the 2nd largest
  for (i = 0; i < data.length; i++){
    if (data[i] > max2){
      max2 = data[i];
      //max2i = i;
    }
  }
  //sum them together
  return max1+max2
};


//For test
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
