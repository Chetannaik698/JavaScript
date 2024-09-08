let num = 40

if(num % 10 === 0){
    console.log("Good");
}
else{
    console.log("Bad");
}

let userName = prompt("Enter your name");
let age = prompt("Enter your age");

let concate = `${userName} is ${age} years old`

alert(concate);

let quarter = 1;

switch(quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 1:
        console.log("October November, December");
        break;
}

let str = "PineApples"

if ((str[0] === "A" || str[0] === "a") && (str.length > 5)) {
    console.log("Golden String")
}
else {
    console.log("Not a golden string");
}

let a = 40;
let b = 46;
let c = 20;

if(a > b && a > c){
    console.log(`${a} is greater`);
}
else if(b > a && b > c){
    console.log(`${b} is greater`);
}
else{
    console.log(`${c} is greater`);
}

let num1 = 32;
let num2 = 1452;

if((num1%10) && (num2%10)){
     console.log("numbers have the same last digit which is:",num1%10);
}
else{
    console.log("numbers do not have the same last digit");
}