// we can declare variable like this in javascript
c = 20; // it is a global variable declartion

var d = 7; // var keyword works in function scope but not in block scope
let a = 10 ; //Let keyword works in both Block scope and function scope


// function fun() {
//   let a = 5;
//   if (a == 5) {
//      let f = 10;
//     console.log("inside", f);//this is working fine

//     // ki let ek block scope h means ek block ek ander hi rahega and wo block tha (if condition)
//   }
//   console.log("outside ", f); //Not able to print 
// }

// function ko call bhi krna hota h


function fun() {
  let a = 5;
  if (a == 5) {
    var f = 10;
    console.log(f);
  }
  console.log("neeche wala" , f); // yeh bhaar bhi aur ander bhi print ho rha h var iska mtb bekaar h work nhi kr rha 
}

fun();

// fun();
// var kr diya toh ab chl rha h block scope p iska mtb bekaar h var block m use krna 



// if you write f = 1; 
// then it is a global variable and can run anywhere
