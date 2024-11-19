/**
 * rows and column
 *
 */

/**
 
*
**
***
****
*****
******
*******

*******
******
*****
****
***
**
*

*/
let a = [1, 5, 6, 7, 8, 9, 0, ["hello", "world"]]; //8

let a_range = a.length - 1; //7

// console.log(a);

let output = "";

for (let row = 0; row <= a_range; row++) {
  if (typeof a[row] == "object") {
    for (let col = 0; col < a[row].length; col++) {
      //   console.log(a[row][col]);

      output += `${a[row][col]} <br>`;
    }
  } else {
    // console.log(a[row]);

    output += `${a[row]} <br>`;
  }
}

document.write(output);

// for (let row = 7; row >= 1; row--) {

//     for (let col = 1; col <=row ; col++) {

//         output += `*`;
//         //  output = output + "*"
//     }

//     output += `<br>`;
// }

// document.write(output);
//  selection and sort
//  selection and check
// Find the same numbers from the following multidimensional array
let multiArr = [
  [
    [12, 32, 13, 34],
    [13, 12, 23, 41],
    [15, 23, 34, 45],
  ],
  [
    [122, 32, 133, 314],
    [123, 132, 23, 141],
    [155, 23, 334, 465],
  ],
  [
    [12, 342, 135, 234],
    [713, 712, 423, 431],
    [15, 23, 34, 45],
  ],
  [
    [12, 372, 913, 334],
    [13, 162, 243, 341],
    [175, 423, 34, 435],
  ],
];

console.log(multiArr);

// [
//
//       [12, 32, 13, 34],
//       [13, 12, 23, 41],
//       [15, 23, 34, 45],
//
//
//       [122, 32, 133, 314],
//       [123, 132, 23, 141],
//       [155, 23, 334, 465],
//
//
//       [12, 342, 135, 234],
//       [713, 712, 423, 431],
//       [15, 23, 34, 45],
//
//
//       [12, 372, 913, 334],
//       [13, 162, 243, 341],
//       [175, 423, 34, 435],
//
//   ];

let outerMostArray = multiArr.length - 1; // range

let twoDArray = [];

for (let q = 0; q <= outerMostArray; q++) {
  for (let j = 0; j < multiArr[q].length; j++) {
    twoDArray.push(multiArr[q][j]);
  }
}

let ONeDArray = [];

let twoDlength = twoDArray.length - 1;

for (let q = 0; q <= twoDlength; q++) {


  for (let j = 0; j < twoDArray[q].length; j++) {
    ONeDArray.push(twoDArray[q][j]);
  }
}


console.log(ONeDArray);