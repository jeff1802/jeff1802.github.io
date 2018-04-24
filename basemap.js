
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
/*let myLayers = {
    wert:100,
    alter:50,
    farbe:"grün",
    liste:[1,2,3,4],
    nocheinobjekt={}

osm : L.tileLayer
("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),

geolandbasemap : L.tileLayer
("https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png"),
    
bmapoverlay : L.tileLayer
("https://maps.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png"),
    
bmapgrau : L.tileLayer
("https://maps.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png"),
    
bmaphidpi : L.tileLayer
("https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg"),
    
bmapothofoto30cm : L.tileLayer
("https://maps.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg"),
    
}*/

//myLayer = L.tileLayer("https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png");

//myLayer=L.tileLayer("https://maps.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png");

//myLayer=L.tileLayer("https://maps.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png")

//myLayer=L.tileLayer("https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg")

//myLayer=L.tileLayer("https://maps.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg")


myMap.addLayer(myLayers.bmapgrau);//http://leafletjs.com/reference-1.3.0.html#map-addlayer

let myMapControl= L.control.layers({//http://leafletjs.com/reference-1.3.0.html#control-layers-l-control-layers
    "Openstreetmap":myLayers.osm, 
    "Geoland Basemap":myLayers.geolandbasemap, 
    "Overlay":myLayers.bmapoverlay, 
    "Grau":myLayers.bmapgrau, 
    "HIDDPI": myLayers.bmaphidpi, 
    "Orthophoto": myLayers.bmapothofoto30cm},
                                  {
    "basemap.at Overlay": myLayers.bmapoverlay,
},
{collapsed:false}//http:leafletjs.com/reference-1.3.0.html#control-layers-collapsed
)

myMap.addControl(myMapControl);//http://leafletjs.com/reference-1.3.0.html#map-addcontrol

myMap.setView([47.267,11.383], 11);//http://leafletjs.com/reference-1.3.0.html#map-setview


L.control.scale( {//http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
    maxWidth:200,//http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
    imperial: false //http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
    }).addTo(myMap);
