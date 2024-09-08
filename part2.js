console.log("Chetan Naik");

let pencilPrice = 10;
let penPrice = 10;

console.log("The total price is :", pencilPrice + penPrice, "Rupees.");

// The same output can be dispplayed through template literals

console.log(`The price of the pencil is: ${pencilPrice + penPrice} Rupees.`)

let age = 18;
console.log(age > 18);

console.log(age == 18)

console.log("Before my if statement");

let age2 = 10;
if(age2 >= 18){
    console.log("You can vote");
}
if(age2 < 18){
    console.log("You cannot vote");
}
console.log("Afterb my if statement");

let myName = "Chetan";

if(myName == "Chetan"){
    console.log(`Welcome ${myName}`);
}

let color = "green";

if(color == "red"){
    console.log("You should stop")
}

if(color == "yellow"){
    console.log("You should Slow down")
}

if(color == "green"){
    console.log("You can go");
}

let age = 12;

if(age >= 18){
    console.log("You can vote")
}
else if(age < 18){
    console.log("You cannot vote");
}

let marks = 60;
if(marks >= 90){
    console.log("A+")
}
else if(marks >= 80){
    console.log("A")
}
else if(marks >= 70){
    console.log("B+")
}
else if(marks >= 60){
    console.log("B");
}

if(age >= 18){
    console.log("You can Vote");
}
else{
    console.log("You cannot Vote");
}

let popconSize = "M"

if(popconSize === "XL"){
    console.log("The price is: Rs.250")
}
else if(popconSize === "L"){
    console.log("The price is: 200")
}
else if(popconSize === "M"){
    console.log("The price is: 100")
}
else {
    console.log("The price is: 50")
}

let StudentMarks = 93;

if(StudentMarks >= 33){
    console.log("Pass");
       if(StudentMarks >= 80){
          console.log("Outstanding")
       }
       else{
          console.log("A")
       }
}
else {
    console.log("Better luck Nexttime")
}

let goodString = "aja"

if(goodString[0] === "a" && goodString.length > 3){
    console.log(`The string ${goodString} is good string`)
}
else{
    console.log(`The string ${goodString} is bad string`)
}

let num = 12;
if((num%3 === 0) && ((num+1 === 15) || (num-1 === 11))){
    console.log("Safe");
}
else{
    console.log("not Safe");
}

let color = "yellow"

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow Down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken light");
}

let daysCount = 5;

switch(daysCount){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Please enter valid day");
}

let name = prompt("Enter your name");
console.log(name)