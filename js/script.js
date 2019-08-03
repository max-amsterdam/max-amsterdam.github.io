jQuery(document).ready(function ($) {

    updateNavigation();
    fadeInLinks();
    iconRestructure();

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
        iconRestructure();
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
        // $("#mobile-nav-toggle").show();
        $("#nav-menu").attr({
            'class': 'nav-menu-mobile'
        });
    }
}

function scrollNavigation() {
    if ($(this).scrollTop() > $(window).height() * .75) {
        $('.nav-name-container').fadeIn("slow");
        if($(window).width() > 600){
            $('.back-to-top').fadeIn('slow');
        }
        $('#header').addClass('header-fixed');
        $(".nav-menu").fadeIn('slow');
    } else {
        $('.nav-name-container').fadeOut("fast");
        if($(window).width() > 600){
            $('.back-to-top').fadeOut('slow');
        }
        $('#header').removeClass('header-fixed');
        $(".nav-menu").fadeOut('fast');
    }
}

function fadeInLinks() {
    if($(window).width() <= 425){
        $('#links-col-container').delay(100).css({opacity: 1});
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

// Changes the icons from a 2x3 table view to all icons in 1 row (6x1)
function iconRestructure(){
    if($(window).width() >= 992){
        $("#links-three-rows").show();
        $("#links-one-row").hide();
    }else{
        $("#links-three-rows").hide();
        $("#links-one-row").show();
    }
}