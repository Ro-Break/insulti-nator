console.log("omg this actually work gg for you")

var i = 0;
var mul = 1;
var debug = false;

document.getElementById("dd").innerHTML = i;
document.getElementById("deres").innerHTML = "OFF";

function Count(){
    i++;
    document.getElementById("dd").innerHTML = i;
    if (debug == true) {
        console.log("Debug: Value as been set to " + i);
    }
}

function DeBug(){
    if (debug == false) {
        debug = true;
        console.log("Debug set to ON");
        document.getElementById("deres").innerHTML = "ON";
        
    } else {
        debug = false;
        console.log("Debug set to OFF");
        document.getElementById("deres").innerHTML = "OFF";

    }
}