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