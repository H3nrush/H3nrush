function openMenu(){
    let navbar = document.getElementById("menu-container")
    if (document.getElementById("menu-container").style.display === "none"){
        document.getElementById("menu-container").style.display = "block";
    }else{
        document.getElementById("menu-container").style.display = "none"
    }
}
function closeMenu(){
    document.getElementById("menu-container").style.display = "none"
}

