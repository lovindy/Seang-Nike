const footerAccordionData = [
  {
    header: "Featured",
    items: [
      "Air Force 1",
      "Jordan 1",
      "React Runner",
      "Zoom Fly",
      "VaporMax",
      "Joyride",
      "Flyknit Racer",
      "Zoom Freak",
    ],
  },
  {
    header: "Shoes",
    items: [
      "Air Force 1",
      "Jordan 1",
      "Kyrie Flytrap",
      "Zoom Fly",
      "VaporMax",
      "Joyride",
      "Flyknit Racer",
      "SB Dunk",
    ],
  },
  {
    header: "Clothing",
    items: [
      "Sportswear Tech",
      "Pro Compression",
      "Dry Training",
      "Yoga Essential",
      "Pro Hyperwarm",
      "Epic Luxe",
      "Pro Compression",
      "Dry Training",
      "Yoga Essential",
    ],
  },
  {
    header: "Kids",
    items: [
      "Star Runner",
      "Team Hustle",
      "Court Borough",
      "Flex Runner",
      "Revolution Flex",
      "Sunray Protect",
      "Pico",
      "Downshifter",
    ],
  },
];

const footerAccordion = () => {
  return `
  <style>
    .accordion-content-20 {
      transition: max-height 0.4s ease-out, padding 0.4s ease;
      max-height: 0;
    }
  </style>
  <footer class="block sm:hidden">
    ${footerAccordionData
      .map(
        (section) => `
      <div class="transition">
        <div class="accordion-header-20 cursor-pointer transition flex space-x-5 px-5 items-center h-12">
          <h3>${section.header}</h3>
        </div>
        <div class="accordion-content-20 px-5 pt-0 overflow-hidden max-h-0">
          <ul class="leading-8 text-[#616161] font-light pl-9">
            ${section.items
              .map((item) => `<p class="hover:text-black">${item}</p>`)
              .join("")}
          </ul>
        </div>
      </div>
    `
      )
      .join("")}
  </footer>
  `;
};

class FooterAccordion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerAccordion();
    const accordionHeaders = this.querySelectorAll(".accordion-header-20");
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent = header.nextElementSibling;
        const isOpen = accordionContent.style.maxHeight !== "0px";

        accordionHeaders.forEach((h) => {
          const content = h.nextElementSibling;
          content.style.maxHeight = "0px";
        });

        if (!isOpen) {
          accordionContent.style.maxHeight = `${
            accordionContent.scrollHeight + 32
          }px`;
        }
      });
    });
  }
}
customElements.define("footer-accordion", FooterAccordion);
