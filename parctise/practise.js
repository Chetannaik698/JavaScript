let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

let myStr = prompt("Enter any string which should be in lower case");
console.log(myStr.toUpperCase());

let str1 = "Chetan";
let str2 = "Naik";

Newstr = str1.concat(" " + str2);
console.log(Newstr);

let name = "Chetan Naik";
let replace = name.replace("Chetan", "Charan");
console.log(replace);

let AvailableUsername = ["@chetan", "@chetannaik", "@naikchetan", "@chetann"];

// create a program that creates a username it will warn whether that already exisist or not

let userName = prompt("Create an username");

let availabele = true

for (let i = 0; i <= AvailableUsername.length; i++) {
    if (userName === AvailableUsername[i]) {
        let res = alert("This name is already exisist pleaser enter another name");
        availabele = false;
        break;
    }
}
if (availabele) {
    console.log("Created Successfully!")
    console.log(`Your username is ${userName}`);
}

let max= prompt("Enter max length to generate random numbers");

console.log(Math.floor(Math.random()*max) + 1);