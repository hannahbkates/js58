$(function(){
	var videoIds = ['_OBlgSz8sSM','CsGYh8AacgY', '5rrgY9x1Hts'];

	$('#submit-video').on('click', function(event){
		var addedVideo = $('#add-video').val();
		videoIds.push(addedVideo);
		$('#add-video').val("");
		console.log(videoIds);
	})

	$('#get-video').on('click', function(event){
		var randIndex = Math.ceil(Math.random() * 100) % videoIds.length;
		$('#random-video').empty();
		var element = '<iframe width=100% height=315px src="https://www.youtube.com/embed/' + videoIds[randIndex] + '" frameborder="0" allowfullscreen></iframe>';
		// have to wrap the string in the $() function to convert it to a real html element
		$('#random-video').append($(element));
	})
})