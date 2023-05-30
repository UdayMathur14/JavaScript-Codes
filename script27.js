// prototype inheritance 
 let obj = {
    x:10,
    y:20,
 }

let obj2 = Object.create(obj);

console.log(obj2);
// yeh kuch print nhi kr pa rha , it shows that obj2 is an empty object 

// but if i use obj2.x tb yeh print kr rha h bhai ya chaakar h yeh 
console.log(obj2.x);
// but yeh toh saala console m print ho rha h 