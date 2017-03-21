
 var context;
var $window = $(window);

   $(document).on('ready', function() {
    if($window.width() >= 768) {
        
          // $(window).resize(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      });
    // });
    } else if (($window.width() >= 480) &&($window.width()  <= 767)) {
        // $(document).on('ready', function() {
          // $(window).resize(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      });
    // });
    } else if ($window.width() <= 479) {
        // $(document).on('ready', function() {
          // $(window).resize(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      });
    // });
    }
});

/////////////////////////Refresh//////////////


   