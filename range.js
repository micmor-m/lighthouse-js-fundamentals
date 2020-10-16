function range (start, end, step){

  /*function return an empty array [] if:
  start, end, or step being undefined
  start being greater than end
  step being 0, or negative */

  if (start === undefined || end === undefined || start === undefined || (start > end) || (step < 0 )){
    return [];

  //return an array of numbers from start to end counting by step  
  } else {
    const array = [];
    let i = start;
    while (i <= end){
      array.push(i);
      i = i + step;
    }
    return array;
  }
}

//for test
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));