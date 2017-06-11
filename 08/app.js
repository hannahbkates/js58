// window.onload = function() {
// jquery version
// $(
// 	function(){
// 		var container = $('div.container');
// 		console.log(container);
// 	}
// );

// can also do
var onLoad = function(){
	var container = $('div.container');
	console.log(container);

	var helloText = $('<strong></strong>');
	helloText.text('This page is awesome')
	helloText.appendTo(container);
}

$(onLoad);