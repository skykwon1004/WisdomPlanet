$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03', 'sub04', 'sub05'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },

        afterLoad: function (lnk, idx) {
            console.log(idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');


        },
        onLeave: function (idx, nidx, dir) {
            $('.side_gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            // console.log(idx, nidx, dir);

            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (dir == 'down') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        },

        afterLoad: function (anchorLink, index) {
            console.log(index);
            index == 1 ? $('.toTop').fadeOut() : $('.toTop').fadeIn();

            // 5번째 섹션에 도달했을 때 카운터를 시작하는 함수
            if (index === 5) {
                startCounter();
            }
        },

    });


    function startCounter() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        $('.num').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }


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
        autoplaySpeed: 3000,
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
        slidesToShow: 4,
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


    // 4번째 섹션에 도달했을 때 카운터를 시작하는 함수
    function startCounter() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        $('.num').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }



    //tab 기능 구현
    $('.left_itm .menu>li').on('click', function () {
        var idx = $(this).index();
        // console.log(idx);
        $('.right_itm .content').removeClass('on');
        $('.right_itm .content').eq(idx).addClass('on');

        $('.left_itm .menu>li').removeClass('on');
        $(this).addClass('on');
    })



    // //news 더보기
    // // 초기에는 처음 3개의 리스트 항목만 보이도록 설정
    // $("#list-container a:gt(3)").hide();

    // // 더보기 버튼 클릭 시 추가 3개의 리스트 항목 보이기
    // $("#load-more-btn").click(function () {
    //     $("#list-container a:hidden").slice(0, 4).show();

    //     //높이를 100vh 씩 늘립니다.
    //     $(".sub05 .inner").css("height", "+=400px");

    //     // 모든 리스트 항목이 보이면 더보기 버튼 숨기기
    //     if ($("#list-container a:hidden").length === 0) {
    //         $("#load-more-btn").hide();
    //     }
    // });





    $(window).on('load', function () {
        load('#js-load', '4');
        $("#js-btn-wrap .more_button").on("click", function () {
            load('#js-load', '4', '#js-btn-wrap');
        })
    });

    function load(id, cnt, btn) {
        var girls_list = id + " .js-load:not(.active)";
        var girls_length = $(girls_list).length;
        var girls_total_cnt;
        if (cnt < girls_length) {
            girls_total_cnt = cnt;
        } else {
            girls_total_cnt = girls_length;
            $('.more_button').hide()
        }
        $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
    }

});