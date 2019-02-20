/* Script for WilliamsColmenaresWedding.info */
/* Website visual design and front-end development by Isadora Williams, copyright 2018 */
/* isadoracreative.com */

var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.8104553, lng: 12.7903149},
          zoom: 16
        });

        let marker = new google.maps.Marker({
          position: {lat: 42.8104553, lng: 12.7903149},
          map: map,
          title: 'Castello di Poreta'
        });
      }