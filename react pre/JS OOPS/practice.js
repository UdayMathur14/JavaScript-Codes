//1

// const call = {
//        caller: "mom", 
//        says: function() {
//          console.log(`Hey, ${this.caller} just called.`);
//        }
//      };
     
// call.says();

//2
// function says(){
//        console.log(`Hey, ${this.caller} just called.`);
// }

// says()


//3

// const call = {
//        caller: "mom", 
//        says: function() {
//          console.log(`Hey, ${this.caller} just called.`);
//        }
//      };
     
//      let newCall = call.says;
//      newCall();

// Answer
// jb newcall = call.says likha tb kuch aisa hua 
// function newcall(){
    //console.log(`Hey, ${this.caller} just called.`);
    //newcall ko object ke baare m pta hi nhi h tbhi yeh undefined de rha h , code pura copy paste hua h print nhi hua ki hey -- , pura console.log ek nya bnd gya newcall ke ander and ab newcall ko nhi pta h ki this konse object ko refer kr rha h lekin ab wo newcall ko refer kr rha h and new call ke ander koi caller nhi h tbhi undefined dega 
//}


// 4
    //  function anotherCaller() {
    //    console.log(`${this.caller} called, too!`);
    //  }
     
    //  const call = {
    //    caller: "mom", 
    //    anotherCaller: anotherCaller,
    // //    iss another funct ko upar wala mila means ab yeh iske ander undefined ho gya 
    //    says: function() {
    //      console.log(`Hey, ${this.caller} just called.`);
    //    }
    //  };
     
    //  let newCall = call.anotherCaller;
    // //  phir isko call kiya kyuki uske ander undefined tha toh yh p bhi undefined aa gya
     
    //  newCall();

// nhi smjh aaya toh thoda dimaag lga upar waale ko smjh ke 

