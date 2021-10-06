$(document).ready(function(){
    //slider
    $(".slider .owl-carousel").owlCarousel(
        {
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            nav:true
        }
    );
        //trending
    $(".trending .owl-carousel").owlCarousel(
        {
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                }
            },
            loop:true,
            nav:true,
            navText:[`<i class="fas fa-caret-left"></i>`,`<i class="fas fa-caret-right"></i>`]
        }
    );
        //our products
    $(".our-products .owl-carousel").owlCarousel(
        {
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                }
            },
            loop:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            navText:[`<i class="fas fa-caret-left"></i>`,`<i class="fas fa-caret-right"></i>`]
        }
    );
        //review
    $(".review .owl-carousel").owlCarousel(
        {
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
            },
            loop:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            navText:[`<i class="fas fa-caret-left"></i>`,`<i class="fas fa-caret-right"></i>`]
        }
    );
  });

$(".home,.shop").hover(function () {
          $(this).children(".dropdown").stop(true,false,true).slideDown();
          $(this).children(".dropdown").css('display', 'flex');
          
      }, function () {
        $(this).children(".dropdown").stop(true,false,true).slideUp();
      }
);

$(window).scroll(function () { 
    const currentPos = $(this).scrollTop();
    if (currentPos<300)
    {
        $(".turn-top-button").css("display", "none");
    }
    else 
    {
        $(".turn-top-button").css("display", "flex");
    }
});

$(".turn-top-button").click(function (e) { 
    e.preventDefault();
    $("body,html").animate(
        {
            scrollTop:0,
        }
    );
});

 