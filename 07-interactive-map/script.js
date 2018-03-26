window.onload = () => {

  const osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osmAttribution='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  const coordinates = [60.170833, 24.9375];
  const zoomLevel = 11;
  let myMap = L.map('mapid');
  let layerOptions = {
   attribution: osmAttribution
  };
  let osmlayer = L.tileLayer(osmUrl, layerOptions);
  
  myMap.addLayer(osmlayer);
  myMap.setView(coordinates, zoomLevel);

  let markerCoordinates = [60.19999499675728,24.93473768234253];

  L.marker(markerCoordinates).addTo(myMap);

};



          