const illustration = document.getElementById('illustration')

setInterval(changeColor,1000)


function changeColor(){
    let r = (Math.random())
    
    illustration.style.filter = `grayscale(0.9) contrast(5) hue-rotate(${360*r}deg)`
}