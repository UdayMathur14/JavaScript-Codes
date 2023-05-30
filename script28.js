 let str= "hello";
 console.log(typeof str);
//  this prints that this is the string 

let num = 2 ; 
let bool = true ; 
let arr = [3,4,6,7,2];
let fun = function(){
    console.log("yay!");
}

console.log(typeof String);
console.log(typeof Boolean); 
console.log(typeof Array);
console.log(typeof Number);
console.log(typeof Object);
console.log(typeof Function);

// these all are the function whcih creates these types of datatypes 

// hmne it datatypes ko capital m likha hua h 
// sbko type aay h function 

// means
console.log(Boolean(0));
console.log(Boolean(3));
// iske ander koi string call kru toh true ayega agr ko ipositive no call kru tb bhi true ayega , it function is cast anything to boolena 
console.log(Number("2323"));
// isko normal no m convert kr dega 

console.log(Boolean("scsc"));

console.log(Array());
// array function call kiya toh khaali array mila 
console.log(Array(2,4,5,7,2));
// toh yeh array m convert kr deta h 
console.log(Array(5));
// agr hm sirf ek value h denge array m  jo ki no hoga toh wo empty slot bn jaata ha 
// iska mtb h ki iske ander 5 empty slots bn gaye ha so we can use it 

// we can also create arrray like this 
let a = Array(2);
a[0] = 2;
console.log(a);


// these all are known as global function and yeh global function saare windows ke ander ha 

