/* -- global variables -- */

var currentQuestion;
var duckReplies = ["Yes", "No", "How should I know?", "Don't feel like answering you.", "Oh, deffinitely!", "Hell yeah!", "No clue, sugar!", "Wuuut?", "Maaaaybe.", "Feed me and then I'll tell you."];

/* -- load sounds, because howler doesn't seem to play nice with arrays --*/
var sound = new Howl({urls: ['sound/yes.mp3']});
var sound2 = new Howl({urls: ['sound/no.mp3']});
var sound3 = new Howl({urls: ['sound/how.mp3']});
var sound4 = new Howl({urls: ['sound/dont.mp3']});
var sound5 = new Howl({urls: ['sound/ohdeff.mp3']});
var sound6 = new Howl({urls: ['sound/hellya.mp3']});
var sound7 = new Howl({urls: ['sound/noclue.mp3']});
var sound8 = new Howl({urls: ['sound/wut.mp3']});
var sound9 = new Howl({urls: ['sound/maybe.mp3']});
var sound10 = new Howl({urls: ['sound/feedme.mp3']});

/* -- create functions for the sound -- */

var sfunc = function() { sound.play(); };
var sfunc2 = function() { sound2.play(); };
var sfunc3 = function() { sound3.play(); };
var sfunc4 = function() { sound4.play(); };
var sfunc5 = function() { sound5.play(); };
var sfunc6 = function() { sound6.play(); };
var sfunc7 = function() { sound7.play(); };
var sfunc8 = function() { sound8.play(); };
var sfunc9 = function() { sound9.play(); };
var sfunc10 = function() { sound10.play(); };

/* -- duckSpeech on Startup -- */

$('#duckSpeech').text('Ask me yes and no questions, yo!');
$('#currentQuestion').text('');


/* -- askQuestion -- */

var answerQuestion = function() {
	// define the task input form and value
	currentQuestion = $('#newQuestion').val();

	// clear the input
	$('#duckSpeech').val('');

	// log the task array
	console.log(currentQuestion);

	// create random number for random reply
	var randomNumber = Math.floor(duckReplies.length * Math.random());

	// pick a reply using random number
	$('#duckSpeech').text(duckReplies[randomNumber]);

	// create array of sound functions
	var sounds = [sfunc, sfunc2, sfunc3, sfunc4, sfunc5, sfunc6, sfunc7, sfunc8, sfunc9, sfunc10];

	// play a sound using random number
	sounds[randomNumber]();

	var eyes = ["images/eyes.png", "images/eyes2.png", "images/eyes3.png", 
	"images/eyes4.png", "images/eyes5.png", "images/eyes6.png", "images/eyes7.png" ];

	// change eyes
	$('#eyes').css("background", "url('"+ eyes[Math.floor(Math.random()*eyes.length)] + "')"); 
};


/* -- init -- */
var init = function() {
	console.log('Hello World');

	// if enter is pressed call function
	$(document).keypress(function(e) {
    	if(e.which == 13) {
    		e.preventDefault();
       		answerQuestion();
    	}
	});
};

/* -- load listener -- */
$(document).ready(init);