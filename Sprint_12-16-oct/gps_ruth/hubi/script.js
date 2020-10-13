function iniciarMap() {
  var cord = {lat: 19.1796455383, lng: -99.4160003662};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center: cord
  });

  var mar = new google.maps.Marker({
    position: cord,
    map: map
  });
}
