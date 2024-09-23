// let btn = document.querySelector("button");
// let inp = document.querySelector('input');

// btn.addEventListener('click', function() {
//      let heading = document.querySelector('h3');
//      let randomColor = getRandomColor();
//      heading.innerText = randomColor;

//      let div = document.querySelector('div');
//      div.style.background = randomColor;
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`
//     return color;
// }

// inp.addEventListener("keypress", function(ele) {
//     console.log("Code: ",ele.code);
//     console.log("Key: ",ele.key);
//     console.log("Key was pressed");
// })

// let form = document.querySelector('form');

// form.addEventListener('submit', function(ele) {
//     ele.preventDefault();
    
//     let inp = document.querySelector('input')
//     console.log(`Username = ${inp.value}`);
// })

let inp = document.querySelector("#text")

inp.addEventListener('input', function() {
    let p = document.querySelector("p");
    p.innerText = this.value;
})