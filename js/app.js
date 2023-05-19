const firstSubtitle = document.querySelector(".home__subtitle");
const title = document.querySelector(".home__title");
const secondSubtitle = document.querySelector(".home__subtitle:last-child");

const titles = [firstSubtitle, title, secondSubtitle];

window.addEventListener("load", displayTitles)

function displayTitles(){
    setTimeout(() => {
        for(let i=0; i<titles.length; i++) {
            setTimeout(()=> {
                titles[i].classList.add("active");
    
            },i * 500)
        }
    }, 500);
}

const logo = document.querySelector(".home__logo")
setTimeout(setTimeout(()=> {logo.classList.add("active")}, 2000))

// INTERSECTION OBSERVER
const main = document.querySelector("main")

const sections = main.querySelectorAll("section")

const options = {
    rootMargin: "0px 0px -300px 0px"
};

const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
        if (entry.isIntersecting){
            for(let i=0; i<entry.target.children.length; i++) {
                setTimeout(()=> {
                    entry.target.children[i].classList.add("active")
        
                },i * 500)
            }
        }
    }

}, options)

sections.forEach(el => {observer.observe(el)})