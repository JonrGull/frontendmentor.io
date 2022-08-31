const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar__links")[0];
const navbarBtn = document.getElementsByClassName("navbar__btn-container")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarBtn.classList.toggle("active");
});
