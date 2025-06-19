document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("pass").value.trim();

    if (name === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
    if ("user@gmail.com" && password === "123456"||name ==="sampath@gmail.com" && password === "6301787993") 
      {
      alert("Login successful!");
      window.location.href = "home.html"; 
    } else {
      alert("Invalid credentials.");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginLogoutBtn = document.getElementById("loginLogoutBtn");
    const isLoggedIn = localStorage.getItem("loggedInUser");

    if (isLoggedIn) {
      loginLogoutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> Logout';
      loginLogoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "login.html";
      });
    } else {
      loginLogoutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Login';
      loginLogoutBtn.setAttribute("href", "login.html");
    }
  });