const toggleButton = document.getElementsByClassName("navbar__menu-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar__links")[0];
const navbarBtn = document.getElementsByClassName("navbar__btn-container")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarBtn.classList.toggle("active");
});
