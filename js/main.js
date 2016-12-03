$(document).ready(function () {
    
    /* ----------- back-to-top ------------ */

    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


    /*------------- zoom ------------*/
    function body_width() {
        var body = $('body');
        var zoom = $(window).width() / body.width();
        body.css('zoom',zoom);
    };

    body_width();
    
    window.addEventListener("orientationchange", function() {
        body_width();
    }, false);

    /*---------- menu -------------*/
    
    $( ".profile" ).on({
        mouseenter: function() {
          $('.profile-box').show();
        }, mouseleave: function() {
          $('.profile-box').hide();
        }
    });
    $( ".notification" ).on({
        mouseenter: function() {
          $('.notification-box').show();
        }, mouseleave: function() {
          $('.notification-box').hide();
        }
    });
    
    $( function() {
    $( "#tabs" ).tabs();
  } );
});