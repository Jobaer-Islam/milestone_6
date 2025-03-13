const countryName = "Bangladesh";

let age = 10;

// function without default parameters
function sum(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
sum(10, 10); //output: 20
sum(15) //output: NaN


// function with the default parameters
function sum(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    console.log(result);
}
sum(10, 10); //output: 20
sum(10) //output: NaN