(function ($) {
    "use strict";

    // NavBar on Scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        }
        else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $('#video').attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $('#video').attr('src', $videoSrc);
        })
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        }
        else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
        $('#portfolio-flters li').removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Back to Top Buttom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        }
        else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Gallery Carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);





// Set the wedding date (year, month (0-11), day, hour, minute, second)
const weddingDate = new Date(2025, 9, 11, 12, 0, 0); // Adjust the date and time accordingly
//const weddingDate = new Date(2023, 11, 31, 13, 21, 0); // Adjust the date and time accordingly

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the number of circles based on the time units you want to display
    if (days != 1)
    {
        document.getElementById('days_circle1').innerHTML = days + "\n DÍAS";
        document.getElementById('days_circle2').innerHTML = days + "\n DÍAS";
        document.getElementById('days_circle3').innerHTML = days + "\n DÍAS";
    }
    else
    {
        document.getElementById('days_circle1').innerHTML = days + "\n DÍA";
        document.getElementById('days_circle2').innerHTML = days + "\n DÍA";
        document.getElementById('days_circle3').innerHTML = days + "\n DÍA";
    }

    if (hours != 1)
    {
        document.getElementById('hours_circle1').innerHTML = hours + "\n HORAS";
        document.getElementById('hours_circle2').innerHTML = hours + "\n HORAS";
        document.getElementById('hours_circle3').innerHTML = hours + "\n HORAS";
    }
    else
    {
        document.getElementById('hours_circle1').innerHTML = hours + "\n HORA";
        document.getElementById('hours_circle2').innerHTML = hours + "\n HORA";
        document.getElementById('hours_circle3').innerHTML = hours + "\n HORA";
    }

    if (minutes != 1)
    {
        document.getElementById('minutes_circle1').innerHTML = minutes + "\n MINUTOS";
        document.getElementById('minutes_circle2').innerHTML = minutes + "\n MINUTOS";
        document.getElementById('minutes_circle3').innerHTML = minutes + "\n MINUTOS";
    }
    else
    {
        document.getElementById('minutes_circle1').innerHTML = minutes + "\n MINUTO";
        document.getElementById('minutes_circle2').innerHTML = minutes + "\n MINUTO";
        document.getElementById('minutes_circle3').innerHTML = minutes + "\n MINUTO";
    }
    
    if (seconds != 1)
    {
        document.getElementById('seconds_circle1').innerHTML = seconds + "\n SEGUNDOS";
        document.getElementById('seconds_circle2').innerHTML = seconds + "\n SEGUNDOS";
        document.getElementById('seconds_circle3').innerHTML = seconds + "\n SEGUNDOS";
    }
    else
    {
        document.getElementById('seconds_circle1').innerHTML = seconds + "\n SEGUNDO";
        document.getElementById('seconds_circle2').innerHTML = seconds + "\n SEGUNDO";
        document.getElementById('seconds_circle3').innerHTML = seconds + "\n SEGUNDO";
    }

    } else {
    // If the wedding date has passed
    document.getElementById('countdown-container1').innerHTML = '¡Llegó el gran día!';
    document.getElementById('countdown-container2').innerHTML = '¡Llegó el gran día!';
    document.getElementById('countdown-container3').innerHTML = '¡Llegó el gran día!';
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown
updateCountdown();