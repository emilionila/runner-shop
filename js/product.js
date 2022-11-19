const openPh = document.getElementById('next_ph');
const closePh = document.getElementById('back_ph');
const ph =document.getElementById('product_photo_2');

openPh.addEventListener('click', function(e){
    e.preventDefault();
    ph.classList.add('active');
})

closePh.addEventListener('click', () => {
    ph.classList.remove('active')
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

