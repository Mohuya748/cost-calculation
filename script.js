// function for all input values calling
function inputValue(inputId) {
    let input = document.getElementById(inputId);
    return parseFloat(input.value);
}

let totalExpenses = document.getElementById("total-expenses");
let balance = document.getElementById("balance");
let savingAmount = document.getElementById("saving-amount");
let lastBalance = document.getElementById("remaining-balance");
const errorMsg = document.getElementById("error-msg");
const errorMsgSaving = document.getElementById("error-msg-saving");
const errorMsgNeg = document.getElementById("error-msg-negative");
//----------- function for adding value ------------
function addValue(firstValue, secondValue, thirdValue) {
    let add = parseFloat(firstValue) + parseFloat(secondValue) + parseFloat(thirdValue);
    return add;
}

//------------ function for minus value --------
function minusValue(firstValue, secondValue) {
    let minus = parseFloat(firstValue) - parseFloat(secondValue);
    return minus;
}
//--------------calculate button -----------
function calculate() {
    if (inputValue("income-input")>0 && inputValue("food-input")>0 && inputValue("rent-input")>0 && inputValue("cloths-input")>0) {
        errorMsg.style.display = 'none';
        let expenses = addValue(inputValue("food-input"), inputValue("rent-input"), inputValue("cloths-input"));
        totalExpenses.innerText = expenses;
        let leftBalance = minusValue(inputValue("income-input"), totalExpenses.innerText);
        if (leftBalance > 0) {
            balance.innerText = leftBalance;
        }
        else {
            errorMsg.style.display = 'block';
            totalExpenses.innerText = "";
            balance.innerText = "";
        }
    }
    else {

        totalExpenses.innerText = 0;
        balance.innerText = 0;
        errorMsg.style.display = 'none';
        alert("Please give a positive number in each field.");
    }
}

//--------- save button -----------
function save() {
    if(inputValue("save-input")>0){
        errorMsgNeg.style.display = 'none';
        totalSave = inputValue("income-input") * (inputValue("save-input") / 100);
        savingAmount.innerText = totalSave.toFixed(2);
        remainBalance = minusValue(inputValue("income-input"), addValue(savingAmount.innerText, totalExpenses.innerText, 0));
        if (totalSave <= balance.innerText) {
            errorMsgSaving.style.display = 'none';
            lastBalance.innerText = remainBalance.toFixed(2);
        }
        else {
            errorMsg.style.display = 'none';
            errorMsgSaving.style.display = 'block';
            lastBalance.innerText = "";
        }
    }
   else{
    errorMsgSaving.style.display = 'none';
    errorMsgNeg.style.display = 'block';
   }
}