var button = document.getElementById("button");
var dark_theme = true;

function change_background(){
    if(dark_theme == false){
        dark_theme = true
        document.body.style.background = "red";
        button.style.background = "black"
        button.style.color ="red"
    }else{
        dark_theme = false
        document.body.style.background = "black";
        button.style.background = "red"
        button.style.color ="black"
    }
}