document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //getCurrent Deposit

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;


    //balance update

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


    //clear Input Field
    depositInput.value = '';


});

//with draw 

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withDrawInput = document.getElementById('withdraw-input');
    const withDrawInputText = withDrawInput.value;
    const withDrawAmount = parseFloat(withDrawInputText);

    //getCurrent Deposit

    const withDrawTotal = document.getElementById('withdraw-total');
    const withDrawText = withDrawTotal.innerText;
    const previousWithDrawTotal = parseFloat(withDrawText);
    withDrawTotal.innerText = previousWithDrawTotal + withDrawAmount;


    //balance update

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withDrawAmount;


    //clear Input Field
    withDrawInput.value = '';
})