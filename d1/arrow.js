document.getElementById("button").onclick = ()=>{
    setBackgroundColorById("paragraph", "blue")
}
document.getElementById("alert").onclick = function(){
    alert(document.getElementById("popup-input").value);
}
document.getElementById("hover-this").onmouseover = function(){
    setBackgroundColorById("body", "red");
}
document.getElementById("hover-this").onmouseout = function(){
    setBackgroundColorById("body", "white");
}
function getValueFromId(id){
    return document.getElementById(id).value;
}
function setBackgroundColorById(id, color){
    document.getElementById(id).style = "background-color: " + color;
}
function mouseOverFunction(el){
    el.style = "background-color: black";
}