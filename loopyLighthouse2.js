/*
The function should log to the console all the numbers from 15 to 90,
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon",
and multiples of 2 and 5 with "BattyBeacon".

It takes 3 parameters.
1. range should be an array of 2 numbers representing the start and end values for the loop.
2. multiples should be an array of 2 numbers representing the multiples you want to replace with words.
3. words should be an array of 2 strings representing the words that will replace the multiples.
*/



function loopyLighthouse(range, multiples, words){
  for (let num = range[0]; num <= range[1]; num++){
    if ((num % multiples[0] === 0) && (num % multiples[1] === 0)){
      console.log(words[0] + words[1]);
    } else if (num % multiples[0] === 0){
      console.log(words[0]);
    } else if (num % multiples[1] === 0){  
      console.log(words[1]);
    } else {
      console.log(num);
    }
  }
}

//For test
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);