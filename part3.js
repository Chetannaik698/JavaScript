trim() => method
let msg = "    Hello    ";

let newMsg = msg.trim()
console.log(newMsg);

let Password = prompt("Enter your Password");
let NewPassword = Password.trim();
console.log(NewPassword);


let Myname = "Chetan"
console.log(Myname.toLowerCase());
console.log(Myname.toUpperCase());

let msg = "ILoveCoding"
console.log(msg.indexOf("L"));
console.log(msg.indexOf("C"));
console.log(msg.indexOf("n"));
console.log(msg.indexOf("d"));
console.log(msg.indexOf("i"));

let messag = "  hello    "
console.log(messag);

let newMessag = messag.toUpperCase().trim();
console.log(newMessag);

let msg = "ChetanNaik"
console.log(msg.slice(6, msg.length));
console.log(msg.slice(-4));


let msg = "ILoveCoding";
console.log(msg.replace("Love","do"));
console.log(msg.repeat(3));

let msg = "help!"
console.log(msg.trim().toUpperCase());

let students = ["Chetan", "Arun", "Vinay", "Abhay", "Akshay", "Varun"];

let info = ["Chetan", 5, 9.4];

let fruits = ["mango", "banana", "litchi", "graphs"];
console.log(fruits);

console.log(fruits.push("watermeleon"));
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.unshift("watermeleon"));
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

let months = ["january", "july", "march", "august"];
console.log(months);

console.log(months.shift());
console.log(months.shift());

console.log(months.unshift("june"));
console.log(months.unshift("july"));
console.log(months);