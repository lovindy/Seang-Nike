const headerDesign = () => {
  return `
<section class=".header-layout bg-[#f5f5f5] flex items-center justify-center z-[100]">
  <header
    class="head-bar px-6 items-center justify-between w-full max-w-[1850px] h-[36px] hidden md:flex">
    <!-- logo nike -->
    <div class="imgage-logo size-[50px] flex items-center justify-between">
      <a class="jordan-logo" href=""
        ><img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
          alt=""
      /></a>
      <a
        aria-label="Converse"
        data-type="click_navBrandBar"
        data-path="Converse"
        href="https://www.nike.com/w/converse-shoes-akmjxzy7ok"
        class="pre-brand-item d-sm-ib prl3-sm"
        data-pre="ILink"
        ><svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
          <path
            d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
        </svg>
      </a>
    </div>
    <!-- right side text -->
    <div class="">
      <ul class="flex justify-center items-center gap-2 text-[12px]">
        <li>
          <a href="../pages/findaStore.html"
            ><span class="hover:text-gray-300">Find a Store</span></a
          >
        </li>
        <div class="h-[18px] w-[1px] bg-black"></div>
        <li class="group">
          <a href="#"><span id="help" class="hover:text-gray-300">Help</span></a>
          <!-- top-[100%] -->
          <ul
            id="header-dropdown"
            class="duration-300 leading-8 w-[200px] items-start flex flex-col z-[70] rounded-xl fixed top-[-400px] group-hover:top-[38px] bg-white text-[#616161] text-[13px] pl-4">
            <h1 class="text-[16px] text-black">Help</h1>
            <p class="font-light hover:text-black">Order Status</p>
            <p class="font-light hover:text-black">Shipping & Delivery</p>
            <p class="font-light hover:text-black">Returns</p>
            <p class="font-light hover:text-black">Order Cancellation</p>
            <p class="font-light hover:text-black">Size Charts</p>
            <p class="font-light hover:text-black">Contacts Us</p>
            <p class="font-light hover:text-black">Membership</p>
            <p class="font-light hover:text-black">Promotions & Discounts</p>
            <p class="font-light hover:text-black">Product Advice</p>
            <p class="font-light hover:text-black">Send Us Feedback</p>
          </ul>
        </li>
        <div class="line h-[18px] w-[1px] bg-black"></div>
        <li>
          <a href="../pages/member.html"><span class="hover:text-gray-300">Join Us</span></a>
        </li>
        <div class="line h-[18px] w-[1px] bg-black"></div>
        <li>
          <a href="#"><span class="hover:text-gray-300">Sign In</span></a>
        </li>
      </ul>
    </div>
  </header>
</section>
    `
}

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = headerDesign();
  }
}
customElements.define('header-component', Header);

