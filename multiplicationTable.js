/*receives a number maxValue as input and creates 
a square multiplication table where maxValue is the largest value in the table
*/

const multiplicationTable = function(maxValue) {
  let allString = ["\n"]; //first empty string
  
  //generate a row from 1 to maxValue
  for (let row = 1 ; row <= maxValue; row++){
    let rowString = "";
    //generate a column ffrom 1 to maxValue
    for (let col = 1 ; col <= maxValue; col++){
      let result = row * col
      //update the row with new values
      rowString = rowString + result + " ";
    }
    //after each row is done push it to a allString array
    allString.push(rowString);
  }
  //console.log(allString);
  //to return each string is separate row
  return (allString.join("\n"));
};

//For test
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
