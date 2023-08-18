// fs module = it is helpful for file handling 
// like reading , write , update , delete 

const fs = require('fs')
const path = require('path')


//1 . File ko read Kaise Karey (Reading A file)

let content = fs.readFileSync('f1.txt');

//console.log(content) // Gives content in buffer means binary format

console.log('Data of File => ' + content);
// my name is uday mathur is present in try.txt ,  m likha hua h 
// direct isko content doge yeh buffer m de dega output , so hm isko string ke saath + operator ka use krke likheneg

// // agr aapko string ke saath concat means + operator nhi lagana h toh phir aapko yeh krna padega , bina string ke saath conct kre bhi output aa rha h aise 

// console.log(content.toString())


// // 2 . writing into a file
// // writeFileSync

// // 2 chize deni h ki konsi file m write krna h , aur kya write likhan h 

// fs.writeFileSync('try.txt' , "hello uday sheety")
// fs.writeFileSync('try.txt' , " apna kaam kr na lawde")

// let c = fs.readFileSync("try.txt")
// console.log(c.toString())

// // toh hmne dekha ki uss file m jaake yeh save kr dega 

// fs.writeFileSync("f3.txt", "This data will be written to f3");
// but aisi toh koi file banai nhi maine f3.txt naam se toh phir kya hoga , toh yeh method kya krta h ki yeh ek nyi file bna dega and then usme yeh data store kra dega
// // if the file name that is passed doesn't not exists a new file will be created with its
// //name and the data will be written on that file 



//3. append(Update) a file

// // appnedFileSync method adds new data to a previosuly written file

// fs.appendFileSync('f3.txt' , ' This is upadted data ')

// f3 m jaake dekhunga toh yeh data usme add ho gya hoga 



//4. Delete

//unlinkSync

// fs.unlinkSync('try.txt')
// isse yeh try txt ko delete kr denge 
// console.log('File deleted')






// yeh fs module sirf files ko hi handle nhi krta balki folders and directories ko bhi krta h ,  unke ander data daalne m aur bhi bhoot kuch krne m kaam krta h .

/// Directories of folders

// agr mujhe ek nya folder banana h toh m bna skta hu new foder m jaake create kr du but yeh kaam m fs module se krna chahta hu 

//creation of a directory

//mkdirSync = method = make directory 

// fs.mkdirSync('myDirectory2')  // kis naam se deirectory chahiye wo likh do 
// // jb maine yeh banaya toh ek nyi directory bn gyi mydirectory 2 ke naam se 
// console.log('Directory Created')

// agr isko dobara chalau toh kya run krega 
// ans h nhi kyuki kya ek hi dirctory m 2 same naam se folder bn skte h toh nhi bn skte isliye yeh dobara run nhi krega , error de dega ki file already exits

// different naam doge toh bn jayega 

// delete a Directory
// remove directoray 


// fs.rmdirSync('myDirectory2')
// console.log('myDirectory Deleted')
// isse delete ho jayegi directroy 




// exists Sync
// To check whether a directory or file exists or not 
// existsSync

// this returns true or false based on whether the passed directory or file  exists or not

// let doesExist = fs.existsSync('f3.txt')
// console.log(doesExist)




// readdirSync - yeh hme folder ke ander waali saari files de dega array ke ander

// iske ander my directory folder ka naam likha tb yeh chl gya but agr m aur koi folder kholunga jo iske bhar h toh uski files nhi de payegi yeh error dikha dega
// iss folder ke scope ke bhr access krna chayenge toh error aa jayega 

// let folderContent = fs.readdirSync('D:\\Batches\\FJP-8\\2_JavaScript')
// console.log(folderContent)

// toh hme phir uska path copy krna padega and usko paste krna padega tb chl jayega yeh 
// yha p / ek baar h wha p ek aur lga do tb chega yeh , yeh node js ka rule type h 







// Copying a file from one dir to another dir
// ek file ko hme copy krna h ek folder se dusre folder m 

// let srcFilePath = 'D:\\Batches\\FJP-8\\3_NodeJS\\nodePackages\\myDirectory2\\f1.txt'

// let destinationFolderPath = 'D:\\Batches\\FJP-8\\2_JavaScript\\'


// let toBeCopiedFileBaseName = path.basename(srcFilePath)

// console.log(toBeCopiedFileBaseName) // f1.txt

// let destPathComplete = path.join(destinationFolderPath , toBeCopiedFileBaseName)
// console.log(destPathComplete)


// fs.copyFileSync(srcFilePath , destPathComplete )
// console.log('File Copied')

// fs.unlinkSync(srcFilePath)


