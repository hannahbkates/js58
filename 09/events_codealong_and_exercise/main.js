/*

Appending: Independent Practice

Make the delete and complete links do the following when clicked:

* When "Complete" is clicked, make the text for the item have a strikethrough decoration
* When "Delete" is clicked, remove the entire LI parent
* When adding an item via the input and submit button, add it to the UL list.
* Any newly added items must have the same delete and complete functionality as the previous ones
*/


$(function(){

	var $favList = $('#fav-list');
	var $complete = $('#fav-list li a.complete');
	var $delete = $('#fav-list li a.delete');
	var $submit = $('#new-thing-button');

	$complete.on('click', function(e){
		console.log($complete);
		$(this).parent().css("text-decoration", "line-through");
	})

	$delete.on('click', function(e){
		$(this).parent().remove();
	})

	$submit.on('click', function(e){
		var $elem = $('#new-thing')[0].value;
		console.log($elem);
		$elem.addClass('li');
		$favList.append($elem);
		event.preventDefault();
	})

})
