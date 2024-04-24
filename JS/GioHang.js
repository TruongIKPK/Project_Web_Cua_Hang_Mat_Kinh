var quantity1 = 1;

function incrementQuantity1() {
    quantity1++;
    let thanhtien1 =  quantity1*4280000;
    document.getElementById('quantity1').value = quantity1;
    document.getElementById('thanhtien1').value = thanhtien1;
}

function decrementQuantity1() {
    if (quantity1 > 1) {
        quantity1--;
        let thanhtien1 =  quantity1*4280000;
        document.getElementById('quantity1').value = quantity1;
        document.getElementById('thanhtien1').value = thanhtien1;
    }
}

var quantity2 = 1;

function incrementQuantity2() {
    quantity2++;
    let thanhtien2 =  quantity2*4280000;
    document.getElementById('quantity2').value = quantity2;
    document.getElementById('thanhtien2').value = thanhtien2;
}

function decrementQuantity2() {
    if (quantity2 > 1) {
        quantity2--;
        let thanhtien2 =  quantity2*4280000;
        document.getElementById('quantity2').value = quantity2;
        document.getElementById('thanhtien2').value = thanhtien2;
    }
}
