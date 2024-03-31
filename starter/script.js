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

const age = 19;

const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`you're allowed to take driving license test.`);
} else {
  console.log(
    `you can't drive just yet, you have ${18 - age} year(s) to wait.`
  );
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
