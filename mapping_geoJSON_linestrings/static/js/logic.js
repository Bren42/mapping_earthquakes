
// We create the tile layer that will be the background of our map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution:'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});
// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};
let map = L.map('mapid', {
    center: [44.0, -88.0],
    zoom: 2,
    layers: [light]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//accessing the airport geoJSON URL
let torontoData = "HTTPS://raw.githubusercontent.com/bren42/Mapping_earthquakes/main/torontoRoutes.json";


// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data,{
      style:myStyle,
      onEachFeature: function(feature,layer) {
          layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " +
      feature.properties.dst + "</h3>");
      }
      })
        .addTo(map);
});

// streets.addTo(map);
