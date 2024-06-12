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

const createDropdownMenu = (category) => {
  return `
    <div class="absolute bg-white shadow-md mt-1 rounded-md">
      <ul class="text-left">
        ${category
          .map(
            (item) =>
              `<li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">${item}</li>`
          )
          .join("")}
      </ul>
    </div>
  `;
};

const navDesign = () => {
  const navLinks = [
    {
      id: "feature_btn",
      href: "../pages/feature.html",
      text: "New & Featured",
      dropdown: [
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
      id: "men_btn",
      href: "../pages/men.html",
      text: "Men",
      dropdown: [
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
      id: "women_btn",
      href: "../pages/women.html",
      text: "Women",
      dropdown: [
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
      id: "kid_btn",
      href: "../pages/kid.html",
      text: "Kids",
      dropdown: [
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
    { id: "acc_btn", href: "", text: "Jordan", dropdown: [] },
    { id: "", href: "", text: "Sale", dropdown: [] },
  ];

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
      <div id="nav_bar" class="md:my-0 w-full my-2 navbar-layout hidden sm:flex items-center justify-center">
        <div class="nav-bar flex items-center mx-auto justify-between w-full max-w-[1850px] px-6">
          <div>
            <a href="../../src/pages/home.html">
              <img class="nav-logo max-w-[65px]" src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png" alt="" />
            </a>
          </div>
          <ul class="flex gap-6 text-[17px] lg:ml-[150px]">
            ${navLinks
              .map(
                (link) => `
                  <li class="relative" id="${link.id}">
                    <a class="p-1" href="${link.href}">
                      <span class="hover:text-gray-300 hidden sm:flex">${
                        link.text
                      }</span>
                    </a>
                    ${
                      link.dropdown.length > 0
                        ? createDropdownMenu(link.dropdown)
                        : ""
                    }
                  </li>
                `
              )
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
          <button id="hamburger-btn"><i class="fa-solid fa-bars text-[23px]"></i></button>
        </div>
      </div>
      
      <div id="hamburger-content" class="bg-white duration-300 top-0 fixed left-[100%] z-[13] max-w-[600px] h-[200vh] sm:opacity-0 opacity-100">
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
    `;
};

// Function to initialize the accordion functionality
const initializeAccordion = () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionContent = header.nextElementSibling;
      accordionContent.classList.toggle("open");

      if (accordionContent.classList.contains("open")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = "0";
      }

      const rotateIcon = header.querySelector(".rotate-icon");
      rotateIcon.classList.toggle("rotate-180");
    });
  });
};

// Function to initialize the hamburger menu functionality
const initializeHamburgerMenu = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerContent = document.getElementById("hamburger-content");
  const hamburgerCloseBtn = document.getElementById("hamburger-close-btn");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerContent.classList.toggle("open");
    if (hamburgerContent.classList.contains("open")) {
      hamburgerContent.style.left = "50%";
    } else {
      hamburgerContent.style.left = "100%";
    }
  });

  hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerContent.classList.remove("open");
    hamburgerContent.style.left = "100%";
  });
};

// Function to initialize the dropdown functionality
const initializeDropdown = () => {
  const dropdownLinks = document.querySelectorAll("#nav_bar .relative");

  dropdownLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const dropdownMenu = link.querySelector(".absolute");
      if (dropdownMenu) {
        dropdownMenu.style.display = "block";
      }
    });

    link.addEventListener("mouseleave", () => {
      const dropdownMenu = link.querySelector(".absolute");
      if (dropdownMenu) {
        dropdownMenu.style.display = "none";
      }
    });
  });
};

// Call the functions when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", navDesign());
  initializeAccordion();
  initializeHamburgerMenu();
  initializeDropdown();
});
