
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(51.515144, -0.123254),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
