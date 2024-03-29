// yeh wo function hote h jinko hm dusre function ke saath operate kra skte h , yeh dusre function ka as a callback leta h and then apna operation shuru krta h .


// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.

// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.

// Map

//Map is itself is a function.
//map takes a callback function as an argument
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that is inside the callback function
//map returns a new array

let arr = [2, 5, 9, 10, 11,-7];

let squaredArr = arr.map(function (n) {
  if(n<0){
    return -1*n;
  }
  return n * n;
});

console.log(squaredArr);

let nameArr = ["Aniket Raj", "Nayan Jha", "Prashant Pandey"];

let modifiedArr = nameArr.map(function(n){
   let partsOfName = n.split(' ')
   return partsOfName
})



console.log(modifiedArr)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let transactionsInDollar = transactions.map(function (amt) {
  return (amt / inrtToUsd).toFixed(2);
});

console.log(transactionsInDollar);

// use map method and separted every element according to firstName and lastName
