// navbar.js

const createNavLink = (id, href, text) => {
  return `
      <li id="${id}">
        <a class="p-1" href="${href}">
          <span class="hover:text-gray-300 hidden sm:flex">${text}</span>
        </a>
      </li>
    `;
};

const createAccordionSection = (title, links) => {
  const linkItems = links
    .map((link) => `<p class="hover:text-black">${link}</p>`)
    .join("");
  return `
      <div class="transition">
        <div class="accordion-header rotate-text cursor-pointer transition flex px-5 items-center justify-between h-12">
          <h3 class="text-[24px]">${title}</h3>
          <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
        </div>
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
          <ul class="leading-8 text-[#616161] font-light pl-9">
            ${linkItems}
          </ul>
        </div>
      </div>
    `;
};

const navDesign = () => {
  const navLinks = [
    {
      id: "feature_btn",
      href: "../pages/feature.html",
      text: "New & Featured",
    },
    { id: "men_btn", href: "../pages/men.html", text: "Men" },
    { id: "women_btn", href: "../pages/women.html", text: "Women" },
    { id: "kid_btn", href: "../pages/kid.html", text: "Kids" },
    { id: "acc_btn", href: "", text: "Jordan" },
    { id: "", href: "", text: "Sale" },
  ];
  function generateMenuColumns(columns) {
    return columns
      .map(
        (column) => `
      <ul class="px-[80px]">
        ${column
          .map(
            (item) => `
          <li><a class="text-black text-sm align-text-bottom hover:text-gray-400 cursor-pointer" href="#">${item}</a></li>
        `
          )
          .join("")}
      </ul>
    `
      )
      .join("");
  }

  const accordionSections = [
    {
      title: "New & Featured",
      links: [
        "Air Force 1",
        "Jordan 1",
        "Kyrie Flytrap",
        "Zoom Fly",
        "VaporMax",
        "Joyride",
        "Flyknit Racer",
        "SB Dunk",
      ],
    },
    {
      title: "Men",
      links: [
        "Classics Men",
        "Jordan 1",
        "React Runner",
        "Zoom Fly",
        "VaporMax",
        "Joyride",
        "Flyknit Racer",
        "Zoom Freak",
      ],
    },
    {
      title: "Women",
      links: [
        "Clothing",
        "Jordan 1",
        "Kyrie Flytrap",
        "Zoom Fly",
        "VaporMax",
        "Joyride",
        "Flyknit Racer",
        "SB Dunk",
      ],
    },
    {
      title: "Kids",
      links: [
        "Star Runner",
        "Team Hustle",
        "Court Borough",
        "Flex Runner",
        "Revolution Flex",
        "Sunray Protect",
        "Pico",
        "Downshifter",
      ],
    },
    {
      title: "Sale",
      links: [
        "Sportswear Tech",
        "Pro Compression",
        "Dry Training",
        "Yoga Essential",
        "Pro Hyperwarm",
        "Epic Luxe",
        "Pro Compression",
        "Dry Training",
        "Yoga Essential",
      ],
    },
    {
      title: "Jordan",
      links: [
        "Air Force 1",
        "Jordan 1",
        "React Runner",
        "Zoom Fly",
        "VaporMax",
        "Joyride",
        "Flyknit Racer",
        "Zoom Freak",
      ],
    },
  ];

  return `
      <div id="nav_bar" class="md:my-0 w-full my-2 navbar-layout hidden sm:flex items-center justify-center z-[100]">
        <div class="nav-bar flex items-center mx-auto justify-between w-full max-w-[1850px] px-6">
          <div>
            <a href="../../src/pages/home.html">
              <img class="nav-logo max-w-[65px]" src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png" alt="" />
            </a>
          </div>
          <ul class="flex gap-6 text-[17px] text-nowrap lg:ml-[150px]">
            ${navLinks
              .map((link) => createNavLink(link.id, link.href, link.text))
              .join("")}
          </ul>
          <div class="nav-right bg-white items-center justify-center gap-[15px] hover:inline-flex hidden sm:flex">
            <div class="search-icon relative items-center">
              <i class="fa-solid fa-magnifying-glass absolute text-[25px] left-[10px] top-[8px]"></i>
              <input class="search pl-[40px] hover:bg-gray-100 h-[35px] max-w-[160px] rounded-[20px]" type="Search" placeholder="Search" />
            </div>
            <a class="hidden md:flex" href="#"><i class="fa-regular fa-heart text-[23px]"></i></a>
            <a class="hidden md:flex" href="#"><i class="fa-solid fa-bag-shopping text-[23px]"></i></a>
          </div>
        </div>
      </div>
      
      <div class="w-full flex justify-between items-center py-2 px-4 sm:hidden gap-4">
        <div>
          <a href="../../src/pages/home.html">
            <img class="nav-logo max-w-[65px]" src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png" alt="" />
          </a>
        </div>
        <div class="space-x-2">
          <a href="#"><i class="fa-solid fa-magnifying-glass text-[23px]"></i></a>
          <a href="#"><i class="fa-regular fa-heart text-[23px]"></i></a>
          <a href="#"><i class="fa-solid fa-bag-shopping text-[23px]"></i></a>
          <button id="hamburger-btn" href="#"><i class="fa-solid fa-bars text-[23px]"></i></button>
        </div>
      </div>
      
      <div id="hamburger-content" class="bg-white duration-300 top-0 fixed left-[100%] z-[13] max-w-[400px] h-[200vh] sm:opacity-0 opacity-100">
        <div class="max-w-screen-sm overflow-y-scroll h-screen mx-auto px-4">
          <div class="flex justify-between items-center px-5">
            <span class="flex justify-start pt-6"><img class="size-[15px] invisible cursor-pointer" src="../images/home-icon/close.png" alt=""></span>
            <span class="flex justify-start pt-6"><img id="hamburger-close-btn" class="size-[15px] cursor-pointer" src="../images/home-icon/close.png" alt=""></span>
          </div>
          ${accordionSections
            .map((section) =>
              createAccordionSection(section.title, section.links)
            )
            .join("")}
          <div class="pt-12 px-4 space-y-6">
            <span class="flex items-center gap-6"><img class="size-[35px] object-contain" src="../images/home-icon/nikeball.png" alt="">Jordan</span>
            <span class="flex items-center gap-6"><img class="size-[35px] object-contain" src="../images/home-icon/fashion.png" alt="">Converse</span>
          </div>
          <div class="pt-20 max-w-[280px] px-4">
            <p class="text-[#707072] pb-8">
              Become a Nike Member for the best products, inspiration and stories in sport.
              <span class="inline-block">
                <a href="#" class="text-black text-[20px] hover:underline underline-offset-2 flex items-center gap-1">Learn more</a>
              </span>
            </p>
            <div>
              <btn-component title="Join Us" customClass="bg-black text-white"></btn-component>
              <button class="mt-2 px-4 py-2 hover:border-black rounded-full border-[1px] text-black">Sign In</button>
            </div>
          </div>
          <div class="pt-12 px-4 space-y-6 pb-10">
            <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/shopping-bag.png" alt="">Jordan</span>
            <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/checkout.png" alt="">Converse</span>
            <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/store.png" alt="">Jordan</span>
            <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/question.png" alt="">Converse</span>
          </div>
        </div>
      </div>
      
      <div id="menu-list" class="bg-white text-white w-full flex justify-center duration-300 z-50 md:top-[90px] h-0 absolute overflow-hidden">
        <div id="text-hid" class="mt-10 text-nowrap invisible bg-white max-w-[1850px] flex justify-between">
          ${generateMenuColumns([
            [
              "Air Force 1",
              "Jordan 1 Retro",
              "Air Jordan 11",
              "React Infinity Run",
              "Vapor Max Plus",
              "Zoom Fly 3",
              "Pegasus Trail",
              "Adapt BB",
            ],
            [
              "Air Max 90",
              "Dunk Low Disrupt",
              "Blazer Mid '77",
              "Free Run 5.0",
              "Metcon 6",
              "Phantom Vision",
              "Revolution 5",
              "Winflo 7",
            ],
            [
              "Lebron 18",
              "KD Fly 13",
              "Kyrie 7",
              "PG 4",
              "Giannis Immortality",
              "Kobe 5 Protro",
              "Hyperdunk X",
              "Flyknit Racer",
            ],
            [
              "Mercurial Superfly",
              "Phantom GT Elite",
              "Tiempo Legend 8",
              "Hypervenom Phantom",
              "Magista Obra",
              "Total 90 Laser",
              "CTR360 Maestri",
              "Presto React",
            ],
          ])}
        </div>
      </div>

      
    
      <div id="overlay-bg" class="hidden bg-black/50 pointer-events-none h-screen w-full fixed md:top-[110px] md:top[90px] z-[5]"></div>
      <div id="overlay-bg-sm" class="hidden bg-black/50 h-screen w-full fixed top-0 z-[5]"></div>
    `;
};

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navDesign();

    const hoverElements = [
      document.getElementById("feature_btn"),
      document.getElementById("men_btn"),
      document.getElementById("women_btn"),
      document.getElementById("kid_btn"),
      document.getElementById("acc_btn"),
    ];

    const menuList = document.getElementById("menu-list");
    const overlayBG = document.getElementById("overlay-bg");
    const textHid = document.getElementById("text-hid");

    const showMenu = () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.toggle("hidden");
      textHid.classList.remove("invisible");
    };

    const hideMenu = () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    };

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", showMenu);
      element.addEventListener("mouseleave", hideMenu);
    });

    menuList.addEventListener("mouseenter", showMenu);
    menuList.addEventListener("mouseleave", hideMenu);

    // Hamburger button
    const hamburgerBTN = document.querySelector("#hamburger-btn");
    const hamburgerContent = document.querySelector("#hamburger-content");
    const hamburgerClose = document.querySelector("#hamburger-close-btn");
    const overlaySm = document.querySelector("#overlay-bg-sm");

    const showHamburger = () => {
      hamburgerContent.classList.add("left-[50%]", "opacity-100");
      overlaySm.classList.remove("hidden");
    };

    const hideHamburger = () => {
      hamburgerContent.classList.remove("left-[50%]", "opacity-100");
      overlaySm.classList.add("hidden");
    };

    hamburgerBTN.addEventListener("click", showHamburger);
    hamburgerClose.addEventListener("click", hideHamburger);
    overlaySm.addEventListener("click", hideHamburger);

    // Rotate icons
    const rotateIcons = document.querySelectorAll(".rotate-icon");
    const rotateTexts = document.querySelectorAll(".rotate-text");

    rotateTexts.forEach((rotateText, index) => {
      rotateText.addEventListener("click", () => {
        rotateIcons[index].classList.toggle("rotate-180");
        rotateIcons[index].classList.toggle("rotate-360");
      });
    });
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
  }
}
customElements.define("nav-component", Navbar);
