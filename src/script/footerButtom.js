const footerFindAStore = () => {
  return `
  <footer class="footer-bottom-layout bg-black w-full">
    <div class="max-w-[1600px] mx-auto p-6 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
      <ul class="font-medium text-[14px] text-white leading-8 md:pt-0 pt-4">
        <h1 class="cursor-pointer">RESOURCES</h1>
        <h1 class="cursor-pointer">GIFT CARDS</h1>
        <h1 class="cursor-pointer">FIND A STORE</h1>
        <h1 class="cursor-pointer">BECOME A MEMBER</h1>
        <h1 class="cursor-pointer">NIKE X NBA</h1>
        <h1 class="cursor-pointer">NIKE JOURNAL</h1>
        <h1 class="cursor-pointer">Site Feedback</h1>
      </ul>
  
      <ul class="leading-8 text-[12px] text-[#757575] md:pt-0 pt-4">
        <h1 class="text-[14px] text-white">HELP</h1>
        <p class="hover:text-white">Get Help</p>
        <p class="hover:text-white">Order Status</p>
        <p class="hover:text-white">Shipping and Delivery</p>
        <p class="hover:text-white">Returns</p>
        <p class="hover:text-white">Order Cancellation</p>
        <p class="hover:text-white">Payment Options</p>
        <p class="hover:text-white">Gift Card Balance</p>
        <p class="hover:text-white">Contact Us</p>
      </ul>
  
      <ul class="leading-8 text-[12px] text-[#757575] md:pt-0 pt-4">
        <h1 class="text-[14px] text-white">COMPANY</h1>
        <p class="hover:text-white">About Nike</p>
        <p class="hover:text-white">News</p>
        <p class="hover:text-white">Careers</p>
        <p class="hover:text-white">Investors</p>
        <p class="hover:text-white">Order Cancellation</p>
        <p class="hover:text-white">Purpose</p>
        <p class="hover:text-white">Sustainability</p>
      </ul>
  
      <ul class="leading-8 text-[12px] text-[#757575] md:pt-0 pt-4">
        <h1 class="text-[14px] text-white">PROMOTIONS & DISCOUNTS</h1>
        <p class="hover:text-white">Student</p>
        <p class="hover:text-white">Military</p>
        <p class="hover:text-white">Teacher</p>
        <p class="hover:text-white">First Responders & Medical</p>
        <p class="hover:text-white">Professionals</p>
        <p class="hover:text-white">Birthday</p>
      </ul>
  
      <ul class="flex gap-2 lg:pt-0 pt-6">
        <a href="#"
          ><img
            class="w-[30px] rounded-full hover:bg-white bg-gray-300"
            src="../images/home-icon/twitter.svg"
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[30px] rounded-full hover:bg-white bg-gray-300"
            src="../images/home-icon/facebook.svg"
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[30px] rounded-full hover:bg-white bg-gray-300"
            src="../images/home-icon/youtube.svg"
            alt=""
        /></a>
        <a href="#"
          ><img
            class="w-[30px] rounded-full hover:bg-white bg-gray-300"
            src="../images/home-icon/instagram.svg"
            alt=""
        /></a>
      </ul>
    </div>
  
    <!-- sub-footer -->
    <div
      class="max-w-[1600px] mx-auto p-10 flex flex-col justify-between">
      <div class="w-full">
          <ul class="gap-6 flex justify-end text-[#757575] text-[12px]">
              <p class="hover:text-white">Guides</p>
              <p class="hover:text-white">Terms of Sale</p>
              <p class="hover:text-white">Terms of Use</p>
              <p class="hover:text-white">Nike Privacy Policy</p>
              <p class="hover:text-white">Your Privacy ChoicesYour Privacy Choices</p>
            </ul>
      </div>
  
      <div class="flex justify-between items-center">
        <span class="flex items-center gap-4"
          ><img class="cursor-pointer w-[20px]" src="../images/home-icon/location.svg" alt="" />
          <p class="text-white cursor-pointer text-[12px]">United States</p>
          <p class="text-[#757575] text-[12px]">
            © 2024 Nike, Inc. All Rights Reserved
          </p></span
        >
        <p class="text-[12px] text-[#757575] hover:text-white">CA Supply Chains Act</p>
      </div>
    </div>
  </footer>
  `
}

class FindAStore extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerFindAStore();
  }
}
customElements.define("find-a-store-footer", FindAStore);