const membership = () => {
  return `
    <section class="member px-4 pb-4 pt-6">
    <div
      class="w-full pt-6 pb-4 max-w-[1600px] mx-auto flex justify-between items-center">
      <p class="text-[26px]">Membership</p>
      <span class="space-x-2">
        <button
          id="prev-shop"
          class="hover:text-white w-[40px] h-[40px] rounded-full bg-gray-200">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button
          id="next-shop"
          class="hover:text-white w-[40px] h-[40px] rounded-full bg-gray-200">
          <i class="fa-solid fa-chevron-right"></i></button
      ></span>
    </div>
  
    <div class="max-w-[1600px] flex mx-auto overflow-x-hidden">
      <div class="flex gap-2 text-center duration-300" id="shop-slider">
        <!-- original card -->
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m1.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Member Product</p>
              <p class="text-white text-[24px] pb-4">Your Exclusive Access</p>
              <a href="../pages/member.html"
                ><button
                  class="px-4 py-2 rounded-full bg-white hover:bg-gray-300">
                  Shop
                </button></a
              >
            </div>
          </div>
        </div>
  
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m2.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Member Rewards</p>
              <p class="text-white text-[24px] pb-4">How We Say Thank You</p>
              <a href="../pages/member.html"
                ><button
                  class="px-4 py-2 rounded-full bg-white hover:bg-gray-300">
                  Celebration
                </button></a
              >
            </div>
          </div>
        </div>
  
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m3.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Sports & Wellness Apps</p>
              <p class="text-white text-[24px] pb-4">Movement Where</p>
              <a href="../pages/member.html"
                ><button
                  class="px-4 py-2 rounded-full bg-white hover:bg-gray-300">
                  Move
                </button></a
              >
            </div>
          </div>
        </div>
  
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m4.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Nike By You</p>
              <p class="text-white text-[24px] pb-4">
                Your Customizztion Service
              </p>
              <a href="../pages/member.html"
                ><button
                  class="px-4 py-2 rounded-full bg-white hover:bg-gray-300">
                  Customize
                </button></a
              >
            </div>
          </div>
        </div>
  
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m5.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Your Ultimate</p>
              <p class="text-white text-[24px] pb-4">Sneaker Community</p>
              <a href="../pages/member.html"
                ><button
                  class="px-4 py-2 rounded-full bg-white hover:bg-gray-300">
                  Explore
                </button></a
              >
            </div>
          </div>
        </div>
  
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m6.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Member Interest</p>
              <p class="text-white text-[24px] pb-4">Shop Your Way</p>
              <a href="../pages/member.html"
                ><button
                  class="px-4 py-2 rounded-full bg-white hover:bg-gray-300">
                  Add Interest
                </button></a
              >
            </div>
          </div>
        </div>
  
        <div class="w-full" id="card-shop">
          <div class="relative w-[400px]">
            <img
              class="w-full h-full object-cover"
              src="../images/home-picture/m7.jpeg"
              alt="" />
            <div class="absolute bottom-10 left-10 flex flex-col items-start">
              <p class="text-white">Be Alive With Nike</p>
              <p class="text-white text-[24px] pb-4">
                Rise above, shine with Nike.
              </p>
              <button class="px-4 py-2 rounded-full bg-white">Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    `
}

class Membership extends HTMLElement {
  connectedCallback() {
    this.innerHTML = membership();

    const shopPrev = document.querySelector("#prev-shop");
    const shopNext = document.querySelector("#next-shop");
    const shopImage = document.querySelector("#shop-slider");
    const shopSlider = document.querySelectorAll("#card-shop");

    let currentIndexShop = 0;

    function nextShop() {
      if (currentIndexShop < 1) {
        currentIndexShop = (currentIndexShop + 1) % shopSlider.length;
        updateShop();
      }
    }

    function prevShop() {
      if (currentIndexShop > 0) {
        currentIndexShop =
          (currentIndexShop - 1 + shopSlider.length) % shopSlider.length;
        updateShop();
      }
    }

    function updateShop() {
      const offset = -currentIndexShop * 408; // Adjust this value as needed
      shopImage.style.transform = `translateX(${offset}px)`;
    }

    shopPrev.addEventListener("click", prevShop);
    shopNext.addEventListener("click", nextShop);
  }
}

customElements.define('membership-component', Membership);

