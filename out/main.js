window.onresize = screenWidth;
window.onload = screenWidth;


function screenWidth() {
    myWidth = window.innerWidth;

    document.getElementById("size").innerHTML = "Width : " + myWidth + "px";
    
    myHeight = window.innerHeight;
    
    document.getElementById("height").innerHTML = "Height : " + myHeight + "px";
}


