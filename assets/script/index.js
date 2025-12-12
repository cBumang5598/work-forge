'use strict';

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginForm = document.querySelector(".login-form");
const errorMsg = document.querySelector("#error");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredUser = usernameInput.value.trim();
  const enteredPass = passwordInput.value.trim();

  const savedUser = localStorage.getItem("login_username");
  const savedPass = localStorage.getItem("login_password");

  if (enteredUser === savedUser && enteredPass === savedPass) {
    errorMsg.textContent = "";
    window.location.href = "./home.html";
  } else {
    errorMsg.textContent = "Incorrect username or password";
    errorMsg.style.color = "red";
  }
});