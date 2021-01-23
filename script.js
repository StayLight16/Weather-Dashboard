// Jeremy Yon Homework-6 Weather Dashboard

// Variables 
var searchButton = $(".searchButton");

var apiKey = "eea50b782084157ed5f3ff64cdc53818";

// For loop for persisting the data onto HMTL page
for (var i = 0; i < localStorage.length; i++) {

    var city = localStorage.getItem(i);
    // console.log(localStorage.getItem("City"));
    var cityName = $(".list-group").addClass("list-group-item");

    cityName.append("<li>" + city + "</li>");
}

