let a = [1, 2, "false" , [2,3] , "good"];
// this array is called heterogenous array 

console.log(typeof a[1]);
// yeh type bta dega e konse index p kis type ka data pda hua h 

console.log(a.slice(2 ));
// inse 2 se lekar end tk saare array ko print kra diya 

console.log(a.slice(2 , 4));
// destructive h means original array ke ander change nhi leke ayega normal console p print kr dega bs , mtb h ki ussi time apne kaam krega jaise hi wha se hta normal array apna wapas se bn jayega woh 
// 2 is the starting position and 6 is the last postion means 2 index se start kro and 4index se phele hi ruk jaana , 4 index p nhi jaana ha 

console.log(a.concat("si"));
// yeh add kr dega last index ke baad si ko but original m yeh change nhi hoga yeh bs console ke liye hi ha , orginal ko jb print kregeng toh wo normal aa jayega 

console.log(a);


