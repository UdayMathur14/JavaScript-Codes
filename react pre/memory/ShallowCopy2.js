let firstPerson = {
  name: "Adam",
  age: 23,
  // nested objects
  address: {
    country: "India",
    city: {
      cityName: "Delhi",
      pincode: 10085,
    },
  },

  test: {
    value1: 2,
  },
};

//hme aisa krna h ki first person m change ho toh second  m na ho but shallow copy usko rok nhi pa rha .
let secondPerson = { ...firstPerson }; // shallow copy - ek level tk hi rok pata h 

firstPerson.address.country = "USA"; //isko bolte h shallow copy 
// shallow copy meaning = not very deep . spread opertaor upar upar ko hi smjh pata h like name , age ko smjh lega but nested like address ko bacha nhi paaya 

// yeh hmne change kra but yeh toh change ho gya saara , jbki hmne toh spread operation kr rakha h ki wo change na ho test1 k ander


// let secondPerson = { ...firstPerson , address{firstPerson,address}};//toh aise likh skte h 
// firstPerson.address.country = "USA";
// city ko spread nhi kra h address ko kra h khaali 

//agr aap chahate ho ki shallow copy address ko bhi na chnage kr paaye toh  
// ab chla ke dekhoge toh second person m change nhi hua hoga address bhi 

// for city also 
// let secondPerson = { ...firstPerson , address:{firstPerson.address, city :{...firstPerson.address.city}}}

// but kaafi bekaar h aise krna 



// firstPerson.address.city.cityName='Mumbai'

// let thirdPerson = JSON.parse(JSON.stringify(firstPerson)); // deep copy
// yeh isko json m convert kr dega and stringify ka mtb h string m , toh yeh saara nested class also ko alg mmemory location m daal diya . 

// parse krne se wo wapas object ki from m aa jayega 




// firstPerson.address.city.pincode = "56789";
// agr ab aap kuch bhi chnage karoge toh koi dikhat nhi third person m change nhi hoga ab sirf 1st waal m jisme change kra h usme hi hoga 

console.log(firstPerson);
console.log(secondPerson);
// console.log(thirdPerson);
