$(document).ready(function() {
    $("#about-btn").click(function(clickevent, apples, sour) {
        $(".nav-btn").removeClass("active")
        $("#about-btn").addClass("active");
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    })
});
$(document).ready(function() {
    $("#portfolio-btn").click(function() {
        $(".nav-btn").removeClass("active")
        $("#portfolio-btn").addClass("active");
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 75
        }, 2000); 
    })
});
$(document).ready(function() {
    $("#contact-btn").click(function() {
        $(".nav-btn").removeClass("active")
        $("#contact-btn").addClass("active");
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 75
        }, 2000);
    })
});


$(document).ready(function() {
    $(window).on("scroll", function() {
        $(".sections").each(function() {
            if($(window).scrollTop() >= $(this).position().top - 77) {
                var id = $(this).attr("id");
                $("#navigation-block a button").removeClass("active");
                $("#navigation-block a[href='#"+ id +"'] button").addClass("active");
            }
        })
    });
 });

// $(window).on('scroll', function() {
//     $('.target').each(function() {
//         if($(window).scrollTop() >= $(this).position().top) {
//             var id = $(this).attr('id');
//             $('#nav nav a').removeClass('active');
//             $('#nav nav a[href=#'+ id +']').addClass('active');
//         }
//     });
// });

