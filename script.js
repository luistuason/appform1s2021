$(document).ready(function(){
  $('#scene2').hide();
  $('#seeyou').hide();

  //switch from welcome to form
  $('#jukebox').click(function(){
    $('#main').fadeOut(800, function(){
        $('#scene2').fadeIn(800);
    });
  });

  $('form').submit(function(){
    if($(this).valid()) {
      $('#scene2').fadeOut(1500, function(){
        $('#seeyou').fadeIn(1500);
      });
    }
  });

  //form validation
  $("form[name='registration']").validate();
  $("#lastname").rules("add", {
    required: true,
    messages: {
      required: "Please enter your Last Name."
    }
  });
  $("#lastname").rules("add", {
    minlength: 2,
    messages: {
      minlength: "Please enter a valid name with at least 2 characters."
    }
  });
  $("#firstname").rules("add", {
    required: true,
    messages: {
      required: "Please enter your First Name."
    }
  });
  $("#firstname").rules("add", {
    minlength: 2,
    messages: {
      minlength: "Please enter a valid name with at least 2 characters."
    }
  });
  $("#lastname").rules("add", {
    required: true,
    messages: {
      required: "Please enter your Last Name."
    }
  });
  $("#studentnum").rules("add", {
    required: true,
    messages: {
      required: "Please enter your Student Number."
    }
  });
  $("#fblink").rules("add", {
    required: true,
    messages: {
      required: "Please enter the link to your Facebook Profile."
    }
  });
  $("#contactnum").rules("add", {
    required: true,
    messages: {
      required: "Please enter your Contact Number."
    }
  });
  $("#contactnum").rules("add", {
    digits: true,
    messages: {
      required: "Please enter a valid phone number."
    }
  });
  $("#question").rules("add", {
    required: true,
    messages: {
      required: "Answer the question naman :>>>"
    }
  });

});