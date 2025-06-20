document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.style.display = "none"; // Hide error initially

    // Input validation
    if (email === "" || password === "") {
        errorMsg.textContent = "Both fields are required.";
        errorMsg.style.display = "block";
        return;
    }

    // Email format check (basic)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.style.display = "block";
        return;
    }

    // Dummy database of users
    const users = [
        { email: "sampath@gmail.com", password: "Sam@1234", name: "Sampath" }
    ];

    // Authentication logic
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save full user info
        alert(`Welcome, ${user.name}!`);
        window.location.href = "home.html";
    } else {
        errorMsg.textContent = "Invalid email or password.";
        errorMsg.style.display = "block";
    }
});