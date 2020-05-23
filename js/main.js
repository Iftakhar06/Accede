(function ($) {
"use strict";

$('.slider-active').slick({
    dots: false,
    arrows: false,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: true,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });
  
  $('.history-active').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
});

$('.clint-active').slick({
    dots: false,
    arrows: false,
    prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: true,
    vertical: false,
    verticalSwiping: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            
        }
    ]
  });

$('.brand-active').slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            
        }
    ]
});


//Barfiller active code
$('#bar1').barfiller({barColor: "#42C0D9",duration: 3000})
$('#bar2').barfiller({barColor: "#42C0D9",duration: 3000})
$('#bar3').barfiller({barColor: "#42C0D9",duration: 3000})
$('#bar4').barfiller({barColor: "#42C0D9",duration: 3000})
$('#bar5').barfiller({barColor: "#42C0D9",duration: 3000})



 // mailchimp start

 if ($('.mailchimp').length > 0) {
    /*  MAILCHIMP  */
    $('.mailchimp').ajaxChimp({
        language: 'es',
        callback: mailchimpCallback,
        url: "https://github.us19.list-manage.com/subscribe/post?u=f050131a100cfa7f06f4cd821&amp;id=7899a278d1" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
    });
}

function mailchimpCallback(resp) {
    if (resp.result === 'success') {
        $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);

    } else if (resp.result === 'error') {
        $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
    }
}
$.ajaxChimp.translations.es = {
    'submit': 'Submitting...',
    0: 'We have sent you a confirmation email',
    1: 'Please enter a value',
    2: 'An email address must contain a single @',
    3: 'The domain portion of the email address is invalid (the portion after the @: )',
    4: 'The username portion of the email address is invalid (the portion before the @: )',
    5: 'This email address looks fake or invalid. Please enter a real email address'
};



//isotope js 

$('#container').imagesLoaded( function() {

  var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
  });

  $('.portfolio-menu').on( 'click', 'li', function() {
      $('.portfolio-menu li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
  });
    
});



// counter active code
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// video active code
jQuery(".yt_video").YTPlayer({
  showControls: false,
});  

// meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

// one-page-nav active code
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});

// TOP Menu Sticky code
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 10){  
                $('#sticky-header').addClass("sticky");
            }
            else{
                $('#sticky-header').removeClass("sticky");
            }
        });

// // Scroll To Top
const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

})(jQuery);


