var MY_MAPTYPE_ID = 'satellite';

var coord = {lat:19.3498597 ,lng:-99.6291283};
var geocoder;
var mapOptions = {
    zoom: 18,
    center: coord,
    mapTypeControlOptions: {
    mapTypeIds: ['roadmap' , MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
};
let infoWindow, map;
var directionsService,directionsRenderer;
var mapas;

function iniciarMap(){
   directionsService = new google.maps.DirectionsService();
   directionsRenderer = new google.maps.DirectionsRenderer();
   map = new google.maps.LatLng(coord)
   
   //map = new google.maps.Map(document.getElementById("map"),
    //mapOptions);
   
    //var myMapType = new MyMapType();

    //map.mapType.set(MY_MAPTYPE_ID, myMapType);

    //var marker = new google.maps.Marke
    var marker = new google.maps.Marker({
      position: coord,
      map: mapas
  });
  mapas = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);

    //const geocoder = new google.maps.Geocoder();
    //geocoder.setMap(map);
    /*const vari = function (){
      geocodeAddress(geocoder, map);
    }

    directionsRenderer.setMap(map);

    document.getElementById("submit").addEventListener("click", vari);

*/
   // function () {
     // calculateAndDisplayRoute(directionsService, directionsRenderer);
    //};

}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location});
      } else {
        alert("No pudo encontrarce el lugar: " + status);
      }
    });
  }
    //const pos;
var posicion ={};
function Localizar(){
    infoWindow = new google.maps.InfoWindow();
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                posicion=pos;
                infoWindow.setPosition(pos);
                infoWindow.setContent("Ubicación");
                infoWindow.open(mapas);
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, infoWindow, mapas.getCenter());
            }
        );
    }else{
        handleLocationError(false,infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(mapas);
  }

  function Ruta(){
      const punCordenadas = [ coord ,posicion ];

      const dibuja = new google.maps.Polyline({
         path : punCordenadas,
         geodesic: true,
         strokeColor: "#FF0000",
          strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      dibuja.setMap(mapas);

  }

  function calcRoute() {
    //var start = document.getElementById('start').value;
    //var end = document.getElementById('end').value;
    var request = {
      origin: posicion,
      destination: coord,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  }
//directionsService, directionsRenderer
 /* function calculateAndDisplayRoute() {
    directionsService.route(
      {
        origin: 
          //query: document.getElementById("start").value,
          posicion,
        //},
        destination: 
         // query: document.getElementById("end").value,
         coord,
        //},
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("La solicitud de direcciones falló debido a " + status);
        }
      }
    );
  }*/