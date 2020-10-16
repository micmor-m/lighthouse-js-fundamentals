//given a list of instructors determine which instructor has the longest name.
const instructorWithLongestName = function(instructors) {
  let longest = [];
  let longestName = "";
  
  //check length of name in each row and keep the longest
  for (let row of instructors){
    if (row.name.length > longestName.length){
      //longestName = row.name;
      longest = row;
    }
  }
  //console.log(longest)
  return (longest);
};


//For test
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
