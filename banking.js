//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function(){
    // amount deposited
    const depositeInput = document.getElementById('deposite-input')
    const newDepositAmount = depositeInput.value
    // console.log(depositeAmount)

    const depositTotal = document.getElementById('deposite-total')
    const previousDepositAmount = depositTotal.innerText
    const newDepositTotal= previousDepositAmount+ newDepositAmount
    const 
    depositTotal.innerText = newDepositAmount

    //clear the dep input field
    depositeInput.value=''
})