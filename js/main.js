/*============================
   js index
==============================

==========================================*/

(function ($) {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 4000,
        autoplay: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    /*================================
    Window Load
    ==================================*/
    $(window).on('load', function () {
        smoothScrolling($(".main-menu nav ul li a[href^='#']"), headerHeight);
        smoothScrolling($(".scrollup a[href^='#']"), 0);
        smoothScrolling($(".welcome-content .btn a[href^='#']"), 0);
        $('.slider-two').addClass('scontent_loaded');
        $('.slider-parallax').addClass('scontent_loaded');
        sliderLoadedAddClass();
        preloader()
    })



    /*================================
    Preloader
    ==================================*/
    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () { });
        }
    }

    /*================================
     sticky-header
     ==================================*/
    $(window).scroll(function () {

        if ($(window).scrollTop() > 10) {
            $('.sticky-header').addClass('sticky'),
                $('.scrollup').addClass('show_hide');
        } else {
            $('.sticky-header').removeClass('sticky'),
                $('.scrollup').removeClass('show_hide');
        }

    });

    /*================================
     Gift-carousel
     ==================================*/
    function gift_carousel() {
        var owl = $(".Gift-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            navText: false,
            nav: false,
            items: 5,
            smartSpeed: 1000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 3
                },
                480: {
                    items: 2
                },
                760: {
                    items: 4
                },
                1080: {
                    items: 4
                }
            }
        });
    }
    gift_carousel();


    /*================================
        slicknav
        ==================================*/

    $('#nav_mobile_menu').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce", //available with jQuery UI
        prependTo: '#mobile_menu'
    });
    /*------------------------------------------
        = RSVP FORM SUBMISSION, MANDAR FORMULARIO
    -------------------------------------------*/
    // if ($("#rsvp-form").length) {
    //     $("#rsvp-form").validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             email: "required",

    //             guest: {
    //                 required: true
    //             },

    //             events: {
    //                 required: true
    //             }

    //         },

    //         messages: {
    //             name: "Please enter your name",
    //             email: "Please enter your email",
    //             guest: "Select your number of guest",
    //             events: "Select your event list"
    //         },

    //         submitHandler: function (form) {
    //             $("#loader").css("display", "inline-block");
    //             $.ajax({
    //                 type: "POST",
    //                 url: "mail.php",
    //                 data: $(form).serialize(),
    //                 success: function () {
    //                     $("#loader").hide();
    //                     $("#success").slideDown("slow");
    //                     setTimeout(function () {
    //                         $("#success").slideUp("slow");
    //                     }, 3000);
    //                     form.reset();
    //                 },
    //                 error: function () {
    //                     $("#loader").hide();
    //                     $("#error").slideDown("slow");
    //                     setTimeout(function () {
    //                         $("#error").slideUp("slow");
    //                     }, 3000);
    //                 }
    //             });
    //             return false; // required to block normal submit since you used ajax
    //         }

    //     });
    // }

    /*================================
    slider-area content effect
    ==================================*/
    function sliderLoadedAddClass() {
        $('.slider-two').addClass('scontent_loaded');
        $('.slider-parallax').addClass('scontent_loaded');
    }


    /*================================
      Isotope Portfolio
     ==================================*/
    $('.grid').imagesLoaded(function () {

        // filter items on button click
        $('.gallery-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });



    });

    $('.gallery-menu button').on('click', function () {
        $('.gallery-menu button').removeClass('active');
        $(this).addClass('active');
    });


    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/

    function getTimeRemaining(targetDate) {
        const now = new Date();
        const end = new Date(targetDate);

        let totalMs = end - now;

        if (totalMs <= 0) {
            return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // Calcular meses manualmente
        let months = (end.getFullYear() - now.getFullYear()) * 12 + (end.getMonth() - now.getMonth());
        if (now.getDate() > end.getDate()) {
            months--;
        }

        // Ajustar días dentro del mes actual
        let tempDate = new Date(now);
        tempDate.setMonth(tempDate.getMonth() + months);
        let dayDiff = Math.floor((end - tempDate) / (1000 * 60 * 60 * 24));

        // Calcular horas, minutos, segundos
        let hours = end.getHours() - now.getHours();
        let minutes = end.getMinutes() - now.getMinutes();
        let seconds = end.getSeconds() - now.getSeconds();

        if (seconds < 0) { seconds += 60; minutes--; }
        if (minutes < 0) { minutes += 60; hours--; }
        if (hours < 0) { hours += 24; dayDiff--; }

        // Nunca valores negativos
        return {
            months: Math.max(0, months),
            days: Math.max(0, dayDiff),
            hours: Math.max(0, hours),
            minutes: Math.max(0, minutes),
            seconds: Math.max(0, seconds)
        };
    }


    function updateClock() {
        const t = getTimeRemaining('2025-09-14T00:00:00');

        const isEventToday = t.months === 0 && t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0;

        const clock = document.getElementById('clock');
        const titleClock = document.getElementById('title-clock');

        if (isEventToday) {

            clock.innerHTML =
                `<div class="box"><div class="date">${0}</div><span>Meses</span></div>` +
                `<div class="box"><div class="date">${0}</div><span>Días</span></div>` +
                `<div class="box"><div class="date">${0}</div><span>Horas</span></div>` +
                `<div class="box"><div class="date">${0}</div><span>Minutos</span></div>` +
                `<div class="box"><div class="date">${0}</div><span>Segundos</span></div>`;
        } else {
            clock.innerHTML =
                `<div class="box"><div class="date">${t.months}</div><span>Meses</span></div>` +
                `<div class="box"><div class="date">${t.days}</div><span>Días</span></div>` +
                `<div class="box"><div class="date">${t.hours}</div><span>Horas</span></div>` +
                `<div class="box"><div class="date">${t.minutes}</div><span>Minutos</span></div>` +
                `<div class="box"><div class="date">${t.seconds}</div><span>Segundos</span></div>`;
        }
    }

    setInterval(updateClock, 1000);
    updateClock(); // Ejecutar al cargar


    /*================================
     Variable Initialize
    ==================================*/
    var headerHeight = $('.header-area').innerHeight();


    //. smooth scrolling
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    /*------------------------------------------
        = BACK TO TOP
    -------------------------------------------*/
    if ($(".scrollup").length) {
        $(".scrollup").on("click", function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000, "easeInOutExpo");
            return false;
        })
    }


    /*================================
    Magnific Popup
    ==================================*/
    if ($(".expand-img").length) {
        $('.expand-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.expand-video').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
    }
    /*------------------------------------------
        = WATER RIPPLE
    -------------------------------------------*/
    if ($(".ripple").length) {
        $('.ripple').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });

        // Automatic drops
        setInterval(function () {
            var $el = $('.ripple');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;

            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);
    }

    if ($(".particleground").length) {
        $('.particleground').particleground({
            dotColor: '#999999',
            lineColor: '#999999',
            particleRadius: 5,
            lineWidth: 2,
            curvedLines: true,
            proximity: 20,
            parallaxMultiplier: 10,
        });

    }


    /*------------------------------------------
        = VIDEO BACKGROUND
    -------------------------------------------*/
    if ($("#video-background").length) {
        $('#video-background').YTPlayer({
            showControls: false,
            playerVars: {
                modestbranding: 0,
                autoplay: 1,
                controls: 1,
                showinfo: 0,
                wmode: 'transparent',
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: window.location.origin
            }
        });
    }

    /*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    /*------------------------------------------
        = TOGGLE MUSUC BIX
    -------------------------------------------*/
    if ($(".music-box").length) {
        const musicBtn = $(".music-box-toggle-btn");
        const musicBox = $(".music-holder");
        const audio = document.getElementById("wedding-audio");

        let isPlaying = true;

        musicBtn.on("click", function () {
            musicBox.toggleClass("toggle-music-box");

            if (audio) {
                if (isPlaying) {
                    audio.pause();
                } else {
                    audio.play().catch(() => { }); // En caso de bloqueo por navegador
                }
                isPlaying = !isPlaying;
            }

            return false;
        });
    }

}(jQuery));