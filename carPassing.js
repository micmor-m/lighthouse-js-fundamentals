/*
car is an array
speed is a number

carPassing creates a new object:
a property called speed
a property called time and add it to the cars array 
return an array that includes all of the elements in cars

TIP
to retrieve the current time use the Date.now()
*/


function carPassing(cars, speed){
  let actualTime = Date.now();
  //console.log(actualTime);
  cars.push({ time:actualTime, speed:speed });
  //console.log(cars);
  return cars;
}


//for test
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38;

console.log(carPassing(cars, speed));
