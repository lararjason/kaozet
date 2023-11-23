// Get mouse position
var mousePos;
document.onmousemove = function (e) {
    mousePos = {x: e.pageX, y: e.pageY};
}
// Run code every 10ms
setInterval(function () {
    // Get mouse position
    if (mousePos) {
        // Create box at mouse position
        createBox(mousePos);
    }
}, 20);
let cats = [
    "https://media.tenor.com/zm2WjmF-MFIAAAAi/applecatrun-apple-cat.gif",
    "https://media.tenor.com/DxbxCodG6ZoAAAAC/cat-run.gif",
    "https://media.tenor.com/bWUeVRqW9-IAAAAi/fast-cat-cat-excited.gif",
    "https://media.tenor.com/VkGE6OgHhTMAAAAi/maxwell-maxwell-cat.gif",
    "https://media.tenor.com/ZuXnTDxIbjQAAAAC/shocked-shocked-cat.gif",
    "https://media.tenor.com/66B2x3hEPwoAAAAd/hollyweencandy-cat.gif",
    "https://media.tenor.com/HwGJ_4uXGU4AAAAd/stare-cat-stare.gif"


]
function createBox(position) {
        

    let size = getRandomSize(10, 69);
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = randomColorGenerator();
    div.style.borderRadius = "50%";

    div.className = "circle";
    if( (Math.floor(Math.random() * 10) + 1) == 7){
        console.log("hi")
        div.style.borderRadius = "0%";
        div.style.backgroundImage = `url(${cats[Math.floor(Math.random() * (cats.length - 1))]})`
        div.style.backgroundSize = "contain"
        div.style.backgroundColor = "";
    }


    document.body.appendChild(div);

    div.style.left = position.x + "px";
    div.style.top = position.y + "px";
    setTimeout(function () {

        div.remove();

    }, 10000); // Time in milliseconds before starting the removal process
}

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomColorGenerator() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

