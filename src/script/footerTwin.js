const footerData = {
  upperFooter: [
    {
      title: "Featured",
      items: ["Air Force 1", "Jordan 1", "Metcon", "Air Max 270"],
    },
    {
      title: "Shoes",
      items: ["All Shoes", "Jordan Shoes", "Basketball Shoes", "Tennis Shoes"],
    },
    {
      title: "Clothing",
      items: [
        "All Clothing",
        "Tops & T-Shirts",
        "Hoodies & Pullovers",
        "Sports Bras",
      ],
    },
    {
      title: "Kids",
      items: [
        "Infant & Toddler Shoes",
        "Kids Shoes",
        "Kids Basketball Shoes",
        "Kids Backpacks",
      ],
    },
  ],
  bottomFooter: [
    {
      title: "RESOURCES",
      items: [
        "GIFT CARDS",
        "FIND A STORE",
        "BECOME A MEMBER",
        "NIKE X NBA",
        "NIKE JOURNAL",
        "Site Feedback",
      ],
    },
    {
      title: "HELP",
      items: [
        "Get Help",
        "Order Status",
        "Shipping and Delivery",
        "Returns",
        "Order Cancellation",
        "Payment Options",
        "Gift Card Balance",
        "Contact Us",
      ],
    },
    {
      title: "COMPANY",
      items: [
        "About Nike",
        "News",
        "Careers",
        "Investors",
        "Purpose",
        "Sustainability",
      ],
    },
    {
      title: "PROMOTIONS & DISCOUNTS",
      items: [
        "Student",
        "Military",
        "Teacher",
        "First Responders & Medical",
        "Professionals",
        "Birthday",
      ],
    },
    {
      title: null,
      items: [
        "../images/home-icon/twitter.svg",
        "../images/home-icon/facebook.svg",
        "../images/home-icon/youtube.svg",
        "../images/home-icon/instagram.svg",
      ],
      isIcon: true,
    },
  ],
  subFooter: [
    {
      items: [
        "Guides",
        "Terms of Sale",
        "Terms of Use",
        "Nike Privacy Policy",
        "Your Privacy Choices",
      ],
    },
    {
      country: "United States",
      message: "© 2024 Nike, Inc. All Rights Reserved",
      supplyChain: "CA Supply Chains Act",
    },
  ],
};

const footerTwin = () => {
  const generateList = (section) => {
    return `
      <ul class="flex flex-col leading-8 lg:pt-0 pt-4">
        <h1 class="pb-2">${section.title}</h1>
        ${section.items
          .map(
            (item) => `<p class="text-[#747476] hover:text-black">${item}</p>`
          )
          .join("")}
      </ul>
    `;
  };

  const generateBottomList = (section) => {
    if (section.isIcon) {
      return `
        <ul class="flex gap-2 lg:pt-0 pt-6">
          ${section.items
            .map(
              (src) =>
                `<a href="#"><img class="w-[30px] rounded-full hover:bg-white bg-gray-300" src="${src}" alt="" /></a>`
            )
            .join("")}
        </ul>
      `;
    } else {
      return `
        <ul class="leading-8 text-[12px] text-[#757575] md:pt-0 pt-4">
          <h1 class="text-[14px] text-white">${section.title}</h1>
          ${section.items
            .map((item) => `<p class="hover:text-white">${item}</p>`)
            .join("")}
        </ul>
      `;
    }
  };

  return `
    <!-- Upper footer -->
    <footer class="w-full px-6 sm:py-16">
      <div class="max-w-screen-xl hidden sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto">
        ${footerData.upperFooter
          .map((section) => generateList(section))
          .join("")}
      </div>
    </footer>

    <!-- Bottom footer -->
    <footer class="bg-black w-full">
      <div class="max-w-[1600px] mx-auto p-6 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
        ${footerData.bottomFooter
          .map((section) => generateBottomList(section))
          .join("")}
      </div>

      <!-- Sub-footer -->
      <div class="max-w-[1600px] mx-auto p-10 flex flex-col justify-between">
        <div class="w-full">
          <ul class="gap-6 flex justify-end text-[#757575] text-[12px]">
            ${footerData.subFooter[0].items
              .map((item) => `<p class="hover:text-white">${item}</p>`)
              .join("")}
          </ul>
        </div>

        <div class="flex justify-between items-center">
          <span class="flex items-center gap-4">
            <img class="cursor-pointer w-[20px]" src="../images/home-icon/location.svg" alt="" />
            <p class="text-white cursor-pointer text-[12px]">${
              footerData.subFooter[1].country
            }</p>
            <p class="text-[#757575] text-[12px]">${
              footerData.subFooter[1].message
            }</p>
          </span>
          <p class="text-[12px] text-[#757575] hover:text-white">${
            footerData.subFooter[1].supplyChain
          }</p>
        </div>
      </div>
    </footer>
  `;
};

class FooterTwin extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerTwin();
  }
}

customElements.define("footer-twin", FooterTwin);
