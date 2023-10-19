// arrays in javascript 
let arr= ["uday " , "anmol" , "meenu"];
// console.log(arr);
// print the array


// console.log(arr[0]) ; 
// access the 0th element of the array  

// console.log(arr.length) ; 
// this will print the length of the array 

arr.push("rishabh");
// this will push the element at the end of the array 

console.log(arr.indexOf("risabh"));
// give the index of the rishabh if present in the array else give -1

arr.shift();
// remove the first element of the array 

arr.unshift("sheety");
// adds the element at the front 

arr.pop();
// remove the last element from the back  

for(let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
    // print the array 
}

if(arr[0]=="sheety"){
    console.log("comong sheety baby ");
}
else{
    console.log("padai kro baby");
}

const re = arr.length
console.log(re) //give the length of the new array

console.log(arr.toString()); //gives you the array instring

arr.sort(); //phele string m convert krta h and then sort accroding to string alpha