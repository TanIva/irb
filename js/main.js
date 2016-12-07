$(document).ready(function () {

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
    $( ".notification .star").on({
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