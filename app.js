const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){

    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";

});

//Deposit Btn Event
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click",function(){
   
    const depositNumber = getInput("deposit-amount");

    updateSpanText("current-deposit",depositNumber);
    updateSpanText("current-balance",depositNumber);
    document.getElementById("deposit-amount").value="";

   //console.log(totalBalance);

});

function updateSpanText(id,depositNumber){

    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance); 
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
      }   

function getInput(id){
    const WithdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(WithdrawAmount);
    return withdrawNumber;
}

//withdraw Btn Event
const withdrawBtn = document.getElementById("withdraw-btn").addEventListener("click",function(){
    

    const withdrawNumber= getInput("withdraw-amount");

    updateSpanText("current-withdraw",withdrawNumber);
    updateSpanText("current-balance",-1*withdrawNumber);
    document.getElementById("withdraw-amount").value="";
    
});
  
  


