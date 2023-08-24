const a = 2 ; 

// a = 3 ; 
// console.log(a) ; error dega ki redecliration nhi hota const ka 

const arr = ['uday' , 'anmol'];
arr[1] = 'meenu';

console.log(arr);

// ab yeh chl gya jbhi const ko toh redeclare nhi kr skte toh array m kyu chl rha h beacuse of pointer in heap . 

let name = 'hero';
let d = name ; 
name = 'villian';

console.log(d); // this gives me hero but i change the name from hero to villian but aisa hi hota h kyuki stack m bn jaata h alag alag fields and assign ho jaati h properties . 

// const family = {
//        name:'uday'
// };

// let f = family;

// family.name = 'sheety';
// console.log(f);

// iske ander sheety print ho rha h aisa kyu , kyuki heap ke ander pointer p jaae store hua yeh object and jb dusre ko assign kra toh wo bhi uss pointer p hi gya na ki nya banaya stack ki trah , photo dekh le 

// but agr m chchta ki ki aisa na ho ki baad m agr maine change ki toh purane waale m change na ho toh hm use krte h spread operator . 



const family = {
       name:'uday'
};

let f = {...family};
// spread operator 
family.name = 'sheety';
console.log(f);

// copy toh ab bhi bnegi f ke ander but jb ab m chage krunga name toh f ke ander change nhi hoga , f ke ander abhi bhi name uday hi dikahyega jbhi maine change kr di h wo bhi baad m .













//normal function 
function greet(){
       console.log('Hello')
}


greet()


// arrow function , greeting is the argument , bs arrow ka use kiya h 
let wish =(greeting)=>{
       console.log(greeting)
}


wish('Good Evening')


