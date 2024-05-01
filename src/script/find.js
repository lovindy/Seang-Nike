const menu_bottom = document.querySelector(".find-a-store-layout");
fetch("../components/findastore.html")
  .then((res) => res.text())
  .then((data) => {
    menu_bottom.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));