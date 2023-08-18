// what is module meaning = command ek module h , 
// suppose kro ki aapke pass ek bhoot bdi book h , uska ek part or chapter hota h jo ki h module . 



// cp = child process 
//child process is a node module used to create sub proccess within a script
// you can perform different tasks with your script


// module meaning ki khi p iska code likha hua h lekin hmko uss code ko lana padega , hme module ka access chahiye 

const cp = require('child_process')

// console.log('Open Calculator')

// cp.execSync('calc')
// aap calc command prompt p likhoge tb bhi calculator khul jayega 
// yeh execsyn method kya karega same jaise cmd m likha tha toh calcultor khula tha toh same yeh calculator ko call krega and calculator khul jayega .


// toh hmne bascially kya kra hmari node js ki script se ek bhaar ka subprocess hmne access kra aur usko chla diya , toh aap child module se yeh saare kaam kr skte ho . 


// but agr mereko koi browser chalana h java script se toh 

// aapko sbse phele browser open krna h 
// google karoge toh yeh saari commang mil jayegi 
console.log("start chrome")
//cp.execSync('start chrome')

// but agr aapko kisi website p jaan h toh kya kroge ?
// toh simple process h start chrome ke ander jao and start chrome ke baad direct link paste krdo 

// cp.execSync('start chrome https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/')
// toh aisa aap link pasate krke direct website hi opne ho jayegi 


// so child process aapko enable kr deta h ki aap commands dedo aur wo aapke uss comand ko perform krke issi script se   external chizo ko excess krke chla deta h 


// ek aur cheez h ki aap child process se dusri file ka code bhi run kr skte ho 
// dekhiya kaise 


console.log("output  " + cp.execSync('node 18_strings.js'))
// aise krke aap dusri fil ko bhi run kr skte ho 

// buffer basically means give output in binary 
