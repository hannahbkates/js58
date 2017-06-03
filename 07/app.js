window.onload = function() {
	console.log('Page is loaded.');
	
	// var main_heading = document.createElement('h1');
	// var heading_text = document.createTextNode('Hello dynamic world!');
	// main_heading.appendChild(heading_text);
	// document.body.appendChild(main_heading);

	var elem = document.getElementById('pig');
	// console.log(elem);

	// var elem2 = document.createElement('marquee');
	// var elem2_text = document.createTextNode('Pig! Pig! Pig!');
	// elem.appendChild(elem2);
	// elem2.appendChild(elem2_text);

	var btn = document.getElementById('myButton');
	btn.onclick = function (event) {
		var newElem = document.createElement('img');
		newElem.src = 'http://placekitten.com/200/' + parseInt(Math.random() * 1000);
		elem.appendChild(newElem);
	}

	var form = document.getElementById('myForm');
	form.onsubmit = function (event) {
		event.preventDefault();
		alert('Thanks!');
	}
}