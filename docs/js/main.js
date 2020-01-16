$(document).ready(function() {

    //Nav menu
    document.querySelector('.menu-icon-wrapper').onclick = function() {
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    }

    // Owl-carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
    });

    // Scroll To Top
    const csrollBtn = $('.scroll-to-top-btn');

    // По скроллу скрываем или показываем кнопку
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500 ) {
            csrollBtn.fadeIn();
        } else {
            csrollBtn.fadeOut();
        }
    });

    // Клик по кнопке 
    csrollBtn.click(function(){
     $('html, body').animate({scrollTop: 0 }, 360);
     return false;
    });

    // MixItup
    var mixer = mixitup('.products__row');





});