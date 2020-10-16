//takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
const talkingCalendar = function(date) {
  
  //split each part of the date into an array
  let element = date.split('/');
  //console.log(element);

   //replace the number of the month with its name
  switch (element[1]){
  case "01":
    element[1] = "January";
    break;
  case "02":
    element[1] = "February";
    break;
  case "03":
    element[1] = "March";
    break;
  case "04":
    element[1] = "April";
    break;
  case "05":
    element[1] = "May";
    break;
  case "06":
    element[1] = "June";
    break;
  case "07":
    element[1] = "July";
    break;
  case "08":
    element[1] = "August";
    break; 
  case "09":
    element[1] = "September";
    break; 
  case "10":
    element[1] = "October";
    break; 
  case "11":
    element[1] = "November";
    break; 
  case "12":
    element[1] = "December";
    break;                
  }

  //remove all zero in front of day number
  if (parseInt(element[2]) < 10){
    let day = element[2].toString();
    element[2] = day.replace("0", "");
  }

  //add the day subfix 
  if (element[2] === "1" || element[2] === "21" || element[2] === "31" ){
    element[2] += "st,";
  } else if (element[2] === "2" || element[2] === "22"){
    element[2] += "nd,";
  } else if (element[2] === "3" || element[2] === "23"){
    element[2] += "rd,";
  } else {
    element[2] += "th,";
  }

  return element[1] + " " + element[2] + " " + element[0]

};

//For test
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
