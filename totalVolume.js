// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4/3) * PI * radius * radius * radius
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1/3) * PI * radius * radius * height
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return width * depth * height
}

console.log(prismVolume(3, 4, 5) === 60);

/*
receive an array containing the different shapes that make up a single attraction
calculate the total volume of an attraction
*/
const totalVolume = function (solids) {
  let totVolume = 0;
  
  for (let solid of solids){
    switch (solid.type){
    case "sphere":
      totVolume += sphereVolume(solid.radius);
      break;    
    case "cone":
      totVolume += coneVolume(solid.radius, solid.height);
      break;  
    case "prisme":
      totVolume += prismVolume(solid.height, solid.width, solid.depth);
      break; 
    }
  }
  //console.log(totVolume);
  return totVolume;
}

//object declaration
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

//array declaration
const duck = [
  largeSphere,
  smallSphere,
  cone
]

//For test
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
