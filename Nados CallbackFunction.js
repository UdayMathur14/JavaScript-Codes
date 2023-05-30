//callback - A function that can be passed to another
//function as an argumenet so that it can be called later is known as a callback function


// EXAMPLE 1
function printFirstName(firstName, cb) {
  console.log(firstName)
  cb('jha')
}

// function printLastName(lastName){
//        console.log(lastName)
// }
// printFirstName('Neeraj' , printLastName);
// // printLastName('jha');














// EXAMPLE 2 

printFirstName("Neeraj", function printLastName(lastName) {
  console.log(lastName+"jo");
});











// Example 3 
function printHello(cb) {
  console.log("Hello");
  cb()
 
}

function printBye() {
  console.log("Bye");
}

printHello(printBye);
