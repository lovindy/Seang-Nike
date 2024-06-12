const footerData = {
  resources: [
    "RESOURCES",
    "GIFT CARDS",
    "FIND A STORE",
    "BECOME A MEMBER",
    "NIKE X NBA",
    "NIKE JOURNAL",
    "Site Feedback",
  ],
  help: [
    "HELP",
    "Get Help",
    "Order Status",
    "Shipping and Delivery",
    "Returns",
    "Order Cancellation",
    "Payment Options",
    "Gift Card Balance",
    "Contact Us",
  ],
  company: [
    "COMPANY",
    "About Nike",
    "News",
    "Careers",
    "Investors",
    "Order Cancellation",
    "Purpose",
    "Sustainability",
  ],
  promotions: [
    "PROMOTIONS & DISCOUNTS",
    "Student",
    "Military",
    "Teacher",
    "First Responders & Medical",
    "Professionals",
    "Birthday",
  ],
  social: [
    { icon: "twitter.svg", alt: "Twitter" },
    { icon: "facebook.svg", alt: "Facebook" },
    { icon: "youtube.svg", alt: "YouTube" },
    { icon: "instagram.svg", alt: "Instagram" },
  ],
  subFooter: [
    "Guides",
    "Terms of Sale",
    "Terms of Use",
    "Nike Privacy Policy",
    "Your Privacy Choices",
  ],
};

const footerFindAStore = () => {
  return `
    <footer class="footer-bottom-layout bg-black w-full">
      <div class="max-w-[1600px] mx-auto p-6 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
        ${createFooterSection(
          footerData.resources,
          "font-medium text-[14px] text-white leading-8"
        )}
        ${createFooterSection(
          footerData.help,
          "leading-8 text-[12px] text-[#757575]"
        )}
        ${createFooterSection(
          footerData.company,
          "leading-8 text-[12px] text-[#757575]"
        )}
        ${createFooterSection(
          footerData.promotions,
          "leading-8 text-[12px] text-[#757575]"
        )}
        ${createSocialLinks(footerData.social)}
      </div>

      <!-- sub-footer -->
      <div class="max-w-[1600px] mx-auto p-10 flex flex-col justify-between">
        <div class="w-full">
          ${createSubFooter(footerData.subFooter)}
        </div>

        <div class="flex justify-between items-center">
          <span class="flex items-center gap-4">
            <img class="cursor-pointer w-[20px]" src="../images/home-icon/location.svg" alt="Location" />
            <p class="text-white cursor-pointer text-[12px]">United States</p>
            <p class="text-[#757575] text-[12px]">© 2024 Nike, Inc. All Rights Reserved</p>
          </span>
          <p class="text-[12px] text-[#757575] hover:text-white">CA Supply Chains Act</p>
        </div>
      </div>
    </footer>
  `;
};

const createFooterSection = (items, className) => {
  return `
    <ul class="${className} md:pt-0 pt-4">
      ${items
        .map((item, index) => {
          if (index === 0) {
            return `<h1 class="text-[14px] text-white">${item}</h1>`;
          } else {
            return `<p class="hover:text-white">${item}</p>`;
          }
        })
        .join("")}
    </ul>
  `;
};

const createSocialLinks = (socialLinks) => {
  return `
    <ul class="flex gap-2 lg:pt-0 pt-6">
      ${socialLinks
        .map(
          (link) => `
        <a href="#">
          <img class="w-[30px] rounded-full hover:bg-white bg-gray-300" src="../images/home-icon/${link.icon}" alt="${link.alt}" />
        </a>
      `
        )
        .join("")}
    </ul>
  `;
};

const createSubFooter = (subFooterLinks) => {
  return `
    <ul class="gap-6 flex justify-end text-[#757575] text-[12px]">
      ${subFooterLinks
        .map((link) => `<p class="hover:text-white">${link}</p>`)
        .join("")}
    </ul>
  `;
};

class FindAStore extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerFindAStore();
  }
}
customElements.define("find-a-store-footer", FindAStore);
