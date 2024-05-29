// Data of each carousel
const carouselData = {
    trending: [
      {
        img: "../images/home-picture/e1.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e2.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e3.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e4.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e5.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e1.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e2.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/e3.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
    ],
    classicSpotlight: [
      {
        img: "../images/home-picture/black1.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black2.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black3.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black4.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black5.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black6.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black7.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
      {
        img: "../images/home-picture/black8.jpeg",
        description: "Nike apparel merges fashion, function.",
        price: "",
      },
    ],
    shopByClassic: [
      {
        img: "../images/home-picture/shoes1.jpeg",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes2.jpeg",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes3.jpeg",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes4.png",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes5.jpeg",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes6.jpeg",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes7.jpeg",
        description: "",
        price: "",
      },
      {
        img: "../images/home-picture/shoes1.jpeg",
        description: "",
        price: "",
      },
    ],
    

  };
  
  

// carousel card design
const carousel = (data, title, align_text) => {
  return `
        <div class="carousel-container bg-white flex justify-between w-full px-4 max-w-[1600px] mx-auto py-4">
            <div class="w-full flex justify-between items-center">
                <p class="text-2xl">${title}</p>
                <div class="gap-4 flex">
                    <button class="prev-btn hover:text-white w-10 h-10 rounded-full bg-gray-200" disabled>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="next-btn hover:text-white w-10 h-10 rounded-full bg-gray-200">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="carousel-content px-4 w-full max-w-[1600px] flex mx-auto overflow-hidden">
            <div class="slider flex gap-3 ${align_text} transition-transform duration-300">
                ${data
                  .map(
                    (item) => `
                    <div class="card-slider flex-shrink-0 w-72 md:w-[24rem]">
                        <div class="bg-white rounded-lg overflow-hidden">
                            <img class="w-full object-cover" src="${item.img}" alt="" />
                            <div class="py-4">
                                <p class="text-base md:text-lg mb-2">${item.description}</p>
                                <p class="text-sm md:text-lg font-medium">${item.price}</p>
                            </div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;
};

class Carousel extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Trending";
    const align_text = this.getAttribute("align_text") || "text-center";
    const carouselType = this.getAttribute("carouselType") || "trending";
    const carouselStyle = carouselData[carouselType];
    const data = carouselStyle || [];
    this.innerHTML = carousel(data, title, align_text);

    const cardPrev = this.querySelector(".prev-btn");
    const cardNext = this.querySelector(".next-btn");
    const cardImage = this.querySelector(".slider");
    const cardSlider = this.querySelectorAll(".card-slider");

    let currentIndexCard = 0;

    const nextCard = () => {
      if (currentIndexCard < cardSlider.length - 4) {
        currentIndexCard++;
        updateCard();
      }
    };

    const prevCard = () => {
      if (currentIndexCard > 0) {
        currentIndexCard--;
        updateCard();
      }
    };

    const updateCard = () => {
      const cardWidth =
        cardSlider[0].clientWidth +
        parseInt(window.getComputedStyle(cardSlider[0]).marginRight); // Card width plus margin
      const offset = -currentIndexCard * cardWidth;
      cardImage.style.transform = `translateX(${offset}px)`;

      // Update button states
      cardPrev.disabled = currentIndexCard === 0;
      cardNext.disabled = currentIndexCard === cardSlider.length - 1;
    };

    cardPrev.addEventListener("click", prevCard);
    cardNext.addEventListener("click", nextCard);

    // Initial button state update
    updateCard();
  }
}

customElements.define("carousel-component-1", Carousel);
