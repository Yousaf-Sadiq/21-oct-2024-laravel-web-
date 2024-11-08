// Functions
// DRY (Don't repeat yourself)

// function calcSum(n1, n2) {
//   let x = n1;
//   let y = n2;
//   let sum;

//   sum = x + y;

//   console.log(sum);
// }

// calcSum(12, 5);
// calcSum(1, 15);
// calcSum(12, 55);
// calcSum(12, 0);
// calcSum(121, 5);
// calcSum(121, 115);

// function greet(message) {
//   console.log(message);
// }

// greet("Hello World!");
// greet("My name is Faizan");

// function with return
// function calcSum(){
//     let celcius = 45;
//     let result = (9/5 * celcius) + 32;
//     return result;
// }
// console.log(calcSum()) // 20
// // function with no return
// function calcProduct(){
//     console.log(12 * 8);
// }
// calcProduct()
// // function with parameters
// function calcAge(birthYear = 2002, currentYear = 2024){
//     return currentYear - birthYear;
// }
// console.log(calcAge()); // 22
// calcAge(1979, 2012) // 22
// function with no parameters
// function calcAge2(){
//     let currentYear = 2024;
//     let birthYear = 2002
//     return currentYear - birthYear;
// }
// console.log(calcAge()); // 22

// generic function
function calcSum() {
  console.log(1 + 2);
}
calcSum();
// function express
const calcProduct = function () {
  console.log(2 * 5);
};
calcProduct();
// arrow function
// const calcSubtract = () => {
//   console.log(10 - 3);
// };
const calcSubtract = () => 10 - 3;
console.log(calcSubtract());
// callback function
// anonymous function
// function () {
//     console.log(2 * 5);
//   };
// IIFE immediately invoke function expression

(function () {
  console.log(10 / 2);
})();

// function general(n1, n2, n3) {
//   if (x === n1 || y === n2) {
//     console.log("ONE OF THE NUMBER IS EQAUL TO 50");
//   } else if (sum === n3) {
//     console.log("SUM IS EQUAL TO 50 ");
//   } else {
//     console.log("INVALID CONDITIONS");
//   }
// }
// general(50, 50, 50);
// general(50, 50, 40);
// general(50, 0, 40);

// make a calculator with accepts 3 parameters one is for operator and two
// for operands if user doesn't provide operands value then use the default
// value to achieve the result make sure you properly return the result;

function calculator(operator = "+", operand1 = 0, operand2 = 0) {
  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return operand1 / operand2;
  } else {
    return "Invalid Operator";
  }
  //   console.log(operator, operand1, operand2);
}
console.log(calculator("%", 2, 6));
