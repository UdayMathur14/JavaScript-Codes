// prototype inheritance 
 let obj = {
    x:10,
    y:20,
 }

let obj2 = Object.create(obj);

console.log(obj2); 
console.log(obj2.x); 