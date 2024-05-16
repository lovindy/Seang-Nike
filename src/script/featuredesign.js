const featureDesign = () => {
    return `
    <section class="p-[20px] pt-10">
    <div
      class="flex max-w-[1600px] mx-auto text-[26px] justify-between items-center">
      <p class="py-[20px]">Featured</p>
    </div>
    <!-- images -->
    <div
      class="flex gap-2 sm:flex-row flex-col justify-center max-w-[1600px] mx-auto">
      <div class="relative">
        <div class="image-shop1">
          <img src="../images//home-picture/nike-just-do-it.jpg" alt="" />
        </div>
        <div class="btn-shop1 absolute left-16 bottom-20 leading-8">
          <p><span class="text-white">Nike Alphafly 3</span></p>
          <p>
            <span class="text-[26px] text-white"
              >Push Beyond What's Possible</span
            >
          </p>
          <button
            class="mt-2 bg-white h-[35px] w-[70px] rounded-full hover:bg-gray-300">
            Shop
          </button>
        </div>
      </div>
      <div class="relative">
        <div class="image-shop2">
          <img src="../images/home-picture/nike_lyhour.jpeg" alt="" />
        </div>
        <div class="btn-shop2 absolute left-16 bottom-20 leading-8">
          <p><span class="text-white">Jordan New Arrivals</span></p>
          <p>
            <span class="text-[26px] text-white"
              >Air Jordan 4 'Vivid Sulfur'</span
            >
          </p>
          <button
            class="mt-2 bg-white h-[35px] w-[70px] rounded-full hover:bg-gray-300">
            Shop
          </button>
        </div>
      </div>
    </div>
  </section>`;
 }
 
 class FeatureDesign extends HTMLElement {
    connectedCallback() {
        this.innerHTML = featureDesign();
    }
}

customElements.define('feature-design-component', FeatureDesign);

