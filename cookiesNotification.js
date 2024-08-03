"use strict";

export function notification() {
  let cookieNotification = document.getElementById("cookie-notification");
  let acceptCookiesButton = document.getElementById("accept-cookies");
  // Check if user has already accepted cookies
  let cookiesAccepted = localStorage.getItem("cookieAccepted");

  if (!cookiesAccepted) {
    // Show the cookies notification

    cookieNotification.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesButton.addEventListener("click", function () {
    // Hide the cookies notification
    cookieNotification.style.display = "none";
    // Set a flag in localStorage to remember that the user accepted cookies
    localStorage.setItem("cookiesAccepted", true);
  });
}
