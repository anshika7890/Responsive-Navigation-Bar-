const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    navLinks.classList.remove("active");
  }
});
