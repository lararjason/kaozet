var i =  4000
var mousePos;
var audio = new Audio('amogus.mp3');
document.onmousemove = function (e) {
    mousePos = {x: e.pageX, y: e.pageY};
}

// Run code every some ms
setInterval(function () {
    console.log("helluu")

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.backgroundImage = "url(https://i.ytimg.com/vi/HkjezrWuDR8/maxresdefault.jpg)"
    div.style.width = "400px";
    div.style.height = "400px";
    div.className = "fadeOut"
    div.style.backgroundSize = "contain"
    div.style.backgroundRepeat = "no-repeat"

    document.body.appendChild(div);

    div.style.left = mousePos.x + "px";
    div.style.top = mousePos.y + "px";
    audio.play();
        setTimeout(function () {

        div.remove();

    }, 1000); // Time in milliseconds before starting the removal proce

}, i);