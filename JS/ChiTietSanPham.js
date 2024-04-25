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
function changeBorderColor(button) {
    var buttons = document.querySelectorAll('.btn.btn-group');
    buttons.forEach(function(btn) {
        btn.style.borderColor = ""; 
    });
    button.style.borderColor = "#011e60"; 
}

function redirectToCartPage() {
    window.location.href = '../HTML/GioHang.html';
}
