$(window).on('load', function(){
    $('.logo, .content-block').addClass('loaded');

    setTimeout(function() { 
        $('.logo, .content-block').removeClass('loaded');
    }, 300);
});

$('.content-block').click(function() {
    $(this).find('.content-block-image').addClass('clicked');

    setTimeout(function() { 
        $('.content-block-image').removeClass('clicked');
    }, 300);
});

$('.content-block').each(function() {
    var audioSrc = $(this).data('audio-src');
    var clickableDiv = $(this).find('.clickable-div');
    var audio = $(this).find('audio');

    clickableDiv.on('click', function() {
        audio.attr('src', audioSrc);
        audio.trigger('play');
    });
});