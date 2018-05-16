
const RouteGroup=L.featureGroup();
const routemarkerGroup=L.featureGroup(); 
let myLayers = {

    osm : L.tileLayer
    ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {subdomains : ["a", "b", "c"], 
    attribution : "Datenquelle: <a href='https://www.openstreetmap.org'>© OpenStreetMap-Mitwirkende</a>"
    }),
    
    geolandbasemap : L.tileLayer
    ("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", 
     {subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
      attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
    }),

    eKarte_sommer: L.tileLayer 
    ("http://wmts.kartetirol.at/wmts/gdi_summer/GoogleMapsCompatible/normal/{z}/{x}/{y}.jpeg80",
    {attribution : "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol' >www.data.gv.at</a>"
    }),

    eKarte_winter:  L.tileLayer 
    ("http://wmts.kartetirol.at/wmts/gdi_winter/GoogleMapsCompatible/normal/{z}/{x}/{y}.jpeg80",
    {attribution : "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol' >www.data.gv.at</a>"
    }),

    eKarte_ortho: L.tileLayer 
    ("http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/normal/{z}/{x}/{y}.jpeg80",
    {attribution : "Datenquelle: <a href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol' >www.data.gv.at</a>"
    })
};

let myMap = L.map("map",{ layers: [myLayers.geolandbasemap]
   });


let myMapControl= L.control.layers({
    "Openstreetmap":myLayers.osm, 
    "Geoland Basemap":myLayers.geolandbasemap, 
    "Karte Sommer":myLayers.eKarte_sommer,
    "Karte Winter":myLayers.eKarte_winter,
    "Orthophoto":myLayers.eKarte_ortho,
},
{"Route": RouteGroup,
"Start/Ziel": routemarkerGroup},
{
    collapsed:false
}

);

myMap.addControl (myMapControl); 

L.control.scale( {
    maxWidth:200,
    imperial: false 
    }).addTo(myMap);

let geojson = L.geoJSON(bikeRoute).addTo(RouteGroup);
RouteGroup.addLayer(geojson);

myMap.fitBounds(RouteGroup.getBounds());

myMap.addLayer(RouteGroup);

L.marker([47.227466,11.375286], {icon: L.icon({
    iconUrl:"start-race-2.png",
    iconAnchor: [12,35],
    popupAnchor:[0,-35]})
}).bindPopup("<a href='http://www.mutters.at'>Mutters</a>").addTo(routemarkerGroup);
L.marker([47.213184,11.213361], {icon: L.icon({
    iconUrl:"finish2.png",
    iconAnchor:[20,35],
    popupAnchor: [0,-35]})
}).bindPopup("<a href='https://de.wikipedia.org/wiki/Sellraintal'>Sellraintal</a>").addTo(routemarkerGroup);
myMap.addLayer(routemarkerGroup);

routemarkerGroup.addTo(myMap);

//myMap.fitBounds(routemarkerGroup.getBounds());
