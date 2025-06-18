document.addEventListener("DOMContentLoaded", function () {
      const loginLink = document.getElementById("login");

      function isUserLoggedIn() {
        return localStorage.getItem("login") === "true";
      }

      function updateLoginText() {
        loginLink.textContent = isUserLoggedIn() ? "Logout" : "Login";
      }

      updateLoginText();

      loginLink.addEventListener("click", function (e) {
        e.preventDefault();

        if (isUserLoggedIn()) {
          localStorage.setItem("login", "false");
          updateLoginText();
          window.location.href = "login.html";
        } else {
          window.location.href = "login.html";
        }
      });
    });
