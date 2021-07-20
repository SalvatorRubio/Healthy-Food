$(function() {
    $header = $('.header')
    $introHeight = $('.intro').height()
    $headerHeight = $header.height()

    $btnBurg = $('.header-btn__burg')
    $mobileMenu = $('.header-mobile__nav')

    // FIXED HEADER 

    checkOffset()

    function checkOffset() {
        if($(window).scrollTop() > $introHeight) {
            if($(this).scrollTop() > $introHeight) {
                $header.addClass('fixed')
    
            } else {
                $header.removeClass('fixed')
            }
        }
    }

    

    $(window).scroll(function () { 

        checkOffset()

        if($(window).scroll) {
            $mobileMenu.slideUp(200)
        }
    });

    // MOBILE MENU

    $btnBurg.on('click', function () {
        $mobileMenu.slideToggle(300)
    });


    // SHOW ALL MENU

    $menuBtn = $('.menu-btn__text')
    $menuListHide = $('.menu-list__row:eq(2)')
    $allMenuList = $('.menu-list__row')

    $hideMenu = $('hide-menu')

    $menuBtn.on('click', function () {
        $menuListHide.slideToggle(1000).css('display', 'flex')
    }); 
    
    // SLIDER 

    $('.testimonial__body').slick({
        infinite: true,
        speed: 300
    })
})
