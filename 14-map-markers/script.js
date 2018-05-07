const exampleMarkers = [
  { coordinates: [60.19999499675728,24.93473768234253], text: 'Hello' },
  { coordinates: [60.20467078633293,24.92068827152252], text: 'Hello again' }
];

// This function returns a map with OpenStreetMap Layer
const initOSMMap = (mapContainerId) => {
  const osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osmAttribution='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  const map = L.map(mapContainerId);
  const layerOptions = { attribution: osmAttribution };
  const osmlayer = L.tileLayer(osmUrl, layerOptions);
  map.addLayer(osmlayer);
  return map;
};

// This function adds markers with popups to given map,
// marker being something like { coordinates: [60.19999499675728,24.93473768234253], text: 'Hello' }
const addMarkers = (map, markerData) => {
  markerData.forEach(marker => {
    L.marker(marker.coordinates).addTo(map).bindPopup(marker.text);
  });
};

window.onload = () => {
  const myMap = initOSMMap('mapid');
  addMarkers(myMap, exampleMarkers);
  myMap.setView([60.170833, 24.9375], 11);
};