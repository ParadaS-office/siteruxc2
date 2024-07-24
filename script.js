// عرض وإخفاء نافذة تسجيل الدخول
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'flex';
});

document.getElementById('close-login').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
});

// تبادل المحتوى بين تسجيل الدخول والتسجيل
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(this.getAttribute('data-target')).classList.add('active');
    });
});

// تحقق من صحة المدخلات على الجانب العميل
document.querySelector('#login-form form').addEventListener('submit', function(event) {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        event.preventDefault();
        document.getElementById('login-error').textContent = 'Please fill in both fields.';
    }
});

document.querySelector('#register-form form').addEventListener('submit', function(event) {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!username || !email || !password) {
        event.preventDefault();
        document.getElementById('register-error').textContent = 'Please fill in all fields.';
    }
});
