const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Form toggle logic (already working)
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle SignUp (Register) Form submission
document.querySelector('.sign-up button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    // Send signup data to backend
    fetch('http://localhost:5000/api/auth/signup', {  // Change the URL if your backend is on a different port
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json())  // Handle response from backend
    .then(data => {
        alert('Signup successful: ' + data.message);  // Handle success
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Signup failed');
    });
});

// Handle SignIn (Login) Form submission
document.querySelector('.sign-in button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    // Send login data to backend
    fetch('http://localhost:5000/api/auth/login', {  // Change the URL if your backend is on a different port
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())  // Handle response from backend
    .then(data => {
        alert('Login successful: ' + data.message);  // Handle success
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Login failed');
    });
});