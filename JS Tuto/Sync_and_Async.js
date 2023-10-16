const fs = require("fs");

//This is Synchronus way of reading Files
// fs.readFile("./JS Tuto/f1.txt", cb1); //this will run fine in debug console
// fs.readFileSync('f1.txt') // This is run in terminal properly 
// console.log('Before')

// let data1 = fs.readFileSync('f1.txt')
// let data2 = fs.readFileSync('f2.txt')

// let data3 = fs.readFileSync('f3.txt')

// console.log('This is file Data of file 1 ->  ' + data1)
// console.log('This is file Data of file 2 ->  ' + data2)
// console.log('This is file Data of file 3 ->  ' + data3)

// console.log('After')
// error first callback - jiske ander aap pheli priority error ko dete h 



// Asynchronous way of reading Files
// fs.readFile("f1.txt", cb1); This is working fine in terminal 
// fs.readFile("./JS Tuto/f1.txt", cb1); This is working fine in debug console
console.log("Before");

fs.readFile("./f1.txt", cb1);
//iss file ko read krne ki koshish krega and then cb1 ko call kr dega , aur data ayega toh data ke ander pass kr dega .

// data: This parameter will receive the contents of the "f1.txt" file as a buffer or a string if the reading operation is successful.

// data: This parameter will receive the contents of the "f1.txt" file as a buffer or a string if the reading operation is successful.

function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("This is file data-> " + data);
   
  }
}

// fs.readFile("", cb2);

// function cb2(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is file data-> " + data);
    
//   }
// }

// fs.readFile("", cb3);

// function cb3(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is file data-> " + data);
//   }
// }

console.log("After");
//Yeh Async chl rhi h means alag alag kbhi f2 , f1 , f3 
//toh kbhi f3 , f2 , f1 and randomly change ho rha h 

// Why ?
//Ans : 
// 1) call stack = area jha p aaka javascript ka har ek function execute hone ke liye jaata h , phele aaya console.log("befor") , ye gya call stack ke ander dekha ki yeh ko sync h toh isko direct hi print kr diya and remove kr diya call stack se 

// 2 - Node Api stack m chle jayenge  = agr async hoga toh wo node api stack m and hold m baith gye then console after wala aaya toh wo bhi direct hi print ho gya :

// Hence : Before and after aa jayenge 

// Node api stack random m h

// 3 - call back queue = nodep api quue se randomly yeh que ke ander chle jaynege 

//4 //event loop = 1- our stack should be empty - means jitna bhi synchronous kaam h wo ho gya h 
//  2- event loop one by one kisi ko bhi execute krta rahega and stack ke ander bhejte rahega 

// Hence you get the random output in asynchronous 

//But yaar yeh shi nhi h asnyc thode time ke liye random shi h but yeh bekaar h 

// Asnyc= 1 -Randomness 
//       //  2- serialwise - means aapke pass ek book h toh aapp yeh nhi chahte ki random pages aaye aap chahte hi ki serial m pages aye kyuki usski ka fayda h.

// How to achive serial synchrous

// console.log("Before");

// fs.readFile("./Nados Tuto/f1.txt", cb1);
// //iss file ko read krne ki koshish krega and then cb1 ko call kr dega , aur data ayega toh data ke ander pass kr dega 

// function cb1(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is file data-> " + data);
//     fs.readFile("./Nados Tuto/f2.txt", cb2);
//   }
// }
// //jb 1phela cal back function call ho toh uske baad hi dusra call back function call ho , 
// // jb phela over ho jayega uske baad hi dusra chlega and then theesra , so phele call back ke ander dusre ko call kr diya 

// function cb2(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is file data-> " + data);
//     fs.readFile("./Nados Tuto/f3.txt", cb3);

//   }
// }



// function cb3(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("This is file data-> " + data);
//   }
// }

// console.log("After");
//your output will be 
// Before
// After
// This is file data-> I am f1
// This is file data-> I am f2
// This is file data-> I am f3


//serial = serial ek order h , synchrouns and serial m farak h , serial ek order h aur sync means 1 ke baad ek. 