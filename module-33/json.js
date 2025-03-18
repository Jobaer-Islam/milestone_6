const person = {
    name: "Ubaida",
    age: 10,
    friends: ["Usman", "Usama"],
    status: true
}

const newPerson = JSON.stringify(person);

console.log(newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);


