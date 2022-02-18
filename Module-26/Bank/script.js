document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sheme@gmail.com' && userPassword == 'password') {
        console.log('Valid User');
        window.location.href = 'banking.html';
    } else {
        console.log('Invalid User');
    }
})