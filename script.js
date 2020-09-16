$(document).ready(function(){
  $('#scene2').hide()

  $('#scene1').click(function(){
      $('#scene1').fadeOut(800, function(){
          $('#scene2').fadeIn(800);
      });

  });
});