window.onload = function() {
    var button = document.getElementById('submitButton');
    var content = document.getElementById('content');
	var numInput;
	button.onclick = function (event) {
		content.innerHTML = '';
		numInput = parseInt(document.getElementById('number').value);
		var newText = '';
		for(i=1; i<=numInput; i++) {	
			(i%3==0 && i%5==0) ? newText='FizzBuzz' : (i%3==0) ? newText='Fizz' : (i%5==0) ? newText='Buzz' : newText=i;
			var newItem = document.createElement('li');
			var newItemText = document.createTextNode(newText);
			newItem.append(newItemText);
			content.appendChild(newItem);
		}
		event.preventDefault();
	}
};