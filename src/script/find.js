const find_a_store = document.querySelector("find-a-store-layout");
fetch("../components/findastore.html")
  .then((res) => res.text())
  .then((data) => {
    find_a_store.innerHTML = data;
    const listCards = [
      {
        location: "Nike Well Collective - Kansas City",
        direction: "Building E, Phnom Penh City Centre, Phnom Penh",
        distance: "3.6 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
      {
        location: "Prince Phnom Penh Tower",
        direction: "445 Preah Monivong Blvd, Phnom Penh",
        distance: "2.7 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
      {
        location: "Sathapana Tower",
        direction: "41 Preah Norodom Blvd, Phnom Penh",
        distance: "2.1 miles away",
      },
      {
        location: "BKK Flagship",
        direction: "#14, St. 57 & 288, Sangkat Boeung Keng Kong",
        distance: "2.5 miles away",
      },
      {
        location: "TK Royal 1",
        direction: "G/F & M/F of TkK Royal One, Phnom Penh",
        distance: "3 miles away",
      },
      {
        location: "Prince Phnom Penh Tower",
        direction: "445 Preah Monivong Blvd, Phnom Penh",
        distance: "2.7 miles away",
      },
      {
        location: "Sathapana Tower",
        direction: "41 Preah Norodom Blvd, Phnom Penh",
        distance: "2.1 miles away",
      },
      {
        location: "Nike Well Collective - Kansas City",
        direction: "Building E, Phnom Penh City Centre, Phnom Penh",
        distance: "3.6 miles away",
      },
      {
        location: "Toul Tom Pong",
        direction:
          "Street 155 at Street 468, Toul Tom Pong I Commune, Phnom Penh",
        distance: "4.1 miles away",
      },
      {
        location: "The Bridge ",
        direction: "Village No.14, National Assembly Street, Phnom Penh City",
        distance: "3.1 miles away",
      },
      {
        location: "Chroy Changva",
        direction: "Open Space, Prohm Bayon Circle, Sangkat, Phnom Penh",
        distance: "0.5 miles away",
      },
      {
        location: "TK Royal 1",
        direction: "G/F & M/F of TkK Royal One, Phnom Penh",
        distance: "3 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
      {
        location: "BKK Flagship",
        direction: "#14, St. 57 & 288, Sangkat Boeung Keng Kong",
        distance: "2.5 miles away",
      },
      {
        location: "The Bridge ",
        direction: "Village No.14, National Assembly Street, Phnom Penh City",
        distance: "3.1 miles away",
      },
      {
        location: "Sathapana Tower",
        direction: "41 Preah Norodom Blvd, Phnom Penh",
        distance: "2.1 miles away",
      },
      {
        location: "Prince Phnom Penh Tower",
        direction: "445 Preah Monivong Blvd, Phnom Penh",
        distance: "2.7 miles away",
      },
      {
        location: "The Bridge ",
        direction: "Village No.14, National Assembly Street, Phnom Penh City",
        distance: "3.1 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "Toul Tom Pong",
        direction:
          "Street 155 at Street 468, Toul Tom Pong I Commune, Phnom Penh",
        distance: "4.1 miles away",
      },
      {
        location: "Nike Well Collective - Kansas City",
        direction: "Building E, Phnom Penh City Centre, Phnom Penh",
        distance: "3.6 miles away",
      },
      {
        location: "TK Royal 1",
        direction: "G/F & M/F of TkK Royal One, Phnom Penh",
        distance: "3 miles away",
      },
      {
        location: "Lucky Pavilion",
        direction: "G/F, Soyra Mall, Phnom Penh",
        distance: "2.8 miles away",
      },
      {
        location: "AEON Mall 1",
        direction: "3 Samdech Sothearos Blvd, Phnom Penh",
        distance: "3.3 miles away",
      },
    ];

    // create cards function to loop over the listlocation
    const createCardComponent = () => {
      return `
      <div class="flex flex-col gap-1">
      ${listCards
        .map((card) => {
          return `
        <div id="button-up"
        class="card-location hover:bg-gray-100 rounded-lg py-[20px] flex justify-between items-center">
        <!-- content -->
        <div class="pl-10 leading-6">
              <h1>${card.location}</h1>
              <p class="text-[14px] text-[#878789]">${card.direction}</p>
              <p class="text-[14px] text-[#878789]">${card.distance}</p>
              <p class="text-[14px] text-[#878789]">Gretna. NE, 68028-7371, US</p>
              <span class="flex gap-1"><p class="text-red-500">Closed -</p> <p>Opens Tomorrow at 10:00 AM</p></span>
            </div>
      </div>
        `;
        })
        .join("")}

      </div>
      
    `;
    };

    // create class to link the component in HTML
    class CardComponent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = createCardComponent();
      }
    }
    customElements.define("card-component", CardComponent);

    // Select all card elements
    const cards = document.querySelectorAll(".card-location");

    // Function to remove styles from all cards and hide "Order Here" button
    const resetCardsAndButton = () => {
      cards.forEach((card) => {
        card.classList.remove("border-[#00754a]", "bg-[#e9f0ee]", "border-2");
      });
      // Hide "Order Here" button
      const orderButtons = document.querySelectorAll(".order-btn");
      orderButtons.forEach((button) => {
        button.classList.add("hidden");
      });
    };

    // Loop through each card and add event listener
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Reset styles and hide "Order Here" button for all cards
        resetCardsAndButton();

        // Toggle the classes to change the style for the clicked card
        card.classList.add("border-black", "bg-gray-50", "border-2");

        // Show "Order Here" button for the clicked card
        const orderButton = card.querySelector(".order-btn");
        orderButton.classList.remove("hidden");
      });
    });

    // Scrolling action
    const section = document.querySelector(".overflow-y-auto"); // Update class name
    const buttons = document.querySelectorAll("#button-up");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonHeight = button.offsetHeight; // Get the height of the clicked button
        const currentScrollHeight = section.scrollTop; // Get the current scroll height
        const newScrollHeight = currentScrollHeight + buttonHeight; // Calculate the new scroll height
        section.scrollTo({
          top: newScrollHeight,
          behavior: "smooth",
        });
      });
    });

    // click and show filter
    const filterBTN = document.querySelector("#filter-btn");
    const closeBTN = document.querySelector("#close-btn");
    const filterContent = document.querySelector("#filter-content");
    const externalContent = document.querySelector("#external-content");
    const componentHide = document.querySelector("#component-hide");
    const findBTN = document.querySelector("#find-btn");

    filterBTN.addEventListener("click", () => {
      filterContent.classList.remove("scale-[120%]");
      filterContent.classList.remove("opacity-0");
      filterContent.classList.remove("pointer-events-none");
      componentHide.classList.add("hidden");
      externalContent.classList.add("hidden");

      filterContent.classList.add("scale-[100%]");
      filterContent.classList.add("opacity-100");
      filterContent.classList.add("pointer-events-auto");
    });

    closeBTN.addEventListener("click", () => {
      filterContent.classList.add("scale-[120%]");
      filterContent.classList.add("opacity-0");
      filterContent.classList.add("pointer-events-none");

      filterContent.classList.remove("scale-[100%]");
      filterContent.classList.remove("opacity-100");
      filterContent.classList.remove("pointer-events-auto");
      componentHide.classList.remove("hidden");
      externalContent.classList.remove("hidden");
    });

    findBTN.addEventListener("click", () => {
      filterContent.classList.remove("scale-[120%]");
      filterContent.classList.remove("opacity-0");
      filterContent.classList.remove("pointer-events-none");
      componentHide.classList.add("hidden");
      externalContent.classList.add("hidden");

      filterContent.classList.add("scale-[100%]");
      filterContent.classList.add("opacity-100");
      filterContent.classList.add("pointer-events-auto");
    });

    closeBTN.addEventListener("click", () => {
      filterContent.classList.add("scale-[120%]");
      filterContent.classList.add("opacity-0");
      filterContent.classList.add("pointer-events-none");

      filterContent.classList.remove("scale-[100%]");
      filterContent.classList.remove("opacity-100");
      filterContent.classList.remove("pointer-events-auto");
      componentHide.classList.remove("hidden");
      externalContent.classList.remove("hidden");
    });

    // filter underline
    const underlineToggle = document.querySelectorAll(".underline-toggle");

    underlineToggle.forEach((element) => {
      element.addEventListener("click", () => {
        // Remove underline from all elements
        underlineToggle.forEach((el) => {
          el.classList.remove("underline");
          el.classList.remove("underline-offset-4");
        });
        // Add underline to the clicked element
        element.classList.add("underline");
        element.classList.remove("underline-offset-4");
      });
    });

    // moveplaceHolder
    const inputBox = document.querySelector("#locationInput1");
    const locationMove = document.querySelector("#location-move1");
    function moveUp() {
      locationMove.classList.add("top-[35%]", "text-xs", "left-12");
      locationMove.innerHTML = "Location";
    }
    function moveDown() {
      locationMove.classList.remove("top-[35%]", "text-xs", "left-2");
      locationMove.innerHTML = "Search Location";
    }
    inputBox.addEventListener("focus", () => {
      moveUp();
    });

    inputBox.addEventListener("focusout", () => {
      inputLength = inputBox.value.length;
      // check if value > 0 => moveUp else moveDown
      if (inputLength == 0) {
        moveDown();
      }
    });
  })
  .catch((error) => console.error("Error fetching included file:", error));

const footerBottom = document.querySelector(".footer-bottom-layout");
fetch("../components/footerBottom.html")
  .then((res) => res.text())
  .then((data) => {
    footerBottom.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));
