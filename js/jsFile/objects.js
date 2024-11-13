// Objects
// Data structure, reference type

// key, value

// const student = {
//   // properties
//   name: "Faizan",
//   birthYear: "2002",
//   courses: ["Php web development", "digital marketing"],
//   address: {
//     city: "Lahore",
//     street: "xyz",
//   },
//   // methods
//   calcAge() {
//     return 2024 - this.birthYear;
//   },
// };

// console.log(student);
// console.log(student.name, student["birthYear"]);
// console.log(student.calcAge());
// console.log(student.courses[0]);
// console.log(student.address.street);

const [c1] = ["Php web development", "digital marketing"];

const {name:n} = {
  // properties
  name: "Faizan",
  birthYear: "2002",
  courses: ["Php web development", "digital marketing"],
  address: {
    city: "Lahore",
    street: "xyz",
  },
  // methods
  calcAge() {
    return 2024 - this.birthYear;
  },
};

console.log(n);

// const scopes = () => {
//   let x = 5;
//   return function () {
//     // let y = 10;
//     console.log(x);
//   };
// }
// scopes()();


const course = {
    duration: 4,
    title: "PHP Web Development",
    fees: "342435"
};
course.instructurName = "Faizan";

const course2 = {...course};
course2.title = "Python Web Development";
console.log(course, course2);



let personAge = 19;

// if(personAge >= 18) console.log("Eligible");
// else console.log("Not Eligible");

let result = personAge >= 18 ? "Eligible" : "Not Eligible";
console.log(result);