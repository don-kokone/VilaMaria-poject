let scrollToOffers = document.getElementById("offers")
let scrollToHeader = document.getElementById("scrollUp")

function scrollDown (){

    scrollToOffers.scrollIntoView({behavior:"smooth"})
}


function scrollUp (){
    

    scrollToHeader.scrollIntoView()
}

