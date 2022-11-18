const openPopUp = document.getElementById('next_ph');
const closePopUp = document.getElementById('back_ph');
const popUp =document.getElementById('product_photo_2');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})


const openNum = document.getElementById('btn_plus');
const closeNum = document.getElementById('btn_min');
const num =document.getElementById('numerosity_2');

openNum.addEventListener('click', function(e){
    e.preventDefault();
    num.classList.add('active');
})

closeNum.addEventListener('click', () => {
    num.classList.remove('active')
})


const AddedBtn = document.getElementById("btn_to_cart");
function showwAdded() {
    const x = document.getElementById("added");
    x.className = "showw";
    setTimeout(function(){ x.className = x.className.replace("showw", ""); }, 3000);
}

AddedBtn.addEventListener('click', ()=>{
    event.preventDefault();
    showwAdded();
})


const SizesBtn = document.getElementById("btn_size");
function shoowSizes() {
    const x = document.getElementById("sizes");
    x.className = "shoow";
    setTimeout(function(){ x.className = x.className.replace("shoow", ""); }, 3000);
}

SizesBtn.addEventListener('click', ()=>{
    event.preventDefault();
    shoowSizes();
})
