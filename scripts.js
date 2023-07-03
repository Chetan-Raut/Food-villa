$(document).ready(function() {
      // Code to be executed when the document is ready

      // Example: Hide/show content on button click
      $("#toggleButton").click(function() {
        $("#additionalContent").slideToggle();
      });
      
      // Example: Smooth scrolling to page sections
      $("a").click(function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });
    });
