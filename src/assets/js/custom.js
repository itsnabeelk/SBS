
function customJs(){

$(window).on('load', function() {
  // Disable body scrolling
  $('body').css('overflow', 'hidden');
  
  // Set a higher z-index for the loader
  $("#preloader").css('z-index', '9999999');
  
  // Fade out the loading animation
  $("#status").fadeOut(5000);
  
  // Delay and fade out the white DIV that covers the website
  $("#preloader").delay(1000).fadeOut("slow", function() {
    // Restore body scrolling
    $('body').css('overflow', 'auto');
    
    // Reset z-index for the loader
    $("#preloader").css('z-index', 'initial');
  });
});


// portfolio

$(document).ready(function () {
    $('.porfolio-carousel-lr').owlCarousel({
        center: false,
        loop: true,
        dots: false,
        autoplay: true,
        margin: 10,
        rtl: false,
        nav: false,
        mouseDrag: true,
        pullDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            479: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    })
    $('.porfolio-carousel-rl').owlCarousel({
        center: true,
        loop: true,
        dots: false,
        autoplay: true,
        margin: 10,
        rtl: true,
        nav: false,
        mouseDrag: true,
        pullDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            479: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    })

   
})



// end


// number count 
$(function(){
    $(".count").hide(0).fadeIn(3000)
      $('.count').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          }
        });
      });
  });
// close

}