let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
const button = document.getElementById("logo");
let but = document.getElementsByClassName("btn");
let form = document.getElementById("form");
let header = document.getElementById("head");


moon.onclick = function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    sun.style.display = "block";
    moon.style.display = "none";
    sun.style.color="black";
}
sun.onclick = function(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    sun.style.display = "none";
    moon.style.display = "block";
    moon.style.color="black";
}


 

 // Add an event listener to the button to trigger the alert on click
 button.addEventListener("click", function() {
    form.style.display = "block";
    header.style.display = "none"

 });

 
