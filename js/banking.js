/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */
function getInputValue(inputId){
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clean input field
    inputField.value = '';
    return amountValue;
    
}
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount ;
}

function updateBalance (amount, isAdd){
    const balanceNow = document.getElementById('balance-total');
    const balanceText = balanceNow.innerText;
    const balanceTotal = parseFloat(balanceText);

    if(isAdd == true){
        balanceNow.innerText = balanceTotal + amount;
    }
    else{
        balanceNow.innerText = balanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click',
 function (){
    
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const prodepositAmount = parseFloat(depositAmount); */
   

    // get update current deposit
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotal.innerText;
    const proDepositTotal = parseFloat(depositTotalAmount);

    depositTotal.innerText = proDepositTotal + prodepositAmount ; */
    

    // update balance
    /* const balanceNow = document.getElementById('balance-total');
    const balanceText = balanceNow.innerText;
    const balanceTotal = parseFloat(balanceText);

    balanceNow.innerText = balanceTotal + prodepositAmount; */

    /* // clean input field
     depositInput.value = ''; */

     const depositAmount = getInputValue('deposit-input');
     if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
     }
     
    
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',
 function () {
    
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    
    
    // update withdraw total
   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText); 
    
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
    */
    
    // withdraw balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
 */
    const withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount > 0){
        updateTotalField('withdraw-total',withdrawAmount)

         updateBalance(withdrawAmount, false);
    }
/* 
    // clear withdrawinput value
    withdrawInput.value = ''; */
});