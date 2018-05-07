const exampleData = {
  '00520': 0.1,
  '00510': 0.4,
  '00500': 0.8 
};

const exampleData2 = [
  {id: '00520', value: 0.1},
  {id: '00510', value: 0.4},
  {id: '00500', value: 0.8} 
];

// This function takes numbers and returns colors
const valueToColor = value => {
  return !value ? 'gray': 
         value <= 0.1 ? 'green' :
         value <= 0.4 ? 'yellow' :
         'red';
};

// This function loads and transforms us a GeoJSON object
const loadGeoJSON = (cb) => {
  fetch('https://raw.githubusercontent.com/vjuutilainen/geo-builds/master/build/paavo_zipcode_areas_geometry_topo_simplified.json')
    .then(response => response.json())
    .then(json => cb(topojson.feature(json, json.objects['paavo_zipcode_areas_geometry'])));
};

// This function creates styles for features in GeoJSON layer, in this case also based on data
const styleGeoJSON = (geolayer) => {
  geolayer.eachLayer(shapelayer => {
    const feature = shapelayer.feature;
    shapelayer.setStyle({color: 'white', fillColor: valueToColor(feature.properties.data), weight: 0.5 });
  });
};

// This function creates popups for features in GeoJSON layer
const popUpGeoJSON = (geolayer) => {
  geolayer.eachLayer(shapelayer => {
    const feature = shapelayer.feature;
    shapelayer.bindPopup(feature.id + ' ' + feature.properties.nimi);
  });
};

// This function combines geodata with custom data in two different forms (in form of exampleData or exampleData2)
const joinData = (geodata, data) => {
  const joinData = !data.length ? data : data.reduce((prev, acc) => Object.assign(prev, {[acc.id]: acc.value}), {});
  geodata.features = geodata.features.map(feature => {
    feature.properties.data = joinData[feature.id] || null;
    return feature;
  });
  return geodata;
};

window.onload = () => {
  const myMap = L.map('mapid');
  myMap.setView([60.170833, 24.9375], 11);
  loadGeoJSON(geodata => {
    const data = joinData(geodata, exampleData);
    const geolayer = L.geoJSON().addTo(myMap);
    geolayer.addData(data);
    popUpGeoJSON(geolayer);
    styleGeoJSON(geolayer);
  });

};