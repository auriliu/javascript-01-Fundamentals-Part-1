// let js = "amazing";
// if (js === "amazing") alert("javascript can be fun!");

// console.log(2 + 2);
// console.log(typeof 3);

// let year;
// console.log(year); //undefined

// let x = 15;
// x += 10; //25
// console.log(x);

// x *= 4; //100
// console.log(x);

// x++; //101
// console.log(x);

// BMI calculator //////////////////////////////////////////////
// BMI calculator //////////////////////////////////////////////
// BMI calculator //////////////////////////////////////////////

// const BMI = mass / height * height

// data 1
// const massMark = 78;
// const heightMark = 1.69;

// const markBMI = massMark / (heightMark * heightMark);

// const massJohn = 92;
// const heightJohn = 1.95;

// const johnBMI = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// data 2
// const massMark2 = 95;
// const heightMark2 = 1.88;

// const markBMI2 = massMark2 / (heightMark2 * heightMark2);

// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const johnBMI2 = massJohn2 / (heightJohn2 * heightJohn2);

// const markHigherBMI2 = markBMI2 > johnBMI2;

// console.log(markHigherBMI2);

// end of BMI calculator //////////////////////////////////////////////
// end of BMI calculator //////////////////////////////////////////////
// end of BMI calculator //////////////////////////////////////////////

// template literals //////////////////////////////////////////////////
// template literals //////////////////////////////////////////////////

// const firstName = "marcus";
// const job = "coder";
// const birthYear = 1991;

// const marcus = `hi there! my name is ${firstName} and I'm a ${job} and I've been coding since ${birthYear} `;

// console.log(marcus);

// console.log(
//   "string with \n\
// multiple \n\
// lines"
// );

// console.log(`string with
// multiple
// lines`);

// template literals //////////////////////////////////////////////////
// template literals //////////////////////////////////////////////////

// if/else //////////////////////////////////////////////////
// if/else //////////////////////////////////////////////////

// const age = 19;

// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`you're allowed to take driving license test.`);
// } else {
//   console.log(
//     `you can't drive just yet, you have ${18 - age} year(s) to wait.`
//   );
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// if/else //////////////////////////////////////////////////
// if/else //////////////////////////////////////////////////

// type conversion/coersion ////////////////////////////////////////
// type conversion/coersion ////////////////////////////////////////

// // type conversion:
// const inputYear = "1991";
// const inputNumber = Number(inputYear);
// // converting the original value.

// console.log(inputNumber + 18); // 199118
// // converts number into a string.

// // manual conversion:
// console.log(Number(inputYear));
// // the original value is not converted.

// console.log(String(23));
// // converting a number to a string.

// // type coersion: happens when 2 values are different.
// console.log("I'm " + 23 + " years old.");
// // "+" triggers coersion to strings.

// console.log("23" - "10" - 3); //10
// // "-" triggers coersion to numbers.

// falsy/truthy values ////////////////////////////////////////
// falsy/truthy values ////////////////////////////////////////

// falsy values, not exactly false, but will become false when converting to a boolean.

// the 5 falsy values: 0, "", undefined, null, NoN.
// everything else will be converted to "true"

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean("marcus"));
// console.log(Boolean({}));

// // this coersion happens in if/else statements or logical operators.

// const money = 11;

// if (money) {
//   console.log("dont spend it all");
// } else {
//   console.log("get a job!");
// }

// // an error, is defined at 0. therefore - falsy.
// let height = 0;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height is NOT defined");
// }

// equality operators: == vs === ////////////////////////////////////////
// equality operators: == vs === ////////////////////////////////////////

// const age = 18;

// if (age === 18) console.log("congratulations");
// // if just one line, no need for { }
// // = assignment, === comparison.
// // "18" == 18 //true, because == does type coersion: converts string into a number.

// const favorite = Number(prompt("what's ur favorite number?"));
// // the input ll be converted into a number.
// // === strict equal.
// // !== strict different.
// if (favorite !== 23) console.log("why not the 23?");

// boolean logic ////////////////////////////////////////
// boolean logic ////////////////////////////////////////
// AND: both conditions must be true.
// OR: at least 1 of the conditions must be true.
// NOT: inverts true/false value.

// logical operators ////////////////////////////////////////
// logical operators ////////////////////////////////////////

const hasLicense = true;
const hasGoodVision = true;
const isTired = true;

// console.log(hasLicense && hasGoodVision);
// console.log(hasLicense || hasGoodVision);
// console.log(!hasLicense);

const shouldDrive = hasLicense && hasGoodVision;
console.log(shouldDrive);

if (hasLicense && hasGoodVision && !isTired) {
  console.log("u can drive");
} else {
  console.log("someone else should drive");
}
