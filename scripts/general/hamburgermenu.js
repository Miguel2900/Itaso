const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     burger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))
