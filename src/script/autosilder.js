// create component function
const AutoSlideComponent = () => {
  return `
      
          <div class="images flex">
              <div class="images-slide">
                  <img src="../images/home-picture/black1.jpeg" alt="" />
                  <img src="../images/home-picture/black2.jpeg" alt="" />
                  <img src="../images/home-picture/black3.jpeg" alt="" />
                  <img src="../images/home-picture/black4.jpeg" alt="" />
                  <img src="../images/home-picture/black5.jpeg" alt="" />
                  <img src="../images/home-picture/black6.jpeg" alt="" />
                  <img src="../images/home-picture/black7.jpeg" alt="" />
                  <img src="../images/home-picture/black8.jpeg" alt="" />
                  <img src="../images/home-picture/black9.jpeg" alt="" />

                  <img src="../images/home-picture/black1.jpeg" alt="" />
                  <img src="../images/home-picture/black2.jpeg" alt="" />
                  <img src="../images/home-picture/black3.jpeg" alt="" />
                  <img src="../images/home-picture/black4.jpeg" alt="" />
                  <img src="../images/home-picture/black5.jpeg" alt="" />
                  <img src="../images/home-picture/black6.jpeg" alt="" />
                  <img src="../images/home-picture/black7.jpeg" alt="" />
                  <img src="../images/home-picture/black8.jpeg" alt="" />
                  <img src="../images/home-picture/black9.jpeg" alt="" />
              </div>    
          </div>

          <div class="images-2 flex">
              <div class="images-slide-2">
                  <img src="../images/home-picture/black1.jpeg" alt="" />
                  <img src="../images/home-picture/black2.jpeg" alt="" />
                  <img src="../images/home-picture/black3.jpeg" alt="" />
                  <img src="../images/home-picture/black4.jpeg" alt="" />
                  <img src="../images/home-picture/black5.jpeg" alt="" />
                  <img src="../images/home-picture/black6.jpeg" alt="" />
                  <img src="../images/home-picture/black7.jpeg" alt="" />
                  <img src="../images/home-picture/black8.jpeg" alt="" />
                  <img src="../images/home-picture/black9.jpeg" alt="" />

                  <img src="../images/home-picture/black1.jpeg" alt="" />
                  <img src="../images/home-picture/black2.jpeg" alt="" />
                  <img src="../images/home-picture/black3.jpeg" alt="" />
                  <img src="../images/home-picture/black4.jpeg" alt="" />
                  <img src="../images/home-picture/black5.jpeg" alt="" />
                  <img src="../images/home-picture/black6.jpeg" alt="" />
                  <img src="../images/home-picture/black7.jpeg" alt="" />
                  <img src="../images/home-picture/black8.jpeg" alt="" />
                  <img src="../images/home-picture/black9.jpeg" alt="" />
              </div>    
          </div>
      
          `;
};

// create class name
class AutoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = AutoSlideComponent();
  }
}
customElements.define("auto-slide-component", AutoComponent);
