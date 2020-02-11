$(document).ready(function () {
  $('a').click(function (e) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function(){

    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-light");
    } else {
      $("#mainNav").removeClass("navbar-light");
    }


  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

});

