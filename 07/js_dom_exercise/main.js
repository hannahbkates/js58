/* DOM Manipulation: Independent Practice

******FIRST******
First, read this page about something we didn't cover, prompts!
http://www.w3schools.com/jsref/met_win_prompt.asp
*****************

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, display the prompt asking what their favorite things are.
- When they hit enter, take the value they've typed in and add it to the list (remember: appendChild)

Bonus:

What they type in is blank, alert the user "you must type in a value!" if they press enter without adding the empty value to the page.
*/

window.onload = function() {
    var button = document.getElementById('new-thing-button');
    var list = document.getElementById('fav-list');
	button.onclick = function (event) {
		var favThingInput = prompt("What is another one of your favorite things?");
		if (favThingInput != null && favThingInput != '') {    		
			var newItem = document.createElement('li');
			var newItemText = document.createTextNode(favThingInput);
			newItem.append(newItemText);
			list.appendChild(newItem);
		} else {
			alert('You must type in a value');
		}
		event.preventDefault();
	}
};