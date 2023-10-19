// we can declare variable like this in javascript
c = 20; // it is a global variable declartion

var d = 7; // var keyword works in function scope but not in block scope
let a = 10; //Let keyword works in both Block scope and function scope

// var is initialize undefined but let and const cannot be 
// console.log(c);
// var c ; //ok , shows undefined 

// console.log(c);
// let c ; //error


// if(true){
//   var disp = 5 ; 
//   console.log("inside",disp);
// }

// console.log("outside",disp);

//isko bhaar print nhi krna chahiye tha but kr rha h tbhi bola jata h ki var block ke liye bekaar h but yha p let badiya kaam krega kyuki le h block scope



// function fun() {
//   let data = 5;
//   console.log("abe" , data); 
// }
// fun();
// console.log("abe" , data); 

// neeche wala error de rha h iska mtb h ki let badiya kaam krta h block and function m 
//yha p var bhi shi kaam karega 


// function fun() {
//   let a = 5;
//   if (a == 5) {
//     var f = 10;
//     console.log("inside", f);
//   }
// }
// fun();
// console.log("outside ", f);

//but abhi toh yeh error de rha h aur tumne jbki bola upar ki var toh function scoped h aur block ke ander nhi chlta shi but abhi chl rha h kyuki yeh block ek function ek ander h . smjhe .

//extra info
// if you write f = 1;
// then it is a global variable and can run anywhere
