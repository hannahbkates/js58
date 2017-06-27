$(function() {

	$('#loading').hide();
	var pub = $('#publist').val();
	console.log(pub);

	var loadArticles = function (pub) {
		
		$('#loading').show();
		$('ul').empty();
		proxyURL = 'https://accesscontrolalloworiginall.herokuapp.com/'
		// Digg
		if(pub == 'digg') {
			seekURL = 'http://digg.com/api/news/popular.json';
			$.get(proxyURL + seekURL, function(rs){
			  rs.data.feed.forEach(function(r){

			    title = r.content.title;
			    imgSrc = r.content.media.images[0].original_url;
			    tags = r.content.tags;
			    URL = r.content.url;
					
					modalContent = r.content.description + ' <a target="_blank" href="'+ URL + '">Read more from the source</a>';
					
					insertContent = $('<li class="list-group-item"><img src="' + imgSrc + '" height="100" width="200"> <a target="_blank" href="'+ URL + '"><h4>' + title + '</h4></a></li>');
					insertContent.data('content', modalContent);
					// Docs for how data() works: https://api.jquery.com/data/

			    $('ul').append(insertContent);

			    $('li').click(function (e) {
						console.log($(this).data('content'));
					})
			  })
			})
		// New York Times
		} else if(pub == 'nytimes') {
			seekURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b35a2aca600a49bc9f1632c593027839'
			$.get(proxyURL + seekURL, function(rs){
			  var i = 0;
			  rs.results.forEach(function(r){
			    title = r.title;
			    imgSrc = r.multimedia[0].url;
			    tags = r.subsection;
			    URL = r.url;
						
					modalContent = r.abstract + ' <a target="_blank" href="'+ URL + '">Read more from the source</a>';
					
					insertContent = $('<li class="list-group-item"><img src="' + imgSrc + '" height="100" width="100"> <a target="_blank" href="'+ URL + '"><h4>' + title + '</h4></a></li>');
					insertContent.data('content', modalContent);
					// Docs for how data() works: https://api.jquery.com/data/

			    $('ul').append(insertContent);

			    $('li').click(function (e) {
						console.log($(this).data('content'));
					})
					i += 1;
			  })
			})
		}
		$('#loading').hide();
	}

	loadArticles(pub);

	$('#publist').on('change', function() {
	  	pub = this.value;
	  	console.log(pub);
	  	loadArticles(pub);
	})
})