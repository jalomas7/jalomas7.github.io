if(!window.nav_open)
    window.nav_open = false;
function show_nav(){
    var nav = document.getElementsByClassName("nav")[0];
    if(window.nav_open){
        nav.style.width = "1.5em";
        nav.style.height= "20px";
        window.nav_open = false;
    }else{
        nav.style.width = "15%";
        nav.style.height= "100%";
        window.nav_open = true;
    }

}
show_nav();
