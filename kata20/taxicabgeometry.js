const blocksAway = function (directions) {
  let myDirection = null;
  let myLocation = [0, 0];
  let i = 0;
  for (const element of directions) {
    console.log("index", i);
    if (i % 2 === 0) {
      console.log("Element if direction", element);
      //inizialize 1st direction
      if (myDirection === null && element === "right") {
        myDirection = "east";
        i++;
        console.log("Direction:", myDirection);
        console.log("Position:", myLocation);
        console.log("--------------------------");
        continue;
      } else if (myDirection === null && element === "left") {
        myDirection = "north";
        i++;
        console.log("Direction:", myDirection);
        console.log("Position:", myLocation);
        console.log("--------------------------");
        continue;
      }

      //if not the first elementif (!myDirection && element === "right"){
      if (element === "right") {
        console.log("Here we go RIGHT");
        if (myDirection === "east") {
          myDirection = "south";
        } else if (myDirection === "weast") {
          myDirection = "north";
        } else if (myDirection === "north") {
          myDirection = "east";
        } else if (myDirection === "south") {
          myDirection = "weast";
        }
        //emlement = left
      } else {
        console.log("Here we go LEFT");
        if (myDirection === "east") {
          myDirection = "north";
        } else if (myDirection === "weast") {
          myDirection = "south";
        } else if (myDirection === "north") {
          myDirection = "weast";
        } else if (myDirection === "south") {
          myDirection = "east";
        }
      }
      //if number
    } else {
      console.log("Element if number", element);
      switch (myDirection) {
        case "north":
          myLocation[1] += element;
          break;
        case "south":
          myLocation[1] -= element;
          break;
        case "east":
          myLocation[0] += element;
          break;
        case "weast":
          myLocation[0] -= element;
          break;
      }
    }
    console.log("Direction:", myDirection);
    console.log("Position:", myLocation);
    console.log("--------------------------");
    i++;
  }
  return { east: myLocation[0], north: myLocation[1] };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1])); //{east: 1, north: 3}
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
); //{east: 3, north: 3}
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); //{east: 0, north: 0}
