const app = {
    // Sélecteurs
    firstSubtitle: document.querySelector(".home__subtitle"),
    title: document.querySelector(".home__title"),
    
    secondSubtitle: document.querySelector(".home__subtitle:last-child"),
    logo: document.querySelector(".home__logo"),
    sections: document.querySelector("main").querySelectorAll("section"),

    
    // Observer
    observer: new IntersectionObserver((entries) => {
        for(const entry of entries){
            if (entry.isIntersecting){
                for(let i=0; i<entry.target.children.length; i++) {
                    
                    setTimeout(()=> {entry.target.children[i].classList.add("active")},i * 500)
                }
            }
        }
    }, 
    {rootMargin: "0px 0px -300px 0px"}),
    
    // INIT

    init() {
        app.displayTitles();
        setTimeout(setTimeout(()=> {app.logo.classList.add("active")}, 2000));
        app.sections.forEach(el => {app.observer.observe(el)});
    },

    // Fonctions
    
    displayTitles(){
        const titles = [app.firstSubtitle, app.title, app.secondSubtitle];
        setTimeout(() => {
            for(let i=0; i<titles.length; i++) {
                setTimeout(()=> {
                    titles[i].classList.add("active");
        
                },i * 500)
            }
        }, 500);
    }
};

document.addEventListener("DOMContentLoaded", app.init);