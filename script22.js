// javascript object notation 
// one of way creating javascript JSON = javascript object notation 
// allows to create objects without defining the class 
// if you make a game and there is a bird and the bird has the certain properties in it 
// standing at some coordinates x , y 
// it has certain width and hieght 
// it has a certain colour 
// it is walking of flying 

// so lets start see how we cna create it 

// var bird = {};
// it is empty object , now bird is a empty object 
var bird = {
    x : 100 ,
    y :20 , 
    color: "blue",
    eggs :[1,2,3,4],

    //    fly is the variable , we dont see this in output unless we call this particular function 
    fly:function(){
        console.log("bird is fly " , this.x , this.y);
    }
};

// if you write bird in console of the inspect page it shows all the property it has 

// if you want to access the certain property of the bird then
console.log(bird.x);

// you can also updte this 
bird.x = 120 ; 

console.log(bird.eggs);
// to see the array of the bird.eggs 

//alternate methid to see the array of the birds which is the eggs and we go till it lenght 
for(let i = 0 ; i<bird.eggs.length ; i++){
    console.log(bird.eggs[i]);
}

// another method 
// this function will get automaticaly a index and its value 
bird.eggs.forEach(function(idx , val){
    console.log(idx, val);
});

// it will print the index and val but yeh bs value hi print kr rha h index nhi pta nhi kyu 

bird.fly();
// yeh bhi value nhi preint kr rhi bs bird is flyhi likh rhi ha 




