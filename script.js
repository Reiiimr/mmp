//Array of images which you want to show: Use path you want.
var images=new Array('photos/bg.jpg','photos/Home.jpg','photos/bg2.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.global-header')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,1000);
    });
}