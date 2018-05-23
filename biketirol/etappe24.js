
let myMap = L.map("map",{
    fullscreenControl: true
   });
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

myMap.addLayer(myLayers.geolandbasemap);

let myMapControl= L.control.layers({
    "Openstreetmap":myLayers.osm,
    "Geoland Basemap":myLayers.geolandbasemap,
    "Karte Sommer":myLayers.eKarte_sommer,
    "Karte Winter":myLayers.eKarte_winter,
    "Orthophoto":myLayers.eKarte_ortho
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

    //Alternative
//let geojson = L.geoJSON(bikeRoute).addTo(RouteGroup);
//RouteGroup.addLayer(geojson);
//myMap.fitBounds(RouteGroup.getBounds());


//Hilfe zu Erstellung 
/*var gpx = '...'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, 
    {async: true}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);*/

let gpxTrack = new L.GPX("data/etappe24.gpx", {
    async:true
}).addTo(RouteGroup);
gpxTrack.on('loaded',function(evt){
    //console.log(evt.target.get_distance().toFixed(0))
    let min_hoehe=(evt.target.get_elevation_min().toFixed(0));
    document.getElementById("min_hoehe").innerHTML=min_hoehe;

    let max_hoehe=(evt.target.get_elevation_max().toFixed(0));
    document.getElementById("max_hoehe").innerHTML=max_hoehe;

    let anstieg=(evt.target.get_elevation_gain().toFixed(0));
    document.getElementById("anstieg").innerHTML=anstieg;

    let abfahrt=(evt.target.get_elevation_loss().toFixed(0));
    document.getElementById("abfahrt").innerHTML=abfahrt;

    let laenge = (evt.target.get_distance().toFixed(0));
    document.getElementById("laenge").innerHTML=laenge;
    
    myMap.fitBounds(evt.target.getBounds());
});

myMap.addLayer(RouteGroup);

L.marker([47.227466,11.375286], {icon: L.icon({
    iconUrl:"images/start-race-2.png",
    iconAnchor: [12,35],
    popupAnchor:[0,-35]})
}).bindPopup("<a href='http://www.mutters.at'>Mutters</a>").addTo(routemarkerGroup);

L.marker([47.213184,11.213361], {icon: L.icon({
    iconUrl:"images/finish2.png",
    iconAnchor:[20,35],
    popupAnchor: [0,-35]})
}).bindPopup("<a href='https://de.wikipedia.org/wiki/Sellraintal'>Sellraintal</a>").addTo(routemarkerGroup);

myMap.addLayer(routemarkerGroup);

routemarkerGroup.addTo(myMap);

//myMap.fitBounds(routemarkerGroup.getBounds());
