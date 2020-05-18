/* Preloader */
$(document).ready(function () {
    $(".pre-loader").fadeOut();

    $('.filter-btn:first-child').addClass('active');

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
    $(".scroll-down-arrow, #topBtn, #about-btn-two, .global-btn").click(function (link) {
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

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-6rem";
        }
        prevScrollpos = currentScrollPos;
    }

});

function myFunction() {
    var element = document.querySelector(".filter-btn:first-child");
    element.classList.remove("active");
}

/* GoogleMaps API */

/* Map Options */
var options = {
    zoom: 7,
    center: {
        lat: 51.801128,
        lng: -0.195730
    }
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat: 51.801128, lng: -0.195730 },
        map: map,
        icon: './assets/images/marker.png',
        draggable: true,
        animation: google.maps.Animation.DROP,
    });

    marker.addListener('click', toggleBounce);



    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }


}


