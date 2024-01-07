
function customJs(){

    var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
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

