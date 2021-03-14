const header = document.querySelector("#imgblur");
const sectionOne = document.querySelector(".imagefull");
const navbar = document.querySelector(".header");
const button = document.querySelector("#myBtn");
const sectionOneOptions = {
    threshold: 0.1
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            navbar.classList.add("header-scrolled");
            button.classList.add("myBtn");
        }
      
        else {
            header.classList.remove("nav-scrolled");
            navbar.classList.remove("header-scrolled");
            button.classList.remove("myBtn");

        }

    });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);






