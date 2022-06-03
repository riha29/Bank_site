//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function(){
    // amount deposited
    const depositInput = document.getElementById('deposite-input')
    const newDepositAmount = depositInput.value
    // console.log(depositeAmount)

    const depositTotal = document.getElementById('deposite-total')
    const previousDepositAmount = depositTotal.innerText
    const newDepositTotal= parseFloat(previousDepositAmount)+ parseFloat(newDepositAmount)
    depositTotal.innerText = newDepositTotal

    //update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = balanceTotal.innerText
    const newBalanceTotal = parseFloat(previousBalanceTotal)+ parseFloat(newDepositAmount)
    balanceTotal.innerText= newBalanceTotal

    //clear the dep input field
    depositInput.value=''
    
})

//handle withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function() {
    //update withdraw
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value    
    
    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const firstWithdrawText = withdrawTotal.innerText
    // const newWithdrawTotal = parseFloat(withdrawAmountText)+ parseFloat(newWithdrawAmount)
    const newWithdrawTotal= parseFloat(firstWithdrawText)+ parseFloat(withdrawAmountText)
    withdrawTotal.innerText = newWithdrawTotal
    withdrawInput.value=''

    const balanceTotal= document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText
    const newBalanceTotal= parseFloat(previousBalanceText) - newWithdrawTotal
    balanceTotal.innerText= newBalanceTotal
})