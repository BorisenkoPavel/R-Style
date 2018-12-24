$(function() {

	$('.humb').click( function() {

		$('.menu-humb').slideToggle(300)

	});


	$('.menu-humb div li').click( function() {

		$(this).children('ul').slideToggle(300)

	});

		$("#goto").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 350);
		});

	$("#goTop").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 350);
	});

	$('.modal').on('click', function() {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});

});
