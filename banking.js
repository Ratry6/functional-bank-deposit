//deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    // const inputField = document.getElementById('deposit-input');
    // const amountTextValue = inputField.value;
    // const amountValue = parseFloat(amountTextValue);
    const amountValue = getInputValue('deposit-input');
    if(amountValue>0){
        updateTotalField('deposit-total', amountValue);
        updateBalance(amountValue,true);
    }

    //getand update  deposit total 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousamountValue = parseFloat(depositTotalText);
    // depositTotal.innerText = amountValue + previousamountValue;
   
    //update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalance + amountValue;
    
    //clear deposit Amount
    // inputField.value = '';

});
//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawInputText);
    const withdrawAmount= getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if(withdrawAmount>0 && withdrawAmount<currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    if(withdrawAmount>currentBalance){
        console.log('you can not withdraw money more than what you have in your bank')
    }

    //get and update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdraw = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdraw + withdrawAmount;
    
    //reduce balance
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalance - withdrawAmount;
   
    //clear withdraw value
    // withdrawInput.value = '';

});
//advanced function for getting deposit & withdraw input
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const amountTextValue = inputField.value;
    const amountValue = parseFloat(amountTextValue);
    //clear input value
    inputField.value = '';
    return amountValue;
}
//function for getting total value of deposit & withdraw
function updateTotalField(totalFieldId , amountValue){
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const previousamountValue = parseFloat(depositTotalText);
    depositTotal.innerText = amountValue + previousamountValue;
}
//function for getting current balance.cause balance ja ache tar theke beshi toh withdraw korte parbo na
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}
//function for updating balance
function updateBalance(amountValue, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceTotalText);
    //nested function
    const previousBalance = getCurrentBalance();
    
    if(isAdd== true){
        balanceTotal.innerText = previousBalance + amountValue;
    }
    else{
        balanceTotal.innerText = previousBalance - amountValue;
    }
}