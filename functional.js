//getting input value
function getInputValue (fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value='';
    return inputValue;
}
//getting inner text value
function innerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldTagText = fieldTag.innerText;
    const value = parseFloat(fieldTagText);
    return value;
}
//show in the deposit n withdraw total
function updateTotal(fieldId, amount){
// const totalTag = document.getElementById(fieldId);
// const previousTotalText = totalTag.innerText;
// const previousTotal = parseFloat(previousTotalText);
const previousTotal = innerTextValue(fieldId);
const newTotal = previousTotal+amount;
document.getElementById(fieldId).innerText = newTotal;
}
//update balance
function updateBalance (amount , isAdding){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceTagText = balanceTag.innerText;
    // const previousbalance = parseFloat(balanceTagText);
    const previousbalance = innerTextValue('balance-total');
    let newBalance;
    if(isAdding == true){
         newBalance = previousbalance+amount;
    }
    else{
         newBalance = previousbalance-amount;
    }
    
    document.getElementById('balance-total').innerText = newBalance;

}
//deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
if(amount>0){
    updateTotal('deposit-total',amount);
   updateBalance(amount,true);
}
   
   
})
//withdraw

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = innerTextValue('balance-total');

   if(amount>0 && amount<=balance){
    updateTotal('withdraw-total',amount);
    updateBalance(amount,false);
   }
})