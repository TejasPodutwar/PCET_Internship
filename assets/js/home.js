$('.testi.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    items: 2,
    margin:10,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }

  });

$('.default1.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        }
    }
})




