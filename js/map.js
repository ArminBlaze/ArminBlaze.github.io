

function initMap() {
	var mapDiv = document.getElementById('map');
				
	var map = new google.maps.Map(mapDiv, {
//          center: {lat: 59.941, lng: 30.2996},
		center: new google.maps.LatLng(59.941, 30.2996),
          zoom: 15,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
        });
				
				
				var image = {
				url: 'img/map_bullet.png',
				// This marker is 231 pixels wide by 190 pixels high.
				size: new google.maps.Size(231, 190),
				// The origin for this image is (0, 0).
				origin: new google.maps.Point(0, 0),
				
				anchor: new google.maps.Point(49, 188)
			};

				
				var myLatLng = new google.maps.LatLng(59.9389463, 30.3150017);
  			var beachMarker = new google.maps.Marker({
    		position: myLatLng,
    		map: map,
    		icon: image
  			});
      }
			
				google.maps.event.addDomListener(window, 'load', initMap);