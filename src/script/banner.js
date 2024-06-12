const bannerMessages = [
  "Big savings at Nike: Limited time!",
  "Score great deals at Nike today!",
  "Huge discounts on Nike products now!",
  "Shop now for Nike's best prices!",
  "Get your favorite Nike gear discounted!",
];

const banner = () => {
  return `
    <div class="slide-container relative w-full bg-[#f7f7f7] mx-auto">
      <div class="text-wrapper text-[14px] cursor-pointer underline relative w-full h-[50px] mx-auto overflow-hidden text-center">
        ${bannerMessages
          .map(
            (message, index) => `
          <p class="${
            index === 0 ? "active" : ""
          } absolute underline underline-offset-1 w-full h-full top-[15px]" style="left: ${
              index === 0 ? "0" : "-100%"
            };">
            ${message}
          </p>
        `
          )
          .join("")}
      </div>
      <div class="btn-container hidden">
        <button class="prev"><i class="fa-solid fa-angle-left"></i></button>
        <button class="next"><i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  `;
};

class Banner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = banner();

    const images = this.querySelectorAll(".text-wrapper > p");
    const nextBtn = this.querySelector(".next");
    const prevBtn = this.querySelector(".prev");

    let counter = 0;

    const nextSlide = () => {
      images[counter].style.animation = "nextOut 0.5s forwards";
      counter = (counter + 1) % images.length;
      images[counter].style.animation = "nextIn 0.5s forwards";
    };

    const prevSlide = () => {
      images[counter].style.animation = "prevOut 0.5s forwards";
      counter = counter === 0 ? images.length - 1 : counter - 1;
      images[counter].style.animation = "prevIn 0.5s forwards";
    };

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    let myInterval;

    const autoSliding = () => {
      myInterval = setInterval(nextSlide, 2800);
    };

    autoSliding();

    const slideContainer = this.querySelector(".slide-container");
    slideContainer.addEventListener("mouseover", () =>
      clearInterval(myInterval)
    );
    slideContainer.addEventListener("mouseleave", autoSliding);
  }
}

customElements.define("banner-component", Banner);
