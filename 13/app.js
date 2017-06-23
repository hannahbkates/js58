$(function() {
	
	var pub = $('#publist').val();
	console.log(pub);

	$('#publist').on('change', function() {
  	pub = this.value;
  	console.log(pub);
	})

	var seekURL = '';
	var proxyURL = 'https://accesscontrolalloworiginall.herokuapp.com/';

	if(pub == 'digg') {
		seekURL = 'http://digg.com/api/news/popular.json';
	}

	// var nprURL = '';
	var diggURL = 'http://digg.com/api/news/popular.json';

	$.get(proxyURL + diggURL, function(results){
	  console.log(results);
	  results.data.feed.forEach(function(result){

	    title = result.content.title;
	    imgSrc = result.content.media.images[0].original_url;
	    tags = result.content.tags;
	    URL = result.content.url;
			
			modalContent = result.content.description + ' <a target="_blank" href="'+ URL + '">Read more from the source</a>';
			
			insertContent = $('<li class="list-group-item"><img src="' + imgSrc + '" height="100" width="200"> <a target="_blank" href="'+ URL + '"><h4>' + title + '</h4></a></li>');
			insertContent.data('content', modalContent);
			// Docs for how data() works: https://api.jquery.com/data/

	    $('ul').append(insertContent);

	    $('li').click(function (e) {
				console.log($(this).data('content'));
			})
	  })
	})
})