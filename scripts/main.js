//sets the nav state as open or closed. persistent on page reload
function show_nav(toggle){
    var nav = document.getElementsByClassName("nav")[0];
    var content = document.getElementsByClassName("main_content")[0];
    var nav_open = localStorage.getItem("nav_open");
    console.log(nav_open); 
    if(nav_open == "1" ^ toggle){
        nav.style.width = "1.7em";
        nav.style.height= "25px";
        content.style.left = "5%";
    }else{
        nav.style.width = "15%";
        nav.style.height= "100%";
        content.style.left = "15%";
    }
    if(toggle)
        localStorage.setItem("nav_open", nav_open ^ 1);
}
