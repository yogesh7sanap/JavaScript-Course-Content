// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* ----------------------------------------------------------------------------------------------------
let x = 23;

if (x == 23) console.log('equal');

const calcAge = birthYear => 2037 - birthYear;

console.log();
console.log(calcAge(1991));



*/

/* --------Using Google, StackOverflow and MDN to Solve a Problem-------------------------------------------------------------

// Problem 1
// const temps = [4, 1, 0];

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let min = temps[0],
    max = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }

    if (temps[i] < min) min = temps[i];

    if (temps[i] > max) max = temps[i];
  }

  console.log(max, min);

  return max - min;
};

console.log(calcTempAmplitude(temps));

// Problem 2
const t1 = [4, 1, 0];
const t2 = [3, 9, 1];
const calcTempAmplitudeNew = function (t1, t2) {
  //array concat to add two arrays. (ES5)
  const temps = t1.concat(t2);

  let min = temps[0],
    max = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }
    if (temps[i] < min) min = temps[i];

    if (temps[i] > max) max = temps[i];
  }

  console.log(max, min);

  return max - min;
};

console.log(calcTempAmplitudeNew(t1, t2));


*/

/* -------------------------------------------------debugging in dev tool of browser-------------------------------------------------

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Enter the temparature')),
  };

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);

  console.table(measurement);

  const kelvin = measurement.value + 273;
  // debugger;
  return kelvin;
};

console.log(measureKelvin());

*/

/*---------------------------------------------------coding challenge #1---------------------------------------
//to print string in a loop with console.log without going into next line.
//using trim() to remove all the \n repsent in the string.

const temp = [17, 21, 23];

const printForecast = function (temp) {
  let str = ``;
  for (let i = 0; i < temp.length; i++) {
    str = str + ` ` + `...${temp[i]}℃ in ${i} days`;
    // console.log(str);
  }
  str.trim();

  console.log(str);
};

printForecast(temp);


*/
