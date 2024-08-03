"use strict";

export function sliderfnc() {
  let dataSlider = [
    {
      id: 1,
      imgUrl: "./carImg/audi-1.png",
      title: "Audi",
      price: "50 000$",
    },
    {
      id: 2,
      imgUrl: "./carImg/bmw-1.png",
      title: "BMW",
      price: "70 000$",
    },
    {
      id: 3,
      imgUrl: "./carImg/ferrari-1.png",
      title: "Ferrari",
      price: "2 500 000$",
    },
    {
      id: 4,
      imgUrl: "./carImg/lamborgini-2.png",
      title: "Lamborgini",
      price: "200 000$",
    },
    {
      id: 5,
      imgUrl: "./carImg/mersedes-1.png",
      title: "Mersedes",
      price: "120 000$",
    },
    {
      id: 6,
      imgUrl: "./carImg/mersedes-2.png",
      title: "Mersedes",
      price: "140 000$",
    },
    {
      id: 7,
      imgUrl: "./carImg/porsch911.png",
      title: "porsche 911",
      price: "130 000$",
    },
    {
      id: 8,
      imgUrl: "./carImg/porsche.png",
      title: "porsche",
      price: "130 000$",
    },
  ];

  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderContent = document.getElementById("slider-content");

  let slider = 0;

  function createDivTag() {
    const divEl = document.createElement("div");
    return divEl;
  }

  function createImgTag(item) {
    let imageEl = document.createElement("div");
    imageEl.setAttribute("style", `background-image: url(${item.imgUrl});`);
    imageEl.classList.add("image-el");
    return imageEl;
  }

  function createTitleTag(item) {
    const h2El = document.createElement("h2");
    h2El.classList.add("title-h2");
    h2El.innerText = item.title;
    return h2El;
  }

  function createPriceTag(item) {
    const price = document.createElement("h3");
    price.classList.add("price-h3");
    price.innerText = item.price;
    return price;
  }

  function SetSlide() {
    const Div = createDivTag();
    const image = createImgTag(dataSlider[slider]);
    const title = createTitleTag(dataSlider[slider]);
    const price = createPriceTag(dataSlider[slider]);
    const Dotebi = createDots();
    //dots

    Div.appendChild(image);

    Div.appendChild(title);
    Div.appendChild(price);
    Div.appendChild(Dotebi);
    sliderContent.innerHTML = "";
    sliderContent.appendChild(Div);
  }

  function clickArrowRight() {
    if (slider === dataSlider.length - 1) {
      slider = 0;
      SetSlide();
      return;
    }
    slider++;
    SetSlide();
  }
  function clickArrowLeft() {
    if (slider === 0) {
      slider = dataSlider.length - 1;
      SetSlide();
      return;
    }
    slider--;
    SetSlide();
  }

  arrowLeft.addEventListener("click", clickArrowLeft);
  arrowRight.addEventListener("click", clickArrowRight);

  setInterval(clickArrowRight, 3000);
  SetSlide();

  function createDots() {
    const dotParent = document.createElement("div"); // Corrected line
    dotParent.classList.add("dots-parent");
    dataSlider.forEach((Element) => {
      const dotChild = document.createElement("div");
      dotChild.classList.add("dot-child");
      dotChild.setAttribute("dot-id", Element.id - 1);
      dotParent.appendChild(dotChild);
      dotChild.addEventListener("click", function () {
        let idDots = this.getAttribute("dot-id");
        slider = idDots;
        SetSlide();
      });
    });
    return dotParent;
  }
}

sliderfnc();
