// const age = 24;
// localStorage.setItem("myage",age);

// console.log(localStorage.getItem("myage"));

const handleaddToStorage = () =>{
    // const name = "Jobaer Islam";
    // localStorage.setItem(name,21);

    const person = {
        name: "hero alom",
        age: "35",
        friends:["rohim"]
    }
    const convertedToString = JSON.stringify(person);

    localStorage.setItem("alom", convertedToString)

}

const data = localStorage.getItem("alom");
const convertedToObject = JSON.parse(data);
console.log(convertedToObject)