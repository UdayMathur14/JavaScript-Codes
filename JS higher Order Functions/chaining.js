let arr = [
       {name: "A", age: 14, gender: "M"}, 
       {name: "B", age: 34, gender: "M"}, 
       {name: "C", age: 24, gender: "F"}, 
       {name: "D", age: 44, gender: "F"}, 
       {name: "E", age: 44, gender: "M"}, 
       {name: "I", age: 28, gender: "F"}, 
       {name: "G", age: 36, gender: "M"}, 
       {name: "H", age: 47, gender: "F"}
   ]

// Age of all the ladies

//Try 1 
// let as = arr.filter(function(n){
//        if(n.gender=='F'){
//               return n.age;      
//        }
//        else{
//               return false;
//        }
// }) 

// let ad = as.map(function(n){
//        return n.age
// })

// console.log(ad)


// Try 2 

let as = arr.filter(function(n){
       if(n.gender=='F'){
              return n.age;      
       }
       else{
              return false;
       }
}).map(function(n){
       return n.age
})

 console.log(as)





 