(function($) {
	$(function() {
  	$('img[src*="imgur"]').each(function() {
    	$(this).attr('src', 'https://crossorigin.me/' + $(this).attr('src'));
    });
  });
}(jQuery));