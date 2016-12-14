function show_nav(){
    var nav = document.getElementsByClassName("nav")[0];
    var nav_open = localStorage.getItem("nav_open");
    console.log(nav_open); 
    if(nav_open == "1"){
        nav.style.width = "1.5em";
        nav.style.height= "20px";
    }else{
        nav.style.width = "15%";
        nav.style.height= "100%";
    }
    localStorage.setItem("nav_open", nav_open ^ 1);
}
