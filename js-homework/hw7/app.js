$(function() {

  $('#loading').hide();
  $('#loc').hide();
  $('#coordsdiv').hide();

  // DOM is now ready
  _500px.init({
  	sdk_key: 'c8cf466e6abeed55849aa56202eb1f198a8f900d'
  });

  $('#login').click(function(){
  	_500px.login();
  });

  // Get authorization after login click
  _500px.on('authorization_obtained', function() {
  	console.log('Authorized successfully!')
    $('#login').hide(); 

    $('#loc').show();
    $('#coordsdiv').show();

    // User location
    $('#loc').click(function(){
      $('.images').empty();
      $('#loading').show();
      navigator.geolocation.getCurrentPosition(function(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        search(lat,long);
      })
    })

    // Coordinates input
    $('#coords').click(function(){
      $('.images').empty();
      $('#loading').show();
      navigator.geolocation.getCurrentPosition(function(pos) {
        var lat = $('#lat').val();
        var long = $('#long').val();
        search(lat,long);
      })
    })

    // Search function that will be run if either button is clicked
    var search = function(lat, long) {
      var searchOptions = {
        geo: lat + ',' + long + ',' + '25mi',
        only: 'Landscapes',
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      }
      _500px.api('/photos/search', searchOptions, function(resp){
        $('.image-results-view').show();
        var photos = resp.data.photos;
        for(var i = 0; i < photos.length; i++) {
          var newImg = $('<img>').attr('src', photos[i].image_url).addClass('image');
          $('.images').append(newImg);
          $('#loading').hide();
        }
      })
    }
  });
});