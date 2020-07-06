function type(Text) {

    var T = toString(Text);
    T = Text + "i"
    T = Text.length
    var te;


    for (i = 0; i <= T; i++) {
        setTimeout(function() {}, 10000)
        te = Text.slice(0,i)
        console.log(te)
        document.getElementById("Output").innerHTML = ""
    }
}
