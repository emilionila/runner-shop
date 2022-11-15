const cartModal = document.getElementById("cart-modal");
const cartIcon = document.querySelector(".cartIcon");
const closeCartBtn = document.getElementsByClassName("closeCart")[0];

cartIcon.onclick = function() {
    event.preventDefault();
    cartModal.style.display = "block";
}

closeCartBtn.onclick = function() {
    cartModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}
