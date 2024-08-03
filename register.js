export function important() {
  const formELe = document.getElementById("register");

  formELe.addEventListener("submit", function (el) {
    el.preventDefault();

    let errors = {};

    let usernameValue = document.getElementById("UserName").value;
    if (usernameValue.trim() === "") {
      errors.UserName = "username value can not be empty";
    }

    let passw1 = document.getElementById("Rpassw").value;
    if (passw1.trim() === "") {
      errors.Rpassw = "Password value cannot be empty";
    }
    let passw2 = document.getElementById("Rpassw2").value;

    if (passw2.trim() === "") {
      errors.Rpassw2 = "Password value cannot be empty";
    }

    if (passw1 !== passw2) {
      errors.Rpassw2 = "both password value must be the same";
    }

    //
    let phoneValue = document.getElementById("phone").value;
    if (phoneValue.trim() === "") {
      errors.phone = "phone value can not be empty";
    }

    let genderSelected = false;
    document.querySelectorAll(".genderinput").forEach((item) => {
      if (item.checked) {
        genderSelected = true;
      }
    });
    if (!genderSelected) {
      errors.gender = "select your gender";
    }

    let agreeChecked = document.getElementById("check").checked;
    if (!agreeChecked) {
      errors.agree = "You must agree to the terms and conditions";
    }

    document.querySelectorAll(".err").forEach((el) => {
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

  const closeIcon = document.getElementById("close");
  closeIcon.addEventListener("click", function () {
    document.querySelectorAll(".err").forEach((el) => {
      el.innerText = "";
    });
    document.getElementById("UserName").value = "";
    document.getElementById("Rpassw").value = "";
    document.getElementById("Rpassw2").value = "";
    document.getElementById("phone").value = "";
    document.querySelectorAll(".genderinput").forEach((item) => {
      item.checked = false;
    });
    document.getElementById("check").checked = false;
  });
}
