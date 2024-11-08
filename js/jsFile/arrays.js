let a = [7, 8, 11, 20, 77,774534];

let q = a.length - 1;

let sum = [12.4, "abc", true];

console.log(a);

/**
 *
 * toString()
join()
push()
pop()
unshift()
shift()
splice()
slice()
Delete array[index]
concat() / spread operator 
indexOf()
lastIndexOf()
includes()
map()
reduce()
filter()

 * range and length
 */

//  PUSH to insert value at the end of the array
// UNSHIFT Insert value at the start of the array

//  POP to remove value at the end of the array
//  SHIFT  remove value at the start of the array

// a.splice(2, 0, "HELLO WORLD");

// Find the last element of an array without giving a hard-coded index.

// Check whether the first or the last index of an array has a specified value, let's say 5.

// Make an array to store the names of students and
//  check whether that array has your own name or not and also return the index of that value.


// Add the array element at the specified index. 

// Delete the array element from the specified index.




console.log(a.slice(0,4));

let y =[12,23];

let u =["abc",true];

let w = [...y,...u];


console.log(a.indexOf(20));