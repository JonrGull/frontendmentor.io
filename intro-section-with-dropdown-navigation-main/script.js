document.addEventListener("click", function (event) {
  document
    .querySelectorAll(".navbar__links__dropdown-menu")
    .forEach(function (item) {
      item.classList.remove("active");
    });

  if (event.target.classList.contains("navbar__links__dropdown-header")) {
    event.target.nextElementSibling.classList.toggle("active");
  }
});
