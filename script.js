const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    contents.forEach((c) => (c.style.display = "none"));
    document.getElementById(btn.getAttribute("data-tab")).style.display =
      "block";
  });
});
