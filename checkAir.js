/*
check a collection of air samples.
arguments are an array of strings, where each string represents a small air sample that is either clean or dirty. 
The second argument is a number representing the highest acceptable amount of dirty samples.
return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.
*/

const checkAir = function (samples, threshold) {
  let cleanSample = 0;

  //count hom many clean sample
  for (i = 0 ; i < samples.length; i++){
    if (samples[i] === "clean"){
      cleanSample +=1;
    }
  }

  //calculate percentage of clean sample
  cleanSamplePerc = cleanSample / (samples.length)
  //console.log(cleanSamplePerc);
  //console.log(samples.length);
  
  //if dirty samples higher of threshold
  if ((1 - (cleanSamplePerc)) > threshold){
    return "Polluted";
  } else {
    return "Clean"; 
  } 
};


//For test
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

