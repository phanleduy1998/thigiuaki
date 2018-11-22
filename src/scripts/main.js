$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		nav: true,
		items:1,
		dots: false,
		// navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		responsive:{
			768:{
				nav: false,
				dots: true,
				items:1
			},
		}
	})
	});
	$(window).on('scroll', function(){
		if($(window).scrollTop()) {
			$('header').addClass('nen');
		}
		else {
			$('header').removeClass('nen');
		}
	});


