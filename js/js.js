

/* jQuery Accordion */

$(document).ready(function($) {
	$('#accordionNav ul ul').hide();
	$('#accordionNav > ul > li > a').click(function(){
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$(this).next().slideUp();
		} else {
			$('#accordionNav > ul > li > a').removeClass('selected');
			$(this).addClass('selected');
			$('#accordionNav ul ul').slideUp();
			$(this).next().slideDown();
		}
		return false;
	});
});
