const carousel = (data, title) => {
    return `
        <div class="bg-white flex justify-between w-full px-4 max-w-[1600px] mx-auto py-4">
            <div class="w-full flex justify-between">
                <p class="text-[26px]">${title}</p>
                <div class="gap-4">
                    <button
                        id="prev-btn"
                        class="hover:text-white w-[40px] h-[40px] rounded-full bg-gray-200">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        id="next-btn"
                        class="hover:text-white w-[40px] h-[40px] rounded-full bg-gray-200">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full max-w-[1600px] flex mx-auto overflow-hidden">
            <div class="flex gap-3 text-center duration-300" id="slider">
            ${data.map((item) => {
        return `
                    <div class="w-full" id="card-slider">
                        <div class="w-[300px] md:w-[400px] lg:w-[500px]">
                        <img
                            class="w-full object-cover rounded-lg"
                            src="${item.img}"
                            alt="" />
                        <p class="text-sm md:text-base lg:text-lg p-2">${item.description}</p>
                        <p class="text-sm md:text-base lg:text-lg font-medium p-2">${item.price}</p>
                        </div>
                    </div>
                `
    }).join(" ")}
            </div>
        </div>
    `
}

class Carousel extends HTMLElement {
    connectedCallback() {
        const data = JSON.parse(this.getAttribute('data')) || [];
        const title = this.getAttribute('title') || 'Trending';
        console.log(data);
        this.innerHTML = carousel(data, title);

        const cardPrev = document.querySelector("#prev-card");
        const cardNext = document.querySelector("#next-card");
        const cardImage = document.querySelector("#card-slider");
        const cardSlider = document.querySelectorAll("#card-img");

        let currentIndexCard = 0;

        function nextCard() {
            if (currentIndexCard < 4) {
                currentIndexCard = (currentIndexCard + 1) % cardSlider.length;
                updateCard();
            }
        }

        function prevCard() {
            if (currentIndexCard > 0) {
                currentIndexCard =
                    (currentIndexCard - 1 + cardSlider.length) %
                    cardSlider.length;
                updateCard();
            }
        }

        function updateCard() {
            const offset = -currentIndexCard * 450; // Adjust this value as needed
            cardImage.style.transform = `translateX(${offset}px)`;
        }

        cardPrev.addEventListener("click", prevCard);
        cardNext.addEventListener("click", nextCard);
    }
}
customElements.define('carousel-component', Carousel);

