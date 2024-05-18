// design layout
const banner = () => {
    return `
    <div class="slide-container relative w-full bg-[#f7f7f7] mx-auto">
        <div class="text-wrapper text-[14px] cursor-pointer underline relative w-full h-[50px] mx-auto overflow-hidden text-center">
            <p class="active absolute underline underline-offset-1 w-full h-full top-[15px]">
                Big savings at Nike: Limited time!
            </p>
            <p class="absolute underline underline-offset-1 w-full h-full top-[15px] left-[-100%]">
                Score great deals at Nike today!
            </p>
            <p class="absolute underline underline-offset-1 w-full h-full top-[15px] left-[-100%]">
                Huge discounts on Nike products now!
            </p>
            <p class="absolute underline underline-offset-1 w-full h-full top-[15px] left-[-100%]">
                Shop now for Nike's best prices!
            </p>
            <p class="absolute underline underline-offset-1 w-full h-full top-[15px] left-[-100%]">
                Get your favorite Nike gear discounted!
            </p>
        </div>
        <div class="btn-container hidden">
            <button class="prev"><i class="fa-solid fa-angle-left"></i></button>
            <button class="next"><i class="fa-solid fa-angle-right"></i></button>
        </div>
    </div>
    `;
  }
// call back function
  class Banner extends HTMLElement {
    connectedCallback() {
      this.innerHTML = banner();
  
      const images = document.querySelectorAll(".text-wrapper > p");
      const nextBtn = document.querySelector(".next");
      const prevBtn = document.querySelector(".prev");
  
      let counter = 0;
  
      nextBtn.addEventListener("click", nextSlide);
      function nextSlide() {
        images[counter].style.animation = "nextOut 0.5s forwards";
        if (counter >= images.length - 1) {
          counter = 0;
        } else {
          counter++;
        }
        images[counter].style.animation = "nextIn 0.5s forwards";
      }
  
      prevBtn.addEventListener("click", prevSlide);
      function prevSlide() {
        images[counter].style.animation = "prevOut 0.5s forwards";
        if (counter == 0) {
          counter = images.length - 1;
        } else {
          counter--;
        }
        images[counter].style.animation = "prevIn 0.5s forwards";
      }
  
      function autoSliding() {
        myInterval = setInterval(function () {
          nextSlide();
        }, 2800);
      }
      autoSliding();
  
      const slideContainer = document.querySelector(".slide-container");
      slideContainer.addEventListener("mouseover", function () {
        clearInterval(myInterval);
      });
  
      slideContainer.addEventListener("mouseleave", function () {
        autoSliding();
      });
    }
  }
  customElements.define('banner-component', Banner);
  
  
  