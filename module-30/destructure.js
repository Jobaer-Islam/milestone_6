const sahaba = {
    name: "Mus'ab",
    age: 10,
    compaions: ["Rasulullah (PBUH)", "Umar", "Abu Bakar"],
    status: "Muslim's Leader"

}

// const sahabaStatus = sahaba.status;
// const sahabaName = sahaba.name;
// const sahabaAge = sahaba.age;
// const sahabaCompanios = sahaba.compaions;

// console.log(sahabaName, sahabaAge, sahabaCompanios, sahabaStatus);

// destructure of object

const { name, age, compaions, status } = sahaba;
console.log(status);

// destructure of Array

const nabi = ["Adam", "Ibrahim", { Relion: "Islam" }, "Nuh", "Musa", "Isa", "Muhammad PBUH"];

const [a, b, c, d, e, f, g] = nabi;
console.log(g)
