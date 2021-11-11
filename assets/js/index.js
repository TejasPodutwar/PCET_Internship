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