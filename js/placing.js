const openPopUp = document.getElementById('open_popup');
const closePopUp = document.getElementById('btn_close');
const popUp =document.getElementById('popup');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})