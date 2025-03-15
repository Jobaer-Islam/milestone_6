// const numbers = [1, 2, 3, 4, 5];
// let temp = [];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const sum = element + 1;
//     temp.push(sum);

// }
// console.log(temp)

// // same task via map()

// const newArray = numbers.map(number => number + 3);
// console.log(newArray)
// const newArray2 = numbers.map(number => {
//     return number + 2;
// });

// console.log(newArray2)


// const numbers = [1, 2, 3, 4, 5];
// const squareArray = numbers.map(element => element * element);
// console.log(squareArray)

const friends = ["bali", "sali", "mali"];

const newFriends = friends.map((element, index) => {
    console.log(index)
    console.log(element)

})