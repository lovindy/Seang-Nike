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
    let navBar = document.getElementById("nav_bar");

    hoverBtn.addEventListener("mouseenter", () => {
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

// banner section
const banner = document.querySelector(".banner-layout");
fetch("../components/banner.html")
  .then((res) => res.text())
  .then((data) => {
    banner.innerHTML = data;
    // let left_click = 1;
    // let right_click = 2;
  })
  .catch((error) => console.error("Error fetching included file:", error));

// body section
const body = document.querySelector(".bodyhome-layout");
fetch("../components/bodyhome.html")
  .then((res) => res.text())
  .then((data) => {
    body.innerHTML = data;
    // let left_click = 1;
    // let right_click = 2;
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
