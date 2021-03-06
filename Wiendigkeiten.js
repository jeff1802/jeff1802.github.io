let myMap = L.map("mapdiv"); 
const wienGroup = L.featureGroup();
myLayers = {

    geolandbasemap : L.tileLayer (
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",
        { subdomains : ["maps","maps1","maps2","maps3","maps4"],                       
        attribution : "Datenquelle: <a href='https://www.basemap.at' >Basemap.at</a>"   
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

myMap.addLayer(myLayers.geolandbasemap); 

let myMapControl = L.control.layers({  
    "Basemap.at" : myLayers.geolandbasemap,
    "Basemap.at (Grau)" : myLayers.bmapgrau,
        "Basemap.at (highdpi)" : myLayers.bmaphidpi,
    "Orthophoto 30cm" : myLayers.bmaporthofoto30cm,

},{"Basemap overlay" : myLayers.bmapoverlay,
    "Sehenswürdigkeiten" : wienGroup
}
);



myMap.addControl (myMapControl); 



L.control.scale( 
{imperial: false, 
maxWidth:200 
}

).addTo(myMap);

async function addGeojson(url) {
   
    const response =await fetch(url);
 
    const wiendata = await response.json();

    const geojson = L.geoJSON(wiendata,{
        style: function(feature){
        return{color: "#ff0000"}
    },
        pointToLayer:function(geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl:"sight-2.png"
                })
            })
        }
        
    });
    
    geojson.bindPopup(function(layer) {
    const props = layer.feature.properties;
    const popupText = `<h1>${props.NAME}</h1>
        <p>Adresse: ${props.ADRESSE}</p>
        <p>${props.WEITERE_INF}</p>`;
    return popupText;
      })
    wienGroup.addLayer(geojson);
    myMap.fitBounds(wienGroup.getBounds())
}


const url = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SEHENSWUERDIGOGD&srsName=EPSG:4326&outputFormat=json"

addGeojson(url);


myMap.addLayer(wienGroup);



/*(Alternative):
let geojson = L.geoJSON(WienSpaziergang).addTo(awsGroup);
geojson.bindPopup(function(layer) {
    const props = layer.feature.properties;
    const popupText = `<h1>${props.NAME}</h1>
    <p>${props.BEMERKUNG}</p>`;
    return popupText;
      });*/



/*myMap.fitBounds(awsGroup.getBounds());*/
