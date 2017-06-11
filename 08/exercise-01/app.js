var onLoad = function() {

	var counter = 0;

	$('button').on("click", function(event) {
		counter ++;
			if(counter%2==0) {
				$('body').css('background-color','orange');
			} else {
				$('body').css('background-color','purple');
			}
		event.preventDefault();
	})
}

$(onLoad);

	// var container = $('div.container');

	// console.log(container[0]);

	// container.hide(500);

	// $('a').click(function(event) {
	// 	counter ++;
	// 	event.preventDefault();
	// 	$(this).text('You clicked me ' + counter + ' times')
	// })

	// $('button').click(function(event) {
	// 	counter ++;
	// 	event.preventDefault();
	// 	$(this).text('You clicked me!')
	// })

	// $('button').on("click", function(event) {
	// 	counter ++;
	// 	event.preventDefault();
	// 	$(this).text('You clicked me!')
	// })
