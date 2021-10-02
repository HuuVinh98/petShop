$(document).ready(function(){
    $(".slider .owl-carousel").owlCarousel(
        {
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            nav:true
        }
    );
  });
  $(document).ready(function(){
    $(".trending .owl-carousel").owlCarousel(
        {
            items:3,
            loop:true,
            nav:true,
            navText:[`<i class="fas fa-caret-left"></i>`,`<i class="fas fa-caret-right"></i>`]
        }
    );
  });

  $(document).ready(function(){
    $(".our-products .owl-carousel").owlCarousel(
        {
            items:4,
            loop:true,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            navText:[`<i class="fas fa-caret-left"></i>`,`<i class="fas fa-caret-right"></i>`]
        }
    );
  });