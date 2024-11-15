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

let w = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

function revArray(q) {
  let t = [];
  //              8
  for (let j = q.length - 1; j >= 0; j--) {
    t.push(q[j]);
  }

  return t;
}

// console.log(revArray(w));

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




function qwer() {
  for (let j = 1; j <= 100; j++) {
    if (j % 5 == 0 && j % 3 == 0) {
      console.log("FizzBuzz : " + j);
    } else if (j % 5 == 0) {
      console.log("Buzz: " + j);
    } else if (j % 3 == 0) {
      console.log("fizz: " + j);
    }
  }
}

qwer();

function SUM_array(q) {
  let sum = 0; // 80

  //  q = [1,2,3,4,5,65];
  q.forEach(function (e) {
    // sum = sum + e;
    sum += e;
  });

  return sum;
}

let r = [1, 2, 3, 4, 5, 65];

console.log(SUM_array(r));

function fact(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}

console.log(fact(7));

// 7 x 6 x 5 x 4 x3 x2 x1
function fact1(a) {
  var num = a;

  let product = 1; // **
  //
  for (let i = num; i >= 1; i--) {
    product *= i;
    // product = product * i
  }

  return product;
}

console.log(fact1(7));
