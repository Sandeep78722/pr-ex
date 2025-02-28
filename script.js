const users = [
    { username: 'student', password: 'studentpass', role: 'student' },
    { username: 'instructor', password: 'instructorpass', role: 'instructor' }
];

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Entered Username:', username);
    console.log('Entered Password:', password);

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('User found:', user);
        localStorage.setItem('userRole', user.role);
        alert('Login successful, redirecting...');
        window.location.href = user.role === 'student' ? 'student_dashboard.html' : 'instructor_dashboard.html';
    } else {
        console.log('Invalid credentials');
        alert('Invalid username or password');
    }
});
