"use strict";

/* ----------------------------------------------------------------------------------------------------------------
let hasDrivingLicence = false;
const passTest = true;

// if (passTest) hasDrivingsLicence = true;
if (passTest) hasDrivingLicence = true;
// let interface = true;
// let private = false;

// const if>23  //if is not allowed in variale declarations;


let keep strict mode on from on
*/

/* ----------------------------------------------------------------------------------------------------------------
//functions

function logger() {
  console.log("My name is jonas!");
}

logger();
logger();
logger(); //reusing the function

function fruitProcessor(apples, organges) {
  const juice = `There are ${apples} and ${organges} to make a juice`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);


*/

/* ----------------------------------------------------------------------------------------------------------------

//function declarations

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

console.log(calcAge1(1991));

//function expressions
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

*/

/* ----------------------------------------------------------------------------------------------------------------
//function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

//arrow functions

//one liner -implicit return not {} curly braces.
const calcAge3 = (birthYear) => 2024 - birthYear;

console.log(calcAge3(1991));

//multiliner
const calcAge4 = (birthYear) => {
  const currentYear = 2027;
  return currentYear - birthYear;
};

console.log(calcAge4(1991));

//multi liner and multiple parameter function
const firstName = "Jonas";
const calcAge5 = (birthYear, firstName) => {
  return `${firstName} is of age ${2027 - birthYear}`;
};

console.log(calcAge5(1991, firstName));

*/

/*
//function calling another function

function cutPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `There are ${applePieces} of apple and ${orangePieces} of orange to make a juice`;

  return juice;
}

console.log(fruitProcessor(2, 3));

*/

/* ------------------------------------------------------function overview-------------------------------
const calcAge_6 = function (birthYear) {
  return 2037 - birthYear;
};


const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge_6(birthYear);
  const retirement = 65 - age;

  if (retirement <= 0) {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/

/*---------------------------------------------------Challenge #1----------------------------------------

const calcAverage=function(score1,score2,score3)
{
    return (score1+score2+score3)/3
}

//const calcAverage= (score1,score2,score3) => (score1+score2+score3)/3 

const scoreDolphins=calcAverage(44,23,71);

const scoreKoalas=calcAverage(65,54,49);

const checkWinner = function (avgDolphins,avgKoalas)
{
    if(avgDolphins*2<=scoreDolphins)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
    
    else if (avgKoalas>=avgDolphins*2)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }
    else
    {
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins,scoreKoalas)



*/

/* Arrays --------------------------------------------------------------------------------

const friends1 = "Michael";
const frience2 = "Jay";
const friend3 = "Robin";

const arr = ["Michael", "Jay", "Robin"];

console.log(arr);

const arr1 = new Array(1991, 1992, 1994, 1995, 2005);

console.log(arr1);

console.log(arr1[0]);
console.log(arr1[2]);

console.log(arr1.length);
console.log(arr1[arr.length - 1]);

arr[2] = "luffy"; //this is allowed because it is not a primitive data type and it is mutable.

console.log(arr);

//this is not allowed as const is used
// arr = ["karan", "vijay"];

// console.log(arr);

const firstName = "Ryan";
const jonas = [firstName, "Schmedtmann", 2019 - 1991, arr1];

console.log(jonas);
console.log(jonas.length);

//exercise

const calcAge_7 = function (birthYear) {
  return 2037 - birthYear;
};

const years1 = [1991, 1994, 1993, 20007, 2050, 2090];
console.log(years1);
const age3 = calcAge_7(years1[0]);
const age4 = calcAge_7(years1[1]);
const age5 = calcAge_7(years1[years1.length - 1]);

console.log(age3, age4, age5);

const ages = [
  calcAge_7(years1[0]),
  calcAge_7(years1[1]),
  calcAge_7(years1[years1.length - 1]),
];

console.log(ages);


*/

/*----------------------------------array methods-------------------------------------------------------------
// Method related to array
const friends = ["Michael", "Jay", "Robin"];

//Adding
const friendsLength = friends.push("Mike");

console.log(friends, friendsLength);

friends.unshift("jacob");
console.log(friends);

//deleting

const friendsPopedValue = friends.pop();
console.log(friends, friendsPopedValue);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Jay"));
console.log(friends.indexOf("jacob"));

console.log(friends.includes("Robin"));
console.log(friends.includes("Luffy"));

if (friends.includes("Jay")) {
  //strict check jay is not allowed also not coersion happens
  console.log(" Luffy is your friend");
}

*/

/*
// coding challenge 2


const calcTip=function(bill)
{
    const tip= bill>=50 && bill<=300 ? bill*0.15 :bill*0.20;
    return tip;
}

console.log(calcTip);

const bills=[125,555,44];

const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(totals);
console.log(tips);
console.log(bills);
*/

/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

