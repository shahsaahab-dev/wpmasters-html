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




});