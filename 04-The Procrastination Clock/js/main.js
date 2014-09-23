/* -- TEMBOO -- */
var youtube = function() {
// Instantiate the client proxy
// You may need to adjust the path to reflect the URI of your server proxy
var temboo = new TembooProxy('proxy-server.php');

// Add the listSearchResults Choreo
var listSearchResultsChoreo = temboo.addChoreo('jsListSearchResults');

// Add inputs
listSearchResultsChoreo.setInput('Query', 'Cute Kittens');
listSearchResultsChoreo.setInput('MaxResults', '20');

// Success callback
var showResult = function(outputs, outputFilters) {
    // Parse JSON response
    var results = JSON.parse(outputs.Response);

    // Get items array
    var items = results.items;

    for(i=0; i<items.length; i++) {

    // Get first item
    var item = items[i];

    // Get video ID
    var videoId = item.id.videoId;

    // Get the snippet object within the first item
    var snippet = item.snippet;

    // Get the title and thumbnail url fields
    var title = snippet.title;
    var thumbnails = snippet.thumbnails.high.url;

    // Print title and description
    console.log(title);
    console.log(videoId);
    console.log(thumbnails);


    // Create Div and Link
    var a = document.createElement('a');
    a.href = 'https://www.youtube.com/watch?v='+videoId;
    var item = document.getElementById('pa');
    item.appendChild(a);
    var div = document.createElement('div');
    div.style.background = 'url("'+thumbnails+'")';
    div.setAttribute('class', 'youtube'); // and make sure myclass has some styles in css
    a.appendChild(div);
    }
};

// Error callback
var showError = function(error) {
    if(error.type === 'DisallowedInput') {
        console.log(error.type + ' error: ' + error.inputName);
    } else {
        console.log(error.type + ' error: ' + error.message);
    }
};

// Run the Choreo, specifying success and error callback handlers
listSearchResultsChoreo.execute(showResult, showError);
}

/* -- READ INPUT FORM -- */
var setDays = 0;;
var setHours = 0;;
var setMinutes = 0;

var cdTime;
var workTime;
var flashTime;

var calculateTime = function() {
	setDays = $('.setDays').val();
	setHours = $('.setHours').val();
	setMinutes = $('.setMinutes').val();

	daysNeeded = $('.daysNeeded').val();
	hoursNeeded = $('.hoursNeeded').val();
	minutesNeeded = $('.minutesNeeded').val();
		
	cdTime = setDays * 24 * 60 * 60 + setHours * 60 * 60 + setMinutes * 60;
	workTime = daysNeeded * 24 * 60 * 60 + hoursNeeded * 60 * 60 + minutesNeeded * 60;
	
	console.log(cdTime);
	clockFunction();
	flashFunction();
	youtube();
}

/* -- CLOCK -- */

var clock;
		
var clockFunction = function() {

	clock = $('.clock').FlipClock({
	    clockFace: 'DailyCounter',
		autoStart: false,
		callbacks: {
		    stop: function() {
		        $('.message').html('DOOMSDAY HAS ARRIVED'),
		        $('#sp').css("background-color", "black");
		        }
		    }
		});
				    
		clock.setTime(cdTime);
		clock.setCountdown(true);
		clock.start();
		$("#setTimeForm").hide();
		$("p#sw").show();
		$("p#paText").show();
};

/* -- CALCULATE WORK TIME NEEDED TILL FLASHING BG -- */

var flashFunction = function() {
	flashTime = (cdTime - workTime) * 1000;	
	console.log("flashTime:" + flashTime);
	setTimeout(function(){ 
		setInterval(function(){
 		jQuery("#sp").toggleClass("spWhite");},100);
		$('#sw').html('DOOMSDAY IS ARRIVING YO!');
		}, 
 		flashTime); 
	var interval = (cdTime - workTime) * 1000 / 100; //time in ms
	setInterval(
   	function(){
       	$('#pa').animate({"height": "-=1%"},'slow');
   	}, 
   	interval);
	console.log(interval);
};

/* -- INIT -- */

var init = function() {
	console.log('I don\'t wanna work!!!');
	$('#submit').click(function(e){
		e.preventDefault();
		calculateTime();
	});
};

$(document).ready(function(){
	init();
	$("p#sw").hide();
	$("p#paText").hide();
});

