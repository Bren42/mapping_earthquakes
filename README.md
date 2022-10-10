# mapping_earthquakes

## Purpose of Mapping
The purpose of this exercise was to determine if we could create a dynamic map that would show the frequency, how recent, and the magnitude of earthquakes. We needed to not only pull down information from the USGS website and add it to our map, we needed to make it so that the map was dynamic and users could add major earthquake data as well as tectonic plate data.

## Tectonic Plates
After completing the map that shows our viewers where the most recent earthquakes occured it would be useful to show people the relation of the earthquakes relative to the tectonic plates.

![This is an image](https://github.com/Bren42/mapping_earthquakes/blob/main/images/tectonic1.png)

As can be seen in the image above we gave the users the ability to add the tectonic plate layer or remove it as they see fit. This will give the user a good view of how the plates and earthquakes relate. This also allowed us to add the Major Earthquakes layer for view as well. 

To do this we added some simple code to the JavaScript file:

![This is an image](https://github.com/Bren42/mapping_earthquakes/blob/main/images/overlays.png)

Creating the overlays was simply a matter of creating variables that pointed to our data, most of which was grabbed from an API using a D3 call. We then provided a name that the user would see as an option and added that to the overlays.

One of the other requests was to make sure that the tectonic plate layer had some customization so we added the color blue to differentiate the plates and made the line weight 3. 

![This is an image](https://github.com/Bren42/mapping_earthquakes/blob/main/images/tectplate_features.png)

One of the final steps to our mapping tool was to add multiple maps that the user could select as their base layer, depending on how they wanted their default map view. In this case I added 4 map styles for the users to choose from, with the streets map being the default:


Satellite View Map:
![This is an image](https://github.com/Bren42/mapping_earthquakes/blob/main/images/satellite_map.png)


Dark Map:
![This is an image](https://github.com/Bren42/mapping_earthquakes/blob/main/images/dark_map.png)

Light Map:
![This is an image](https://github.com/Bren42/mapping_earthquakes/blob/main/images/light_map.png)


## Conclusion
Creating multiple map views as well as multiple data overlays allows us to create a map that can be used in multiple different analysis. It also shows how we can keep iterating upon this map as well as keep the information dynamically updated as it pulls information from the API at USGS. This gives our teams the ability to customize to their specific needs and allows us to adapt the map easily from this starting point.


