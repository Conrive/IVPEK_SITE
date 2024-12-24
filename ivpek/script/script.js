const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const navList = document.querySelector(".nav ul");

// Открыть меню
menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("active");
    navList.classList.add("hidden"); // Скрываем элементы header
});

// Закрыть меню при клике на затемнение
overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
    navList.classList.remove("hidden"); // Возвращаем элементы header
});