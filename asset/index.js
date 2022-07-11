let bars = document.querySelector("#hmenu")
let menu = document.querySelector(".menu")
let cancel = document.querySelector("#xmenu")
bars.addEventListener('click', function(){

    menu.style.display = "block"
    cancel.style.display = "block"
    bars.style.display ="none"

})

cancel.addEventListener('click', function(){
    cancel.style.display = "none"
    menu.style.display ="none"
    bars.style.display = "block"
})