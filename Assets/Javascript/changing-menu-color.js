

const bodyTag = document.querySelector('body');
const myNav = document.querySelector ('header') ;



let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100)
}

addEventListener("scroll", () =>{
  myNav.style.setProperty('background', scrolled() > 20 ? "white" : "transparent");

})

