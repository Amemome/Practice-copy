
console.log('hi');
var container = document.querySelector('.card-container');
var lightness = document.querySelector('.overlay');
const cardWidth = container.offsetWidth
const cardHeight = container.offsetHeight

container.addEventListener('mousemove',function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    var degX = -(x - (cardWidth/2)) * 30 / (cardWidth/2);
    var degY = (y - (cardHeight/2)) * 30 / (cardHeight/2);
    lightness.style.backgroundPosition =  `${(100-(x/cardWidth*100))}% ${(100-(y/cardHeight*100))}%`;
    container.style.transform = `rotateY(${degX}deg) rotateX(${degY}deg)`;

})

container.addEventListener('mouseleave',function(){
    console.log("mouse leave!");
    container.style.transform = `rotateY(0deg) rotateX(0deg)`;
})