// kisi file m  jaake isko link kr diyo


// this is called function declaration 
function square_root(n){
   console.log(Math.sqrt(n))
    // math sqrt ek in build function h 
 }
//  isme hmne ek no n diya function ko and return kr diya uska square root 
// this is called function expression 
//  console.log(square_root(10));

// this way is called function hoisting 

 var sqrt = function(){
    console.log("hi");
    return ;
 }
square_root(100);
sqrt();


//  hositing = when you define function only by using the function keyword not sqrt = function , then so what javascript is do it takes all the function and placed in the top of the code 