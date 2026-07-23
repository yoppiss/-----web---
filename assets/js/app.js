const header = document.querySelector(".header");
const menuButton = document.getElementById("menuButton");
const headerNav = document.querySelector(".header-nav");

// スクロール時
window.addEventListener("scroll", () => {
    if (window.scrollY > 550) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// ハンバーガーメニュー
menuButton.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    header.classList.toggle("menu-open");
});