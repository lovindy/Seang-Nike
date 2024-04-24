const feature = document.querySelector(".feature-layout");
fetch("../components/feature.html")
  .then((res) => res.text())
  .then((data) => {
    feature.innerHTML = data;

    // get button element
    const filterBtn = document.querySelector("#filter-btn");
    const release = document.querySelector("#release");

    // get item element
    const filterItem = document.querySelector("#filter");
    const hideText = document.querySelector("#hide");
    const showText = document.querySelector("#show");
    const rightContent = document.querySelector("#right-content");

    // function action
    filterBtn.addEventListener('click', () => {
      filterItem.classList.toggle("hidden");
      rightContent.classList.add("w-[100%]");
      if (filterItem.classList.contains("hidden")) {
        filterBtn.innerHTML = '<span class="cursor-pointer">Show Filters</span><img class="size-[20px] cursor-pointer" src="../images/home-icon/newspaper.png" alt="">';
      } else {
        filterBtn.innerHTML = '<span class="cursor-pointer">Hide Filters</span><img class="size-[20px] cursor-pointer" src="../images/home-icon/newspaper.png" alt="">';
      }
    });




  })
  .catch((error) => console.error("Error fetching included file:", error));