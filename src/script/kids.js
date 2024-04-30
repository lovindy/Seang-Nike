const kidContent = document.querySelector(".kids-content-layout");
fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    kidContent.innerHTML = data;


  })
  .catch((error) => console.error("Error fetching included file:", error));