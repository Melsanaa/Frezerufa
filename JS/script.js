$(function(){
		$('.main__slider, .catalog__slider').slick({
			arrows: false,
			dots: true,
			draggable: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	
		$(".nav, .catalog").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});