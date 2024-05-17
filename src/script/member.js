// member-content-layout
const member_content = document.querySelector(".member-content-layout");
fetch("../components/bodymember.html")
  .then((res) => res.text())
  .then((data) => {
    member_content.innerHTML = data;
    // member also get
    const shopPrev1 = document.querySelector("#prev-shop-1");
    const shopNext1 = document.querySelector("#next-shop-1");
    const shopImage1 = document.querySelector("#shop-slider-1");
    const shopSlider1 = document.querySelectorAll("#card-shop-1");

    let currentIndexShop1 = 0;

    function nextShop1() {
      if (currentIndexShop1 < 2) {
        currentIndexShop1 = (currentIndexShop1 + 1) % shopSlider1.length;
        updateShop1();
      }
    }

    function prevShop1() {
      if (currentIndexShop1 > 0) {
        currentIndexShop1 =
          (currentIndexShop1 - 1 + shopSlider1.length) % shopSlider1.length;
        updateShop1();
      }
    }

    function updateShop1() {
      const offset = -currentIndexShop1 * 536; // Adjust this value as needed
      shopImage1.style.transform = `translateX(${offset}px)`;
    }

    shopPrev1.addEventListener("click", prevShop1);
    shopNext1.addEventListener("click", nextShop1);

    // dropdown
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

    const rotateIcons = document.querySelectorAll(".rotate-icon-1");
    const rotateTexts = document.querySelectorAll(".rotate-text-1");

    rotateTexts.forEach((rotateText, index) => {
      rotateText.addEventListener("click", () => {
        rotateIcons[index].classList.toggle("rotate-180");
        rotateIcons[index].classList.toggle("rotate-360");
      });
    });
  })
  .catch((error) => console.error("Error fetching included file:", error));
