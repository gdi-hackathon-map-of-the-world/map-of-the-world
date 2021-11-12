import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyD2Gi6OVkCBTnDl9rOrKyanc71XoN8vyJc',
  version: 'weekly',
});

loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.9374831, lng: -93.20099979999998 },
    zoom: 11,
  });
});
