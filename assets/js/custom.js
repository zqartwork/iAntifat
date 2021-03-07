/*
-----------------
Function Library
-----------------
*/
$(document).ready(function(){
    if ($(window).height() < 800) {
        $('.kv').css({
            'height': '100%',
            'margin-top': $('nav').innerHeight() - 100 + 'px'
        })
    }
    $('.kv, .form').css({
        'height': $(window).height() - $('nav').innerHeight() + 'px',
        'margin-top': $('nav').innerHeight() + 'px'
    })
    
})
$(window).resize(function(){
    $('.kv, .form').css({
        'height': $(window).height() - $('nav').innerHeight() + 'px',
        'margin-top': $('nav').innerHeight() + 'px'
    })
})