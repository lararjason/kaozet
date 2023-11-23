window.onload = function () {
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

}

function createBox(position) {
    let size = getRandomSize(10, 69);
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = randomColorGenerator();
    div.style.borderRadius = "50%";

    div.className = "circle";


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