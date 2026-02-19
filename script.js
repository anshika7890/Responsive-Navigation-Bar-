const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.getElementById("navLinks");

openMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});
