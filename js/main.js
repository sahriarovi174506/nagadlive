(function ($) {
  "use strict";
  $(document).on("ready", function () {
    //sliders
    $(".header_slider").slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: true,
      vertical: false,
      verticalSwiping: false,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    $(".sponsor_slider")
      .on("init", () => {
        $('.slick-slide[data-slick-index="-1"]').addClass("lt2");
        $('.slick-slide[data-slick-index="-0"]').addClass("lt1");
        $('.slick-slide[data-slick-index="1"]').addClass("gt1");
        // $('.slick-slide[data-slick-index="2"]').addClass('gt2');
      })
      .slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      })
      .on("beforeChange", (event, slick, current, next) => {
        $(".slick-slide.gt2").removeClass("gt2");
        $(".slick-slide.gt1").removeClass("gt1");
        $(".slick-slide.lt1").removeClass("lt1");
        $(".slick-slide.lt2").removeClass("lt2");
        const lt2 = current < next && current > 0 ? current - 1 : next - 2;
        const lt1 = current < next && current > 0 ? current : next - 1;
        const gt1 = current < next || next === 0 ? next + 1 : current;
        const gt2 = current < next || next === 0 ? next + 2 : current + 1;
        $(`.slick-slide[data-slick-index="${lt2}"]`).addClass("lt2");
        $(`.slick-slide[data-slick-index="${lt1}"]`).addClass("lt1");
        $(`.slick-slide[data-slick-index="${gt1}"]`).addClass("gt1");
        $(`.slick-slide[data-slick-index="${gt2}"]`).addClass("gt2");
        // Clone processing when moving from 5 to 0
      });
    $(".offers_slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "120px",
      speed: 1200,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            centerPadding: "100px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 566,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            centerPadding: "100px",
          },
        },
      ],
    });
    $(".js-preloader").preloadinator({
      minTime: 500,
    });
    function onYouTubeIframeAPIReady() {
      player = new YT.Player("video-placeholder", {
        width: 640,
        height: 360,
        videoId: "HdzI-191xhU",
        events: {
          onReady: initialize,
        },
      });
    }
  });
})(jQuery);
