const women_content = document.querySelector(".women-content-layout");
fetch("../components/bodywomen.html")
  .then((res) => res.text())
  .then((data) => {
    women_content.innerHTML = data;

    // shop the essential
    const prevBTN = document.querySelector("#prev-btn");
    const nextBTN = document.querySelector("#next-btn");
    const sliderImg = document.querySelector("#slider");
    const cardSlider = document.querySelectorAll("#card-slider");

    let currentIndex = 0;

    function nextSlide() {
      if (currentIndex < 1) {
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
      const offset = -currentIndex * 608; // Adjust this value as needed
      sliderImg.style.transform = `translateX(${offset}px)`;
    }
    prevBTN.addEventListener("click", prevSlide);
    nextBTN.addEventListener("click", nextSlide);

    const classicPrev = document.querySelector("#classic-prev");
    const classicNext = document.querySelector("#classic-next");
    const classicImage = document.querySelector("#classic-slider");
    const classicSlider = document.querySelectorAll("#classic-img");

    let currentIndexclassic = 0;

    function nextclassic() {
      if (currentIndexclassic < 3) {
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
      if (currentIndexShop < 2) {
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
      const offset = -currentIndexShop * 508; // Adjust this value as needed
      shopImage.style.transform = `translateX(${offset}px)`;
    }

    shopPrev.addEventListener("click", prevShop);
    shopNext.addEventListener("click", nextShop);

    const prevBTN1 = document.querySelector("#prev-btn1");
    const nextBTN1 = document.querySelector("#next-btn1");
    const sliderImg1 = document.querySelector("#slider1");
    const cardSlider1 = document.querySelectorAll("#card-slider1");

    let currentIndex1 = 0;

    function nextSlide1() {
      if (currentIndex1 < 4) {
        currentIndex1 = (currentIndex1 + 1) % cardSlider1.length;
        updateSlider1();
      }
    }

    function prevSlide1() {
      if (currentIndex1 > 0) {
        currentIndex1 =
          (currentIndex1 - 1 + cardSlider1.length) % cardSlider1.length;
        updateSlider1();
      }
    }

    function updateSlider1() {
      const offset = -currentIndex1 * 360; // Adjust this value as needed
      sliderImg1.style.transform = `translateX(${offset}px)`;
    }
    prevBTN1.addEventListener("click", prevSlide1);
    nextBTN1.addEventListener("click", nextSlide1);
    

  })
  .catch((error) => console.error("Error fetching included file:", error));