function showRegistrationForm() {
         document.getElementById('login-form').style.display = 'none';
         document.getElementById('registration-form').style.display = 'block';
         document.getElementById('forgot-password-form').style.display = 'none';
         document.getElementById('home-container').style.display = 'none';
         document.getElementById('homeguest-container').style.display = 'none';
     }
     
     function showLoginForm() {
         document.getElementById('login-form').style.display = 'block';
         document.getElementById('registration-form').style.display = 'none';
         document.getElementById('forgot-password-form').style.display = 'none';
         document.getElementById('home-container').style.display = 'none';
         document.getElementById('homeguest-container').style.display = 'none';
     }
     
     function showForgotPasswordForm() {
         document.getElementById('login-form').style.display = 'none';
         document.getElementById('registration-form').style.display = 'none';
         document.getElementById('forgot-password-form').style.display = 'block';
         document.getElementById('home-container').style.display = 'none';
         document.getElementById('homeguest-container').style.display = 'none';
     }
     
     function showHomePage() {
         document.getElementById('login-form').style.display = 'none';
         document.getElementById('registration-form').style.display = 'none';
         document.getElementById('forgot-password-form').style.display = 'none';
         document.getElementById('home-container').style.display = 'block';
         const username = localStorage.getItem('username');
         if (username) {
             document.getElementById('home-message').textContent = `Welcome to the Home Page, ${username}`;
         } else {
             document.getElementById('home-message').textContent = 'You are still a guest user';
         }
     }
     
     function register() {
         const username = document.getElementById('register-username').value;
         const password = document.getElementById('register-password').value;
     
         if (username && password) {
             localStorage.setItem('username', username);
             localStorage.setItem('password', password);
             alert('Registration successful!');
             showLoginForm();
         } else {
             document.getElementById('register-error').textContent = 'Please fill in all fields.';
         }
     }
     
     function login() {
         const username = document.getElementById('login-username').value;
         const password = document.getElementById('login-password').value;
     
         const storedUsername = localStorage.getItem('username');
         const storedPassword = localStorage.getItem('password');
     
         if (username === storedUsername && password === storedPassword) {
             alert('Login successful!');
             document.getElementById('logout-button').style.display = 'block';
             showHomePage();
         } else {
             document.getElementById('login-error').textContent = 'Invalid username or password.';
         }
     }
     
     function resetPassword() {
         const username = document.getElementById('reset-username').value;
         const storedUsername = localStorage.getItem('username');
     
         if (username === storedUsername) {
             const newPassword = prompt('Enter your new password:');
             if (newPassword) {
                 localStorage.setItem('password', newPassword);
                 alert('Password reset successful!');
                 showLoginForm();
             }
         } else {
             document.getElementById('reset-error').textContent = 'Username not found.';
         }
     }
     
     function logout() {
        localStorage.removeItem('username');
         localStorage.removeItem('password');
         document.getElementById('logout-button').style.display = 'none';
         alert('You have been logged out.');
         showLoginForm();
     }
     function checkLoginStatus() {
        const username = localStorage.getItem('username');
        if (username) {
            document.getElementById('logout-button').style.display = 'block';
        } else {
            document.getElementById('logout-button').style.display = 'none';
        }
    }
     