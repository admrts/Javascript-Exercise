const panels = document.querySelectorAll(".panel");
const button = document.getElementById("btn");
const container = document.querySelector(".container");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

btn.addEventListener("click", () => {
  if (container.style.flexDirection == "row") {
    container.style.flexDirection = "column";
  } else {
    container.style.flexDirection = "row";
  }
});
