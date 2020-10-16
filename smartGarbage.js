/*
trash is a string, 
bins, is an object containing three properties (waste, recycling, and compost),
which hold some numerical value

Our function must increase the correct value in the bins object,
and then return the newly updated object*/

function smartGarbage(trash, bins){
  switch (trash){
  case "waste":
    bins.waste += 1;
    break;
  case "recycling":
    bins.recycling += 1;
    break;
  case "compost":
    bins.compost += 1;
    break;  
  }
  return bins;
}


//for test
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
