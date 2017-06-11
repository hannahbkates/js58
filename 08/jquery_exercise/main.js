/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(function(){

  var $thingList = $('#thing-list li');
  var $submit = $('#new-thing-button');

  var $elem = $('<a class="complete" href="#"> Complete</a>');
  $thingList.append($elem);

  $submit.on('click', function(e){
    var $elem = '<li class="thing">'+ $('#new-thing')[0].value + ' <a class="complete" href="#">Complete</a></li>';
    $thingList.parent().append($elem);
    event.preventDefault();
    })
  
  var $complete = $('#thing-list li a.complete');

  $complete.on('click', function(e){
    $(this).parent().css("text-decoration", "line-through");
  })
});