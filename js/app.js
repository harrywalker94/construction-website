/* Preloader */
$(document).ready(function () {
    $(".pre-loader").fadeOut();

    document.querySelector(".hamburger-menu").addEventListener("click", () => {
        document.querySelector(".hamburger-menu").classList.toggle("change");
    });

    document.querySelector(".hamburger-menu").addEventListener("click", () => {
        document.querySelector(".navbar").classList.toggle("nav-show");
    });

    document.querySelector(".hamburger-menu").addEventListener("click", () => {
        document.querySelector(".home-logo-div").classList.toggle("move-right");
    });

    document.querySelector(".nav-close-btn").addEventListener("click", () => {
        document.querySelector(".navbar").classList.toggle("nav-show");
    });

    document.querySelector(".nav-close-btn").addEventListener("click", () => {
        document.querySelector(".hamburger-menu").classList.toggle("change");
    });

    document.querySelector(".nav-close-btn").addEventListener("click", () => {
        document.querySelector(".home-logo-div").classList.toggle("move-right");
    });

    /* Smooth Scroll */
    $(".scroll-down-arrow, #topBtn, #about-btn").click(function (link) {
        link.preventDefault(); // preventDefault method stops the default action of an element happening

        let target = $(this).attr("href"); // Find the attribute of the href of the anchor link
        $("html, body")
            .stop() // To stop the animate when another anchor linked is clicked
            .animate(
                {
                    scrollTop: $(target).offset().top - 0// scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically.
                }, // The .offset().top  method allows us to retrieve the current position of the target element
                500
            );
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
});
