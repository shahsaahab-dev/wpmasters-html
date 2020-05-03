// All the Custom Scripting Here.
jQuery(document).ready(function ($) {


    // Checking if Header LI has a child for mega menu then add i.fa.fa-angle-down

    $(".header-menu li").each(function () {
        var e = $(this);
        if (e.children("ul").length > 0) {
            e.addClass("has-submenu");
            var location = $(this).children("a");
            $(location).append('<i class="fa fa-angle-down"></i>');
        }
    });
    
    
    // Activating Sticky navbar on Scroll 
    jQuery(window).scroll(function () {
        var height = jQuery(window).scrollTop();

        if (height > 30) {
            jQuery('.header-wrapper').addClass('active');
        }

        if (height < 30) {
            jQuery('.header-wrapper').removeClass('active');
        }
    });
    
    // Parnter Logo Carousel 
    $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            300:{
                items:1,
            },
            400:{
                items:2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 5,
                nav:false,
            }
        }
    })

    
    // Activate Mobile Menu 
    $(".mobile-menu").on("click",function(event){
        var sM = $(".mobile-side-menu-wrapper");
        $(sM).addClass("activate-menu");
        event.stopPropagation();
    });
    
    // Close Mobile Menu
    $(".close-menu").on("click",function(){
        var sM = $(".mobile-side-menu-wrapper");
        $(sM).removeClass("activate-menu");
    })

});