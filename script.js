$(document).ready(function(){
  $('#scene2').hide();

  $('#scene1').click(function(){
      $('#scene1').fadeOut(800, function(){
          $('#scene2').fadeIn(800);
          $('#welcome-img').fadeOut(800);
      });

  });

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

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
  $("#fblink").rules("add", {
    url: true,
    messages: {
      required: "Please enter a valid URL."
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