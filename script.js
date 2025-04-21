let MenuIcon = document.querySelector(".menu-icon");
let MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menuToggle() {
    if(MenuItems.style.maxHeight === "0px") 
    {
        MenuItems.style.maxHeight = "200px";
    }
    else 
    {
        MenuItems.style.maxHeight = "0px";
    }
}
MenuIcon.onclick = function () {
    menuToggle();
};