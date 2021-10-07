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
    $(".material .owl-carousel").owlCarousel(
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
                },
                992:{
                    items:4,
                },
                1140: 
                {
                    items:5
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
// show menu
$(".home,.shop").hover(function () {
          $(this).children(".dropdown").stop(true,false,true).slideDown();
          $(this).children(".dropdown").css('display', 'flex');
          
      }, function () {
        $(this).children(".dropdown").stop(true,false,true).slideUp();
      }
);
// scroll top button
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

// show menu in responsive viewport
$(".bar").on("click", function () {
    $(".nav-resp").stop(true,false,true).slideDown(500);
});
//close menu in responsive viewport
$(".close-menu").on("click", function () {
    $(".nav-resp").stop(true,false,true).slideUp(500);
});
//show - hide sub menu
$(document).on("click",".down", function () {
    $(this).parents("li").children(".dropdown").stop(true,false,true).slideDown();
        $(this).addClass("up");
        $(this).empty();
        $(this).append(`<i class="fas fa-angle-up"></i>`);
        $(this).removeClass("down");
});

$(document).on("click",".up", function () {
    $(this).parents("li").children(".dropdown").slideUp(); 
    $(this).addClass("down");
    $(this).empty();
    $(this).append(`<i class="fas fa-angle-down"></i>`);
    $(this).removeClass("up");
});
    
 