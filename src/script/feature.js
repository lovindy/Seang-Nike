const feature = document.querySelector(".feature-layout");
fetch("../components/feature.html")
  .then((res) => res.text())
  .then((data) => {
    feature.innerHTML = data;

    // get button element
    const filterBtn = document.querySelector("#filter-btn");
    // get item element
    const filterItem = document.querySelector("#filter");
    const rightContent = document.querySelector("#right-content");

    // function action
    filterBtn.addEventListener("click", () => {
      filterItem.classList.toggle("hidden");
      rightContent.classList.add("w-[100%]");
      if (filterItem.classList.contains("hidden")) {
        filterBtn.innerHTML =
          '<span class="cursor-pointer">Show Filters</span><img class="size-[20px] cursor-pointer" src="../images/home-icon/newspaper.png" alt="">';
      } else {
        filterBtn.innerHTML =
          '<span class="cursor-pointer">Hide Filters</span><img class="size-[20px] cursor-pointer" src="../images/home-icon/newspaper.png" alt="">';
      }
    });
    // create card component
    // create array object
    const arrayCard = [
      {
        imgUrl: "../images/home-picture/f1.png",
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
        imgUrl: "../images/home-picture/f3.png",
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
      <div id="right-content" class="grid md:grid-cols-3 grid-cols-2 md:grid-rows3 grid-rows-2 gap-4 md:px-4 px-0">
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
  })
  .catch((error) => console.error("Error fetching included file:", error));