const men = document.querySelector(".bodymen-layout");
fetch("../components/bodymen.html")
  .then((res) => res.text())
  .then((data) => {
    men.innerHTML = data;

    // trending
    const prevBTN = document.querySelector("#prev-btn");
    const nextBTN = document.querySelector("#next-btn");
    const sliderImg = document.querySelector("#slider");
    const cardSlider = document.querySelectorAll("#card-slider");

    let currentIndex = 0;

    function nextSlide() {
      if (currentIndex < 2) {
        currentIndex = (currentIndex + 1) % cardSlider.length;
        updateSlider();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex =
          (currentIndex - 1 + cardSlider.length) % cardSlider.length;
        updateSlider();
      }
    }

    function updateSlider() {
      const offset = -currentIndex * 538; // Adjust this value as needed
      sliderImg.style.transform = `translateX(${offset}px)`;
    }
    prevBTN.addEventListener("click", prevSlide);
    nextBTN.addEventListener("click", nextSlide);

    // Classic
    const classicPrev = document.querySelector("#classic-prev");
    const classicNext = document.querySelector("#classic-next");
    const classicImage = document.querySelector("#classic-slider");
    const classicSlider = document.querySelectorAll("#classic-img");

    let currentIndexclassic = 0;

    function nextclassic() {
      if (currentIndexclassic < 4) {
        currentIndexclassic = (currentIndexclassic + 1) % classicSlider.length;
        updateclassic();
      }
    }

    function prevclassic() {
      if (currentIndexclassic > 0) {
        currentIndexclassic =
          (currentIndexclassic - 1 + classicSlider.length) %
          classicSlider.length;
        updateclassic();
      }
    }

    function updateclassic() {
      const offset = -currentIndexclassic * 308; // Adjust this value as needed
      classicImage.style.transform = `translateX(${offset}px)`;
    }

    classicPrev.addEventListener("click", prevclassic);
    classicNext.addEventListener("click", nextclassic);

    // shop of membeer
    const shopPrev = document.querySelector("#prev-shop");
    const shopNext = document.querySelector("#next-shop");
    const shopImage = document.querySelector("#shop-slider");
    const shopSlider = document.querySelectorAll("#card-shop");

    let currentIndexShop = 0;

    function nextShop() {
      if (currentIndexShop < 3) {
        currentIndexShop = (currentIndexShop + 1) % shopSlider.length;
        updateShop();
      }
    }

    function prevShop() {
      if (currentIndexShop > 0) {
        currentIndexShop =
          (currentIndexShop - 1 + shopSlider.length) % shopSlider.length;
        updateShop();
      }
    }

    function updateShop() {
      const offset = -currentIndexShop * 408; // Adjust this value as needed
      shopImage.style.transform = `translateX(${offset}px)`;
    }

    shopPrev.addEventListener("click", prevShop);
    shopNext.addEventListener("click", nextShop);

    
    
  })
  .catch((error) => console.error("Error fetching included file:", error));
