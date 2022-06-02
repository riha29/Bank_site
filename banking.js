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

    //update withdraw
    const withdrawInput = document.getElementById('withdraw-input')
    const newWithdrawAmount = withdrawInput.value
    console.log(newWithdrawAmount)

    const withdrawTotal = document.getElementById('withdraw-total')
    const firstWithdrawTotal = withdrawTotal.innerText
    const newWithdrawTotal = parseFloat(firstWithdrawTotal)+ parseFloat(newWithdrawAmount)
    withdrawTotal.innerText= newWithdrawTotal

    //update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = balanceTotal.innerText
    const newBalanceTotal = parseFloat(previousBalanceTotal)+ parseFloat(newDepositAmount)
    balanceTotal.innerText= newBalanceTotal

    //clear the dep input field
    depositInput.value=''
    withdrawInput.value=''
})