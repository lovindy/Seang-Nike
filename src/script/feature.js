const feature = document.querySelector(".feature-layout");
fetch("../components/feature.html")
  .then((res) => res.text())
  .then((data) => {
    feature.innerHTML = data;

    // get button element
    const filterBtn = document.querySelector("#filter-btn");
    const hide = document.querySelector("#hide");
    const show = document.querySelector("#show");

    // get item element
    const filterItem = document.querySelector("#filterItems");
    const rightContent = document.querySelector("#right-content");

    // function action
    filterBtn.addEventListener("click", () => {
      filterItem.classList.toggle("hidden");
      rightContent.classList.add("w-[100%]");
      if (filterItem.classList.contains("hidden")) {
        hide.innerHTML = "Hide Filters";
      } else {
        show.innerHTML = "Show Filters";
      }
    });

    // responvie filter
    const resBTN = document.querySelector("#responsive-btn");
    const resItem = document.querySelector("#responsive-filter");
    const resPick = document.querySelector("#responsive-pick");
    const closeFilter = document.querySelector("#close-filter");
    
    resBTN.addEventListener("click", () => {
      resItem.classList.toggle("opacity-0");
      resItem.classList.toggle("opacity-100");
      resItem.classList.toggle("pointer-events-none");
      resItem.classList.add("top-[0%]");
      resPick.classList.add("z-[2]");
      rightContent.classList.toggle("hidden")
    });

    closeFilter.addEventListener("click", () => {
      resItem.classList.toggle("opacity-0");
      resItem.classList.toggle("opacity-100");
      resItem.classList.toggle("pointer-events-none");
      resItem.classList.remove("top-[0%]");
    });

    // toggle
    const toggleBTN = document.querySelector("#toggle-btn");
    const toggleCircle = document.querySelector("#toggle-circle");

    toggleBTN.addEventListener("click", () => {
      // toggleCircle.classList.toggle("")
      toggleCircle.classList.toggle("translate-x-[100%]");
      if (toggleCircle.classList.contains("translate-x-[100%]")) {
        toggleBTN.classList.add("bg-blue-400");
      } else {
        toggleBTN.classList.remove("bg-blue-400");
      }
    });
    const toggleBTN1 = document.querySelector("#toggle-btn-1");
    const toggleCircle1 = document.querySelector("#toggle-circle-1");

    toggleBTN1.addEventListener("click", () => {
      // toggleCircle.classList.toggle("")
      toggleCircle1.classList.toggle("translate-x-[100%]");
      if (toggleCircle1.classList.contains("translate-x-[100%]")) {
        toggleBTN1.classList.add("bg-blue-400");
      } else {
        toggleBTN1.classList.remove("bg-blue-400");
      }
    });

    // create card component
    // create array object
    const arrayCard = [
      {
        imgUrl: "../images/home-picture/f1.jpeg",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 3,
        price: 290,
      },
      {
        imgUrl: "../images/home-picture/f2.png",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 4,
        price: 390,
      },
      {
        imgUrl: "../images/home-picture/f3.png",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 1,
        price: 150,
      },
      {
        imgUrl: "../images/home-picture/t1.png",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 9,
        price: 130,
      },
      {
        imgUrl: "../images/home-picture/f4.png",
        redText: "Coming Soon",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 6,
        price: 490,
      },
      {
        imgUrl: "../images/home-picture/f5.png",
        redText: "Coming Soon",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 13,
        price: 190,
      },
    ];

    // create function to loop over the array card
    const createCardComponent = () => {
      return `
      <div id="right-content" class="z-[3] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:px-4 px-0">
                    ${arrayCard
                      .map((card) => {
                        return `
                        <div class="pb-10">
                            <img src="${card.imgUrl}" alt="">
                            <h1 class="text-red-700 font-medium">${card.redText}</h1>
                            <h1 class="font-medium">${card.shoesBrand}</h1>
                            <p class="text-gray-300" >${card.menWomen}</p>
                            <p class="text-gray-300">${card.color} Color</p>
                            <h1 class="font-medium">$${card.price}</h1>
                        </div>
                        `;
                      })
                      .join("")}
                      </div>        
        `;
    };

    // create component name to use it
    class CardComponent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = createCardComponent();
      }
    }
    customElements.define("featured-component", CardComponent);

    // sort by btn
    const sortBTN = document.querySelector("#sort-btn");
    const sortContent = document.querySelector("#sort-content");
    const sortImg = document.querySelector("#sort-img");

    sortBTN.addEventListener("click", () => {
      sortContent.classList.toggle("opacity-0");
      sortContent.classList.toggle("opacity-100");
      sortImg.classList.toggle("rotate-180");
      sortImg.classList.toggle("rotate-360");
    });

    // moveplaceHolder
    const inputBox = document.querySelector("#locationInput");
    const locationMove = document.querySelector("#location-move");
    function moveUp() {
      locationMove.classList.add("top-[38%]", "text-xs", "left-14");
      locationMove.innerHTML = "Location";
    }
    function moveDown() {
      locationMove.classList.remove("top-[38%]", "text-xs", "left-14");
      locationMove.innerHTML = "Search Location";
    }
    inputBox.addEventListener("focus", () => {
      moveUp();
    });

    inputBox.addEventListener("focusout", () => {
      inputLength = inputBox.value.length;
      // check if value > 0 => moveUp else moveDown
      if (inputLength == 0) {
        moveDown();
      }
    });

    const pickUpBTN = document.querySelector("#toggle-btn");
    const closeBTN = document.querySelector("#close-btn");
    const pickUpContent = document.querySelector("#pickup-content");

    toggleBTN1.addEventListener("click", () => {
      pickUpContent.classList.toggle("invisible");
      toggleCircle1.classList.toggle("translate-x-[100%]");
    });

    pickUpBTN.addEventListener("click", () => {
      pickUpContent.classList.toggle("invisible");
    });

    closeBTN.addEventListener("click", () => {
      pickUpContent.classList.add("invisible");
      toggleCircle.classList.toggle("translate-x-[100%]");
      toggleBTN.classList.remove("bg-blue-400");
      toggleBTN1.classList.remove("bg-blue-400");
    });

    // accordion drop
    const accordionHeader = document.querySelectorAll(".accordion-header-feature");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent =
          header.parentElement.querySelector(".accordion-content-feature");
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

    // rotate text and icon
    const rotateIcons = document.querySelectorAll(".rotate-icon-2");
    const rotateTexts = document.querySelectorAll(".rotate-text-2");

    rotateTexts.forEach((rotateText, index) => {
      rotateText.addEventListener("click", () => {
        rotateIcons[index].classList.toggle("rotate-180");
        rotateIcons[index].classList.toggle("rotate-360");
      });
    });

  })
  .catch((error) => console.error("Error fetching included file:", error));
