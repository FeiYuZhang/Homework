/* -- taskArray -- */

var taskArray = [];

/* -- saveTask -- */

var saveTask = function() {
	// define the task input form and value
	var newTask = $('#newTask').val();

	// add value to task array
	taskArray.push(newTask);

	// clear the input
	$('#newTask').val('');

	// log the task array
	console.log(taskArray);

	// update tasks
	updateTasks();
};

/* -- updateTasks -- */

var updateTasks = function() {
	$('#taskList').empty();

	$(taskArray).each(function(i) {
		console.log('task ' + i + ': ' + this); // 'this' is current element in the array you're referring to

	var deleteButton = $('<button/>');
	deleteButton.attr('id','deleteButton').text('X').click(function(e) {
		deleteTask(e);
	});

	var newTask = $('<div/>');
	newTask.attr('id', i).addClass('task').html('<p>' + this + '</p>');

	newTask.append(deleteButton);

	$('#taskList').append(newTask);

	});	

};

/* -- deleteTasks -- */
var deleteTask = function(e) {
	var taskNumber = e.target.parentElement.id;	
	taskArray.splice(taskNumber, 1);
	updateTasks();
};

/* -- init -- */
var init = function() {
	console.log('Hello World');

	$('#addButton').click(function(e){
		e.preventDefault();
		saveTask();
	});
};

/* -- load listener -- */
$(document).ready(init);