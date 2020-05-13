// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.getElementById('login-btn').addEventListener('click', function () {
    let userLogin = document.getElementById('login-name'),
        userPassword = document.getElementById('login-password'),
        incorrectLogin = document.querySelector('.incorrent-login');
    if (userLogin.value !== '' && userPassword.value !== '') {
        alert('cool!');
        incorrectLogin.style.display = 'none';
    } else {
        this.style.display = 'none';
        incorrectLogin.style.display = 'flex';
    }
});

document.getElementById('incorrectCloseBtn').addEventListener('click', function () {
    document.getElementById('login-btn').style.display = 'block';
    document.querySelector('.incorrent-login').style.display = 'none';
});

document.getElementById('login-create-btn').addEventListener('click', function () {
    let userCreateLogin = document.getElementById('login-create-name'),
        userCreateEmail = document.getElementById('login-create-email'),
        userCreatePassword = document.getElementById('login-create-password'),
        validateLoginMessage = document.querySelectorAll('.login-create-final');
    if (userCreateLogin.value !== '' && userCreatePassword.value !== '' && userCreateEmail.value !== '') {
        alert('Account has been created');
        toLogin();
    } else {
        alert('Please fill in all fields')
        userCreateLogin.classList.add('create-login-fail');
        userCreateEmail.classList.add('create-login-fail');
        userCreatePassword.classList.add('create-login-fail');
    }
});

document.getElementById('login-forgot').addEventListener('click', function () {
    alert('Ну, cоболезную!')
});


function toLogin() {
    document.querySelector('.login-right-side').style.display = 'block';
    document.querySelector('.login-create-side').style.display = 'none';
}

function toSignUp() {
    document.querySelector('.login-right-side').style.display = 'none';
    document.querySelector('.login-create-side').style.display = 'block';
}

