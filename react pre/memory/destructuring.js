let arr = ['hi' , 'I' , 'am' , 'Mrinal']

let elem = arr[1]


//Destructuring
// upar waale elements store ho jayenge in variables m 
let [a ,b , c, d , e='bye'] = arr

// let [,b , ,  ,] = arr 
// agr mujhe khaali I hi lena ho arr k ander se , toh aise likh skte h b = I

console.log(a , b ,c ,d ,e)
// a = hi and so on , e = undefined if not give value


//Objects Destructuring-


let obj ={
       name : 'Adam',
       state : 'New York',
       phone : 12345676
}


let {state , name :firstName , phone} = obj
// name :firstName means ab name mujhe firstname ke naam se mil jaaye taaki usse aage pass krdu, alag se name rakh liya bs
console.log(firstName , state , phone)



// 2
let obj2 = {
       name: "Adam",
       address: {
         country: "USA",
         state: {
           stateName: "New York",
           pincode: 123456,
         },
       },
     };

let {name} = obj2
// console.log(name);
// let {name}: This syntax is used to declare a variable named name and extract the value of the name property from the obj2 object.
// = obj2: The value of the name property is taken from the obj2 object and assigned to the name variable.


let {address : {country :cd}} = obj2


let {address :{state : {stateName}}} = obj2
console.log(cd)

console.log(stateName)





