//callback - A function that can be passed to another
//function as an argument so that it can be called later is known as a callback function


// EXAMPLE 1                      //cb means call back function 
function printFirstName(firstName, cb , cb2) {
  console.log(firstName)
  cb('jha')
  cb2(25)
}

function printLastName(lastName){
       console.log(lastName)
}
function age(c){
  console.log(c);
}
//                 firstname , cb 
printFirstName('Neeraj' , printLastName , age);
//khaali ek hi function call kiya aur dusra bhi call ho gya apne aap hi cb m 


// Another way  

// printFirstName("Neeraj", function printLastName(lastName) {
//   console.log(lastName+"jo");
// });











// Example 2 
// function printHello(cb) {
//   console.log("Hello");
//   cb()
 
// }

// function printBye() {
//   console.log("Bye");
// }

// printHello(printBye);
