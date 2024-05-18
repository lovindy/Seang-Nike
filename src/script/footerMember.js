const footerMember = () => {
  return `
    <section class="w-full max-w-[1600px] mx-auto pt-20 pb-10">
    <h1 class="text-[26px] px-4">Frequently Asked Questions</h1>
    <div class="transition">
      <!-- header -->
      <div
        class="accordion-header-10 pt-20 rotate-text-10 cursor-pointer transition flex px-5 items-center justify-between h-12">
        <h3 class="text-[20px]">What is Nike Membership?</h3>
        <img class="rotate-icon-10 size-[20px] rotate-360" src="../images/home-icon/down-arrow.png" alt="" />
      </div>
      <!-- Content -->
      <div class="accordion-content-10 px-5 pt-0 overflow-hidden max-h-0">
        <ul>
          <p class="py-10 text-[18px]">
            Nike Membership is access to the very best of Nike through any of our
            apps, exclusive products, and Member-only experiences. Nike Members
            also enjoy free shipping on orders of $50 or more, 60-day Wear Test,
            and receipt-less returns. It’s free and easy to join. <span
              class="underline underline-offset-4 text-[20px]">Sign Up.</span>
          </p>
        </ul>
      </div>
    </div>
    <hr class="flex border-[1px] my-10 bg-black">
    </hr>
  
    <div class="transition">
      <!-- header -->
      <div
        class="accordion-header-10 pt-10 rotate-text-10 cursor-pointer transition flex px-5 items-center justify-between h-12">
        <h3 class="text-[20px]">Am I a Nike Member?</h3>
        <img class="rotate-icon-10 size-[20px] rotate-360" src="../images/home-icon/down-arrow.png" alt="" />
      </div>
      <!-- Content -->
      <div class="accordion-content-10 px-5 pt-0 overflow-hidden max-h-0">
        <ul>
          <p class="py-10 text-[18px]">
            Maybe! If you’ve ever logged into a Nike app, then yes, yes you are.
            Welcome back! If not, let’s change that. <span class="underline underline-offset-4 text-[20px]">Sign
              Up.</span>
          </p>
        </ul>
      </div>
    </div>
    <hr class="flex border-[1px] my-10 bg-black">
    </hr>
  
    <div class="transition">
      <!-- header -->
      <div
        class="accordion-header-10 pt-10 rotate-text-10 cursor-pointer transition flex px-5 items-center justify-between h-12">
        <h3 class="text-[20px]">Is Nike Membership free?</h3>
        <img class="rotate-icon-10 size-[20px] rotate-360" src="../images/home-icon/down-arrow.png" alt="" />
      </div>
      <!-- Content -->
      <div class="accordion-content-10 px-5 pt-0 overflow-hidden max-h-0">
        <ul>
          <p class="py-10 text-[18px]">
            100% yes. Members enjoy all the benefits of Nike Membership at no cost, because once you’re in, we got you.
            Zero money gets you access to all of it.<span class="underline underline-offset-4 text-[20px]">Sign Up.</span>
          </p>
        </ul>
      </div>
    </div>
    <hr class="flex border-[1px] my-10 bg-black">
    </hr>
  
  </section>
    `
}

class FooterMember extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerMember();
    // dropdown
    const accordionHeader = document.querySelectorAll(".accordion-header-10");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent =
          header.parentElement.querySelector(".accordion-content-10");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32
            }px`; // Fix interpolation
        } else {
          accordionContent.style.maxHeight = "0px"; // Add quotes
        }
      });
    });

    const rotateIcons = document.querySelectorAll(".rotate-icon-10");
    const rotateTexts = document.querySelectorAll(".rotate-text-10");

    rotateTexts.forEach((rotateText, index) => {
      rotateText.addEventListener("click", () => {
        rotateIcons[index].classList.toggle("rotate-180");
        rotateIcons[index].classList.toggle("rotate-360");
      });
    });

    // shop carousel
    const shopPrev1 = document.querySelector("#prev-shop-1");
    const shopNext1 = document.querySelector("#next-shop-1");
    const shopImage1 = document.querySelector("#shop-slider-1");
    const shopSlider1 = document.querySelectorAll("#card-shop-1");

    let currentIndexShop1 = 0;

    function nextShop1() {
      if (currentIndexShop1 < 2) {
        currentIndexShop1 = (currentIndexShop1 + 1) % shopSlider1.length;
        updateShop1();
      }
    }

    function prevShop1() {
      if (currentIndexShop1 > 0) {
        currentIndexShop1 =
          (currentIndexShop1 - 1 + shopSlider1.length) % shopSlider1.length;
        updateShop1();
      }
    }

    function updateShop1() {
      const offset = -currentIndexShop1 * 536; // Adjust this value as needed
      shopImage1.style.transform = `translateX(${offset}px)`;
    }
    shopPrev1.addEventListener("click", prevShop1);
    shopNext1.addEventListener("click", nextShop1);
  }
}

customElements.define('footer-member-component', FooterMember);

