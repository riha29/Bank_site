document.getElementById('login-submit').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email')
    const userEmail= emailField.value 
    
    // get user pass
    const emailPass = document.getElementById('user-pass')
    const userPass= emailPass.value 
    
    // checking
    if(userEmail== 'amarBank@gmail.com' && userPass== 'amarBank') {
        window.location.href='banking.html'
    }
})