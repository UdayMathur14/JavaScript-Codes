// classes in javascript 
// syntactical sugar with a programming language to make things easier to read or to express .

// a constructor is called a syntaic sugar , it can be removed from the language 

class Persons {
    constructor(name , age)
    {
        this.name = name ;
        this.age = age ; 
    }
    // yeh ek function h aur jha p function keyword nhi dalta
    // agr yeh p1 ke through call hoga toh yeh this function jo is adult m likha h wo p1 ko point krega 
    isadult(){
        return this.age>=18
    }
    
}
console.log(Persons);
let p1 = new Persons('john doe' , 32);
console.log(p1.isadult());
// gives true 

let p2 = new Persons('uday' , 12);
console.log(p2.isadult());
// gives false 
// console.log(p);
// so p2 ek object h jisska name h johndoe and uski age ha 32 

console.log(p1.isadult == p2.isadult);
// gives true , means in dono ki defination ek hi jagah h and iska reference same ha 


// it is a function jiska naam h persons 
// note that there is no datatype called class 
// when we make classes they are implement as function 
console.log(typeof Persons);