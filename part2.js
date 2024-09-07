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