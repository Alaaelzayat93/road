$(document).ready(function () {
  

  $('#camera_wrap').camera();
   navigationHover: true

});
/*carousel*/
     $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    option:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})