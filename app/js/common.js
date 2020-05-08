$(function() {
    //one page scroll

var scrollCount = 0
      $('.fullPage').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        speed: 600,
        infinite: false
      });
    $('.fullPage').on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;}, 200);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
}));
/*var scrollPos = 0;
var inScroll = false;
var win = $(window).height();
var count = 1;
var test = 0;

$(window).scroll(function(e){
   var st = $(this).scrollTop();

   if(!inScroll){
    inScroll = true
    test = win*count;
    console.log(inScroll);
        if (st > scrollPos){
            count++;
            $('body,html').animate({
                scrollTop: test
            }, 1000,"linear", function(){
                inScroll = false;

            });  

        } else {    
            console.log('up');
            count--;
            $('body,html').animate({
                scrollTop: test
            }, 1000,"linear", function(){
                inScroll = false;

            });

        }
   }
   
    scrollPos = st;
});*/



    // menu

    $('.menu-burger a').on('click', function() {
        event.preventDefault();
        $('main').addClass('menu-active');
        $('.body-gradient').addClass('active');
        $('.mobile-menu').addClass('active');
        $('.body-gradient').addClass('active');
        $('body').addClass('active-menu-body')

    })
    $('.close-menu, .mobile-menu a').on('click', function() {
        event.preventDefault();
        $('main').removeClass('menu-active');
        $('.body-gradient').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('.body-gradient').removeClass('active');
        $('body').removeClass('active-menu-body')
    })


    // menu - links change active 
    jQuery(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 250;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');

            if (scroll > top && scroll < bottom) {
                $('.mobile-menu a.active').removeClass('active');
                $('.mobile-menu a[href="#' + id + '"]').addClass('active');
            }
        })
    });



    //scroll topline styles
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 100) {
            $('.top_line').addClass('srolled')
        } else {
            $('.top_line').removeClass('srolled')
        }
    });

    //img for slider
    var slideImages = $('.slide-img');
    $(slideImages).fadeOut();
    $(slideImages[0]).fadeIn();

    //services_owl

    var owlservices = $('.services_owl');

    owlservices.owlCarousel({
        center: true,
        items: 1,
        nav: false,
        mouseDrag: false,
        dots: true,
        dotsContainer: '.numbers_container',
        loop: false,
        margin: 0,
        animateOut: 'fadeOut',
    });

    var solutionMass = Array.from($(".solutions .owl-stage .owl-item"));
    var solutionCustomWithPart = 100 / solutionMass.length;
    var solutionCustomWith = solutionCustomWithPart
    var solutionCustopmPlur = 1
    $('.purple_line').css("height", solutionCustomWith + "%")
    // Go to the next item
    $('.solutions-navigation-buttons-left').click(function() {
        owlservices.trigger('next.owl.carousel');
        if (solutionCustomWith < 100) {
            solutionCustopmPlur++
            $(slideImages).fadeOut();
            $(slideImages[solutionCustopmPlur-1]).fadeIn();
            solutionCustomWith = solutionCustomWithPart * solutionCustopmPlur
            $('.purple_line').css("height", solutionCustomWith + "%")
        }
    })
    // Go to the previous item
    $('.solutions-navigation-buttons-right').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlservices.trigger('prev.owl.carousel');
        if (solutionCustomWith > solutionCustomWithPart) {
            solutionCustopmPlur--
            $(slideImages).fadeOut();
            $(slideImages[solutionCustopmPlur-1]).fadeIn();
            solutionCustomWith = solutionCustomWithPart * solutionCustopmPlur
            $('.purple_line').css("height", solutionCustomWith + "%")
        }
    })






    //works_owl
    var owlworks = $('.works_owl');

    owlworks.owlCarousel({
        center: true,
        items: 2,
        nav: false,
        dots: false,
        loop: false,
        responsive: {
            1024: {
                margin: 200,
            },
            768: {
                // margin: 50,
                items: 1,
            },
            480: {
                // margin: 50,
                items: 1,
            },
            0: {
                items: 1,
            }
        },

    });
    // Go to the next item
    $('.works-navigation-buttons-left').click(function() {
        owlworks.trigger('next.owl.carousel');

    })
    // Go to the previous item
    $('.works-navigation-buttons-right').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owlworks.trigger('prev.owl.carousel');
    })


    //form init

    $('.services_slide a').click(function() {
        event.preventDefault();
        $('.contacts_form').toggleClass('active');
    })

    $('.contacts_form a').click(function() {
        event.preventDefault();
        $('.contacts_form').toggleClass('active');
    })
    $('.contact-us').click(function() {
        event.preventDefault();
        $('.contacts_form').toggleClass('active');
    })





    //inputs

    var inputs = $('.input');
    inputs.on("change", function() {
        valid = true;
        nameValue = document.contact_form.contact_name.value;
        phoneValue = document.contact_form.contact_phone.value;
        emailValue = document.contact_form.contact_email.value;

        if (nameValue != "") {
            $('#form_name').addClass('filled')
        };

        if (phoneValue != "") {
            $('#form_phone').addClass('filled')
        };

        if (emailValue != "") {
            $('#form_email').addClass('filled')
        };

        if (nameValue != "" & phoneValue != "") {
            $('.button_underline').addClass('active');
            $('.button_form').addClass('active');
        };

        return valid;
        // body...
    });


    //solutions title hide function

    $('.works-navigation-buttons-left').on('click', function() {
        $('.portfolio-title').addClass('hide');
        $('.slide').addClass('titile_hide');
        $('.works-navigation').addClass('title_hide');
    });

    $('.works-navigation-buttons-right').on('click', function() {
        $('.portfolio-title').removeClass('hide');
        $('.slide').removeClass('titile_hide');
        $('.works-navigation').removeClass('title_hide');
    });


    //pagescroll 2 id
    $('.scroll').mPageScroll2id({ scrollSpeed: 700 });

    //FAQ

    $('.question').find('.open').on('click', function() {

        var questionContent = $(this).parents('.question').find('.question-content');

        if ($(questionContent).is(':hidden')) {
            $(questionContent).slideDown(300);
            $(this).addClass('opened').delay(400).queue(function() {
                $(this).addClass("opened2").dequeue();
            });
            $(this).parents('.question').addClass('active');

        } else {
            $(questionContent).slideUp(300);
            $(this).removeClass('opened2').delay(400).queue(function() {
                $(this).removeClass("opened").dequeue();
            });
            $(this).parents('.question').removeClass('active');
        }
    })

    //FAQ carousel

    var owlfaq = $('.questions-carousel');

    owlfaq.owlCarousel({
        mouseDrag: false,
        center: true,
        items: 1,
        nav: false,
        dots: true,
        loop: false,
        margin: 0,
        animateOut: 'fadeOut',
    });

    var faqMass = Array.from($(".faq .owl-stage .owl-item"));
    var faqCustomWithPart = 100 / faqMass.length;
    var faqCustomWith = faqCustomWithPart
    var faqCustopmPlur = 1
    // Go to the next item
    $('.timeline-active').css("width", faqCustomWith + "%")

    $('.faq-navigation-buttons-left').click(function() {
        owlfaq.trigger('next.owl.carousel');
        if (faqCustomWith < 100) {
            faqCustopmPlur++
            faqCustomWith = faqCustomWithPart * faqCustopmPlur
            $('.timeline-active').css("width", faqCustomWith + "%")
        }
    });
    // Go to the previous item
    $('.faq-navigation-buttons-right').click(function() {
        owlfaq.trigger('prev.owl.carousel');
        if (faqCustomWith > faqCustomWithPart) {
            faqCustopmPlur--
            faqCustomWith = faqCustomWithPart * faqCustopmPlur
            $('.timeline-active').css("width", faqCustomWith + "%")
        }

    });



    window.onload = function() {
        // alert('Страница загружена');
        $('.preloader').fadeOut('slow');
    };


});