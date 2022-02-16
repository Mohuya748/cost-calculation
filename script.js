let incomeInput = document.getElementById("income-input");
let foodInput = document.getElementById("food-input");
let rentInput = document.getElementById("rent-input");
let clothsInput = document.getElementById("cloths-input");
let totalExpenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let saveInput = document.getElementById("save-input");
let savingAmount = document.getElementById("saving-amount");
let lastBalance = document.getElementById("remaining-balance");
const errorMsg = document.getElementById("error-msg");

function addValue(firstValue, secondValue, thirdValue) {
    let add = parseFloat(firstValue) + parseFloat(secondValue) + parseFloat(thirdValue);
    return add;
}
function minusValue(firstValue, secondValue) {
    let minus = parseFloat(firstValue) - parseFloat(secondValue);
    return minus;
}

function calculate() {

    if (incomeInput.value >= 0 && foodInput.value >= 0 && rentInput.value >= 0 && clothsInput.value >= 0) {
        errorMsg.style.display = 'none';
        let expenses = addValue(foodInput.value, rentInput.value, clothsInput.value);
        totalExpenses.innerText = expenses;
        let leftBalance = minusValue(incomeInput.value, totalExpenses.innerText);
        if (leftBalance > 0) {
            balance.innerText = leftBalance;
        }
        else {
            alert("Please give a valid number:(");
            totalExpenses.innerText = 0;
        }
    }
    else {
        errorMsg.style.display = 'block';
        incomeInput.value = "";
        foodInput.value = "";
        rentInput.value = "";
        clothsInput.value = "";
    }
}

function save() {
    totalSave = parseFloat(incomeInput.value) * (parseFloat(saveInput.value) / 100);
    savingAmount.innerText = totalSave;
    remainBalance = minusValue(incomeInput.value, addValue(savingAmount.innerText, totalExpenses.innerText, 0));
    lastBalance.innerText = remainBalance;
}