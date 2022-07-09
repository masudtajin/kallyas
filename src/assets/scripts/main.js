

//-------owl carosel----------

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


//-------Button Hover Feroz vai----------

let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mousemove', function(e){
        button.setAttribute('style', 'box-shadow: inset '+ e.offsetX +'px 0px 20px -10px #0e7ce8, inset '+ (e.offsetX - 120) +'px 0px 20px -10px #0e7ce8')
    });
});



//------------button Hover Our Team---------------

function myFunction(){
    var element = document.getElementById('button-hover');
    element.classList.remove("mybuttons");
    element.classList.add("button");
}


//-------menu-button/mobile menu/for mobile----------

const menuButton = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
menuButton.addEventListener('click' , ()=>{
    header.classList.toggle('menu-open');
})


/* 
    Sticky header
*/


window.addEventListener('scroll', function(){

    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})


//read more
let button = document.getElementById("read-more");
button.addEventListener('click', function(e){
    e.preventDefault()
    let element = document.getElementById("paragraph");
    element.classList.toggle("full-paragraph");
    if (this.innerHTML === "Read more") {
        this.innerHTML = "Read less";
    } else {
        this.innerHTML = "Read more";
    }
})