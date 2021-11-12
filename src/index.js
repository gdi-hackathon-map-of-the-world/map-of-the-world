import { Loader } from '@googlemaps/js-api-loader';

let map;

const loader = new Loader({
  apiKey: 'AIzaSyD2Gi6OVkCBTnDl9rOrKyanc71XoN8vyJc',
  // version: 'weekly',
});

loader.load().then(() => {
  /////displaying the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.9374831, lng: -93.20099979999998 },
    zoom: 11,
  });
  ///putting markers on the map///
  let marker = new google.maps.Marker({
    position: { lat: 44.9374831, lng: -93.20099979999998 },
    map: map,
    title: 'Twin Cities Center',
  });
  ///showing lat and long of marker
  const infowindow = new google.maps.InfoWindow({
    content: '<p>Marker Location:' + marker.getPosition() + '</p>',
  });

  google.maps.event.addListener(marker, 'click', () => {
    infowindow.open(map, marker);
  });
});
