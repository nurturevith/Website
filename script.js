script.js
// script.js

// Basic cart functionality (to be expanded)
let cart = [];

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.parentElement.querySelector('h3').textContent;
        cart.push(product);
        alert(product + ' added to cart!');
    });
});
