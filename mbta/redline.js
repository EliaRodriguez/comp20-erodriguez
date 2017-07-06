var map, mainbranch, fork_one, fork_two, all, southstation, marker, allMarkers, infowindow;   
        

function initMap(){
  var southstation = new google.maps.LatLng(42.352271, -71.05524200000001);
  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: southstation
  }); 

// List of stations for markers and polylines
  var mainbranch = [{lat:42.395428,lng:-71.142483},{lat:42.39674,lng:-71.121815},{lat:42.3884,lng:-71.11914899999999},{lat:42.373362,lng:-71.118956},{lat:42.365486,lng:-71.103802},{lat:42.36249079,lng:-71.08617653},{lat:42.361166,lng:-71.070628},{lat:42.35639457,lng:-71.0624242},{lat:42.355518,lng:-71.060225},{lat:42.352271,lng:-71.05524200000001},{lat:42.342622,lng:-71.056967},{lat:42.330154,lng:-71.057655},{lat:42.320685,lng:-71.052391}];
  var fork_one = [{lat:42.320685,lng:-71.052391},{lat:42.275275,lng:-71.029583},{lat:42.2665139,lng:-71.0203369},{lat:42.251809,lng:-71.005409},{lat:42.233391,lng:-71.007153},{lat:42.2078543,lng:-71.0011385}];
  var fork_two = [{lat:42.320685,lng:-71.052391},{lat:42.31129,lng:-71.053331},{lat:42.300093,lng:-71.061667},{lat:42.29312583,lng:-71.06573796000001},{lat:42.284652,lng:-71.06448899999999}];
  var all = [
  {"id":"Alewife", "lat":42.395428, "lng":-71.142483},
  {"id":"Davis", "lat":42.39674, "lng":-71.121815},
  {"id":"Porter Square", "lat":42.3884, "lng":-71.11914899999999},
  {"id":"Harvard Square", "lat":42.373362, "lng":-71.118956},
  {"id":"Central Square", "lat":42.365486, "lng":-71.103802},
  {"id":"Kendall/MIT", "lat":42.36249079, "lng":-71.08617653},
  {"id":"Charles/MGH", "lat":42.361166, "lng":-71.070628},
  {"id":"Park Street", "lat":42.35639457, "lng":-71.0624242},
  {"id":"Downtown Crossing", "lat":42.355518, "lng":-71.060225},
  {"id":"South Station", "lat":42.352271, "lng":-71.05524200000001},
  {"id":"Broadway", "lat":42.342622, "lng":-71.056967},
  {"id":"Andrew", "lat":42.330154, "lng":-71.057655},
  {"id":"JFK/UMass", "lat":42.320685, "lng":-71.052391},
  {"id":"North Quincy", "lat":42.275275, "lng":-71.029583},
  {"id":"Wollaston", "lat":42.2665139, "lng":-71.0203369},
  {"id":"Quincy Center", "lat":42.251809, "lng":-71.005409},
  {"id":"Quincy Adams", "lat":42.233391, "lng":-71.007153},
  {"id":"Braintree", "lat":42.2078543, "lng":-71.0011385},
  {"id":"Savin Hill", "lat":42.31129, "lng":-71.053331},
  {"id":"Fields Corner", "lat":42.300093, "lng":-71.061667},
  {"id":"Shawmut", "lat":42.29312583, "lng":-71.06573796000001},
  {"id":"Ashmont", "lat":42.284652, "lng":-71.06448899999999}
  ]; 

 // For loop rendering markers on Redline. Working version referenced from example on Github by Professor Ming Chow
  allMarkers = [];
  infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < all.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(all[i].lat,all[i].lng),
      title: all[i].id,
      icon: 'icon1.png'
    });
    google.maps.event.addListener(marker, 'click', function() {
      var theMarker = this;
      var data = new XMLHttpRequest();
      data.open('GET','https://guarded-plateau-51589.herokuapp.com/redline.json', true);
      data.onreadystatechange = function() {
        if(data.readyState == 4 && data.status == 200){
          schedule = JSON.parse(data.responseText);
          var text = '<h1>' + theMarker.getTitle() + '</h1><ul>';
          var entries = [];
          for (var trip = 0; trip < schedule.TripList.Trips.length; trip++) {
            destination = schedule.TripList.Trips[trip].Destination;
            for (var stop = 0; stop < schedule.TripList.Trips[trip].Predictions.length; stop++) {
              if (schedule.TripList.Trips[trip].Predictions[stop].Stop === theMarker.getTitle()) {
                entries.push({'destination':destination,'predicted_arrival':schedule.TripList.Trips[trip].Predictions[stop].Seconds});
              }
            }
          }

          function compare(a, b) {
            if(a.predicted_arrival < b.predicted_arrival) {
              return -1;
            }
            if(a.predicted_arrival > b.predicted_arrival) {
              return 1;
            }
            return 0;
          }
          entries.sort(compare);
          if(entries.length == 0) {
            text += '<li>No upcoming trains.</li>';
          }
          else {
            for(var count = 0; count < entries.length; count++) {
              text += '<li>Next ' + entries[count].destination + ' bound train will arrive in approximately ' + Math.trunc(entries[count].predicted_arrival/60) + ' min.</li>';
            }
          }
          text += '</ul';
          infowindow.setContent(text);
          infowindow.open(map, theMarker);
        }
        else if(data.readyState == 4 && data.status == 500) {
          infowindow.setContent('Error');
          infowindow.open(map, marker);
        }
      }
      data.send();
    });
    allMarkers.push(marker);
    marker.setMap(map);
    
  }

  getMyLocation();

 // Render polylines mapping Redline. Reference google developers code. 
  var mainbranchPath = new google.maps.Polyline({
    path: mainbranch,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  mainbranchPath.setMap(map);

  var fork_one_Path = new google.maps.Polyline({
    path: fork_one,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  fork_one_Path.setMap(map);

  var fork_two_Path = new google.maps.Polyline({
    path: fork_two,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  fork_two_Path.setMap(map);


};

function getMyLocation() {
 if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var myLat = position.coords.latitude;
      var myLng = position.coords.longitude;
      updateMap(myLat, myLng);
    });
 }
 else {
    alert('Geolocation is not supported by your browser.');
 }
};


function updateMap(myLat, myLng) {
  myLocation = new google.maps.LatLng(myLat,myLng);
  map.panTo(myLocation);
  var closestStation = allMarkers[0];
  var closestDistance = google.maps.geometry.spherical.computeDistanceBetween(myLocation,closestStation.getPosition());
  for(var count = 1; count < allMarkers.length; count++) {
    var tDist = google.maps.geometry.spherical.computeDistanceBetween(myLocation,allMarkers[count].getPosition());
    if(closestDistance > tDist) {
      closestDistance = tDist;
      closestStation = allMarkers[count];
    }
  }
  marker = new google.maps.Marker({
    position: myLocation,
    title: 'The closest MBTA Redline station is ' + closestStation.getTitle() + ' which is ' + closestDistance*0.000621371 + ' miles away.'
  });
  marker.setMap(map);
  infowindow.setContent(marker.title);
  infowindow.open(map, marker);
  var closestPath = new google.maps.Polyline({
    path: [myLocation, closestStation.getPosition()],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  closestPath.setMap(map);

};


