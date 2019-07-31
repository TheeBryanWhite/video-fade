var animateController = (function($) {

	var body = null, 
		bgFade = null,
		vContainer = null,
		cta = null;
	
	function init() {
		body = $('body');
		bgFade = $('.background-fade');
		cta = $('.cta');
		vContainer = $('.video-container');
		
		setTimeout(function() {
			fadeIn();
		}, 1000);

		cta.on('click', fadeOut);
	}

	function fadeIn() {
		body.addClass('active');
	}

	function fadeOut() {
		body.addClass('clicked');

		setTimeout(function() {
			bgFade.addClass('fade-out');
			vContainer.addClass('front');
		}, 1000);		
	}

	$(init);

})(jQuery);
