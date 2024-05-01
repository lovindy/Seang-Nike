// main section
const header = document.querySelector(".header-layout");
fetch("../components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

// nav-bar component link
const nav_bar = document.querySelector(".navbar-layout");
fetch("../components/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    nav_bar.innerHTML = data;

    let hoverBtn = document.getElementById("feature_btn");
    let menuList = document.getElementById("menu-list");
    let overlayBG = document.getElementById("overlay-bg");
    let textHid = document.getElementById("text-hid");

    hoverBtn.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");
    });
    menuList.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");
    });
    menuList.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    hoverBtn.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    // men, women, kid, accessories
    let menBtn = document.getElementById("men_btn");
    let womenBtn = document.getElementById("women_btn");
    let kidBtn = document.getElementById("kid_btn");
    let accBtn = document.getElementById("acc_btn");

    menBtn.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");

      // men
    });
    menuList.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");

      // men
    });
    menuList.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    menBtn.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    // Women
    womenBtn.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");

      // men
    });
    menuList.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");

      // men
    });
    menuList.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    womenBtn.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    // kid
    kidBtn.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");
    });
    menuList.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");
    });
    menuList.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    kidBtn.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    accBtn.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");

      // men
    });
    menuList.addEventListener("mouseenter", () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");

      // men
    });
    menuList.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });

    accBtn.addEventListener("mouseleave", () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    });
  })
  .catch((error) => console.error("Error fetching included file:", error));

// body section
const body = document.querySelector(".bodyhome-layout");
fetch("../components/bodyhome.html")
  .then((res) => res.text())
  .then((data) => {
    body.innerHTML = data;
    // trending slider
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

    // shop slider
    const shopPrev = document.querySelector("#prev-shop");
    const shopNext = document.querySelector("#next-shop");
    const shopImage = document.querySelector("#shop-slider");
    const shopSlider = document.querySelectorAll("#card-shop");

    let currentIndexShop = 0;

    function nextShop() {
      if (currentIndexShop < 4) {
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

    // classic

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
  })
  .catch((error) => console.error("Error fetching included file:", error));
  
// menu bottom
const menu_bottom = document.querySelector(".menu-bottom-layout");
fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    menu_bottom.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const footer_res = document.querySelector(".footer-res-layout");
fetch("../components/footerRes.html")
  .then((res) => res.text())
  .then((data) => {
    footer_res.innerHTML = data;

    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent =
          header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
          }px`; // Fix interpolation
        } else {
          accordionContent.style.maxHeight = "0px"; // Add quotes
        }
      });
    });
  })
  .catch((error) => console.error("Error fetching included file:", error));
