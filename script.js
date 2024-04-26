console.log("JS Connected")

function Menu(){
    const menu = document.querySelector(".menu-link"); 
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}