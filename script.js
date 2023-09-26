"use strict"

var tabs = document.getElementsByClassName("tab")

function showTab(id){

    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
    }

    document.getElementById(id).style.display = "block"
}