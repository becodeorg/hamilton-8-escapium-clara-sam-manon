// Initialize and add the map
function initMap() {
    // The location
    const uluru = { lat: 40.782480, lng: -73.965594 };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
      zoom: 15,
      mapId: '1ff73231248fda10'
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
      position: uluru,
      icon: '../resources/images/logo/gmap-logo.png',
      map: map,
    });
  }
  
  window.initMap = initMap;


  //JS to add the footer
  async function addFooter() {
    const resp = await fetch("/Html/footer.html")
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterend", html);
}
addFooter();