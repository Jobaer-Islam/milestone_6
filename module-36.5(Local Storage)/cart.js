const handleAddtoCart = () => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');

    const name = productName.value;
    const quantity = productQuantity.value;

    setToLocalStorage(name,quantity);

    displayProduct(name, quantity);

    productName.value = "";
    productQuantity.value = "";
}

const displayProduct = (name, quantity) =>{
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `
        ${name} : ${quantity}
    `;
    productContainer.appendChild(li)

}

const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");
    if(getProduct){
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const displayProductFromLocalStorage = () => {
    const products = getProductFromLocalStorage();
    
    for(const product in products){
        displayProduct(product,products[product]);
    }
}

const setToLocalStorage = (name, quantity) => {
    
    const cart = getProductFromLocalStorage();

    cart[name]= quantity;

    const cartString = JSON.stringify(cart);

    localStorage.setItem("cart", cartString);
}

displayProductFromLocalStorage();
