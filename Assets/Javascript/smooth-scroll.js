let scrollToOffers = document.getElementById("offers")
let scrollToHeader = document.getElementById("scrollUpToThisPosition")

function scrollDown (){

    scrollToOffers.scrollIntoView({behavior:"smooth"})
}


function scrollUp (){
    

    scrollToHeader.scrollIntoView()
}

