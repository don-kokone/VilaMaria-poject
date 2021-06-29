const menu_btn = document.getElementById("menu-button");
const nav = document.getElementById("navigation");
const link = document.querySelectorAll("li");

menu_btn.addEventListener("click", () =>{
nav.classList.toggle("active")
})

for (let index = 0; index < link.length; index++) {
    
    link[index].addEventListener("click", () =>{
        nav.classList.remove("active")
    })
}

