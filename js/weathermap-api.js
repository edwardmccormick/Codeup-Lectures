"use strict";

$(document).ready(function() {
    // Ajax call to OpenWeatherAPI
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        q:     "San Antonio, US",
        units: 'imperial'
    }).done(function(data) {
        console.log(data)

        let icon = "<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' >"
        $('#target').append(icon)

    })


})