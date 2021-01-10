const box = document.querySelector(".img-box");
const buttons = document.querySelectorAll(".question");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList[1]) {
      buttons.forEach((item) => item.classList.remove("active"));
      box.classList.remove("hover");
    }
    button.classList.toggle("active");
    box.classList.toggle("hover");
  });
});
