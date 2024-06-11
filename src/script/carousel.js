// Data of each carousel
const carouselData = {
  // Data for "Trending" carousel
  // Data for "Trending" carousel
  trending: [
    {
      img: "../images/home-picture/e1.jpeg",
      description: "Stylish Nike gear available.",
      price: "",
    },
    {
      img: "../images/home-picture/e2.jpeg",
      description: "Stay ahead with Nike.",
      price: "",
    },
    {
      img: "../images/home-picture/e3.jpeg",
      description: "Fashion meets functionality here.",
      price: "",
    },
    {
      img: "../images/home-picture/e4.jpeg",
      description: "Elevate your style now.",
      price: "",
    },
    {
      img: "../images/home-picture/e5.jpeg",
      description: "Comfort and style blend.",
      price: "",
    },
    {
      img: "../images/home-picture/e1.jpeg",
      description: "Iconic Nike apparel designs.",
      price: "",
    },
    {
      img: "../images/home-picture/e2.jpeg",
      description: "Experience unmatched Nike quality.",
      price: "",
    },
    {
      img: "../images/home-picture/e3.jpeg",
      description: "Performance-driven Nike clothing.",
      price: "",
    },
  ],

  // Data for "Shop By Sport" carousel
  classicSpotlight: [
    {
      img: "../images/home-picture/black1.jpeg",
      description: "Top-notch Nike sportswear.",
      price: "",
    },
    {
      img: "../images/home-picture/black2.jpeg",
      description: "Designed for active lifestyles.",
      price: "",
    },
    {
      img: "../images/home-picture/black3.jpeg",
      description: "Elite gear for athletes.",
      price: "",
    },
    {
      img: "../images/home-picture/black4.jpeg",
      description: "Innovative sportswear solutions here.",
      price: "",
    },
    {
      img: "../images/home-picture/black5.jpeg",
      description: "Unleash potential with Nike.",
      price: "",
    },
    {
      img: "../images/home-picture/black6.jpeg",
      description: "Athletic wear redefined brilliantly.",
      price: "",
    },
    {
      img: "../images/home-picture/black7.jpeg",
      description: "Peak performance with style.",
      price: "",
    },
    {
      img: "../images/home-picture/black8.jpeg",
      description: "Engineered for sport excellence.",
      price: "",
    },
  ],

  // Data for "Shop By Classic" carousel
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
  // Data for "Shop the Essential Men" carousel
  shopEssentialMen: [
    {
      img: "https://i.pinimg.com/564x/5f/75/94/5f7594d28895c8f910e106a61735b6e2.jpg",
      description: "",
      price: "",
    },
    {
      img: "../images/home-picture/y1.jpeg",
      description: "",
      price: "",
    },
    {
      img: "https://i.pinimg.com/564x/69/f5/8a/69f58af5a7899258c1682fe8b9460d59.jpg",
      description: "",
      price: "",
    },
    {
      img: "../images/home-picture/y2.jpeg",
      description: "",
      price: "",
    },
    {
      img: "https://i.pinimg.com/564x/38/91/bc/3891bc63bcd136111f0d243e09e848b6.jpg",
      description: "",
      price: "",
    },
    {
      img: "../images/home-picture/y3.jpeg",

      description: "",
      price: "",
    },
  ],
  // Data for "Shop the Essential Women" carousel
  shopEssentialWomen: [
    {
      img: "../images/home-picture/w2.jpeg",
      description: "Just Do It Now",
      price: "",
    },
    {
      img: "../images/home-picture/w3.jpeg",
      description: "Run Faster, Feel Better",
      price: "",
    },
    {
      img: "../images/home-picture/w4.jpeg",
      description: "Step Up Your Style",
      price: "",
    },
    {
      img: "../images/home-picture/w5.jpeg",
      description: "Power Your Every Move",
      price: "",
    },
    {
      img: "../images/home-picture/ws1.png",
      description: "Defy Limits, Reach Goals",
      price: "",
    },
  ],
  // Data for "Popular Right Now" carousel
  popularRightNow: [
    {
      img: "../images/home-picture/ws1.png",
      description: "Run with unstoppable comfort",
      price: "$130",
    },
    {
      img: "../images/home-picture/ws3.png",
      description: "Style meets athletic prowess",
      price: "$140",
    },
    {
      img: "../images/home-picture/ws2.png",
      description: "Elevate your game today",
      price: "$150",
    },
    {
      img: "../images/home-picture/ws4.png",
      description: "Push beyond your limits",
      price: "$160",
    },
    {
      img: "../images/home-picture/ws5.png",
      description: "Innovate your performance wear",
      price: "$170",
    },
    {
      img: "../images/home-picture/ky2.jpeg",
      description: "Iconic style, unbeatable performance",
      price: "$180",
    },
    {
      img: "../images/home-picture/f3.png",
      description: "Embrace the future, excel",
      price: "$190",
    },
    {
      img: "../images/home-picture/ws1.png",
      description: "Fuel your every step",
      price: "$200",
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
                                <p class="text-sm md:text-lg">${item.price}</p>
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
    const alignText = this.getAttribute("align_text") || "text-center";
    const carouselType = this.getAttribute("carouselType") || "trending";
    const carouselStyle = carouselData[carouselType];
    const data = carouselStyle || [];
    this.innerHTML = carousel(data, title, alignText);

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

customElements.define("carousel-component", Carousel);
