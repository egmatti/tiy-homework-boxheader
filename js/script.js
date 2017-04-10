// $(document).ready(function(){
//   // jQuery code
// });

$(document).ready(function() {
    $(window).scroll(function() {
      if($(window).scrollTop() < 55) {
        $("header").css("background", "none");
        $(".box-logo-svg").css("fill","white");
        $(".nav-text").css("color", "#c6d1d8");
        $(".fa").css("color", "#c6d1d8");
        $("#features").mouseover(function() {
          $("#features").css("color","white");
          $("#features-arrow").css("color","white");
        });
        $("#solutions").mouseover(function() {
          $("#solutions").css("color","white");
          $("#solutions-arrow").css("color","white");
        });
        $("#resources").mouseover(function() {
          $("#resources").css("color","white");
          $("#resources-arrow").css("color","white");
        });
        $("#pricing").mouseover(function() {
          $("#pricing").css("color","white");
        });
        $("#contact-us").mouseover(function() {
          $("#contact-us").css("color","white");
        });
        $("#telephone").mouseover(function() {
          $("#telephone").css("color","white");
          $(".fa-phone").css("color","white");
        });
        $("#log-in").mouseover(function() {
          $("#log-in").css("color","white");
          $(".fa-user-circle").css("color","white");
        });
        $("#sign-up").mouseover(function() {
          $("#sign-up").css("color","white");
        });
      } else {
        $("header").css("background", "white");
        $(".box-logo-svg").css("fill","#005fd5");
        $(".nav-text").css("color", "black");
        $(".fa").css("color", "black");
        $("#features").mouseover(function() {
          $("#features").css("color","#c6d1d8");
          $("#features-arrow").css("color","#c6d1d8");
        });
        $("#solutions").mouseover(function() {
          $("#solutions").css("color","#c6d1d8");
          $("#solutions-arrow").css("color","#c6d1d8");
        });
        $("#resources").mouseover(function() {
          $("#resources").css("color","#c6d1d8");
          $("#resources-arrow").css("color","#c6d1d8");
        });
        $("#pricing").mouseover(function() {
          $("#pricing").css("color","#c6d1d8");
        });
        $("#contact-us").mouseover(function() {
          $("#contact-us").css("color","#c6d1d8");
        });
        $("#telephone").mouseover(function() {
          $("#telephone").css("color","#c6d1d8");
          $(".fa-phone").css("color","#c6d1d8");
        });
        $("#log-in").mouseover(function() {
          $("#log-in").css("color","#c6d1d8");
          $(".fa-user-circle").css("color","#c6d1d8");
        });
        $("#sign-up").mouseover(function() {
          $("#sign-up").css("color","white");
        });
      }
    })
  });
