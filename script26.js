console.log(1=='1');
// it gives true 

console.log(1==='1');
// this gives me false 

// why the first one gives true and the other one is false 
// some point we get it that may be == and === does not have the same meaning itself , data type can be converted so that they become same 

// == check whether the data on the both sides are equal , or it check that they can be converted to any type so they they become equal 

// but === this check whether the data and the datatype of both the sides are equal if equal then it print true otherwise false 

// if we compare the string and the no then the string is atomaticaally converts into the number and then they check 
console.log(0=='');
// it gives true why because whenever i pass a empty string it converts it into 0 and then 0 is equal to 0 so my aswer is true 
console.log('false'==false);
// gives false why ? dono side ko no m convert kre ki koshish krenege fasle ko kra toh aa gya 0 , but jaise hi string waaale ko kra toh usne dikhanay ki NAN means not a number , it means aisi koi string jo ki number m convert nhi ho skti usse khete h nan , jis cheez ko numerical no m define nhi kr skte , 0 is not equal to nan

console.log(''==false);
// gives true because false means 0 and empty menas also 0 

// \n and \t bhi 0 hota h beacuse they are space , space bhi zero hi ayega 

console.log('\n'=='\t');
// yeh false de rha h but kyu dono toh 0 hi ha ,  beacuse  agr dono ka datatype same h toh wo typecast nhi krega means usko change krke nhi dekhaga number m , and typecast krne ki zaroorat nhi pdi toh yeh dono toh phir string hi ha nah and dono string different h toh false hi hoga 

console.log([1,2] == [1,2]);
// yeh false de rha h kyuki datatype toh same h but value alag h are bhai value bhi toh smae h , abe ghoju tu bhul gya ki arrays give the address not value , so yeh dono array toh bne hua h but inke address alag alag h toh isne false de diya h 

// agr do non preemetive m true h jaaye it means unka reference same ha 
// means they are the same object in memory 