/*let myMap = L.map("mapdiv"); //http://leafletjs.com/reference-1.3.0.html#map-l-

const awsGroup: L.featureGroup()
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
    "Wetterstationen": awsGroup
},
{
    collapsed:false
}
)

myMap.addControl(myMapControl);

myMap.setView([47.267,11.383], 11);

L.control.scale( {
    maxWidth:200,
    imperial: false
    }).addTo(myMap);

/*console.log('stationen', stationen);*/


/*myMap.addLayer(awsGroup);
let geojson = L.geoJSON(stationen).addTo(awsGroup);
geojson.bindPopup(function(layer){
    const props = layer.feature.properties.name};
    const popupText="<h1>${props.name}</h1>
    <p>Temperatur: ${props.LT}°C</p>";
    const popupText2 = '<h1>+layer.feature.properties.name+</h1>';
    return props;*/
   /* console.log("layer for popup".layer);*/
/*});*/

/*myMap.addLayer(awsGroup);
let geojson = L.geoJSON(stationen).addTo(awsGroup);
geojson.bindPopup(function(layer) {
    const props = layer.feature.properties;
    const popupText = `<h1>${props.name}</h1>
    <p>Temperatur: ${props.LT}°C</p>`;
    return popupText;
      });*/


let myMap = L.map("mapdiv"); // http://leafletjs.com/reference-1.3.0.html#map-l-map
const awsGroup = L.featureGroup();
myLayers = {
    osm : L.tileLayer ( // http://leafletjs.com/reference-1.3.0.html#tilelayer-l-tilelayer
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
        attribution : "Datenquelle: <a href='https://www.openstreetmap.org' >Openstreepmap.com</a>"
    }
    ),

    geolandbasemap : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",
        { subdomains : ["maps","maps1","maps2","maps3","maps4"],                        // http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
        attribution : "Datenquelle: <a href='https://www.basemap.at' >Basemap.at</a>"   // http://leafletjs.com/reference-1.3.0.html#layer-attribution
    }
    ),

    bmapgrau: L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png",
        { subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at' >Basemap.at</a>"
    }
    ),
    bmaporthofoto30cm:  L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",
        { subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at' >Basemap.at</a>"
    }
    ),
    bmapoverlay: L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png",
        { subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at' >Basemap.at</a>"
    }
    ),
    bmaphidpi: L.tileLayer (
        "https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg",
        { subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at' >Basemap.at</a>"
    }
    )

};

myMap.addLayer(myLayers.geolandbasemap); // http://leafletjs.com/reference-1.3.0.html#map-addlayer

let myMapControl = L.control.layers({  // http://leafletjs.com/reference-1.3.0.html#control-layers-l-control-layers
    "Openstreetmap" : myLayers.osm,
    "Basemap.at" : myLayers.geolandbasemap,
    "Basemap.at (Grau)" : myLayers.bmapgrau,
        "Basemap.at (highdpi)" : myLayers.bmaphidpi,
    "Orthophoto 30cm" : myLayers.bmaporthofoto30cm,

},{"Basemap overlay" : myLayers.bmapoverlay,
    "Wetterstationen" : awsGroup
},
{collapsed:false  // http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed
}
);



myMap.addControl (myMapControl); // http://leafletjs.com/reference-1.3.0.html#map-addcontrol


myMap.setView([47.267,11.383], 11); // http://leafletjs.com/reference-1.3.0.html#map-setview

L.control.scale( // http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
{imperial: false, // http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
maxWidth:200 // http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
}
// metrische Angaben anzeigen sowie Position unten links ensprechen den defaults
).addTo(myMap);

// console.log("Stationen: ", stationen);

myMap.addLayer(awsGroup);
let geojson = L.geoJSON(stationen).addTo(awsGroup);
geojson.bindPopup(function(layer) {
    const props = layer.feature.properties;
    const popupText = `<h1>${props.name}</h1>
    <p>Temperatur: ${props.LT}°C</p>`;
    return popupText;
      });

myMap.fitBounds(awsGroup.getBounds());



