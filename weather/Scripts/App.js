'use strict';

/*
function getQueryStringParameter(urlParameterKey) {
    var params = document.URL.split('?')[1].split('&');
    var strParams = '';
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split('=');
        if (singleParam[0] == urlParameterKey)
            return decodeURIComponent(singleParam[1]);
    }
}

var location_adress = getQueryStringParameter('MyLocation');

// show result
function showResult(result) {
    var latii = result.geometry.location.lat();
    var longii = result.geometry.location.lng();
    console.log(latii + " " + longii);
}

// google look up latitude
function getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Stockholm, Sweden';
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
            }
        });
    }
}
getLatitudeLongitude(showResult);
*/

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
					function tommorow(){
						var icon0 = data.daily.data[0].icon;
						var mTempo0 = data.daily.data[0].temperatureMax.toFixed(0);	
						var minTempo0 = data.daily.data[0].temperatureMin.toFixed(0);
						var sumaRy0 = data.daily.data[0].summary;

						if (icon0 == "clear-day") {
							var skycons = new Skycons({ "color": "Yellow" });
							skycons.add("dicon0", Skycons.CLEAR_DAY);
							skycons.play();
						}
						if (icon0 == "clear-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.CLEAR_NIGHT);
							skycons.play();
						}
						if (icon0 == "partly-cloudy-day") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.PARTLY_CLOUDY_DAY);
							skycons.play();
						}
						if (icon0 == "partly-cloudy-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.PARTLY_CLOUDY_NIGHT);
							skycons.play();
						}
						if (icon0 == "cloudy") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.CLOUDY);
							skycons.play();
						}
						if (icon0 == "rain") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon0", Skycons.RAIN);
							skycons.play();
						}
						if (icon0 == "sleet") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon0", Skycons.SLEET);
							skycons.play();
						}
						if (icon0 == "snow") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.SNOW);
							skycons.play();
						}
						if (icon0 == "wind") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.WIND);
							skycons.play();
						}
						if (icon0 == "fog") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon0", Skycons.FOG);
							skycons.play();
						}
						$('#dicon0').html(icon0);
						$('#dmTempo0').html('Max ' + mTempo0 + '&#8451');
						$('#dminTempo0').html('Min ' +minTempo0 + '&#8451');
						$('#dsumaRy0').html(sumaRy0);
					}
					tommorow();
					function afterTommorow() {
						var icon1 = data.daily.data[1].icon;
						var mTempo1 = data.daily.data[1].temperatureMax.toFixed(0);
						var minTempo1 = data.daily.data[1].temperatureMin.toFixed(0);
						var sumaRy1 = data.daily.data[1].summary;

						if (icon1 == "clear-day") {
							var skycons = new Skycons({ "color": "Yellow" });
							skycons.add("dicon1", Skycons.CLEAR_DAY);
							skycons.play();
						}
						if (icon1 == "clear-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.CLEAR_NIGHT);
							skycons.play();
						}
						if (icon1 == "partly-cloudy-day") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.PARTLY_CLOUDY_DAY);
							skycons.play();
						}
						if (icon1 == "partly-cloudy-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.PARTLY_CLOUDY_NIGHT);
							skycons.play();
						}
						if (icon1 == "cloudy") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.CLOUDY);
							skycons.play();
						}
						if (icon1 == "rain") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon1", Skycons.RAIN);
							skycons.play();
						}
						if (icon1 == "sleet") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon1", Skycons.SLEET);
							skycons.play();
						}
						if (icon1 == "snow") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.SNOW);
							skycons.play();
						}
						if (icon1 == "wind") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.WIND);
							skycons.play();
						}
						if (icon1 == "fog") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon1", Skycons.FOG);
							skycons.play();
						}
						$('#dicon1').html(icon1);
						$('#dmTempo1').html('Max ' + mTempo1 + '&#8451');
						$('#dminTempo1').html('Min ' + minTempo1 + '&#8451');
						$('#dsumaRy1').html(sumaRy1);
					}
					afterTommorow();
					function oneAfterTommorow() {
						var icon2 = data.daily.data[2].icon;
						var mTempo2 = data.daily.data[2].temperatureMax.toFixed(0);
						var minTempo2 = data.daily.data[2].temperatureMin.toFixed(0);
						var sumaRy2 = data.daily.data[2].summary;

						if (icon2 == "clear-day") {
							var skycons = new Skycons({ "color": "Yellow" });
							skycons.add("dicon2", Skycons.CLEAR_DAY);
							skycons.play();
						}
						if (icon2 == "clear-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.CLEAR_NIGHT);
							skycons.play();
						}
						if (icon2 == "partly-cloudy-day") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.PARTLY_CLOUDY_DAY);
							skycons.play();
						}
						if (icon2 == "partly-cloudy-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.PARTLY_CLOUDY_NIGHT);
							skycons.play();
						}
						if (icon2 == "cloudy") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.CLOUDY);
							skycons.play();
						}
						if (icon2 == "rain") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon2", Skycons.RAIN);
							skycons.play();
						}
						if (icon2 == "sleet") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon2", Skycons.SLEET);
							skycons.play();
						}
						if (icon2 == "snow") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.SNOW);
							skycons.play();
						}
						if (icon2 == "wind") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.WIND);
							skycons.play();
						}
						if (icon2 == "fog") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon2", Skycons.FOG);
							skycons.play();
						}
						$('#dicon2').html(icon2);
						$('#dmTempo2').html('Max ' + mTempo2 + '&#8451');
						$('#dminTempo2').html('Min ' + minTempo2 + '&#8451');
						$('#dsumaRy2').html(sumaRy2);
					}
					oneAfterTommorow();
					function twoAfterTommorow() {
						var icon3 = data.daily.data[3].icon;
						var mTempo3 = data.daily.data[3].temperatureMax.toFixed(0);
						var minTempo3 = data.daily.data[3].temperatureMin.toFixed(0);
						var sumaRy3 = data.daily.data[3].summary;

						if (icon3 == "clear-day") {
							var skycons = new Skycons({ "color": "Yellow" });
							skycons.add("dicon3", Skycons.CLEAR_DAY);
							skycons.play();
						}
						if (icon3 == "clear-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.CLEAR_NIGHT);
							skycons.play();
						}
						if (icon3 == "partly-cloudy-day") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.PARTLY_CLOUDY_DAY);
							skycons.play();
						}
						if (icon3 == "partly-cloudy-night") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.PARTLY_CLOUDY_NIGHT);
							skycons.play();
						}
						if (icon3 == "cloudy") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.CLOUDY);
							skycons.play();
						}
						if (icon3 == "rain") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon3", Skycons.RAIN);
							skycons.play();
						}
						if (icon3 == "sleet") {
							var skycons = new Skycons({ "color": "blue" });
							skycons.add("dicon3", Skycons.SLEET);
							skycons.play();
						}
						if (icon3 == "snow") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.SNOW);
							skycons.play();
						}
						if (icon3 == "wind") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.WIND);
							skycons.play();
						}
						if (icon3 == "fog") {
							var skycons = new Skycons({ "color": "white" });
							skycons.add("dicon3", Skycons.FOG);
							skycons.play();
						}
						$('#dicon3').html(icon3);
						$('#dmTempo3').html('Max ' + mTempo3 + '&#8451');
						$('#dminTempo3').html('Min ' + minTempo3 + '&#8451');
						$('#dsumaRy3').html(sumaRy3);
					}
					twoAfterTommorow();
					var loK = data.timezone;
					var cityLok = loK.substring(loK.lastIndexOf("/") + 1);
					var wIcon = data.currently.icon;
					//.........................
					

					//	.locationstring.split('/').pop();
					$('#currentTemp').html(data.currently.temperature.toFixed(0) +'<span id="cantigrader">&#8451</span>');
					$('#toDay').html(day);
					$('#toMar').html(etomarow);
					$('#otoMar').html(eoTomarow);
					$('#totoMar').html(etwoTomarow);
					$('#tretoMar').html(eTreetomarow);

					
					$('#yourLocation').html(cityLok);
					$('#weatherIcon').html(wIcon);
					$('#windSpeed').html("wind: " + data.currently.windSpeed.toFixed(2));
					$('#weatherHumiditi').html('Humiditi ' + data.currently.humidity);
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

		var tomarow = moment().add(1, 'days').calendar(); 
        // remove evrerything after "speace"
		var etomarow = tomarow.substring(0, tomarow.indexOf(' '));

		var oneTomarow = moment().add(2, 'days').calendar();
		// remove evrerything after "speace"
		var eoTomarow = oneTomarow.substring(0, oneTomarow.indexOf(' '));

		var twoTomarow = moment().add(3, 'days').calendar();
		// remove evrerything after "speace"
		var etwoTomarow = twoTomarow.substring(0, twoTomarow.indexOf(' '));

		var treeTomarow = moment().add(4, 'days').calendar();
		// remove evrerything after "speace"
		var eTreetomarow = treeTomarow.substring(0, treeTomarow.indexOf(' '));


		function displayTime() {
			var time = moment().format(' HH:mm:ss');
			$('#timeNow').text(time);
			setTimeout(displayTime, 1000);
		}
		$(document).ready(function () {
			displayTime();
		});

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


function manageQueryStringParameter(paramToRetrieve) {
    var params =
    document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve) {
            return singleParam[1];
        }
    }
}

var pagesUrl = appWebUrl + '/Pages/Default.aspx';
$('a#default_page_link').attr('href', appWebUrl);

var hostWebUrl = decodeURIComponent(manageQueryStringParameter('SPHostUrl'));
var appWebUrl = decodeURIComponent(manageQueryStringParameter('SPAppWebUrl'));

// change link to app url
$('a#default_page_link').attr('href', appWebUrl);
