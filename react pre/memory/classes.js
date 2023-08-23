// let car ={
//   name:'bmw'
// }
// let car1 ={
//   name:'ford'
// }
// let car2 ={
//   name:'ferrari'
// }

// kitni baar aise objects banauga toh fayda nhi h tbhi hm class ka use krte h 


class Person {
  constructor(name, age, gender) {
    (this.Name = name), (this.Age = age), (this.Gender = gender);
  }
}

class Teacher extends Person {
  constructor(name, age, classStrength) {
    super(name, age);
    //yeh main person waale constructor p ja rha h aur usme hm bs name , age bhej rhe h 
    this.ClassStrength = classStrength;
  }
}

class Student extends Person {
  constructor(name, age, cgpa) {
    super(name, age);
    this.Cgpa = cgpa;
  }
}

let Person1 = new Person("Adam", 20, "Male");

let Teacher1 = new Teacher("Steve", 30, 50);

let Student1 = new Student("Mark", 18, 7.5);

console.log(Person1);
console.log(Teacher1);
console.log(Student1);

// name ko aage likho ki piche but name ke ander wohi jayrga jo bhejenge