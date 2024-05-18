const connectThrough = () => {
    return `
    <section class="member px-4 pb-4 pt-6">
  <div
    class="w-full pt-6 pb-4 max-w-[1600px] mx-auto justify-between items-center">
    <p class="text-[26px]">Connect Through Membership</p>
  </div>

  <div class="max-w-[1600px] mx-auto overflow-x-hidden">
    <div class="gap-2 flex flex-col md:flex-row text-center duration-300">
      <!-- original card -->
      <div class="w-full">
        <div class="relative mx-auto max-w-[428px] flex justify-center items-center">
          <img
            class="w-full h-full object-cover"
            src="../images/home-picture/mlogo1.jpeg"
            alt="" />
          <div class="absolute flex flex-col items-center">
            <h1 class="text-[26px] pt-6">Nike App</h1>
            <p class="pt-3">Keep up daily with the bes of Nike,</p>
            <p>personalized for you</p>
            <button class="underline underline-offset-2 pt-10 hover:text-gray-300">Explore</button>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="relative max-w-[428px] mx-auto flex justify-center items-center">
          <img
            class="w-full h-full object-cover"
            src="../images/home-picture/mlogo2.jpeg"
            alt="" />
          <div class="absolute flex flex-col items-center">
            <h1 class="text-[26px] pt-6">Nike Run Club</h1>
            <p class="pt-3">Run with us in the</p>
            <p>Nike Run Club App</p>
            <button class="underline underline-offset-2 pt-10 hover:text-gray-300">Explore</button>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="relative max-w-[428px] mx-auto flex justify-center items-center">
          <img
            class="w-full h-full object-cover"
            src="../images/home-picture/mlogo3.jpeg"
            alt="" />
          <div class="absolute flex flex-col items-center">
            <h1 class="text-[26px] pt-6">Nike Training Club</h1>
            <p class="pt-3">Move with the best in the</p>
            <p>Nike Training Club App.</p>
            <button class="underline underline-offset-2 pt-10 hover:text-gray-300">Explore</button>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="relative max-w-[428px] mx-auto flex justify-center items-center">
          <img
            class="w-full h-full object-cover"
            src="../images/home-picture/mlogo4.jpeg"
            alt="" />
          <div class="absolute flex flex-col items-center">
            <h1 class="text-[26px] pt-6">SNKRS</h1>
            <p class="pt-3">Find the freshest drops in the</p>
            <p>SNKRS App.</p>
            <button class="underline underline-offset-2 pt-10 hover:text-gray-300">Explore</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `
}

class ConnectThrough extends HTMLElement {
    connectedCallback() {
        this.innerHTML = connectThrough();
    }
}

customElements.define('connect-through-component', ConnectThrough);

