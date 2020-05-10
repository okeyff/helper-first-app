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
        incorrectLogin.style.display = 'flex';
    }
});

document.getElementById('incorrectCloseBtn').addEventListener('click', function() {
    document.querySelector('.incorrent-login').style.display = 'none';
});