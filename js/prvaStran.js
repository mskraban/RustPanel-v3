$(document).ready(function(){


    $(function() {
        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
             $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
             $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    
    });
    

/*----------------------------------------------------------------------------*/

    $('.panel.panel-default').hide();

    $(".btn:first").click(function(e){
        e.preventDefault();
        $(".jumbotron").animate({
            top: 100
        }, 1000 );

        $(".panel.panel-default").show().animate({
            top: 250
        }, 1000 );

        $(".btn:nth-of-type(2)").fadeOut("slow", function(){});

       
    });

});

/*----------------------------------------------------------------------------*/

function novaStran() {
    window.location.assign("side/blog.html")
}



$(function() {
    $.scrollify({
        section: ".first, .second, .third, .four, .five, .six", 
        setHeights: false,
        scrollSpeed: 1100,
        scrollbars: false,
        before: function(section) {
            console.log(section);
        }
    });
});


/*----------------------------------------------------------------------------*/
$(document).ready(function(){
    var izpis =  $('.okvir .box').length + $('.okvir-dr .box').length
   // console.log("število spremeb: " + izpis);
    

    var novo =  $('.box .novo').length
  //  console.log("novo: " + novo);
    $('.prikaz-no').append(novo);

    var info =  $('.box .info').length
  //  console.log("posodobljeno: " + info);
    $('.prikaz-ps').append(info);

    var popravljeno =  $('.box .fixed').length
   // console.log("popravljeno: " + popravljeno);
    $('.prikaz-po').append(popravljeno);

    //countup
    var options = {
          useEasing: true, 
          useGrouping: true, 
          separator: ',', 
          decimal: '.', 
        };
        var demo = new CountUp('stevilo', 0, 65, 0, 5, options);
        if (!demo.error) {
          demo.start();
        } else {
          console.error(demo.error);
        }


    //chart
    Chart.defaults.global.defaultFontColor = "#fff";
    Chart.defaults.global.defaultFontSize = 12;
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
        labels: ["Novo", "Posodobljeno", "Popravljeno"],
        datasets: [
            {
            backgroundColor: ["#6e9457","#459baf","#af9d45"],
            data: [novo,info,popravljeno]
            }
            
        ]
        
        },
        options: {
        title: {
            display: false,
             }
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////
/*

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('.navbar-light').css('background-color', '#222222');
        } else {
           $('.navbar-light').css('background-color', '#574838');
        }
    });
 });

 */