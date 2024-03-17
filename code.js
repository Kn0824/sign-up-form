const submitButton = document.querySelector("form");
submitButton.addEventListener('submit', function () {
    let pwd = document.getElementById("pwd");
    let pwdConfirm = document.getElementById("pwdConfirm");
    if(pwd.value !== pwdConfirm.value) {
        alert("Passwords must match");
        pwd.classList.add("error");
        pwdConfirm.classList.add("error");
        event.preventDefault();
    }
})