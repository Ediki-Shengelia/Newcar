"use strict";

export function regex(){
    let UserName = document.getElementById("UserName");
function usernameValidation() {
  let usernameValue = document.getElementById("UserName").value;
  let UserNameError = document.getElementById("error-UserName");
  let usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;

  if (usernamePattern.test(usernameValue)) {
    UserNameError.innerText = "your userName is valid";
    UserNameError.style.color = "green";
  } else {
    UserNameError.innerText = "your Username is Invalid";
    UserNameError.style.color = "gold";
  }
  if (usernameValue.trim() === "") {
    UserNameError.innerHTML = "";
  }
}
UserName.addEventListener("keyup", usernameValidation);

//!
let Password = document.getElementById("Rpassw");
function PasswordValidation() {
  let passwordValue = document.getElementById("Rpassw").value;
  let passwordError = document.getElementById("error-Rpassw");
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

  if (passwordPattern.test(passwordValue)) {
    passwordError.innerText = "your password is valid";
    passwordError.style.color = "green";
  } else {
    passwordError.innerText = "your Username is Invalid";
    passwordError.style.color = "gold";
  }
  if (passwordValue.trim() === "") {
    passwordError.innerHTML = "";
  }
}

Password.addEventListener("keyup", PasswordValidation);

let corectPassw = document.getElementById("Rpassw2");
function validation() {
  let secondPassword = document.getElementById("Rpassw2").value;
  let passwordValue = document.getElementById("Rpassw").value;
  let passwordError = document.getElementById("error-Rpassw2");
  if (secondPassword === passwordValue) {
    passwordError.innerText = "password values are the same";
    passwordError.style.color = "green";
  } else {
    passwordError.innerText = "password values must be the same";
    passwordError.style.color = "gold";
  }
  if (secondPassword.trim() === "") {
    passwordError.innerHTML = "";
  }
}

corectPassw.addEventListener("keyup", validation);

let phone = document.getElementById("phone");
function phoneValidation() {
  let phoneValue = document.getElementById("phone").value;
  let phoneError = document.getElementById("error-phone");
  let phonePAttern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  if (phonePAttern.test(phoneValue)) {
    phoneError.innerText = "your phone value is valid";
    phoneError.style.color = "green";
  } else {
    phoneError.innerText = "your phone value is Invalid";
    phoneError.style.color = "gold";
  }
  if (phoneValue.trim() === "") {
    phoneError.innerHTML = "";
  }
}
//phone pattern (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
phone.addEventListener("keyup", phoneValidation);
}


