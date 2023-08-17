// answer in the context of c++ /java

// what does the keyword this mean and what does it refer to ?

// ans = point the current instance of the class , you can write only this when you create a class , inside it you can use it 
// you cant use it outside the class , static method m nhi likh skte 

// object making , : se value dete h key ko 
let a = {
    c:10 , 
    d: 9, 
    // here d and c are key and 10 and 8 are the values of that key
    e : true, 
    f :function (){
        console.log(this);
        // yha p this dobara se a ko refer kr rha h tbhi yeh pura print ho rha h jb hm a.f()ko call kr rhe h
    },
};

// if i call obj.f then we get the whole object 
a.f();
