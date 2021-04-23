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
/*
------
Sticky Nav
------
*/
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('nav').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > 5) { 
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky'); 
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});