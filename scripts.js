$(window).on("load", function(){
// Loading Screen Fade Delay
     var delayTimer = 1000; // Delay in milliseconds (ms)
     $("#loadingRing").delay(delayTimer).fadeOut();

     $("#circuit-logo").click(function(){
          $(this).scrollTop(0);
          $('#loadingscreen').css({
               opacity: '0'
          }).delay(delayTimer).queue(function(next){
          $(this).css({ zIndex: '-9980' });
          next();
          });
     });

    //  $('form').submit(function(){
    //       $('.container').css({
    //            opacity: '0'
    //       }).delay(0).queue(function(next){
    //            $(this).css({ zIndex: '-9950' });
    //            next();
    //       }).delay(1500).queue(function(next){
    //            $('#end-container').css({ zIndex: '9940' });
    //            $('#end-container').css({ opacity: '1' });
    //            next();
    //       });
    //  });
     
});
