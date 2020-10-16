
function merge(array1, array2){  

  let arrayFinal = [];

//if one array is empty return the other one
  if ((array1.length) === 0){
    return (arrayFinal = array2);
  } else if ((array2.length) === 0){
    return (arrayFinal = array1);

//if both are not empty
  } else {

  //determin the shortes array to be use with FOR loop
    let len1 = array1.length;
    let len2 = array2.length;
    let minLen;

    if (len1 < len2){
      minLen = len1;
    } else {
      minLen = len2;
    }
  
  //FOR loop base on elements in the shorter array to avoid to get undefined
    for (let i = 0 ; i <= minLen; i++){

    //for each element compare at index 0 the less value and move it in the arrayFinal
    //and remove the value from original array
      if ((array1[0]) < (array2[0])){
        arrayFinal.push(array1[0]);
        array1.splice(0, 1);
      } else {
        arrayFinal.push(array2[0]);
        array2.splice(0, 1);
      }  
    }

  //when one of the two array are empty I concatenete the one not empty with the arrayFinal and return it 
    if ((array1.length) > 0){
      arrayFinal = arrayFinal.concat(array1);
    } else{
      arrayFinal = arrayFinal.concat(array2);
    }
  //console.log("Array 1 length " + (array1.length));
  //console.log("Array 2 length " + (array2.length));
  //console.log(array1);
  //console.log(array2);
  //console.log(arrayFinal);
    return arrayFinal;
  }
}

//For test
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ])); // "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ])); //, "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], [])); // "=?", [ 1, 2, 6 ]);

//two arrays of same length 
console.log(merge([7,8,9],[1,2,3])); //to.be.eql([1,2,3,7,8,9]); 

//repeated values
console.log(merge([1,2,2],[2,2,4])); //to.be.eql([1,2,2,2,2,4]);

//shorter first array
console.log(merge([2,8],[1,5,9])); //to.be.eql([1,2,5,8,9])

//shorter second array
console.log(merge([1,5,9],[2,8])); //to.be.eql([1,2,5,8,9])

