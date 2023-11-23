

function funny(){

        //hehe

            const rndInt = Math.floor(Math.random() * 57348) + 1

            //fuck youtube autoplay not working
            //and long live vimeo o7
    const video = document.createElement("iframe")
    video.src = "https://player.vimeo.com/video/375468729?autoplay=1&loop=1&autopause=0"
    video.onload = "this.style.opacity = '0';"
    video.style = "display: block; margin: 0 auto; text-align: center; width: 960px; height: 540px; "
    document.body.append(video)
    document.getElementById

}  

var kpattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

document.addEventListener("keydown", event => {
    console.log(event.key)
    if(event.key == kpattern[current]){
        console.log(current)
        
        current + 1 == kpattern.length ? funny() : current++  

    } else{
        current = 0;
    }

})