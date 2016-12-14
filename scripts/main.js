nav_open = false;
function show_nav(){
    var nav = document.getElementsByClassName("nav")[0];
    if(nav_open){
        nav.style.width = "2%";
        nav_open = false;
    }else{
        nav.style.width = "15%";
        nav_open = true;
    }
}
