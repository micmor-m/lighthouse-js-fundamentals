/*
returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot
parameter are an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot
There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.
  Regular cars can only park in R spots.
  Small cars can park in R or S spots.
  Motorcycles can park in R, S, or M spots
In the array of parking spots, spots are written in both lower-case and upper-case. 
An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

Function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration
*/

const whereCanIPark = function (spots, vehicle) {
  let spot = [0,0];

  //check each row one by one
  for (i = 0; i < spots.length; i++){
    //console.log(spots[i]);
    const row = spots[i]

    //check each element in a row one by one
    for ( j = 0; j < row.length ; j++){
      //console.log(spots[[i][j]].length)
      //console.log(row[j]);

      //start to check free spot base on type of vehicle
      //intentionally omitted break
      //return the first free spot available
      switch (vehicle){
      case "motorcycle":
          
        if (row[j] === "M"){
          spot[0] = j;  
          spot[1] = i;
          return spot;
        }
      case "small":
          
        if (row[j] === "S"){
          spot[0] = j;  
          spot[1] = i;
          return spot;
        }
      case "regular":
          
        if (row[j] === "R"){
          spot[0] = j;  
          spot[1] = i;
          //console.log(i);
          //console.log(i);
          return spot;
        }
      }
    }
  }
  return false;
};


//for test
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
