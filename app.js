const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";

});
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click",function(){
   const depositAmount = document.getElementById("deposit-amount").value;const depositNumber = parseFloat(depositAmount);

    updateSpan("current-deposit",depositNumber);
    updateSpan("current-balance",depositNumber);
    document.getElementById("deposit-amount").value="";

   //console.log(totalBalance);
function updateSpan(id,depositNumber){

    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance); 
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
      }   
});
const withdrawBtn = document.getElementById("withdraw-btn");   


