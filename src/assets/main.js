var menu_slider=document.querySelector(".menu_option");
document.querySelector(".burger_menu").addEventListener("click",function(){
menu_slider.classList.add("visible");
});
document.querySelector(".close").addEventListener("click", function(){
    menu_slider.classList.remove("visible");
});