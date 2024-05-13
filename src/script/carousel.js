// switch (option) {
//     case "style-1":
//         // code block
//         break;
//     case "style-2":
//         // code block
//         break;
//     default:
//     // code block
// }  

const carousel = (imgUrl, title, description, price) => {
    return `
        <div class="bg-white flex justify-between w-full max-w-[1600px] mx-auto py-4">
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

        <div class="w-full max-w-[1600px] flex mx-auto overflow-x-hidden">
            <div class="flex gap-2 text-center duration-300" id="slider">
            ${imgUrl.map((img) => {
        return `
                    <div class="w-full" id="card-slider">
                        <div class="w-[530px]">
                        <img
                            class="w-full h-full object-cover"
                            src="${img}"
                            alt="" />
                        <p class="">${description}</p>
                        <p class="">${price}</p>
                        </div>
                    </div>
                `
    })}
            </div>
        </div>
    `
}

class Carousel extends HTMLElement {
    connectedCallback() {
        const imgUrl = JSON.parse(this.getAttribute('imgUrl')) || ['../images/home-picture/black1.jpeg'];
        const title = this.getAttribute('title') || 'Trending';
        const description = this.getAttribute('description') || 'Nike apparel merges fashion, function.';
        const price = this.getAttribute('price') || '$100';
        this.innerHTML = carousel(imgUrl, title, description, price);

    }
}
customElements.define('carousel-component', Carousel);

// get the all ID for the slideleft and slideright function
const prevBtn = this.querySelector('#prev-btn');
const nextBtn = this.querySelector('#next-btn');

// create function slide left right
const slideLeft = (cardId) => {
    const slider = this.querySelector(`#${cardId}`);
    slider.scrollLeft -= 500;
}
const slideRight = (cardId) => {
    const slider = this.querySelector(`#${cardId}`);
    slider.scrollLeft += 500;
}
// create function slide left right
prevBtn.addEventListener('click', () => slideLeft('slider'));
nextBtn.addEventListener('click', () => slideRight('slider'));
