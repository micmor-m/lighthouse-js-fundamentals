/*
metricis a string
vegetables is an array

return he name of the person who submitted (vegetables.submitter) 
the vegetable with the highest ranking in the provided category.
*/
//I declare an empty object to be the first for the comapration
  //!!!!!!!!!!!!!!!!!!!
  //Do not use squere brakets if only one element or will generate an error
  //!!!!!!!!!!!!!!!!!!!

//The metric string could change completly so never create an new array with constant keys words.

function judgeVegetable(vegetables, metric){
  
  let goodVegetable = { submitter: "", metric: 0 };

  
  for (let vegetable of vegetables){
    if (vegetable[metric] > goodVegetable.metric){
      goodVegetable.submitter = vegetable.submitter;
      goodVegetable.metric = vegetable[metric];
      //goodVegetable.plumpness = vegetable.plumpness;
    }
  }
  //console.log(goodVegetable.submitter);
  return goodVegetable.submitter;
}


//for test
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 25,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

