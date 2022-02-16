let incomeInput= document.getElementById("income-input");
let foodInput = document.getElementById("food-input");
let rentInput = document.getElementById("rent-input");
let clothsInput = document.getElementById("cloths-input");
let totalExpenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let saveInput = document.getElementById("save-input");
let savingAmount = document.getElementById("saving-amount");
let lastBalance = document.getElementById("remaining-balance")
function calculate(){
   let expenses = parseFloat(foodInput.value)+ parseFloat(rentInput.value)+ parseFloat(clothsInput.value);
   totalExpenses.innerText = expenses;
   let leftBalance = parseFloat(incomeInput.value)-parseFloat(totalExpenses.innerText);
   balance.innerText= leftBalance;

}

function save(){
    totalSave = parseFloat(incomeInput.value) * (parseFloat(saveInput.value)/100);
    savingAmount.innerText = totalSave;
    remainBalance = parseFloat(incomeInput.value)-(parseFloat(savingAmount.innerText)+parseFloat( totalExpenses.innerText));
    lastBalance.innerText = remainBalance;



}