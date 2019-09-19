$(document).ready(function () {
    // preloader fadeout
    $('.preloader').fadeOut();
    // navbar
    $('.navBtn').click(function(){
        $('.nav').toggleClass('nav--show')
    })
    // video switch
    $('.video_switch-container').click(function(){
        const value = $('.video_switch-btn').hasClass('btnSlide')
        if(value){
            $('.video_switch-btn').removeClass('btnSlide')
            $('#video').get(0).play()
        } else {
            $('.video_switch-btn').addClass('btnSlide')
            $('#video').get(0).pause()
        }
    })  
    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        smartSpeed: 2000,
        margin: 10,
        nav: true,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 1
            },
            1000: {
            items: 1
            }
        }
        })
        $(".owl-prev").html('<div><i class="fas fa-chevron-left"></i></div>');
        $(".owl-next").html('<div><i class="fas fa-chevron-right"></i></div>');
})

