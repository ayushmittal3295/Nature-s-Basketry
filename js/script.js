// Initialize an empty cart
let cart = [];

// Function to add product to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    alert(`${productName} has been added to your cart!`);
}

// Add event listeners to all buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.parentElement; // Get the parent product div
        const productName = productElement.querySelector('h2').innerText; // Get product name
        const productPrice = productElement.querySelector('p strong').innerText; // Get product price
        addToCart(productName, productPrice);
    });
});