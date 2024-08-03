"use strict";

let formEL = document.getElementById("login");

formEL.addEventListener("click", function (e) {
  e.preventDefault();
  let errors = {};

  let emailVAlue = document.getElementById("userEmail").value;
  if (emailVAlue.trim() === "") {
    errors.userE = "email value cannot be empty";
  }
  let password = document.getElementById("passwordField").value;
  if (password.trim() === "") {
    errors.passw = "Password value cannot be empty";
  }
  document.querySelectorAll(".error-text").forEach((el) => {
    el.innerText = "";
  });

  for (let key in errors) {
    let errorElement = document.getElementById("error-" + key);
    if (errorElement) {
      errorElement.innerText = errors[key];
    }
  }
  if (Object.keys(errors).length === 0) {
    location.href = "second.html";
  }
});

let emailField = document.getElementById("userEmail");
function validationEmail() {
  let emailFieldValue = document.getElementById("userEmail").value;
  let emailError = document.getElementById("error-userE");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailFieldValue)) {
    emailError.innerText = "your email is valid";
    emailError.style.color = "green";
  } else {
    emailError.innerText = "your email is Invalid";
    emailError.style.color = "gold";
  }
  if (emailFieldValue.trim() === "") {
    emailError.innerHTML = "";
  }
}

emailField.addEventListener("keyup", validationEmail);

//?
let passwordField = document.getElementById("passwordField");
function validationPassw() {
  let passwordFieldValue = document.getElementById("passwordField").value;
  let errorpassw = document.getElementById("error-passw");
  let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (passwordPattern.test(passwordFieldValue)) {
    errorpassw.innerText = "your email is valid";
    errorpassw.style.color = "green";
  } else {
    errorpassw.innerText = "your email is Invalid";
    errorpassw.style.color = "gold";
  }
  if (passwordFieldValue.trim() === "") {
    errorpassw.innerHTML = "";
  }
}

passwordField.addEventListener("keyup", validationPassw);

//?

let iconPassw = document.getElementById("eye");
iconPassw.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.setAttribute("type", "text");
    iconPassw.classList.remove("fa-eye");
    iconPassw.classList.add("fa-eye-slash");
  } else {
    passwordField.setAttribute("type", "password");
    iconPassw.classList.remove("fa-eye-slash");
    iconPassw.classList.add("fa-eye");
  }
});
//!

const CloseIcon = document.getElementById("close");
const overlayDiv = document.getElementById("overlay");
const newAcc = document.getElementById("newAcc");

newAcc.addEventListener("click", function () {
  overlayDiv.classList.add("active");
  document.querySelectorAll(".error-text").forEach((el) => {
    el.innerText = "";
  });
  document.getElementById("userEmail").value = "";
  document.getElementById("passwordField").value = "";
});
CloseIcon.addEventListener("click", function () {
  overlayDiv.classList.remove("active");
});

//?
//?

import { important } from "./register.js";
important();

import { regex } from "./regex.js";
regex();

import { ShowHide } from "./ShowHide.js";

ShowHide();


