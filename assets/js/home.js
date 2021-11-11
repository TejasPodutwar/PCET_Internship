$('.testi.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    items: 2,
    margin:10,
    autoplay:true,
    autoplayTimeout: 5000,
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

window.onload = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

let backToTopBtn = document.getElementById('back-to-top-btn');

window.onscroll = function (){
    scrollFunction();
}

function scrollFunction(){
    if( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        backToTopBtn.style.display = "block";
    }
    else{
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


