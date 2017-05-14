//sets the nav state as open or closed.
var nav_open = 1;
function show_nav(){
    var nav = document.getElementsByClassName("nav")[0];
    var content = document.getElementsByClassName("main_content")[0];
    if(nav_open){
        nav.style.width = "1.9em";
        nav.style.height= "30px";
        content.style.left = "5%";
        nav.style.overflow = "hidden";
    }else{
        nav.style.width = "15%";
        nav.style.height= "100%";
        content.style.left = "15%";
        nav.style.overflow = "visible";
    }
    nav_open ^= 1;
}
