let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let forms = document.getElementById("forms");
let header = document.getElementById("head");
let regg = document.getElementById("regg");
let form = document.getElementById("devi");


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
regg.onclick = function() {
    forms.style.display = "block";
    header.style.display = "block"
 };

 rega.onclick = function() {
    forms.style.display = "block";
    header.style.display = "none"
 };

 regb.onclick = function() {
    forms.style.display = "block";
    header.style.display = "none"
 };

 regd.onclick = function() {
    forms.style.display = "block";
    header.style.display = "none"
 };

regc.onclick = function() {
    forms.style.display = "block";
    header.style.display = "none"
 };

 rege.onclick = function() {
    forms.style.display = "block";
    header.style.display = "none"

 };

 logo.onclick =  function() {
    devi.style.display = "block";
    header.style.display = "none";

 };



  function registerUser() {
    alert("Submit Successfully");
  }

 
  
   
   
  