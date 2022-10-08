const go_to_top = document.querySelector(".top");
const home = document.querySelector(".home");
const phone = document.querySelector(".phone");
const laptop = document.querySelector(".laptop");
const accessory = document.querySelector(".accessory");
const contact = document.querySelector(".contact_us");
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

home.classList.add("active");

window.addEventListener("scroll", () =>{ 
    if(this.window.scrollY >= 800){
        go_to_top.classList.add("active");
    }else{
        go_to_top.classList.remove("active");
    }


    if(this.window.pageYOffset>=0 && this.window.pageYOffset<=600){
        home.classList.add("active");
    }else{
       home.classList.remove("active");
    }    
    if(this.window.pageYOffset>=600 && this.window.pageYOffset<=1200 ){
        phone.classList.add("active");
    }else{
        phone.classList.remove("active");
    }
    if(this.window.pageYOffset>=1200 && this.window.pageYOffset<=1800 ){
        laptop.classList.add("active");
    }else{
        laptop.classList.remove("active");
    }
    if(this.window.pageYOffset>=1800 && this.window.pageYOffset<=2400 ){
        accessory.classList.add("active");
    }else{
        accessory.classList.remove("active");
    }
    if(this.window.pageYOffset>=2400 && this.window.pageYOffset<=2800 ){
        contact.classList.add("active");
    }else{
        contact.classList.remove("active");
    }
});

hamburger.addEventListener("click", () =>{
    bar.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active")
})

