function hello() {
    console.log("hello");
}

function printName() {
    console.log("Chetan Naik");
}

printName();

function print1to5() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

print1to5();

function isAdult() {
    let age = prompt("Enter your age");
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
}

function printPoem() {
    console.log("Twinkle twinkle little star");
    console.log("How i wonder whats so high");
}

printPoem();

function roleDice() {
    let max = 6;
    console.log(Math.floor(Math.random() * max) + 1);
}

function printInfo(name, age) {
    console.log(`${name} is ${age} years old`);
}
printInfo("Chetan Naik", 19);

function calAvg(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    console.log(avg);
}
calAvg(22, 34, 54);

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} =`, num * i);
    }
}
printTable(12)

function sum(a, b) {
    return a + b;
}
 let res = sum(sum(1,2),3);
 console.log(res);

function printSum(n){
    let sum = 0;
     for(let i=1; i<=n; i++){
        sum = sum + i;
     }
     return sum;
}

let str = ["hi","hello","bye","!"];

function strConcate(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result = result + " " + str[i];
    }
    return result;
}

let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();

let newSum = function(a,b){
      return a+b;
}

function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
function hello() {
    console.log("hello");
}
multipleGreet(hello,8);

const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
};