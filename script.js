"use strict"

const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = links.querySelectorAll("a")

burger.addEventListener("click", function(){
    burger.classList.toggle("rotate")
    links.classList.toggle("showNav")
})

for(const anchor of anchors){
    anchor.addEventListener("click", function(){
        burger.classList.remove("rotate")
        links.classList.remove("showNav")
    })
}



var tabs = document.getElementsByClassName("tab")

for(var i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none"
}

document.getElementById('pirmas').style.display = "block"

function showTab(id){

    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
    }

    document.getElementById(id).style.display = "block"
}