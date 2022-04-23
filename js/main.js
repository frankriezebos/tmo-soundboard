$(window).on('load', function(){
    $('.logo, .content-block').addClass('loaded');

    setTimeout(function() { 
        $('.logo, .content-block').removeClass('loaded');
    }, 300);
});

$('.content-block audio').attr('id', function (i) {
    return 'audio' + (i + 1);
});

$('.content-block a').attr('onclick', function (i) {
    return 'PlaySound' + (i + 1) + '()';
});

$('.content-block').click(function() {
    $(this).find('.content-block-image').addClass('clicked');

    setTimeout(function() { 
        $('.content-block-image').removeClass('clicked');
    }, 300);
});

var audio1 = new Audio();
audio1.src = "../audio/morning-devboyz.mp3";

function PlaySound1() {
    audio1.play();
}