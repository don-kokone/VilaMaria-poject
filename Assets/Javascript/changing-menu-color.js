

const bodyTag = document.querySelector('body');
const myNav = document.querySelector ('header') ;


console.log(myNav)


let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100)
}

addEventListener("scroll", () =>{
  myNav.style.setProperty('background', scrolled() > 10 ? "white" : "transparent");
  
})

