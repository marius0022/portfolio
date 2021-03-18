
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('header-scrolled', window.scrollY > 0);

});
const nav = document.querySelector('nav');

 document.querySelector('.toggler').onclick = function () {
     this.classList.toggle('active');
     nav.classList.toggle('active');}





