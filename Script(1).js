const name = document.getElementById("name");
const chooseFood1 = document.getElementById("chooseFood1");
const quantity1 = document.getElementById("quantity1");
const price1 = document.getElementById("price1");
const chooseFood2 = document.getElementById("chooseFood2");
const quantity2 = document.getElementById("quantity2");
const price2 = document.getElementById("price2");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const output = document.getElementById("output");
const discount = document.getElementById("discount");

function calculateBill(event) {
    event.preventDefault();

    let foodBill1 = Number(quantity1.value) * Number(price1.value);
    let foodBill2 = Number(quantity2.value) * Number(price2.value);
    let totalBill = foodBill1 + foodBill2;
    let discountBill, finalBillAfterDiscount;

    if (totalBill > 5000) {
        discountBill = (totalBill * 30) / 100;
        finalBillAfterDiscount = totalBill - discountBill;
    }
    else if
        (totalBill > 1000 && totalBill < 5000) {
        discountBill = (totalBill * 10) / 100;
        finalBillAfterDiscount = totalBill - discountBill;
    }

    else {
        discountBill = 0;
        finalBillAfterDiscount = totalBill - discountBill;
    }


    output.innerHTML =
        "Customer Name: " +
        name.value +
        "<br>Food 1 Selected: " +
        chooseFood1.value +
        "<br>Quantity 1: " +
        quantity1.value +
        "<br>Price 1: " +
        price1.value +
        "<br>Food 2 Selected: " +
        chooseFood2.value +
        "<br>Quantity 2: " +
        quantity2.value +
        "<br>Price 2: " +
        price2.value +
        "<br>Total Bill: " +
        totalBill +
        "<br>Discount Bill: " +
        discountBill +
        "<br>Final Bill After Discount: " +
        finalBillAfterDiscount;
}
submitBtn.addEventListener("click", calculateBill);

function resetValues() {
    output.innerHTML = "";
}
resetBtn.addEventListener("click", resetValues);