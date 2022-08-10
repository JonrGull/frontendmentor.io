const toggleButton = document.getElementsByClassName("toggle-button")[0];
const dropDownContent = document.getElementsByClassName("dropdown-content")[0];

toggleButton.addEventListener("click", () => {
  dropDownContent.classList.toggle("active");
});
