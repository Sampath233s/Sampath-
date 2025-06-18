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
    if ("user" && password === "123456"||name ==="sampath" && password === "6301787993") 
      {
      alert(" Registration successfully please Login !");
      window.location.href = "login.html"; 
    } else {
      alert("Invalid credentials.");
    }
  });
});
