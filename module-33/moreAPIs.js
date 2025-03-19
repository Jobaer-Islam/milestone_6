
const handleFetchUsersData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            disPlayUser(data)

        })
}

const disPlayUser = (users) => {
    console.log(users[0]);
    
}