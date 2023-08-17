// we can declare variable like this in javascript
c = 20; // it is a global variable declartiion
var d = 7; // we use var when it has a function scope
// let a = 10 ; // we use let  when we have a block scope
// console.log(a);

function fun() {
  let a = 5;
  if (a == 5) {
     f = 10;
    console.log("inside", f);
    //  yeh wala toh let print ho gya but neeche wala outside wale m error aa gya
    // ki let ek block scope h means ek block ek ander hi rahega and wo block tha if condition
  }
  console.log("outside ", f);
  //  jaise hi yeh let ko bola ki bhaar print hoja wo nhi ho paya
}

// function ko call bhi krna hota h
fun();

// function fun() {
//   let a = 5;
//   if (a == 5) {
//     var f = 10;
//     console.log(f);
//   }
//   console.log(f);
// }

// fun();

// var kr diya toh ab chl rha h



// if you write f = 1; 
// then it is a global variable and can run anywhere
