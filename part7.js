 const student = {
    name: "Chetan",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) /3;
        console.log(avg)
    }
 }


 console.log("hello");
 console.log(a);
 console.log("hello1");
 console.log("hello2");
 console.log("hello3");

console.log("hello");
try {
    console.log(a);
} catch{
    console.log("You not defined a ")
}
console.log("hello1");
console.log("hello2");
console.log("hello3");
console.log("hello4");

const sum = (a,b) => {
    console.log(a+b);
}

const cube = (n) => {
    return n*n*n;
}

const mul = (a,b) => (a*b);

console.log("Hi there!");
setTimeout(() => {
    console.log("RNS FGC");
},4000)
console.log("Welcome to our institution");

let name = setInterval(() => {
    console.log("Chetan naik")
}, 2000);

clearInterval(name);

const square = (n) => {
    return n*n;
} 

let id = setInterval(() => {
    console.log("Hello world")
}, 2000);

setTimeout(() => {
    clearInterval(id);
},10000);

let arr = [2, 5, 6, 7, 8];

const arrayAverage = (arr) =>{
    let sum = 0;
    for(item of arr){
        sum += item;
    }
    return sum / arr.length
}

const isEven = (n) => {
     if(n % 2 === 0){
        return "Even";
     }
     else{
        return "Odd";
     }
};

const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
}