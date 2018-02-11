import $ from 'jquery';
import 'owl-carousel';


$('.food-slider__container').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    navText: false,
    margin: 30,
    center: true,
    responsive : {
        992 : {
            items: 3,
        },
        640 : {
            items: 2
        }
    }
})