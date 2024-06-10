const heroSection = (
  imgURL_1,
  imgURL_2,
  miniTitle,
  title_1,
  title_2,
  description,
  button
) => {
  return `
        <section>
          <div>
            <img class="w-full hidden md:block" src="${imgURL_1}" alt="" />
            <img class="w-full block md:hidden md:px-0 px-4" src="${imgURL_2}" alt="" />
          </div>

          <div class="container m-auto">
            <div class="text-center pt-[50px] pb-[20px]">
              <p class="font-medium">${miniTitle}</p>
              <h1 class="title font-bold md:text-[60px] text-[26px]">
                ${title_1} <br>
                ${title_2}
              </h1>
              <p class="m-2">
                ${description}
              </p>
              <button class="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded-full mt-6">
                ${button}
              </button>
            </div>
          </div>
        </section>
    `;
};

class HeroSection extends HTMLElement {
  connectedCallback() {
    const imgURL1 = this.getAttribute("imgURL_1");
    const imgURL2 = this.getAttribute("imgURL_2");
    const miniTitle = this.getAttribute("miniTitle");
    const title1 = this.getAttribute("title_1");
    const title2 = this.getAttribute("title_2");
    const description = this.getAttribute("description");
    const button = this.getAttribute("button");

    this.innerHTML = heroSection(
      imgURL1,
      imgURL2,
      miniTitle,
      title1,
      title2,
      description,
      button
    );
  }
}

customElements.define("hero-section-component", HeroSection);
