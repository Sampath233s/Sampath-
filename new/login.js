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
