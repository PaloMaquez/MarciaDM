
$(document).ready(function() {

	// Pause just a moment
	setTimeout(function() {

		var $book = $('.book');

		// Apply the intro classes that will 
    // appear to turn the book,
		// revealing its spine
		$book.addClass('bookIntro');

		// pause another moment, then turn back
		setTimeout(function() {
			$book.removeClass('bookIntro');
		}, 2000);


	}, 1000);


});