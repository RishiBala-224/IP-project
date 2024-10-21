let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    alert('Item added to cart!');
}

// Attach the function to buttons (you'll need to modify your button HTML)
const buttons = document.querySelectorAll('.menu-item button');
buttons.forEach(button => {
    button.addEventListener('click', addToCart);
});
 