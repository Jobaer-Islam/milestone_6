const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            displayPost(data)
        })
}

const handleUser2 = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.son();
        console.log(data);
    }
    catch{
        console.log("errro paisi");
        
    }
}

handleUser2();