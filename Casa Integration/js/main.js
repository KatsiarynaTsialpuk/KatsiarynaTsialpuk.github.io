$(document).ready(function() {
	
	$("#slider_container").owlCarousel({
		loop: true,
		autoplay:true,
		autoplayTimeout:2000,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			900: {
				items: 3
			},
			1200: {
				items:4
			}
		}
	});
	
});


$(document).ready(function() {
	
	$("#reviews").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 1000,
		dots: true,
		autoplay:true,
		autoplayTimeout:4000
	});
	
});