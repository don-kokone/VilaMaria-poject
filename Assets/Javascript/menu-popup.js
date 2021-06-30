const menu_btn = document.getElementById("menu-button");
const nav = document.getElementById("navigation");
const link = document.querySelectorAll("li");

const icons = document.querySelectorAll("button i");

const bars = document.getElementById("bars-icon")
const close = document.getElementById("close-icon")

menu_btn.addEventListener("click", () =>{
nav.classList.toggle("active")

})

for (let index = 0; index < link.length; index++) {
    
    link[index].addEventListener("click", () =>{
       nav.classList.remove("active")
       bars.classList.toggle("active")
       close.classList.toggle("active")
    })
}

for (let index = 0; index < icons.length; index++) {
    
    icons[index].addEventListener("click", () =>{
       
       bars.classList.toggle("active")
       close.classList.toggle("active")
    })
}