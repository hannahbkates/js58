$(function(){
	$('#risk-it').on('click', function(event){
		event.preventDefault();
		var kitten = $('#random-kitten');
		kitten.empty();
		var randTime = Math.ceil(Math.random() * 1500);
		setTimeout(function(){
			kitten.append($('<img src="http://facts.net/wp-content/uploads/2015/01/Kitten-Facts.jpg">'));
		}, randTime);
	})
})