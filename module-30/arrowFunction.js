// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(10, 20));


// const sum = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(20, 40))


// const add = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(add(30, 40)) 

const test = () => console.log("hello empty");

const square = x => x * x;

const sum = (num1, num2) => num1 + num2;

document.getElementById("title").addEventListener("click",
    function () {
        console.log("hello");

    });
document.getElementById("title").addEventListener("click",
    () => {
        console.log("hello");

    });