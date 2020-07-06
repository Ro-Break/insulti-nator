let Vel = 100;

function type(Text) {
    var T = toString(Text);
    for (i = 0 ; i < T.length ; i++) {
        document.getElementById("Output").innerHTML += Text.charAt(i);
        setTimeout(type, Vel)
    }
}
