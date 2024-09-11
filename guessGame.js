const max = prompt("enter the max number");

let random = Math.floor((Math.random() * max)) + 1;
console.log(random)

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == "random"){
        console.log("You are right! Congrats!! random number was", random);
        break;
    }
    else{
       guess = prompt("Your guess was wrong please try again");
    }
}