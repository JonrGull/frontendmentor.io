const hamburgerBtn = document.querySelector(".navbar__hamburger-btn");
const navbarLinks = document.querySelector(".navbar__links");
const navbarBtn = document.querySelector(".navbar__btn-container");

document.addEventListener("click", (event) => {
  document
    .querySelectorAll(".navbar__links__dropdown-menu")
    .forEach(function (item) {
      item.classList.remove("active");
    });

  if (event.target.classList.contains("navbar__links__dropdown-header")) {
    event.target.nextElementSibling.classList.toggle("active");
  }
});

hamburgerBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarBtn.classList.toggle("active");
});
