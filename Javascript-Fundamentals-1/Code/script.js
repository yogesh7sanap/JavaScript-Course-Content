// let js = "Amazing";

// if (js === "Amazing") alert("Javascript is amazing!");

/*


40 - 10 + 30 - 7;

console.log(40 - 10 + 30 - 7);

let firstName = "Jonas";
console.log("firstName");

let number = 23;

console.log(number);


*/

/*
let num = 23;

console.log(num);
console.log(typeof num);

num = true;
console.log(num);
console.log(typeof num);

let javascriptIsFun = false;

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

console.log(null);
console.log(typeof null);

*/

/*

let firstName = "Jonas";

console.log(firstName);

const PI = 3.14;

console.log(PI);

var lastName = "Schmedtmann";
console.log(lastName);

// gloabal scoped variable creates a property on globel object
can = 233;
console.log(can);

*/

/*
//Math Operators
let now = 2037;

let ageJonas = now - 1991;
let ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 2);
//2**2 ->2^2 ->2*2*2 =8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + "" + lastName);

//Assignemnt Operators

let x = 10 + 5;

x += 10; //x=x+10
x *= 4; //x=x*4

x++; //x=x+1
x--; //x=x-1
x--; //x=x-1

console.log(x);

//Comparision Operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


*/

/*
let now = 2037;

let ageJonas = now - 1991;
let ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x=y=10 , x=y, x=10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageJonas, averageAge);

*/

/*
// coding challenge 1

marksWeight = 52;
marksHeight = 1.7;

johnWeight = 95;
johnHeigth = 1.92;

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//   and height in meter).

marksBMI = marksWeight / marksHeight ** 2;
johnBMI = johnWeight / johnHeigth ** 2;

console.log("Marks BMI = " + marksBMI, "Johns BMI = " + johnBMI);

markHigherBMI = marksBMI > johnBMI;

console.log(markHigherBMI);

*/

/*

const firstName = "Jonas";
const job = "techer";
const birthyear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthyear) + " year old " + job + "!";

console.log(jonas);

const jonasnew = `I'm ${firstName}, a ${year - birthyear} year old ${job}! `;

console.log(jonasnew);

console.log(`just a regular string "hey" "'hello'`);

console.log(
  "Strings with \n\
multiple \n\
excuse "
);

console.log(`String with
multiple
excuse`);

*/

/*
const ageSarah = 15;

if (ageSarah >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - ageSarah;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

*/

/*
cosing challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if(BMIMark>BMIJohn)
{
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} `);

}
else
{
    console.log(`Jogn's BMI is higher than Mark's!`);
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} `)

}


*/

/*
//type conversion

const inputYear = "1991";

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23, 23));

//type coersion

console.log("I'm " + "23" + " years old");

console.log("20" - "10" - 3);

console.log("2" * "5");
console.log("6" / "2");

let n = "1" + 1;
n = n - 1;

console.log(n);
console.log("30" - "5" - "10" - 5 + "5");

*/

/*
// truthy and falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("JOnas"));
console.log(Boolean({}));

console.log(Boolean(""));

let money = 0;
if (money) {
  console.log("dont spen it all");
} else {
  console.log("you need to look for the job");
}

let height;

if (height) {
  console.log("yey height is defined! :)");
} else {
  console.log("height is UNDEFINED :(");
}

*/

/*
const age = "18";
if (age === 18) console.log("You just become an adult! :D (strict)");

if (age == 18) console.log("You just became an adult! :D (loose)");

const favourite = Number(prompt("What's your favourite number? :"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("yey! 23 is a cool number");
} else if (favourite === 9) {
  console.log("hey! 9 is a cool number");
} else if (favourite === 2) {
  console.log("yuppy! 2 is also a cool number");
} else {
  console.log("you can pick as favourite number! :)");
}

if (favourite !== 23) console.log("Why not 23?");


*/

/*
const hasDrivingLicence = true;
const hasGoodVision = true;

console.log(hasDrivingLicence && hasGoodVision);
console.log(hasDrivingLicence || hasGoodVision);
console.log(!hasGoodVision);

if (hasDrivingLicence && hasGoodVision) {
  console.log("Sarah should drive!");
} else {
  console.log("Sarah should not drive!");
}

const isTired = false;
console.log(hasDrivingLicence && hasGoodVision && isTired);

if (hasDrivingLicence && hasGoodVision && !isTired) {
  console.log("Sarah can definitely drive!");
} else {
  console.log("Should avoid driving! No risk");
}

*/

/*
//Challegne 3

const scoreDolphins = (96 + 108 + 189) / 3;

const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreKoalas, scoreDolphins);

if (scoreKoalas < scoreDolphins && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreKoalas >= 100 &&
  scoreDolphins >= 100
) {
  console.log("Both win the trophy 🏆");
} else {
  console.log("No one wins the trophy!");
}

*/

/*
const day = "friday";

// console.log("Hey");
switch (day) {
  case "monday":
    console.log("Plan Course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos!");
    break;

  case "wednesday":
  // break;

  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record Videos");
    break;

  case "saturday":
  // console.log();
  // break;

  case "sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan Course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos!");
} else if (day === "wednesday " || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "friday" || day === "saturday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}


*/

/*
// expressions
3 + 4;
1991;
true && false && !false;

//statements
if (23 > 10) {
  const str = "23 is bigger";
  //this is whole till ; is statement
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

//here in `` everything is a exprestion but console to ; is a statement


*/

/*
const age = 22;
age >= 18
  ? console.log("you can drink alcohol")
  : console.log("dont drink alcohol");

const drink = age >= 18 ? "alcohol" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "alcohol";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);


*/

/*


// challenge 4

const bill = 275;


let tip;

tip= bill<=300 && bill>=50 ? bill*0.15 : bill *0.2;

if(bill>=50 || bill<=300)
{
    tip=bill*0.15;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+bill*0.15}`);
}
else
{
    tip=bill*0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+bill*0.15}`);
}


*/
