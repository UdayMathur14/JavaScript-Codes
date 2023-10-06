// prototype inheritance 
 let obj = {
    x:10,
    y:20,
 }
let obj3 = obj; //direct assinging 

let obj2 = Object.create(obj);
// This means that obj2 inherits properties from obj.
// obj2 doesn't have its own properties x and y, but it inherits them from obj. You can access these properties on obj2 as if they belong to obj2, even though they are technically inherited from obj.
console.log(obj2); 
console.log(obj3);

console.log(obj2.x); //gives you empty because it inherits property

