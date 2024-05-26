const navDesign = () => {
  return `
    <!-- nav bar -->
    <div id="nav_bar"
      class="md:my-0 w-full my-2 navbar-layout hidden sm:flex items-center justify-center">
      <div
        class="nav-bar flex items-center mx-auto justify-between w-full max-w-[1850px] px-6">
        <!-- logo image -->
        <div>
          <a href="../../src/pages/home.html">
            <img
              class="nav-logo max-w-[65px]"
              src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png"
              alt=""
          /></a>
        </div>
        
          <ul class="flex gap-6 text-[17px] lg:ml-[150px]">
            <li id="feature_btn">
              <a class="p-1"  href="../pages/feature.html"
                ><span class="group hover:text-gray-300 hidden sm:flex"
                  >Featured</span
                ></a
              >
            </li>
            <li id="men_btn">
              <a class="p-1"  href="../pages/men.html"
                ><span class="hover:text-gray-300 hidden sm:flex">Men</span></a
              >
            </li>
            <li id="women_btn" >
              <a class="p-1" href="../pages/women.html"
                ><span class="hover:text-gray-300 hidden sm:flex">Women</span></a
              >
            </li>
            <li id="kid_btn">
              <a class="p-1"  href="../pages/kid.html"
                ><span class="hover:text-gray-300 hidden sm:flex">Kids</span></a
              >
            </li>
            <li id="acc_btn">
              <a class="p-1"  href=""
                ><span class="hover:text-gray-300 hidden sm:flex"
                  >Sale</span
                ></a
              >
            </li>
            <li>
              <a class="p-1" href=""
                ><span class="hover:text-gray-300 hidden sm:flex">Jordan</span></a
              >
            </li>
          </ul>
        <!-- right side icon -->
        <div
          class="nav-right bg-white items-center justify-center gap-[15px] hover:inline-flex hidden sm:flex ">
          <div class="search-icon relative items-center">
            <i
              class="fa-solid fa-magnifying-glass absolute text-[25px] left-[10px] top-[8px]"></i>
            <input
              class="search pl-[40px] hover:bg-gray-100 h-[35px] max-w-[160px] rounded-[20px]"
              type="Search"
              placeholder="Search" />
          </div>
          <a class="hidden md:flex" href="#"><i class="fa-regular fa-heart text-[23px]"></i></a>
          <a class="hidden md:flex" href="#"><i class="fa-solid fa-bag-shopping text-[23px]"></i></a>
        </div>
      </div>
    </div>
    
    <!-- responsive -->
    <div class="w-full flex justify-between items-center py-2 px-4 sm:hidden gap-4">
      <div>
        <a href="../../src/pages/home.html">
          <img
            class="nav-logo max-w-[65px]"
            src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png"
            alt=""
        /></a>
      </div>
     <div class="space-x-2">
      <a href="#"><i class="fa-solid fa-magnifying-glass text-[23px]"></i></i></a>
      <a href="#"><i class="fa-regular fa-heart text-[23px]"></i></a>
      <a href="#"><i class="fa-solid fa-bag-shopping text-[23px]"></i></a>
      <button id="hamburger-btn" href="#"><i class="fa-solid fa-bars text-[23px]"></i></button>
    </div>
    </div>
    
     <!-- hamburger content -->
     <div id="hamburger-content" class=" bg-white duration-300 top-0 fixed left-[100%] z-[13] max-w-[400px] h-[200vh] sm:opacity-0 opacity-100">
      <div class="max-w-screen-sm overflow-y-scroll h-screen mx-auto px-4">
        <div class="flex justify-between items-center px-5">
          <span class="flex justify-start pt-6"><img class="size-[15px] invisible cursor-pointer" src="../images/home-icon/close.png" alt=""></span>
        <span class="flex justify-start pt-6"><img id="hamburger-close-btn" class="size-[15px] cursor-pointer" src="../images/home-icon/close.png" alt=""></span>
        </div>
        
        <div class="transition">
          <!-- header -->
          <div
            class="accordion-header rotate-text cursor-pointer transition flex px-5 items-center justify-between h-12">
            <h3 class="text-[24px]">New & Featured</h3>
            <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <ul class="leading-8 text-[#616161] font-light pl-9">
              <a href="../pages/feature.html"><p class="hover:text-black">Air Force 1</p></a>
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
            class="accordion-header rotate-text cursor-pointer transition flex px-5 items-center justify-between h-12">
            <h3 class=" text-[24px]">Men</h3>
            <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <ul class="leading-8 text-[#616161] font-light pl-9">
              <a href="../pages/men.html"><p class="hover:text-black">Classics Men</p></a>
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
            class="accordion-header rotate-text cursor-pointer transition flex px-5 items-center justify-between h-12">
            <h3 class=" text-[24px]">Women</h3>
            <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <ul class="leading-8 text-[#616161] font-light pl-9">
              <a href="../pages/women.html"><p class="hover:text-black">Clothing</p></a>
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
            class="accordion-header rotate-text  cursor-pointer transition flex px-5 items-center justify-between h-12">
            <h3 class="text-[24px]">Kids</h3>
            <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <ul class="leading-8 text-[#616161] font-light pl-9">
              <a href="../pages/kid.html"><p class="hover:text-black">Star Runner</p></a>
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
    
        <div class="transition">
          <!-- header -->
          <div
            class="accordion-header rotate-text cursor-pointer transition flex px-5 items-center justify-between h-12">
            <h3 class=" text-[24px]">Sale</h3>
            <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <ul class="leading-8 text-[#616161] font-light pl-9">
              <a href="../pages/member.html"><p class="hover:text-black">Sportswear Tech</p></a>
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
            class="accordion-header rotate-text cursor-pointer transition flex px-5 items-center justify-between h-12">
            <h3 class="text-[24px]">Jordan</h3>
            <img class="rotate-icon size-[20px] rotate-180" src="../images/home-icon/down-arrow.png" alt="">
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
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
        
        <div class="pt-12 px-4 space-y-6">
          <span class="flex items-center gap-6"><img class="size-[35px] object-contain" src="../images/home-icon/nikeball.png" alt="">Jordan</span>
          <span class="flex items-center gap-6"><img class="size-[35px] object-contain" src="../images/home-icon/fashion.png" alt="">Converse</span>
        </div>
    
        <div class="pt-20 max-w-[280px] px-4">
          <p class="text-[#707072] pb-8">
            Become a Nike Member for the best products, inspiration and stories in sport.
            <span class="inline-block">
              <a
                href="#"
                class="text-black text-[20px] hover:underline underline-offset-2 flex items-center gap-1">
                Learn more
              </a> </span
            >
          </p>
          <div class="">
            <btn-component title="Join Us" customClass="bg-black text-white"></btn-component>
          <button class="mt-2 px-4 py-2 hover:border-black rounded-full border-[1px] text-black">Sign In</button>
          </div>
        </div>
    
        <div class="pt-12 px-4 space-y-6 pb-10">
          <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/shopping-bag.png" alt="">Jordan</span>
          <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/checkout.png" alt="">Converse</span>
          <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/store.png" alt="">Jordan</span>
          <span class="flex items-center gap-6"><img class="size-[20px]" src="../images/home-icon/question.png" alt="">Converse</span>
        </div>
      </div>
    </div>
    
      <!-- dropdown -->
      <div
        id="menu-list"
        class=" bg-white text-white w-full flex justify-center duration-300 z-50 md:top-[110px] md:top[90px] h-0 absolute overflow-hidden">
        <!-- Menu bottom -->
        <div id="text-hid" class="text-nowrap invisible bg-white max-w-[1850px] flex justify-between">
          <ul class="px-[80px]">
            <li><a class="font-medium text-gray-900 align-text-bottom hover:text-gray-300" href="#">New Markdowns</a></li>
            <li><a class="text-[14px] text-gray-400" href="#">Sale: Up to 50% off 🛍️</a></li>
          </ul>
    
          <ul class="px-[80px]">
            <li><a class="font-medium text-gray-900 align-text-bottom hover:text-gray-300" href="#">New & Featured</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">New Arrival </a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Best Sellers</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="../pages/member.html">Member Product</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">New & Upcoming Drop</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">SNKRS Launch Calendar</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">New in ACG</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Retro Running</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Add to Bag to See Price 🚨</a></li>
          </ul>
    
          <ul class="px-[80px]">
            <li><a class="font-medium text-gray-900 align-text-bottom hover:text-gray-300" href="#">Shop Classics</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Air Jordan 1</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Air force</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Dunk</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Air Max</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Blazer</a></li>
          </ul>
    
          <ul class="px-[80px]">
            <li><a class="font-medium text-gray-900 align-text-bottom hover:text-gray-300" href="../pages/men.html">New For Men</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black"href="#">Shoes</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black align-text-bottom" href="#">Clothing</a></li>
            <li><a class="font-medium text-gray-900 align-text-bottom hover:text-gray-300" href="../pages//women.html">New For Women</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Shoes</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black align-text-bottom" href="#">Clothing</a></li>
            <li><a class="font-medium text-gray-900 align-text-bottom hover:text-gray-300" href="../pages/kid.html">New For Kids</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Shoes</a></li>
            <li><a class="text-[14px] text-gray-400 hover:text-black" href="#">Clothing</a></li>
          </ul>
        </div>
      </div>
     
    <!-- overlay bg -->
    <div id="overlay-bg" class="hidden w-full h-screen bg-black opacity-40 z-[10] fixed"></div>
    <div id="overlay-bg-sm" class="hidden w-full h-screen top-0 z-[12] bg-black sm:opacity-0 opacity-60 fixed"></div>
    `
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navDesign();

    const hoverElements = [
      document.getElementById("feature_btn"),
      document.getElementById("men_btn"),
      document.getElementById("women_btn"),
      document.getElementById("kid_btn"),
      document.getElementById("acc_btn"),
    ];

    const menuList = document.getElementById("menu-list");
    const overlayBG = document.getElementById("overlay-bg");
    const textHid = document.getElementById("text-hid");

    const showMenu = () => {
      menuList.classList.add("h-[400px]");
      overlayBG.classList.remove("hidden");
      textHid.classList.remove("invisible");
    };

    const hideMenu = () => {
      menuList.classList.remove("h-[400px]");
      overlayBG.classList.add("hidden");
      textHid.classList.add("invisible");
    };

    hoverElements.forEach(element => {
      element.addEventListener("mouseenter", showMenu);
      element.addEventListener("mouseleave", hideMenu);
    });

    menuList.addEventListener("mouseenter", showMenu);
    menuList.addEventListener("mouseleave", hideMenu);

    // Hamburger button
    const hamburgerBTN = document.querySelector("#hamburger-btn");
    const hamburgerContent = document.querySelector("#hamburger-content");
    const hamburgerClose = document.querySelector("#hamburger-close-btn");
    const overlaySm = document.querySelector("#overlay-bg-sm");

    const showHamburger = () => {
      hamburgerContent.classList.add("left-[50%]", "opacity-100");
      overlaySm.classList.remove("hidden");
    };

    const hideHamburger = () => {
      hamburgerContent.classList.remove("left-[50%]", "opacity-100");
      overlaySm.classList.add("hidden");
    };

    hamburgerBTN.addEventListener("click", showHamburger);
    hamburgerClose.addEventListener("click", hideHamburger);
    overlaySm.addEventListener("click", hideHamburger);

    // Rotate icons
    const rotateIcons = document.querySelectorAll(".rotate-icon");
    const rotateTexts = document.querySelectorAll(".rotate-text");

    rotateTexts.forEach((rotateText, index) => {
      rotateText.addEventListener("click", () => {
        rotateIcons[index].classList.toggle("rotate-180");
        rotateIcons[index].classList.toggle("rotate-360");
      });
    });
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent =
          header.parentElement.querySelector(".accordion-content");
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
customElements.define('nav-component', Navbar);
