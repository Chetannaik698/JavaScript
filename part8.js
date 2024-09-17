let arr = [1,4,5,6,7];

let print = function(ele) {
    console.log(ele)
}

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el*2;
});

let students = [
    {
        name: "Karan",
        marks: 95,
    },
    {
        name: "Vijay",
        marks: 96,
    },
    {
        name: "Vinod",
        marks: 95,
    },
];

let gpa = students.map((el) => {
    return el.marks / 10;
});


let nums = [2, 4, 10, 67, 45, 23, 56, 76, 34, 54, 21, 43, 45, 56];

let even = nums.filter((el) => {
    return el % 2 == 0;
})