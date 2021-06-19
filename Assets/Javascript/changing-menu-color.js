

const bodyTag = document.querySelector('body');
const myNav = document.querySelector ('nav') ;
const htmlTag = document.querySelector ('html') ;

console.log(myNav)


let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    console.log("The dec is: " + dec  * 100)
    return Math.floor(dec * 100)
}

addEventListener("scroll", () =>{
  myNav.style.setProperty('background', scrolled() > 50 ? "$color-orange" : "$color-blue");
  
})

console.log(scrollY);
console.log(bodyTag.scrollHeight);


//