const jonasObject = {
  firstName: "Jonas",
  LastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

*/

/*---------------------------------------------------------------. and [] natation for objects-----------------------
const jonasObject = {
  firstName: "Jonas",
  LastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

console.log(jonasObject);
console.log(jonasObject.firstName);

console.log(jonasObject["LastName"]);

const nam = "Name";

console.log(jonasObject["first" + nam]);
console.log(jonasObject["Last" + nam]);

//here
//console.log(jonasObject."first"+nam) not allowed

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonasObject.interestedIn) //will not work as after . jonasObject expects a key not a expression which contains key.

if (jonasObject[interestedIn]) {
  console.log(jonasObject[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age , job, and friends"
  );
}

//to add a key and value to object

jonasObject.location = "portugal";
jonasObject["twitter"] = "@jonasschmedtmann";

console.log(jonasObject);

//challenge
// "jonas has 3 friends and his best friend is Micheal" print it to console using jonasObject

console.log(
  `Jonas has ${jonasObject.friends.length} friends and his best friends is ${jonasObject.friends[0]}`
);

*/

/*-------------------------------------------------------------------------------------------------------------
const jonasObject = {
  firstName: "Jonas",
  LastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  isDrivingLicence: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this); //here this contains the whole jonasObject Details as jonasObject is calling the method.
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear; //instead of calculating age multiple times we simply created a age property using this.
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${
      this.isDrivingLicence === true ? "a" : "no"
    } driving license`;
  },
};

// console.log(jonasObject.calcAge(jonasObject.birthYear));
// console.log(jonasObject["calcAge"](jonasObject.birthYear));

console.log(jonasObject.calcAge());
console.log(jonasObject.age); // after calling calcAge() method once here we are simply retrieving the age proprty 3 times
console.log(jonasObject.age); //hence code is optimized we can say.
console.log(jonasObject.age);

//Challenge

// getSummary method return string which summarizes data about jonas
// e.g. "Jonas is a 4 year old and he has a driving licence"

console.log(jonasObject.getSummary());

*/

/*---------------------------------------Challenge #3-------------------------------------------------------

const mark={
  fullName:"Mark Miller",
  mass:78,
  height:1.69,
  
  calcBMI:function(){
      this.bmi=this.mass / (this.height*this.height);
      
      return this.bmi;
  }
}


const john={
  fullName:"John Smith",
  mass: 92,
  height:1.95,
  
  
  calcBMI:function(){
      this.bmi=this.mass / (this.height*this.height);
      
      return this.bmi;
  }
}

const markBMI=mark.calcBMI();
const johnBMI=john.calcBMI();

if(markBMI < johnBMI)
{
  console.log( `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
}
else
{
  
  console.log( `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)

}
*/

/* ---------------------------------------------------Loops--------------------------------------------------

//rep will have score limited to for loop
//initialize,condtion,increment
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repeatition ${rep} 🏋️‍♂️`);
}


*/

/*------------------------------------------------Looping Arrays, Breaking and continuing--------------------

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  true,
  ["Micheal", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  //reading from JonasArray an array whose type is object
  console.log(jonasArray[i], typeof jonasArray[i]);

  //Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1967, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break statement

//continue example
console.log("---print only strings---");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") {
    continue;
  }

  console.log(jonasArray[i], typeof jonasArray[i]);
}

//break example
console.log("---break the loop when a number is encountered---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") {
    break;
  }

  console.log(jonasArray[i], typeof jonasArray[i]);
}


*/

/* ------------------------------------------------------Looping Backwards and loop in loop-------------------------------

//looping backwards
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  true,
  ["Micheal", "Peter", "Steven"],
];

//0,1,2, ... ,5
//5,4, ... ,0

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

//loop inside loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repeatition ${rep} 🏋️‍♂️`);
  }
}

*/

/*---------------------------------The while loop---------------------------------------------------------------------

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repeatition ${rep} 🏋️‍♂️`);
}

//while loop

let rep = 1;

while (rep <= 10) {
  console.log(`While: Lifting weight repeatition ${rep} 🏋️‍♂️`);
  rep++;
}

//dice example
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You rolled 6 and Loop is about to end...`);
  }
}

*/

/* ----------------------------------Challenge #4----------------------------------------------------------------

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


let bills=[22,295, 176,440,37,105,10,1100,86,52];

let tips=[];
let totals=[];


for(let i=0;i<bills.length;i++)
{
    tips[i]=calcTip(bills[i]);
    totals[i]=bills[i]+tips[i];
    
    // console.log(tips[i]);
}

// let arr=[2,4,9,5,6,7];
const calcAverage=function(arr)
{
    let sum=0;
    
    for(let i=0;i<arr.length;i++)
    {
        sum +=arr[i];
    }
    
    let avg=sum/arr.length;
    
    return avg;
    
}

console.log(calcAverage(totals))

*/
