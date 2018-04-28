let myMap = L.map("mapdiv"); 
//let markerGroup = L.featureGroup();
let myLayers = {

    
geolandbasemap : L.tileLayer
("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", 
 {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], 
  attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"} ),
    
bmapothofoto30cm : L.tileLayer
("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"}),
    
}

let myMapControl= L.control.layers({

    "Geoland Basemap":myLayers.geolandbasemap, 
    "Orthophoto": myLayers.bmapothofoto30cm},
                                  {
    "basemap.at Overlay": myLayers.bmapoverlay,
    "Marker": markerGroup
}
                                  )
myMap.addLayer(myLayers);
myMap.setView([47.267,11.383], 8);

L.control.scale( {
    maxWidth:200,
    imperial: false 
    }).addTo(myMap);