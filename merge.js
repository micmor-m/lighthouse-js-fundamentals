//given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.
function merge(array1, array2){  

  let arrayFinal;

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
    let maxLen;
    let arrayLong;
    let arrayShort;

    if (len1 < len2){
      minLen = len1;
      maxLen = len2;
      arrayLong = array2;
      arrayShort = array1;
    } else if (len2 < len1){
      minLen = len2;
      maxLen = len1;
      arrayLong = array1;
      arrayShort = array2;
    } else {
      //if both array have the same lenght
      //this is a problem and to avoid wrong result
      //need to determin the one starting with lower value
      if (array1[0] < array2[0]){
        arrayLong = array1;
        arrayShort = array2;
      } else {
        arrayLong = array2;
        arrayShort = array1;
      }
    }
    
    //FOR loop base on elements in the shorter array to avoid to get undefined
    for ( let i = 0 ; i < minLen; i++){ //for (i=0 ; i<= minLen; i++){ 
      let j = 0;

      //if the first element of the shorter array is bigger then the element of the longest arrey
      //compare the next element of the longest array
      while ((arrayLong[j]) < (arrayShort[0])){
    
      //if the next element of the longest array is biggere then the first element of the shorterarray
      //take the first element of the shorter array and move it in the arrayLong
        if ((arrayLong[j + 1] ) > (arrayShort[0])) { 
          arrayLong.splice((j + 1), 0, arrayShort[0]);
          arrayShort.shift();
        } else {
          j++;
        }  
      }
    }
    //when one of the two array are empty I concatenete the one not empty with the arrayFinal and return it 
  
    //if the short array is not empty means all its values are bigger than the last of arrayLong
    len2 = array2.length;
  
    if (len2 >= 1) { 
      arrayFinal = arrayLong.concat(arrayShort);
    } else { 
      arrayFinal = (arrayLong);
    }
 
    return arrayFinal;
  }
}

//For test
console.log(merge([1,5,9],[2,8])); //return long ok, short empty
console.log(merge([2,8],[1,5,9])); //return long ok, short empty
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ])); // "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ])); //, "=?", [ 2, 4, 5, 8 ]);
console.log(merge([],[ 1, 2, 6 ])); // "=?", [ 1, 2, 6 ]);
//two arrays of same length 
console.log(merge([7,8,9],[1,2,3])); //to.be.eql([1,2,3,7,8,9]); 

//repeated values
console.log(merge([1,2,2],[2,2,4])); //to.be.eql([1,2,2,2,2,4]);