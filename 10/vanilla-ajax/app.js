// var request = new XMLHttpRequest();

// request.onreadystatechange = function() {
//   // if(request.readyState === 4) {
//   if(request.readyState === XMLHttpRequest.DONE) {
//     var parsedJSON = JSON.parse(request.responseText);

//     var elem = document.getElementById('body');
//     elem.innerHTML = 'Current Temp: ' + parsedJSON.currently.temperature + ' F';
//   }
// }

// request.open('GET', 'https://js58-proxy.herokuapp.com/forecast/323b39754a73d4cdea0a8a805b06a5dd/40.72,-74.00');
// request.send();



// JQuery Version
var url = 'https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/32.72,-40.00';

$.get(url, function(r) {
  $('body').html('Current Temp: ' + r.currently.temperature + ' F');
})