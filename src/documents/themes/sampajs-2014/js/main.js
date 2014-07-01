(function($){

$('.nav-link[href^="#"], .footer li a, .scroll-page-down').on('click', function(event) {
    event.preventDefault();

    var href = $(this).attr('href'),
        offSetTop = $(href).offset().top;

    $('html body').animate({scrollTop : offSetTop}, 500, function () {
        location.hash = href;
    });
});


$('.icon-arrow-up').on('click', function(event) {
    event.preventDefault();

     $('html body').animate({scrollTop : 0}, 500, function () {
        location.hash = '';
    });
})
})(jQuery);
