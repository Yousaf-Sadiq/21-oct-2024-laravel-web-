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

// for (let row = 0; row <= a_range; row++) {
//   if (typeof a[row] == "object") {
//     for (let col = 0; col < a[row].length; col++) {
//       //   console.log(a[row][col]);

//       output += `${a[row][col]} <br>`;
//     }
//   } else {
//     // console.log(a[row]);

//     output += `${a[row]} <br>`;
//   }
// }

// document.write(output);

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
// Find the same numbers f  wing multidimensional array
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

let ONeDArray = [];

//  3d to 1d
for (let row = 0; row <= outerMostArray; row++) {
  for (let col = 0; col < multiArr[row].length; col++) {
    for (let subCol = 0; subCol < multiArr[row][col].length; subCol++) {
      ONeDArray.push(multiArr[row][col][subCol]);
    }
  }
}

console.log(ONeDArray);



let commonNumbers = [];

let count = {};

//  selection and check numbers 
for (let selection = 0; selection < ONeDArray.length; selection++) {
  for (let check = 0; check < ONeDArray.length; check++) {

    if (selection == check) {

    } else if (ONeDArray[selection] == ONeDArray[check]) {
      let a = ONeDArray[selection];

      if (count[a]) {
        // console.log(a);
        // console.log(count);
        count[a]++;
      } else {
        count[a] = 1;
      }
    }
  }
}




console.log(count);

for (const w in count) {

  if (count[w] > 0) {
      commonNumbers.push(w)
  }
}


console.log(commonNumbers);



function display(){
  console.log("testing");
}

let q = [1,23,43,543,432,432,432,123,1,3215,43,765]

// console.log(q[5]);


let t = {
  name:"XYZ",
  email:"XYZ@gmail.com",
  display:function(){
  //  console.log("inside obj testing");
   return "inside obj testing";
  }
}

console.log(t.display());














function person(id,name){


  
  return true;
}



let id= 5;
let name ="XYZ";

let  persons = person(id,name)

console.log(persons);



/**
    scope 
      local variable 
      global variable

    return 
    naming convention memory 
      */












// let twoDArray = [];

// //  converting 3d to 2d
// for (let q = 0; q <= outerMostArray; q++) {
//   for (let j = 0; j < multiArr[q].length; j++) {
//     twoDArray.push(multiArr[q][j]);
//   }
// }

// let ONeDArray = [];

// let twoDlength = twoDArray.length - 1;

// //  converting 2d to 1d
// for (let q = 0; q <= twoDlength; q++) {

//   for (let j = 0; j < twoDArray[q].length; j++) {
//     ONeDArray.push(twoDArray[q][j]);
//   }
// }

// console.log(ONeDArray);
