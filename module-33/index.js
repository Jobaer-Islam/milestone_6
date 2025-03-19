
const LoadUsersData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            disPlayUser(data)

        })
}

const disPlayUser = (users) => {
    const userContainer = document.getElementById("users");
    for(const user of users){
        const li = document.createElement("li");
        li.innerText = user.name;
        userContainer.appendChild(li);
        
        
    }    
}