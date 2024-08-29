let basket = [];
let total = 0;

// Function to add products to the cart
function addToCart(button) {
    const productElement = button.parentElement;
    const productName = productElement.querySelector('h2').textContent;
    const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));

    // Add the product name and price to the basket
    basket.push({ name: productName, price: productPrice });

    // Update the total price
    total += productPrice;

    // Update the display
    updateBasketDisplay();
}

// Function to update the basket display
function updateBasketDisplay() {
    const basketList = document.getElementById('basket-list');
    const totalElement = document.getElementById('total');

    // Clear the current list
    basketList.innerHTML = '';

    // Populate the list with the basket items
    basket.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        basketList.appendChild(listItem);
    });

    // Update the total price display
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
