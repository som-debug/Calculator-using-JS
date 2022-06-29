function clearScreen(){
    document.getElementById("result").value = "" ;
}

function display(value){
    document.getElementById("result").value += value;
}
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

var audio = new Audio("soundpq.mp3");

document.onclick = function() {
  audio.play();
}