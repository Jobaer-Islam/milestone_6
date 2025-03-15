const person = {
    name: "hena",
    age: 30,

    // some exeptions
    1: "100",
    true: "fjdj",
    friends: ["korim", "rohim"],
    detailes: {
        job: "yes",
        isMarried: true,
        status: "not found",
        father: {
            name: "fhdhds"

        }
    }
}

//  optional Chaining (?.)
console.log(person.detailes?.mother?.name);

console.log(person["name"])
console.log(person["detailes"]["job"])

// bracket notation is more powerful
console.log(person[1])
console.log(person[true])