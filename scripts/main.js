//sets the nav state as open or closed.
var nav_open = 1;
function show_nav(){
    var nav = document.getElementsByClassName("nav")[0];
    var nav_button = document.getElementById("nav_open");
    var content = document.getElementsByClassName("main_content")[0];
    if(nav_open){
        nav.style.width = "1.9em";
        nav.style.height= "30px";
        content.style.left = "5%";
        nav.style.overflow = "hidden";
        nav_button.style.backgroundColor = "#2c4762";
        nav_button.style.color = "black";
        nav.style.boxShadow = "none";
    }else{
        nav.style.width = "15%";
        nav.style.height= "100%";
        content.style.left = "15%";
        nav.style.overflow = "visible";
        nav_button.style.backgroundColor = "rgba(0,0,0,0.0)";
        nav_button.style.color = "white";
        nav.style.boxShadow = "0px 0px 2px 1px #202b35";
    }
    nav_open ^= 1;
}
