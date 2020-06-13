import styles from "./maps/styles";

function iniMap() {
  const coords = { lat: 45.91995, lng: 6.86812 };

  let map = new google.maps.Map(document.getElementById("mapa"), {
    center: coords,
    zoom: 15,
    styles: styles,
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Chamo querido",
  });
}

iniMap();
