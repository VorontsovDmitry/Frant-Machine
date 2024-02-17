let body = document.querySelector("body")

let CurTheme = localStorage.getItem('theme')
if(CurTheme == "dark"){
    body.style.setProperty("--bg-color", "#333");
    body.style.setProperty("--font-color", "#fff");
}
let ThemeBtn = document.querySelector(".btn-theme");
ThemeBtn.onclick = function(){
    if(CurTheme == "light"){
        body.style.setProperty("--bg-color", "#333");
        body.style.setProperty("--font-color", "#fff");
        CurTheme = "dark"
        localStorage.setItem('theme', 'dark')
    }
    else{
        body.style.setProperty("--bg-color", "#fff");
        body.style.setProperty("--font-color", "#333");
        CurTheme = "light"
        localStorage.setItem('theme', 'light')
    }
}



const BurgBtn = document.querySelector(".burger_menu-btn");
let x = 0;
BurgBtn.onclick = function(){
    if(x % 2 == 0){
        body.style.setProperty("--state", "flex");
    }
    else{
        body.style.setProperty("--state", "none");
    }
    x++
}




let y = 1
const Sl_Bl_1 = document.getElementById("slider-block_1");
const Sl_Bl_2 = document.getElementById("slider-block_2");
const Sl_Bl_3 = document.getElementById("slider-block_3");
const back = document.querySelector(".back");
back.onclick = function(){
    y--
    if(y == 0){
        y = 3
    }
    else if(y == 4){
        y = 1
    }
    
    if(y == 1){
        Sl_Bl_1.classList.add("active");
        Sl_Bl_2.classList.remove("active");
        Sl_Bl_3.classList.remove("active");
    }
    else if(y == 2){
        Sl_Bl_1.classList.remove("active");
        Sl_Bl_2.classList.add("active");
        Sl_Bl_3.classList.remove("active");
    }
    else if(y == 3){
        Sl_Bl_1.classList.remove("active");
        Sl_Bl_2.classList.remove("active");
        Sl_Bl_3.classList.add("active");
    }
}
const next = document.querySelector(".next");
next.onclick = function(){
    y++
    if(y == 0){
        y = 3
    }
    else if(y == 4){
        y = 1
    }
    
    if(y == 1){
        Sl_Bl_1.classList.add("active");
        Sl_Bl_2.classList.remove("active");
        Sl_Bl_3.classList.remove("active");
    }
    else if(y == 2){
        Sl_Bl_1.classList.remove("active");
        Sl_Bl_2.classList.add("active");
        Sl_Bl_3.classList.remove("active");
    }
    else if(y == 3){
        Sl_Bl_1.classList.remove("active");
        Sl_Bl_2.classList.remove("active");
        Sl_Bl_3.classList.add("active");
    }
}



