
$( document ).ready(function() {

    var $root = $('html, body');

    $('[href^="#"]').click(function () {
        $root.animate({
            easing: "swing",
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1500);

        return false;
    });
});