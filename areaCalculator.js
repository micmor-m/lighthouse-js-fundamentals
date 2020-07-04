//Calculates the area of rectanlge if parameters are > 0
function calculateRectangleArea(length, width){
  if (length >= 0 && width >= 0){
    return length * width;
  } else {
    return undefined;
  }
}

//Calculates the area of triangle if parameters are > 0
function calculateTriangleArea(base, height){
  if (base >= 0 && height >= 0){
    return base * height / 2;
  } else {
    return undefined;
  }
}

//Calculates the area of circle if parameter are > 0
function calculateCircleArea(radius){
  if (radius >= 0){
    return radius * radius * Math.PI;
  } else {
    return undefined;
  }
}

//for test
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(-1, 0));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(-1, 0)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined