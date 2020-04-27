// All the Custom Scripting Here.
jQuery(document).ready(function ($) {


    // Checking if Header LI has a child for mega menu then add i.fa.fa-angle-down

    $(".header-menu li").each(function () {
        var e = $(this);
        if (e.children("ul").length > 0) {
            e.addClass("has-submenu");
            $(this).append('<i class="fa fa-angle-down"></i>');
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
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })



});