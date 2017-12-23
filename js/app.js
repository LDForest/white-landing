import $ from 'jquery';
import 'owl-carousel';
import 'bootstrap';

$('.food-slider__container').owlCarousel({
	 items: 3 ,
   nav: true,
   loop: true,
   dots: false,
   navText: false
})