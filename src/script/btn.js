// create funciton



function createBTN(title, customClass) {
  return `  
        <button class="${customClass} px-4 py-2  rounded-full text-white">${title}</button>
    `;
}

class CreateButtonComponent extends HTMLElement {
    connectedCallback(){
        const title = this.getAttribute('title')
        const customClass = this.getAttribute('customClass')
        this.innerHTML = createBTN(title, customClass);
    }
}

customElements.define("btn-component", CreateButtonComponent);