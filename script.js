window.addEventListener("scroll", () => {
document.querySelector("nav").style.boxShadow =
window.scrollY > 50
? "0 5px 15px rgba(0,0,0,0.2)"
: "none";
});
