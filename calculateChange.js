/*
takes in a total amount of a bill and the total cash given to pay that bill. 
Return a new object that describes the total amount of change for the cashier to give back. 
Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
*/
const calculateChange = function(total, cash) {
  let change = cash - total;
  //console.log(change)

//create an empy object to return
//let  cashierChange = [ {twentyDollars: 0, tenDollars: 0, fiveDollars: 0, twoDollars: 0, oneDollar: 0, quarter: 0, dime: 0, nickel: 0, penny: 0} ];
  let  cashierChange = {};

  //until the change is not 0 look for the biggest figure to return and replace the change with what remain
  do {
    if (change >= 2000){
      cashierChange.twentyDollars = Math.floor(change / 2000);
      change = change % 2000;
    } else if (change >= 1000){
      cashierChange.tenDollars = Math.floor(change / 1000);
      change = change % 1000;
    } else if (change >= 500){
      cashierChange.fiveDollars = Math.floor(change / 500);
      change = change % 500;
    } else if (change >= 200){
      cashierChange.twoDollars = Math.floor(change / 200);
      change  = change % 200;
    } else if (change >= 100){
      cashierChange.oneDollars = Math.floor(change / 100);
      change  = Math.floor(change % 100);
    } else if (change >= 25){
      cashierChange.quarter = Math.floor(change / 25);
      change  = change % 25;
    } else if (change >= 10){
      cashierChange.dime = Math.floor(change / 10);
      change  = change % 10;
    } else if (change >= 5){
      cashierChange.nickel = Math.floor(change / 5);
      change  = change % 5;
    } else {
      cashierChange.penny = Math.floor(change / 1);
      change  = change % 1;
    }
  } while (change  != 0)

  return cashierChange

};


//For test
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
