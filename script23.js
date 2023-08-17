// strings 
let str = "hello ";
console.log(str);
// can be write string in "" or ' ' if you write on single then dont use rajat's or anything like that in between '' single quotes this will give you error

let p = "my name is javed \n prasad";
console.log(p);
// \n next line m daal dega , called line break

console.log(p.length);
// length of the strings

let key = "javed";
console.log(p.indexOf(key));
// p m jaake key ko dhundo and uska index bta do 

 

// agr maan lo ki hme postion of a dekni hoti but jha p toh name m bhi a aa rha h and javed m bhi toh yeh kya dikhaega , yeh dikahge first instance of a 
// but agr aap chahte h ki yeh dusre waale ka dikahi toh aap isko ek index pass kr skte h ki iss index se baad dekha shuru kre p m like thi s

console.log(p.indexOf('a'));  // it gives value 4 
console.log(p.indexOf('a' , 5 ) );  // maine yha bola ki 5 index ke baad se a ko dhundhan start kr toh isne phir 12 diya mereko , yeh optional hota h isme 

// if you want to write "my name is uday in string ";
let ss = '"my name is uday in string "';
console.log(ss);
// it run properly 

// if you want to write same sentence in "double quote " , then 
//hmko \ ka istemaal krna padega 
    let as = "\"my name is uday in string \"";
    console.log(as);
    // works properly 

var bb = `
hi my name  

is paro 
`
console.log(bb);

// thes are called string little dont worry abut "" or' or \n , aap jaiso bhi likhoge iske ander waise hi print ho jayega


let name= "uday ";
let surname = "mathur";

let fullname = ` ${name} mathur`;
console.log(fullname);
// ${name of the key} se hm dusre string ko iske ander daal skte h 
// $ working with only the `` this not ""