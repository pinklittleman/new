const h1 = document.getElementById("h1");
document.addEventListener("mousemove",
function(e){
    var x = e.clientX;
    var y = e.clientY;
    h1.style.left = x + "px";
    h1.style.top = y + "px";
})