
const closeIcon = document.getElementById("close-icon");
const openIcon = document.getElementById("open-icon");
const navbar = document.querySelector(".navbar");
const heroImg = document.getElementById("hero-image");

const setImgsrc = () => {
    if (window.innerWidth < 700) {
        heroImg.src = "images/image-mockups-mobile.png";
    } else {
        heroImg.src = "images/image-mockups.png";
    }
}
window.addEventListener("resize", setImgsrc);
window.addEventListener("load", setImgsrc);

openIcon.onclick = () => {
    navbar.style.display = "block";
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
}
closeIcon.onclick = () => {
    navbar.style.display = "none";
    closeIcon.style.display = "none";
    openIcon.style.display = "inline-block";
}
