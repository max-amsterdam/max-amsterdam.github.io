jQuery(document).ready(function ($) {
    // Header fixed and Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height()*.75) {
            $('#nav-name-container').fadeIn("slow");
            $('.back-to-top').fadeIn('slow');
            $('#header').addClass('header-fixed');
        } else {
            $('#nav-name-container').fadeOut("fast");
            $('.back-to-top').fadeOut('slow');
            $('#header').removeClass('header-fixed');
        }
    });
    $('.back-to-top').click(function () {
        window.scroll({
            top: 0,
            left:0,
            behavior: 'smooth'
        });
    });

    if($(window).width() < 1250 || $(window).height() > 975){
        // Center profile picture and move name cetnered and top position
        $("#headshot-pic").css({
            'left': '0',
            'right': '0',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'max-height': '75%'
        });
        $("landing-page-col").removeClass("vert-center-col");
    }


    function handleMobile() {
        var windowSize = $(window).width();
        // Mobile Navigation
        if (windowSize < 768) {
            // change header to a mobile header
        }
    }
    handleMobile();

});