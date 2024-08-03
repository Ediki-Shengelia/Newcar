"use strict";
export function fncCookies() {
  document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault();
    let checkbox = document.getElementById("save");
    let usernameValue = document.getElementById("user").value;

    if (checkbox.checked) {
      Cookies.set("CookiesUserName", usernameValue);
    } else {
      Cookies.remove("CookiesUserName");
    }
  });

  let savedusernameCookies = Cookies.get("CookiesUserName");
  if (savedusernameCookies) {
    document.getElementById("user").value = savedusernameCookies;
    document.getElementById("save").checked = true;
  }
}
