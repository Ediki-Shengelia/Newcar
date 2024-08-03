"use strict";

export function Filter() {
  let userFilter = document.getElementById("input-filter");
  let list = document.getElementById("list");
  let array = [];

  async function fetchData() {
    try {
      let response = await fetch(
        "https://ediki-shengelia.github.io/test333/server.json"
      );
      if (!response.ok) {
        throw new Error("can not fetch data");
      }
      let data = await response.json();
      let Js = data.data;

      let fragment = document.createDocumentFragment();
      Js.forEach((element) => {
        let liEl = document.createElement("li");
        let imgEl = document.createElement("img");
        imgEl.classList.add("StyleImage");
        imgEl.src = element.imgUrl;

        let title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = element.title;

        let year = document.createElement("h2");
        year.classList.add("Styletitle");
        year.textContent = `Year : ${element.Year}`;

        let price = document.createElement("h2");
        price.classList.add("Styletitle");
        price.textContent = `price : ${element.price}`;

        let location = document.createElement("h2");
        location.classList.add("Styletitle");
        location.textContent = `Location : ${element.Location}`;

        fragment.appendChild(imgEl);

        fragment.appendChild(year);
        fragment.appendChild(price);
        fragment.appendChild(location);
        liEl.appendChild(title);
        liEl.appendChild(fragment);
        array.push(liEl);
        list.appendChild(liEl);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();

  function Filter(index) {
    array.forEach((element) => {
      if (element.innerText.toLowerCase().includes(index.toLowerCase())) {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
  }
  userFilter.addEventListener("keyup", function () {
    Filter(this.value);
  });
}
