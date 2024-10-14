function personMaker(name, age){
   let person = {
       name: name,
       age: age,
       talk() {
          console.log(`Hi, myname is ${this.name}`)
       }
   }
   return person;
}

let per = personMaker("Chetan", 19);

// Constructor-> does not retun anything

function Person(name, age){
     this.name = name;
     this.age = age;
 };

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`)
};


// Using classes 

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

let p1 = new Person("Chetan",19);
let p2 = new Person("Chandan",17);


//Inheritence

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    talk() {
       console.log(`Hello, my name is ${this.name}`)
    }
}

class student extends Person {
    constructor(name,age,marks){
        super(name,age);
        marks = this.marks;
    }
}


class teacher extends Person{
    constructor(name,age,subject){
        super(name,age)
        subject = this.subject;
    }
}