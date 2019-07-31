var youtubeController = (function() {

	var cta;

	function init() {
		cta = $('.cta');

		cta.on('click', playVideo);
	}

	function playVideo(e) {
		e.preventDefault();
		$("#video")[0].src += "&autoplay=1";
	}

	$(init);

})(jQuery);
