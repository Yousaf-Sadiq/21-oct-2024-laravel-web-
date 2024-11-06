/**
 * LOGICAL OPERATORS
 *  AND      &&
 *  OR       ||
 *  NOT     !
 *
 *
 *  ((5 <= 7)  && ( 5 > 6)  )
 *
 * relational op
 * <
 * >
 * <=
 * >=
 *
 * 
 * Check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
Check from the given integer, whether it is positive or negative.

Check whether a given number is even or odd.
Check whether a given positive number is a multiple of 3.

Determine whether a given year is a leap year.

Check from the given two numbers, whether 
the first number is "greater", "lesser" or "equal" to the second number.

Check from the three sides of the triangle. 
use conditions to determine and display weather the
 triangle is "Equilateral" (all sides are equal), 
 "Isosceles" (two sides are equal), or "Scalene" (no sides are equal)

Check from the given month (1-12) if it's 
"Winter" (December-February), "Spring" (March-May), 
"Summer" (June-August), or "Autumn" or "Fall" (September-November).

 *
 *
 * (5 <= 7) T
 *
 *  T          F
 * 5 < 7 || 5 == 7  T
 */

let age = 19;

if (age <= 18) {
  console.log(" KID WEBSITE");
} else {
  console.log("age must be less then or equal to 18");
}

// Check two given numbers and return true if one of the numbers is 50 or if their sum is 50.

let x = 25,
  y = 30,
  sum;

sum = x + y;

/**
 * =   saving value in variable
 * ==   compare value from different variable (to check equal value )
 *
 *  5 == "5"  T
 *
 *  === compare value and dataType from different variable (to check equal value and dataTypes )
 *
 */

if (x === 50 || y === 50) {
  console.log("ONE OF THE NUMBER IS EQAUL TO 50");
} else if (sum === 50) {
  console.log("SUM IS EQUAL TO 50 ");
} else {
  console.log("INVALID CONDITIONS");
}

// if (x === 50 || y === 50  || sum === 50) {
//       console.log(true);
//     }
