const divLogo = document.getElementById("divlogo");
const menu = document.getElementById("menu");
let isMenuVisible = false;

divLogo.addEventListener("click", () => {
    if (isMenuVisible) {
        menu.style.animation = "slideToRight 0.5s forwards";
        prez.style.animation = "slideToRight 0.5s forwards";
    } else {
        menu.style.display = "block";
        menu.style.animation = "slideFromRight 0.5s forwards";
        prez.style.animation = "slideFromRight 0.5s forwards";
    }
    isMenuVisible = !isMenuVisible;
});

menu.addEventListener("animationend", () => {
    if (!isMenuVisible) {
        menu.style.display = "none";
        prez.style.animation = "";
    }
    menu.style.animation = "";
    prez.style.animation = ""; // Ajoutez cette ligne pour réinitialiser l'animation de prez
});