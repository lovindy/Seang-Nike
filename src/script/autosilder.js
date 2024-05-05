// create component function
const AutoSlideComponent = () => {
  return `
      
          <div class="images flex">
              <div class="images-slide">
                  <img src="../images/home-picture/a1.jpeg" alt="" />
                  <img src="../images/home-picture/a2.jpeg" alt="" />
                  <img src="../images/home-picture/a3.jpeg" alt="" />
                  <img src="../images/home-picture/a4.jpeg" alt="" />
                  <img src="../images/home-picture/a21.jpeg" alt="" />
                  <img src="../images/home-picture/a6.jpeg" alt="" />
                  <img src="../images/home-picture/a8.jpeg" alt="" />
                  <img src="../images/home-picture/a7.jpeg" alt="" />
                  <img src="../images/home-picture/a17.jpeg" alt="" />
                  <img src="../images/home-picture/a10.jpeg" alt="" />
                  <img src="../images/home-picture/a12.jpeg" alt="" />
                  <img src="../images/home-picture/abc.jpeg" alt="" />

                  <img src="../images/home-picture/speed.jpeg" alt="" />
                  <img src="../images/home-picture/a11.jpeg" alt="" />
                  <img src="../images/home-picture/a12.jpeg" alt="" />
                  <img src="../images/home-picture/abc.jpeg" alt="" />
                  <img src="../images/home-picture/a1.jpeg" alt="" />
                  <img src="../images/home-picture/a2.jpeg" alt="" />
                  <img src="../images/home-picture/a15.jpeg" alt="" />
                  <img src="../images/home-picture/a16.jpeg" alt="" />
                  <img src="../images/home-picture/a13.jpeg" alt="" />
                  <img src="../images/home-picture/a6.jpeg" alt="" />
                  <img src="../images/home-picture/a7.jpeg" alt="" />
              </div>    
          </div>

          <div class="images-2 flex">
              <div class="images-slide-2">
              <img src="../images/home-picture/a10.jpeg" alt="" />
              <img src="../images/home-picture/a12.jpeg" alt="" />
              <img src="../images/home-picture/abc.jpeg" alt="" />
              <img src="../images/home-picture/a1.jpeg" alt="" />
              <img src="../images/home-picture/a2.jpeg" alt="" />
              <img src="../images/home-picture/a20.jpeg" alt="" />
              <img src="../images/home-picture/a21.jpeg" alt="" />
              <img src="../images/home-picture/a13.jpeg" alt="" />
              <img src="../images/home-picture/a6.jpeg" alt="" />
              <img src="../images/home-picture/a7.jpeg" alt="" />

              <img src="../images/home-picture/a10.jpeg" alt="" />
              <img src="../images/home-picture/a19.jpeg" alt="" />
              <img src="../images/home-picture/a18.jpeg" alt="" />
              <img src="../images/home-picture/a3.jpeg" alt="" />
              <img src="../images/home-picture/a4.jpeg" alt="" />
              <img src="../images/home-picture/a8.jpeg" alt="" />
              <img src="../images/home-picture/a21.jpeg" alt="" />
              <img src="../images/home-picture/a20.jpeg" alt="" />
              <img src="../images/home-picture/a7.jpeg" alt="" />
              <img src="../images/home-picture/a11.jpeg" alt="" />
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
