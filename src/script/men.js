const men = document.querySelector(".bodymen-layout");
fetch("../components/bodymen.html")
  .then((res) => res.text())
  .then((data) => {
    men.innerHTML = data;

    // get the Button ID
    const leftBTN = document.querySelector("#left-btn")
    const rightBTN = document.querySelector("#right-btn")
    
  })
  .catch((error) => console.error("Error fetching included file:", error));