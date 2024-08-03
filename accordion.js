export function accordions() {
  document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".acc-block");

    accordions.forEach(function (acc) {
      acc.addEventListener("click", function () {
        this.classList.toggle("acc");
      });
    });
  });
}
