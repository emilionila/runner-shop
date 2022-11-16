const placingModal = document.getElementById("placing-modal");
const buyBtn = document.querySelector(".cart-buy-btn");
const closePlacingBtn = document.getElementsByClassName("closePlacing")[0];
const orderBtn = document.getElementById("processSubmit");

buyBtn.onclick = function() {
    event.preventDefault();
    placingModal.style.display = "block";
}

closePlacingBtn.onclick = function() {
    placingModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == placingModal) {
        placingModal.style.display = "none";
    }
}

orderBtn.onclick = function (){
    window.open('thanks.html')
}