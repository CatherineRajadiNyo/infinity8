$(function () {
    var windowW = $(window).width()
    var scroll = $(window).scrollTop()

    $(window).resize(function () {
        windowW = $(window).width()
        if (windowW < 992) {
            $(".navbar").addClass("scroll")
        } else {
            if (scroll > 0) {
                $(".navbar").addClass("scroll")
            } else {
                $(".navbar").removeClass("scroll")
            }
        }
    })

    $(".navbar-toggler").on("click", function () {
        if ($(this).hasClass("collapsed")) {
            $(".navbar").addClass("scroll")
        } else {
            if (scroll <= 0) {
                $(".navbar").removeClass("scroll")
            }
        }
    })

    $(window).scroll(function (event) {
        scroll = $(window).scrollTop()
        if (scroll > 0) {
            $(".navbar").addClass("scroll")
        } else {
            $(".navbar").removeClass("scroll")
        }
    });

    $(".js-book_appointment").on("click", function () {
        $('html, body').animate({
            scrollTop: $(".banner-contact_us").offset().top
        }, 500);

    })
})