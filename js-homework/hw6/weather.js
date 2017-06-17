$(function(){
	var loading = $('#loading-marquee');
	loading.hide();
	$('#get-weather').on('click', function(event){
		event.preventDefault();

		loading.show();

		var lat = $('#lat').val();
		var long = $('#long').val();

		console.log(lat, long);

		var baseURL = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43';
		var weatherURL = baseURL + '/' + long + ',' + lat;
		
		$.get(weatherURL, function(r) {
			var temp = r.currently.temperature;
			var humid = r.currently.humidity * 100;
			var wind = r.currently.windSpeed;
			$('#current-temp').html(temp);
			$('#current-humid').html(humid + '%');
			$('#current-wind').html(wind + ' mph');
		})
	})
})