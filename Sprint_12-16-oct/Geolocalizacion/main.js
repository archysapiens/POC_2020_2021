function initMap(){
    var ubicacion = new localizacion(() =>{
        const options = {
            center:{
                lat: ubicacion.latitude,
                lng: ubicacion.longitude
            },
            zoom: 16
        }

        var map = document.getElementById('map');

        const mapa = new google.maps.Map(map,options);
    });
}