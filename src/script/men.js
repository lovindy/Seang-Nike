const men = document.querySelector(".bodymen-layout");
fetch("../components/bodymen.html")
  .then((res) => res.text())
  .then((data) => {
    men.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));