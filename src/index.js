console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYmpsbWNrZWx3YXkiLCJhIjoiY2s3dW9ubGU1MDY4MjNkbW4zaHIxcDRheCJ9.c3HiQrOPIJZXgK-sC_qhcg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

