function type(Text) {
  setTimeout(function() {
    let T = toString(Text);
    T = Text + "i"
    T = Text.length
    let te;
    for (i = 0; i <= T; i++) {
        te = Text.slice(0,i)
        document.getElementById("Contentx").innerHTML = ""
    }
  }, 400)
}
