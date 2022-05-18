let openMenu = document.querySelector(".open-menu");
let nav = document.querySelector("nav");

openMenu.addEventListener ("click", () => {
    nav.classList.toggle("active")
});

// Open & Close The Project Menu
let popUup = document.querySelector(".pop-up");
let down = document.querySelector(".item.down");

down.addEventListener("click", () => {
    popUup.classList.toggle("active");
});
