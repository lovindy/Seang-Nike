const cardArray = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 1",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 2",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 3",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 4",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 4",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 4",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 1",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 2",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 3",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 4",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 4",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product 4",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita nesciunt deleniti beatae dolor soluta laudantium, adipisci temporibus blanditiis recusandae!",
  },
];

const createCardComponent = () => {
  return `
        <section>
            <div class="mt-20 grid grid-cols-2 gap-4 max-w-screen-md mx-auto px-6">
                <!-- Card -->
                ${cardArray.map((item) => {
                    return `
                    <div class="p-4 rounded-xl shadow-lg bg-white">
                        <img
                        src="${item.imgUrl}"
                        alt="" />

                        <div>
                        <h2>${item.title}</h2>
                        <p>
                            ${item.info}
                        </p>
                        </div>
                </div>
                    `
                }).join("")}


               
            </div>
        </section>
    `;
};

class CardComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = createCardComponent();
  }
}

customElements.define("card-component", CardComponent);
