const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("closeBtn");

/* Open menu */
hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

/* Close menu */
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
