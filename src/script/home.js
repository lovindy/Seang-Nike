// menu bottom
const menu_bottom = document.querySelector(".menu-bottom-layout");
fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    menu_bottom.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));

const footer_res = document.querySelector(".footer-res-layout");
fetch("../components/footerRes.html")
  .then((res) => res.text())
  .then((data) => {
    footer_res.innerHTML = data;

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
  })
  .catch((error) => console.error("Error fetching included file:", error));
