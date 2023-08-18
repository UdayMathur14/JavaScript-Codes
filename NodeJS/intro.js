// MERN STACK = USES 4 TECHNOLOGY:
// 1 - mongo db = no sql database
// 2 = expres 
// 3 = react 
// 4 - node.js = it is a tool which helps to run javascript in the machine . 
// yeh sb kuch bni h = javascript ke upar bni h yeh sb 

// phele javascript bs browser m run krne ke liye bni thi mtb sirf chrome ya firefox m .
// javascript = the language 

// static page = with the help of html and css , static means aise hi ha kuch hoga nhi usme like button p click kro toh kuch hoga yeh wo bs normal aise hi ha 

// HTML = it is the skeleton of the website (hypertext markup language )
// used for display purpose. It is a makup language not a programming language



// what is javascript engine = kisi bhi programming language ko chalane ke liye hme koi tool chahiye , javascript sbse phele browsers ke liye bni thi , yeh hmare machine m run nhi kr skti starting m , toh wo sirf browers m hi chlti thi kaise kyuki browesrs m java script engines intergrated rhete h . 

// eg = chrome ke ander javascript ka engine h v8 engine 
// mozilla ke ander = spider monkey 
// microsoft edge = chakra h engine , bhoot engine h aur bhhot saare egine h alag alag platform m , engine p run java script run karoge toh ouput aa jayega engine ki madad se .


// phir ek bnda aaya rayn dayal usne bola ki jb javascript itni powerful language h toh usko broweser p restrict krke kyu rakhe , hme toh isko machino ke liye banana chahiye then he make node js inhone v8 engine ki help leke ek runtime environment banaya , iska mtb yeh h ki jo aapke local machine p v8 engine ko integrate kr deta h , toh v8 engine + runtime environment banaya rahl ne aur in dono chizo ko mila ke usne iska naam diya node js .

// so now node js help me to run java script code on machine 

// toh ab java script servers ke liye bhi kaam aa gyi kaise kyuki ab yeh local machine o bhi chl skti h toh phir backend , frontent and integration , alag alag librairers , toh bhoot saaari oppournity khul gyi .


// so node js ko sekne ke liye sbse phele hme node ke pakages ko jaana padega aur smjhna padega 






let obj = {
    name : "Adam",
    age : 23,
    Gender : 'M'
}


console.log(obj)
for(let key in obj){
    console.log(key + ' ' + obj[key])
}