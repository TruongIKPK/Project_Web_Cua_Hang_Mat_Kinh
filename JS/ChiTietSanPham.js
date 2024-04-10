var quantity = 1; // Số lượng ban đầu

function incrementQuantity() {
    quantity++;
    document.getElementById('quantity').innerText = quantity;
}

function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').innerText = quantity;
    }
}