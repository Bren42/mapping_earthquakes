// // add console.log to check to see if our code is working.
// console.log("working");

//create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution:'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});

// get data from cities.js
let cityData = cities;

//loop through the cities array and create a marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{
        radius:city.population/150000,
        color:"Orange",
        colorFill:"Orange",
        weight: 4
    })
    .bindPopup("<h2>" + city.city + "," + city.state +"</h2> <hr> <hr3>Population "+ city.population.toLocaleString() +"</h3>")
.addTo(map);
});

streets.addTo(map);
