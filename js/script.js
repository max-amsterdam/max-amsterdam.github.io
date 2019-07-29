jQuery(document).ready(function ($) {
    // Header fixed and Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
            $('#header').addClass('header-fixed');

        } else {
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


    function handleMobile() {
        var windowSize = $(window).width();
        // Mobile Navigation
        if (windowSize < 768) {
            // change header to a mobile header
        }
    }
    handleMobile();

});