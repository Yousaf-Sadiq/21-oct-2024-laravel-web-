let h1 = document.getElementById("abc2");
let _2h1 = document.getElementById("abc");
// camelCase
/*
  rules 
      alphabet , _
  
  var
  let 
  const 

  data types
          int 1 float .5 
          string 'Apple'
          char "Q"  
          boolean true(1) false(0)

          function 
          array
          object 

          Find the area of a rectangle where the length is 5 and the width is 8.
Find the area of a triangle where the base is 4 and the height is 3.
Find the area of a circle where the radius is 3.
Convert temperatures from Celsius to Fahrenheit and Fahrenheit to Celsius.


      */
let width = 6;
let length = 7;

let area = width * length;

// concatination

let x = "Area of rectangle : ";

// string template
//      document.getElementById("abc").innerHTML =  x + area;

_2h1.innerHTML = `Area of rectangle : &nbsp;&nbsp;&nbsp; ${area}`;

h1.innerHTML = `Area of rectangle : &nbsp;&nbsp;&nbsp; ${area}`;