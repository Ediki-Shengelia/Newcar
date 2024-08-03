"use strict";

export function ShowHide() {
  let passw = document.getElementById("Rpassw");
  let iconPassw = document.getElementById("show");

  iconPassw.addEventListener("click", function () {
    if (passw.type === "password") {
      passw.setAttribute("type", "text");
      iconPassw.classList.remove("fa-eye");
      iconPassw.classList.add("fa-eye-slash");
    } else {
      passw.setAttribute("type", "password");
      iconPassw.classList.add("fa-eye");
      iconPassw.classList.remove("fa-eye-slash");
    }
  });

  let iconPassw2 = document.getElementById("show2");
  let passw2 = document.getElementById("Rpassw2");
  iconPassw2.addEventListener("click", function () {
    if (passw2.type === "password") {
      passw2.setAttribute("type", "text");
      iconPassw2.classList.remove("fa-eye");
      iconPassw2.classList.add("fa-eye-slash");
    } else {
      passw2.setAttribute("type", "password");
      iconPassw2.classList.add("fa-eye");
      iconPassw2.classList.remove("fa-eye-slash");
    }
  });
}
