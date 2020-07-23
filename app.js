const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";

});


