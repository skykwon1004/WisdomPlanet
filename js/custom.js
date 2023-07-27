$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03', 'sub04', 'sub05'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        //아랜 속도 부분... https://jqueryui.com/easing/ 참고.
        // easing: 'easeOutBounce',
        //easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.side_gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (dir == 'down') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });


    // main_visual
    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        // $('.main_visual .main_slide_num span').text(c ? (c + 1) : 1);
        // $('.main_visual .main_slide_num strong').text(s.slideCount);
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.main .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    // m cover
    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
        $('.header').toggleClass('on');
    });

    $('.cover li').on('click', function () {
        $('.cover').removeClass('on');
        $('.mopen').removeClass('on');
        $('.header').removeClass('on');

    });

    // brands_slide
    $('.brands_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1
        var current = $('.brands_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        // $('.main_visual .main_slide_num span').text(c ? (c + 1) : 1);
        // $('.main_visual .main_slide_num strong').text(s.slideCount);
    });


    $('.brands_slide').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.sub02 .left').on('click', function () {
        $('.brands_slide').slick('slickPrev')
    });

    $('.sub02 .right').on('click', function () {
        $('.brands_slide').slick('slickNext')
    });

})