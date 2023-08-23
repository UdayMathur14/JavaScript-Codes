
//1
// console.log(this)



//2 this inside a function


// function fn(){
//        console.log(this)
// }

// fn()


// this inside an object

// let obj = {
//        name : 'Adam',
//        age : 20,

//        fn : function(){
//               console.log(this)
//        }
// }

// obj.fn()



//4 function inside a function


let obj2 = {
       name : 'Adam',
       age : 20,

       fn2 : function(){
              function gn(){
                     console.log(this)
              }
              gn()
       }
}

obj2.fn2()


// this keyword = it is an pointer to an object depend on the calling in js . Depened on different casses , see in the image also for revision .

// window object means in browser , js has inbuild methods so all the methods of js is called as the window class . 

//global object - same as window but provided by the node js. tech 

// for js to be seen in strict mode we have to write 'use strict' in top of the js file 