 $(document).ready(function(){
        $('.navbar').hide();               
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('.navbar').fadeIn(500);
            } else {
                $('.navbar').fadeOut(500);
            }
        });
    });

 $( document ).ready(function() {
     $(".slider").slick({
         slidesToShow: 3,
         slidesToScroll: 3,
         autoplay: true,
         autoplaySpeed: 200000
     });
 });