'use strict';

const newUserInput = document.querySelector("#newUser");
const newPassInput = document.querySelector("#newPass");
const signupForm = document.querySelector(".login-form");
const errorMsg = document.querySelector("#error");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = newUserInput.value.trim();
  const pass = newPassInput.value.trim();

  if (!user && !pass) {
    errorMsg.textContent = "Please fill out all fields";
    errorMsg.style.color = "red";
    return;
  }

  localStorage.setItem("login_username", user);
  localStorage.setItem("login_password", pass);

  window.location.href = "index.html";
});