// loops
//  start  end    increament/decreament
/**
 *
 * for
 * foreach   index arrays
 *
 * while
 * do while
 *
 *
 * for in
 * for of
 */

let a = [1, 2, 3, 4, "hello", true, "abc", 8, 9]; // range/index/address

// a.length - 1
//  i < a.length

let end = a.length - 1;

// i+=2
//  i = i+2

console.warn(a);

let out = ""; // 9

//      9 <= 8
// for (let i = 0; i <= end; i++) {

//     //       2
// //   out += `${a[i]} <br>`;

// out = out + `${a[i]} <br>`;

// }

let i = 0;
// while (i<=end) {

//     out += `${a[i]} <br>`;

//     i++;
// }

// a.forEach(function (v,t) {

//     out += `${t} :  ${v} <br>`;
// //   console.log(v);
// });

// document.write(out);
let j = 0;
// while (j < 0) {
//   console.log(j);
//   j++;
// }
do {
  console.log(j);
  j++;
} while (j < 0);

// Make a reverse of the array by using a loop.
// Find the largest number in an array by using a loop.  selection and check   
// Find the smallest number in an array by using a loop.  selection and check 

// Write a function that checks if a word is a palindrome (reads the same forwards and backward).
    // 10!
    // 5 x 4 x3 x 2 x 1
// Write a function to calculate the factorial of a given number.

// Write a function that determines whether a given number is prime or not. 
// Print numbers from 1 to 100, but for multiples of 3 print "Fizz", 
// for multiples of 5, 
// print "Buzz" and for numbers that are multiples of both 3 and 5 print "FizzBuzz".

// Sum all the array elements by using a loop.

function SUM_array(q) {
  let sum = 0; // 80


//  q = [1,2,3,4,5,65];
  q.forEach(function(e) {
    // sum = sum + e;
    sum += e;
  });

  return sum;
}


let r = [1,2,3,4,5,65];

console.log(SUM_array(r));