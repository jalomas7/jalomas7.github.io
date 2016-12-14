nav_open = false;
function show_nav(){
    var nav = document.getElementsByClassName("nav")[0];
    if(nav_open){
        nav.style.width = "1.5em";
        nav.style.height= "20px";
        nav_open = false;
    }else{
        nav.style.width = "15%";
        nav.style.height= "100%";
        nav_open = true;
    }
}
