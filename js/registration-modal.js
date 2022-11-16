const registrationModal = document.getElementById("registration-modal");
const userIcon = document.querySelector(".userIcon");
const closeBtn = document.getElementsByClassName("close")[0];
const signUpBtn = document.getElementById("signUpSubmit");
const logInBtn = document.getElementById('logInSubmit');

userIcon.onclick = function() {
    event.preventDefault();
    registrationModal.style.display = "block";
}

closeBtn.onclick = function() {
    registrationModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == registrationModal) {
        registrationModal.style.display = "none";
    }
}

function showSnackBar() {
    const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

signUpBtn.addEventListener('click', ()=>{
    event.preventDefault();
    showSnackBar();
})

logInBtn.onclick = function (){
    window.open('404.html', "_self")
}