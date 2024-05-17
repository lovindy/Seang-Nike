const footerMember = () => {
    return `
    <section class="w-full max-w-[1600px] mx-auto pt-20 pb-10">
    <h1 class="text-[26px] px-4">Frequently Asked Questions</h1>
    <div class="transition">
      <!-- header -->
      <div
        class="accordion-header pt-20 rotate-text-1 cursor-pointer transition flex px-5 items-center justify-between h-12">
        <h3 class="text-[20px]">What is Nike Membership?</h3>
        <img class="rotate-icon-1 size-[20px] rotate-360" src="../images/home-icon/down-arrow.png" alt="" />
      </div>
      <!-- Content -->
      <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
        <ul>
          <p class="py-10 text-[18px]">
            Nike Membership is access to the very best of Nike through any of our
            apps, exclusive products, and Member-only experiences. Nike Members
            also enjoy free shipping on orders of $50 or more, 60-day Wear Test,
            and receipt-less returns. It’s free and easy to join. <span
              class="underline underline-offset-4 text-[20px]">Sign Up.</span>
          </p>
        </ul>
      </div>
    </div>
    <hr class="flex border-[1px] my-10 bg-black">
    </hr>
  
    <div class="transition">
      <!-- header -->
      <div
        class="accordion-header pt-10 rotate-text-1 cursor-pointer transition flex px-5 items-center justify-between h-12">
        <h3 class="text-[20px]">Am I a Nike Member?</h3>
        <img class="rotate-icon-1 size-[20px] rotate-360" src="../images/home-icon/down-arrow.png" alt="" />
      </div>
      <!-- Content -->
      <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
        <ul>
          <p class="py-10 text-[18px]">
            Maybe! If you’ve ever logged into a Nike app, then yes, yes you are.
            Welcome back! If not, let’s change that. <span class="underline underline-offset-4 text-[20px]">Sign
              Up.</span>
          </p>
        </ul>
      </div>
    </div>
    <hr class="flex border-[1px] my-10 bg-black">
    </hr>
  
    <div class="transition">
      <!-- header -->
      <div
        class="accordion-header pt-10 rotate-text-1 cursor-pointer transition flex px-5 items-center justify-between h-12">
        <h3 class="text-[20px]">Is Nike Membership free?</h3>
        <img class="rotate-icon-1 size-[20px] rotate-360" src="../images/home-icon/down-arrow.png" alt="" />
      </div>
      <!-- Content -->
      <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
        <ul>
          <p class="py-10 text-[18px]">
            100% yes. Members enjoy all the benefits of Nike Membership at no cost, because once you’re in, we got you.
            Zero money gets you access to all of it.<span class="underline underline-offset-4 text-[20px]">Sign Up.</span>
          </p>
        </ul>
      </div>
    </div>
    <hr class="flex border-[1px] my-10 bg-black">
    </hr>
  
  </section>
    `
}

class FooterMember extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footerMember();
    }
}

customElements.define('footer-member-component', FooterMember);

