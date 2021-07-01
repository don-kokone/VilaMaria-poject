const menu_btn = document.getElementById("menu-button");
const nav = document.getElementById("navigation");
const link = document.querySelectorAll("li a");

const bars = document.getElementById("bars-icon")
const close = document.getElementById("close-icon")

let menuOpen = false

menu_btn.addEventListener("click", () => {
    nav.classList.toggle("active")

})


for (let index = 0; index < link.length; index++) {

    link[index].addEventListener("click", () => {
        nav.classList.remove("active")
        close.classList.toggle("active")
        bars.classList.toggle("active")
    })
}


menu_btn.addEventListener("click", () => {
    if (!menuOpen) {
      
        close.classList.add("active")
        bars.classList.remove("active")
        menuOpen = true;
    }
    else {
        close.classList.remove("active")
        bars.classList.add("active")
        menuOpen = false
    }
})