/*
eceive an array of instructor objects, and will return a new object that has the following format:
{
  CourseName: [instructors]
}
*/

const organizeInstructors = function(instructors) {

  //crate empy array
  let arrayCourse = [];
  let doubleCourseIndex = [];

 /* Initialli use this obect to make it easy to undesrtand the required result
 let newObject = {
    CourseName: [instructors]
  }*/

  //after all was working fine to avoid return the prototype of the object assigne an empty object
  let newObject = {};
  
    
  //populate empty array with all the courses from the object instructors
  for (let eachLine of instructors){
    arrayCourse.push(eachLine.course);
  }
  //eliminate double entry in arrayCourse
  for (i = 0; i < arrayCourse.length; i++){
    for (inner = i + 1; inner < arrayCourse.length; inner++){
     if (arrayCourse[inner] === arrayCourse[i]){
       if (!(doubleCourseIndex.includes(i))){    //if not already in it write the index of double element. to eliminate double entry in array doubleCourseIndex
        doubleCourseIndex.push(inner);
       }
     }
    }
  }
  
  //eliminate double entry in the array arrayCourse
  for (i = doubleCourseIndex.length-1; i >=0; i--){ //start from the end of the array and move backwards
    arrayCourse.splice(doubleCourseIndex[i], 1);
  //console.log(doubleCourseIndex[i]);
  }
  
  //create empty keys in newObject with the name of the course
  //if try to push a value directly before create the key get error
  for (i = 0; i < arrayCourse.length; i++){
    newObject[arrayCourse[i]] = [];//.push(eachLine.name);
  }

  //now that I have the key already defined
  //I can repeat the above operation using the arrayCourse as reference
  //and push all name in the proper key
  for (i = 0; i < arrayCourse.length; i++){
    for (let eachLine of instructors){
      if (eachLine.course === arrayCourse[i]){
        newObject[arrayCourse[i]].push(eachLine.name);
      } 
    }
  }
  return newObject;
  };

//For test
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
