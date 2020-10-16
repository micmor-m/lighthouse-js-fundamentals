/*When this function is given an array and a value, 
it should return the index of the last time the value occurs
 in the array. 
 If the value never occurs, the function should return -1.
*/

function lastIndexOf(arrayIn, value){
  
  let indexValue = -1
  for (let i = 0; i < arrayIn.length; i++){
    if (arrayIn[i] === value){
      indexValue = i;
    }
  }
  return indexValue;
}


//for test
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);