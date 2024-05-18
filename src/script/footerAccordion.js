const footerAccordion = () => {
  return `
  <style>
  .accordion-content-20 {
    transition: max-height 0.4s ease-out, padding 0.4s ease;
    max-height: 0;
  }
</style>
<footer class="block sm:hidden">
  <div class="transition">
    <!-- header -->
    <div
      class="accordion-header-20 cursor-pointer transition flex space-x-5 px-5 items-center h-12">
      <h3>Featured</h3>
    </div>
    <!-- Content -->
    <div class="accordion-content-20 px-5 pt-0 overflow-hidden max-h-0">
      <ul class="leading-8 text-[#616161] font-light pl-9">
        <p class="hover:text-black">Air Force 1</p>
        <p class="hover:text-black">Jordan 1</p>
        <p class="hover:text-black">React Runner</p>
        <p class="hover:text-black">Zoom Fly</p>
        <p class="hover:text-black">VaporMax</p>
        <p class="hover:text-black">Joyride</p>
        <p class="hover:text-black">Flyknit Racer</p>
        <p class="hover:text-black">Zoom Freak</p>
      </ul>
    </div>
  </div>
  
  <div class="transition">
    <!-- header -->
    <div
      class="accordion-header-20 cursor-pointer transition flex space-x-5 px-5 items-center h-12">
      <h3>Shoes</h3>
    </div>
    <!-- Content -->
    <div class="accordion-content-20 px-5 pt-0 overflow-hidden max-h-0">
      <ul class="leading-8 text-[#616161] font-light pl-9">
        <p class="hover:text-black">Air Force 1</p>
        <p class="hover:text-black">Jordan 1</p>
        <p class="hover:text-black">Kyrie Flytrap</p>
        <p class="hover:text-black">Zoom Fly</p>
        <p class="hover:text-black">VaporMax</p>
        <p class="hover:text-black">Joyride</p>
        <p class="hover:text-black">Flyknit Racer</p>
        <p class="hover:text-black">SB Dunk</p>
      </ul>
    </div>
  </div>
  
  <div class="transition">
    <!-- header -->
    <div
      class="accordion-header-20 cursor-pointer transition flex space-x-5 px-5 items-center h-12">
      <h3>Clothing</h3>
    </div>
    <!-- Content -->
    <div class="accordion-content-20 px-5 pt-0 overflow-hidden max-h-0">
      <ul class="leading-8 text-[#616161] font-light pl-9">
        <p class="hover:text-black">Sportswear Tech</p>
        <p class="hover:text-black">Pro Compression</p>
        <p class="hover:text-black">Dry Training</p>
        <p class="hover:text-black">Yoga Essential</p>
        <p class="hover:text-black">Pro Hyperwarm</p>
        <p class="hover:text-black">Epic Luxe</p>
        <p class="hover:text-black">Pro Compression</p>
        <p class="hover:text-black">Dry Training</p>
        <p class="hover:text-black">Yoga Essential</p>
      </ul>
    </div>
  </div>
  
  <div class="transition">
    <!-- header -->
    <div
      class="accordion-header-20 cursor-pointer transition flex space-x-5 px-5 items-center h-12">
      <h3>Kids</h3>
    </div>
    <!-- Content -->
    <div class="accordion-content-20 px-5 pt-0 overflow-hidden mb-4 max-h-0">
      <ul class="leading-8 text-[#616161] font-light pl-9">
        <p class="hover:text-black">Star Runner</p>
        <p class="hover:text-black">Team Hustle</p>
        <p class="hover:text-black">Court Borough</p>
        <p class="hover:text-black">Flex Runner</p>
        <p class="hover:text-black">Revolution Flex</p>
        <p class="hover:text-black">Sunray Protect</p>
        <p class="hover:text-black">Pico</p>
        <p class="hover:text-black">Downshifter</p>
      </ul>
    </div>
  </div>
</footer>

  `
}

class FooterAccordion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerAccordion();
    const accordionHeader = document.querySelectorAll(".accordion-header-20");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent =
          header.parentElement.querySelector(".accordion-content-20");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
          }px`; // Fix interpolation
        } else {
          accordionContent.style.maxHeight = "0px"; // Add quotes
        }
      });
    });
  }
}
customElements.define("footer-accordion", FooterAccordion);

