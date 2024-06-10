const featureDesign = (imgFeatured_1, imgFeatured_2, des_1, title_1, des_2, title_2) => {
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
          <img src="${imgFeatured_1}" alt="" />
        </div>
        <div class="btn-shop1 absolute left-16 bottom-20 leading-8">
          <p><span class="text-white">${des_1}</span></p>
          <p>
            <span class="text-[26px] text-white"
              >${title_1}</span
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
          <img src="${imgFeatured_2}" alt="" />
        </div>
        <div class="btn-shop2 absolute left-16 bottom-20 leading-8">
          <p><span class="text-white">${des_2}</span></p>
          <p>
            <span class="text-[26px] text-white"
              >${title_2}</span
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
    const imgFeatured1 = this.getAttribute('imgFeatured_1');
    const imgFeatured2 = this.getAttribute('imgFeatured_2');
    const des1 = this.getAttribute('des_1');
    const title1 = this.getAttribute('title_1');
    const des2 = this.getAttribute('des_2');
    const title2 = this.getAttribute('title_2');
    this.innerHTML = featureDesign(imgFeatured1, imgFeatured2, des1, title1, des2, title2);
  }
}

customElements.define('feature-design-component', FeatureDesign);

