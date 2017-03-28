'use strict';


	var icons = new Skycons(),
			list = [
				"clear-day", "clear-night", "partly-cloudy-day",
				"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
				"fog"
			],
			i;

		for (i = list.length; i--;)
			icons.set(list[i], list[i]);
		icons.play();
		$(document).ready(function () {
			var url = 'https://api.darksky.net/forecast/';
			var apiKey = 'f27babc7a050d34e4825462e56e0eea0';
			var unit = 'si';
			var lati = 59.345237;
			var longi = 18.023431;
			jQuery.ajax({
				url: url + apiKey + "/" + lati + "," + longi + "?callback=?&units=" + unit,
				type: 'GET',
				dataType: 'jsonp',
				timeout: 3000,
				success: function (data) {
					var loK = data.timezone;
					var cityLok = loK.substring(loK.lastIndexOf("/") + 1);
					var wIcon = data.currently.icon;
					//	.locationstring.split('/').pop();
					$('#currentTemp').html(data.currently.temperature.toFixed(0));
					$('#toDay').html(day);
					$('#yourLocation').html(cityLok);
					$('#weatherIcon').html(wIcon);
					$('#windSpeed').html('windSpeed ' + data.currently.windSpeed);
					$('#weatherHumiditi').html('Humiditi ' + data.currently.humidity);
					$('#timeNow').html(tid);
					$('#summaryToday').html(data.currently.summary);
					if (wIcon == "clear-day") {
						var skycons = new Skycons({ "color": "Yellow" });
						skycons.add("weatherIcon", Skycons.CLEAR_DAY);
						skycons.play();
					}
					if (wIcon == "clear-night") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.CLEAR_NIGHT);
						skycons.play();
					}
					if (wIcon == "partly-cloudy-day") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.PARTLY_CLOUDY_DAY);
						skycons.play();
					}
					if (wIcon == "partly-cloudy-night") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.PARTLY_CLOUDY_NIGHT);
						skycons.play();
					}
					if (wIcon == "cloudy") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.CLOUDY);
						skycons.play();
					}
					if (wIcon == "rain") {
						var skycons = new Skycons({ "color": "blue" });
						skycons.add("weatherIcon", Skycons.RAIN);
						skycons.play();
					}
					if (wIcon == "sleet") {
						var skycons = new Skycons({ "color": "blue" });
						skycons.add("weatherIcon", Skycons.SLEET);
						skycons.play();
					}
					if (wIcon == "snow") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.SNOW);
						skycons.play();
					}
					if (wIcon == "wind") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.WIND);
						skycons.play();
					}
					if (wIcon == "fog") {
						var skycons = new Skycons({ "color": "white" });
						skycons.add("weatherIcon", Skycons.FOG);
						skycons.play();
					}

				},
				error: function () {
					
					$('.weatherWrapper').html('Latest forecast not available, please check the API key');
					$('.forecastWrapper').hide();
				}
			});
		});
		//moment script
		var day = moment().format('dddd');
		var tid = moment().format('LTS');

//........................
		//var skycons = new Skycons({ "color": "pink" });
		//// on Android, a nasty hack is needed: {"resizeClear": true}

		//// you can add a canvas by it's ID...
		//skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);

		//// ...or by the canvas DOM element itself.
		//skycons.add(document.getElementById("icon2"), Skycons.RAIN);

		//// if you're using the Forecast API, you can also supply
		//// strings: "partly-cloudy-day" or "rain".

		//// start animation!
		//skycons.play();

		//// you can also halt animation with skycons.pause()

		//// want to change the icon? no problem:
		//skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

		//// want to remove one altogether? no problem:
		//skycons.remove("icon2");

