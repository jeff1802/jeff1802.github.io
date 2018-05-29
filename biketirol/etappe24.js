
let myMap = L.map("map",{
   fullscreenControl: true
   });
const RouteGroup=L.featureGroup().addTo(myMap);
const routemarkerGroup=L.featureGroup().addTo(myMap);
let overlaySteigung = L.featureGroup().addTo(myMap);

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
"Start/Ziel": routemarkerGroup,
"Steigungslinie": overlaySteigung},
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
    console.log(evt.target.get_distance().toFixed(0))
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

gpxTrack.on('addline', function(evt){
    hoehenprofil.addData(evt.line);
    console.log(evt.line);
    console.log(evt.line.getLatLngs())
    console.log(evt.line.getLatLngs()[0])
    console.log(evt.line.getLatLngs()[0].meta)
    console.log(evt.line.getLatLngs()[0].lat)
    console.log(evt.line.getLatLngs()[0].lng)
    console.log(evt.line.getLatLngs()[0].meta.ele);

});
//myMap.addLayer(RouteGroup);

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

//myMap.addLayer(routemarkerGroup);

//routemarkerGroup.addTo(myMap);

//myMap.fitBounds(routemarkerGroup.getBounds());

//elevation hinzufügen 

//all used options are the default values

//Höhenprofil control

var hoehenprofil= L.control.elevation({
    position: "topright",
    theme: "steelblue-theme",
    collapsed: true
}).addTo(myMap);



/*var el = L.control.elevation({
    position: "topright",
  theme: "steelblue-theme", //default: lime-theme
  width: 600,
  height: 125,
  margins: {
      top: 10,
      right: 20,
      bottom: 30,
      left: 50
  },
  useHeightIndicator: true, //if false a marker is drawn at map position
  interpolation: "linear", //see https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-area_interpolate
  hoverNumber: {
      decimalsX: 3, //decimals on distance (always in km)
      decimalsY: 0, //deciamls on hehttps://www.npmjs.com/package/leaflet.coordinatesight (always in m)
      formatter: undefined //custom formatter function may be injected
  },
  xTicks: undefined, //number of ticks in x axis, calculated by default according to width
  yTicks: undefined, //number of ticks on y axis, calculated by default according to height
  collapsed: false,  //collapsed mode, show chart on click or mouseover
  imperial: false    //display imperial units instead of metric
});
el.addTo(myMap);
L.geoJson(geojson,{
  onEachFeature: el.RouteGroup.bind(el) //working on a better solution
}).addTo(myMap);

var el = L.control.elevation();
el.addTo(myMap);
var g=new L.GPX("../etappe24.gpx", {async: true});
g.on("addline",function(e){
	el.RouteGroup(e.line);
});
g.addTo(myMap);*/

//alle Segmente der Steigungslinie hinzufügen 

var segment = L.polyline(
    [
    [p2.lat,p2.lng],
    [p1.lat,p1.lng],
    ],
    {
        color: farbe,
        weight: 5
    }
).addTo(myMap);

let gpxLinie = evt.line.getLatLngs();
for (let i = 1; i < gpxLinie.lenght; i++) {
    let p1 = gpxLinie[i-1];
    let p2 = gpxLinie[i];
    console.log(p1.lat.lng,p2.lat,p2.lng);

}
//Entfernung zwischen den Punkten berechnen
let dist = myMap.distance(
    [p2.lat,p2.lng],
    [p1.lat,p1.lng],
)

//Höhenunterschied berechnen
let delta = p2.meta.ele - p1.meta.ele;

//Steigung in % berechnen

let proz = (dist>0) ? (delta / dist * 100.0).toFixed(1):0

console.log(p1.lat,p1.lng,p2.lat,p2.lng,dist,delta,proz);

// grün ['#edf8e9','#bae4b3','#74c476','#238b45']
//rot ['#fee5d9','#fcae91','#fb6a4a','#cb181d']

let farbe = 
    proz>15 ?'#cb181d':
    proz>10 ?'#fb6a4a':
    proz>6  ?'#fcae91':
    proz>2  ?'#fee5d9':
    proz>0 ?'#969696':
    proz>-2 ?"#edf8e9":
    proz>-6 ?'#bae4b3':
    proz>-10?'#74c476':
    proz>-15?'#238b45':
            "green";