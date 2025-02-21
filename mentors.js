let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let goo = document.getElementById("google-ads");
let green = document.getElementById("green");

 
minus.onclick = function(){
     goo.style.display = "none";
     plus.style.display = "block";
     minus.style.display = "none";
     green.style.color = "green";
  }

 plus.onclick = function(){
    goo.style.display = "block";
    goo.style.display = "flex";
    green.style.color = "black";
    plus.style.display = "none";
    minus.style.display = "block";
}

//----------second div 

let minuss = document.getElementById("minuss");
let pluss = document.getElementById("pluss");
let gooo = document.getElementById("google-adss");
let greenn = document.getElementById("greenn");

 
minuss.onclick = function(){
     gooo.style.display = "none";
     pluss.style.display = "block";
     minuss.style.display = "none";
     greenn.style.color = "green";
  }

 pluss.onclick = function(){
    gooo.style.display = "block";
    gooo.style.display = "flex";
    greenn.style.color = "black";
    pluss.style.display = "none";
    minuss.style.display = "block";
}




let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let form = document.getElementById("devi");
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


 
 logo.onclick =  function() {
   devi.style.display = "block";
   header.style.display = "none"

};



 
