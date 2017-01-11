function initMap() {
        var shaker_hs = {lat: 42.735916, lng: -73.747997};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: shaker_hs
        });
        var marker = new google.maps.Marker({
          position: shaker_hs,
          map: map
        });
      }