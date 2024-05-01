const kidContent = document.querySelector(".kid-content-layout");
fetch("../components/kid.html")
  .then((res) => res.text())
  .then((data) => {
    kidContent.innerHTML = data;

    // Popular right now
    const prevBTN = document.querySelector("#prev-btn");
    const nextBTN = document.querySelector("#next-btn");
    const sliderImg = document.querySelector("#slider");
    const cardSlider = document.querySelectorAll("#card-slider");

    let currentIndex = 0;

    function nextSlide() {
      if (currentIndex < 4) {
        currentIndex = (currentIndex + 1) % cardSlider.length;
        updateSlider();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex =
          (currentIndex - 1 + cardSlider.length) % cardSlider.length;
        updateSlider();
      }
    }

    function updateSlider() {
      const offset = -currentIndex * 370; // Adjust this value as needed
      sliderImg.style.transform = `translateX(${offset}px)`;
    }
    prevBTN.addEventListener("click", prevSlide);
    nextBTN.addEventListener("click", nextSlide);


     // Classic
     const classicPrev = document.querySelector("#classic-prev");
     const classicNext = document.querySelector("#classic-next");
     const classicImage = document.querySelector("#classic-slider");
     const classicSlider = document.querySelectorAll("#classic-img");
 
     let currentIndexclassic = 0;
 
     function nextclassic() {
       if (currentIndexclassic < 3) {
         currentIndexclassic = (currentIndexclassic + 1) % classicSlider.length;
         updateclassic();
       }
     }
 
     function prevclassic() {
       if (currentIndexclassic > 0) {
         currentIndexclassic =
           (currentIndexclassic - 1 + classicSlider.length) %
           classicSlider.length;
         updateclassic();
       }
     }
 
     function updateclassic() {
       const offset = -currentIndexclassic * 360; // Adjust this value as needed
       classicImage.style.transform = `translateX(${offset}px)`;
     }
 
     classicPrev.addEventListener("click", prevclassic);
     classicNext.addEventListener("click", nextclassic);

  })
  .catch((error) => console.error("Error fetching included file:", error));