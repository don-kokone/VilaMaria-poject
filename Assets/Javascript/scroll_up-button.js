const body = document.querySelector('body');
const scrollToTop = document.getElementById("scroll_up-button")


let scroll = () => {
    let position = scrollY / (body.scrollHeight - innerHeight);
    return Math.floor(position * 100)
}

addEventListener("scroll", () =>{
 if(scroll() < 30){
    scrollToTop.style.display = 'none'
 }

 else{
    scrollToTop.style.display = 'block'
 }
})
