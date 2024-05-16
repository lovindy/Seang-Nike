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

    // hamburger button
    const hamburgerBTN = document.querySelector("#hamburger-btn");
    const hamburgerContent = document.querySelector("#hamburger-content");
    const hamburgerClose = document.querySelector("#hamburger-close-btn");
    const overlaySm = document.querySelector("#overlay-bg-sm");

    hamburgerBTN.addEventListener("click", () => {
      hamburgerContent.classList.add("left-[50%]");
      hamburgerContent.classList.add("opacity-100");
      overlaySm.classList.remove("hidden");
    });

    hamburgerClose.addEventListener("click", () => {
      hamburgerContent.classList.remove("left-[50%]");
      hamburgerContent.classList.remove("opacity-100");
      overlaySm.classList.add("hidden");
    });

    overlaySm.addEventListener("click", () => {
      hamburgerContent.classList.remove("left-[50%]");
      hamburgerContent.classList.remove("opacity-100");
      overlaySm.classList.add("hidden");
    });

    const rotateIcons = document.querySelectorAll(".rotate-icon");
    const rotateTexts = document.querySelectorAll(".rotate-text");

    rotateTexts.forEach((rotateText, index) => {
      rotateText.addEventListener("click", () => {
        rotateIcons[index].classList.toggle("rotate-180");
        rotateIcons[index].classList.toggle("rotate-360");
      });
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
