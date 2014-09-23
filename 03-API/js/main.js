var city = '';
var state = '';
var APIkey = '0b5b88ef581357f3';

// getWeather function

var getWeather = function(){
	var thisURL = 'http://api.wunderground.com/api/' + APIkey + '/forecast/geolookup/conditions/q/' + state + '/' + city + '.json';
	console.log(thisURL);

	$.ajax({
		url : thisURL,
		dataType : "jsonp",
		success : function(response) {
			loadWeather(response);
		}
	});

};

// setLocation function

var setLocation = function() {
	city = $('.currentCity').val();
	if(city == null || city == ''){
		alert('You need to list a city!');
		return;
	}
	state = $('.currentState').val();

	console.log('You want the weather for ' + city + '.' + state);
	getWeather();
};

// loadWeather function

var loadWeather = function(response) {

	if(response.response.error) {
		alert(response.response.error.description);
		return;
	};

	var thisCity = response.current_observation.display_location.city;
	var temp = response.current_observation.temp_f + '°';
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;

	console.log('City: ' + thisCity + ' Temp: ' + temp + ' Weather: ' + weather + ' Icon: ' + icon);

	$('.temperature').text(temp);
	$('.weather').text(weather);
	$('.currentCity').val(thisCity);
	$('.weatherIcon').html('<img src="'+icon+'">');
};

// init

var init = function() {
	console.log('Hi. What\'s the weather?');
	$('#submit').click(function(e){
		e.preventDefault();
		setLocation();
	});
};

$(document).ready(function(){
	init();
});