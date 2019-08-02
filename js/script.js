jQuery(document).ready(function ($) {

    updateNavigation();

    $(window).scroll(function() {
        scrollNavigation();
    });

    $(document).click(function(e){
        escapeMobileNav(e);
    });

    $('.back-to-top').click(function () {
        backToTopClick();
    });

    $('#mobile-nav-toggle').click(function(){
        mobileNavToggleClick();
    })

    // Mobile Navigation
    $(window).on('resize', function () {
        updateNavigation();
    });

});

function updateNavigation() {
    var width = $(window).width();
    if (width > 768) {
        $("#mobile-nav-toggle").hide();
        $("#nav-menu").attr({
            'class': 'nav-menu'
        })
        $("#nav-menu").css({
            display: ''
        })
    } else {
        // Mobile view
        $("#mobile-nav-toggle").show();
        $("#nav-menu").attr({
            'class': 'nav-menu-mobile'
        });
    }
}

function scrollNavigation() {
    if ($(this).scrollTop() > $(window).height() * .75) {
        $('.nav-name-container').fadeIn("slow");
        $('.back-to-top').fadeIn('slow');
        $('#header').addClass('header-fixed');
    } else {
        $('.nav-name-container').fadeOut("fast");
        $('.back-to-top').fadeOut('slow');
        $('#header').removeClass('header-fixed');
    }
}

function backToTopClick() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function mobileNavToggleClick() {
    $('body').toggleClass('mobile-nav-active');
    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
    $('#mobile-overlay').toggle();
    $('#nav-menu').toggle();
}

function escapeMobileNav(e){
    var container = $("#mobile-nav, #mobile-nav-toggle");
    if(!container.is(e.target) && container.has(e.target).length === 0){
        if($('body').hasClass('mobile-nav-active')){
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-overlay').fadeOut();
            $('#nav-menu').toggle();
        }
    }
}