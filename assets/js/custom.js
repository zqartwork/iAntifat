/*
-----------------
Function Library
-----------------
*/
$(document).ready(function(){
    if ($(window).height() < 800) {
        $('.kv').css({
            'height': '100%',
            'margin-top': $('nav').innerHeight() - 150 + 'px'
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

/*
------------
Modal Opener
------------
*/
let modalFunction = function(){

    $('.modal-opener').click(function(){
        let tt = $(this).attr('tt-to');
        console.log(tt)
        $('.' + tt).show();
        $('body').css({
            'max-height': '100vh',
            'max-width': '100vw',
            'overflow': 'hidden',
        })
    })

    $('.modal-closer').click(function(){
        $(this).parents('.modal').hide();
        $('body').css({
            'max-height': 'auto',
            'max-width': 'auto',
            'overflow': 'auto',
        })
    })

}