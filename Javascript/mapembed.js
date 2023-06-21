// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.782480, lng: -73.965594 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
      zoom: 15,
      mapId: '1ff73231248fda10'
    });
    // The marker, positioned at Uluru
    const iconBase = '../resources/images/logo/gmap-logo.png';

    const marker = new google.maps.Marker({
      position: uluru,
      icon: '../resources/images/logo/gmap-logo.png',
      map: map,
    });
  }
  
  window.initMap = initMap;