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
	// $(window).on('scroll', function(){
	// 	if($(window).scrollTop()) 
	
	// 		$('header').addClass('nen');
	// 	}
	// 	else {
	// 		$('header').removeClass('nen');
	// 	}
	// });

// $(function(){
// 	$(window).scroll(function(){
// 		if($(window).scrollTop() > 1 )
// 		{
// 			$('header').addClass('nen');
// 			$('.navbar-brand').addClass('maunen');
// 			$('.nav-link').addClass('mauchu');
		
// 		}
// 		else{
// 			$('header').removeClass('nen');
// 			$('.navbar-brand').removeClass('maunen');
// 			$('.nav-link').removeClass('mauchu');
// 		}
// 	})
// })
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100 ){
			$('header').addClass('nen')
			$('.nav-link').addClass('mauchu')
		}
		else{
			$('header').removeClass('nen')
			$('.nav-link').removeClass('mauchu')
		}
	})
})

