let myMap = L.map("mapdiv"); //http://leafletjs.com/reference-1.3.0.html#map-l-map
let myLayers = {

osm : L.tileLayer//http://leafletjs.com/reference-1.3.0.html#tilelayer-l-tilelayer
("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{subdomains : ["a", "b", "c"], 
        attribution : "Datenquelle: <a href='https://www.openstreetmap.org'>© OpenStreetMap-Mitwirkende</a>"}),

geolandbasemap : L.tileLayer
("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", 
 {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], //http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
  attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"} ),//http://leafletjs.com/reference-1.3.0.html#layer-attribution
    
bmapoverlay : L.tileLayer
("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"}),
    
bmapgrau : L.tileLayer
("https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"}),
    
bmaphidpi : L.tileLayer
("https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"}),
    
bmapothofoto30cm : L.tileLayer
("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"], attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"}),
    
}


myMap.addLayer(myLayers.bmapgrau);

let myMapControl= L.control.layers({
    "Openstreetmap":myLayers.osm, 
    "Geoland Basemap":myLayers.geolandbasemap, 
    "Overlay":myLayers.bmapoverlay, 
    "Grau":myLayers.bmapgrau, 
    "HIDDPI": myLayers.bmaphidpi, 
    "Orthophoto": myLayers.bmapothofoto30cm},
                                  {
    "basemap.at Overlay": myLayers.bmapoverlay,
},
{
    collapsed:false
}
)

myMap.addControl(myMapControl);

myMap.setView([47.267,11.383], 11);/

L.control.scale( {
    maxWidth:200,
    imperial: false
    }).addTo(myMap);
