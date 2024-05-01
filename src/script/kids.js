const kidContent = document.querySelector(".kid-content-layout");
fetch("../components/kid.html")
  .then((res) => res.text())
  .then((data) => {
    kidContent.innerHTML = data;
    

  })
  .catch((error) => console.error("Error fetching included file:", error));