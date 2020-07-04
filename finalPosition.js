function finalPosition(moves){
  const position = [0,0];

  for(let move of moves){
    switch(move){
    case "north":
      position[1] = position[1] + 1;
      break;
    case "south":
      position[1] = position[1] - 1;
      break;
    case "west":
      position[0] = position[0] - 1;
      break;
    case "east":
      position[0] = position[0] + 1;
      break;
    }  
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
