function howManyHundreds (num){
  if (num >= 100){
    let hundreads = 0;
    hundreads = Math.floor(num / 100);
    return hundreads;
  } else {
    return 0  
  }
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);