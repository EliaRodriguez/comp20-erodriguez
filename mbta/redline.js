

function initMap(){
  var mainbranch = [{lat:42.395428,lng:-71.142483},{lat:42.39674,lng:-71.121815},{lat:42.3884,lng:-71.11914899999999},{lat:42.373362,lng:-71.118956},{lat:42.365486,lng:-71.103802},{lat:42.36249079,lng:-71.08617653},{lat:42.361166,lng:-71070628},{lat:42.35639457,lng:-71.0624242},{lat:42.355518,lng:-71.060225},{lat:42.352271,lng:-71.05524200000001},{lat:42.342622,lng:-71.056967},{lat:42.330154,lng:-71.057655},{lat:42.320685,lng:-71.052391}];
  var fork_one = [{lat:42.320685,lng:-71.052391},{lat:42.275275,lng:-71.029583},{lat:42.2665139,lng:-71.0203369},{lat:42.251809,lng:-71.005409},{lat:42.233391,lng:-71.007153},{lat:42.2078543,lng:-71.0011385}];
  var fork_two = [{lat:42.320685,lng:-71.052391},{lat:42.31129,lng:-71.053331},{lat:42.300093,lng:-71.061667},{lat:42.29312583,lng:-71.06573796000001},{lat:42.284652,lng:-71.06448899999999}];
  var all = [{id:"Alewife",lat:42.395428,lng:-71.142483},{id:"Davis",lat:42.39674,lng:-71.121815},{id:"Porter Square",lat:42.3884,lng:-71.11914899999999},{id:"Harvard Square",lat:42.373362,lng:-71.118956},{id:"Central Square",lat:42.365486,lng:-71.103802},{id:"Kendall/MIT",lat:42.36249079,lng:-71.08617653},{id:"Charles/MGH",lat:42.361166,lng:-71070628},{id:"Park Street",lat:42.35639457,lng:-71.0624242},{id:"Downtown Crossing",lat:42.355518,lng:-71.060225},{id:"South Station",lat:42.352271,lng:-71.05524200000001},{id:"Broadway",lat:42.342622,lng:-71.056967},{id:"Andrew",lat:42.330154,lng:-71.057655},{id:"JFK/UMass",lat:42.320685,lng:-71.052391},{id:"North Quincy",lat:42.275275,lng:-71.029583},{id:"Wollaston",lat:42.2665139,lng:-71.0203369},{id:"Quincy Center",lat:42.251809,lng:-71.005409},{id:"Quincy Adams",lat:42.233391,lng:-71.007153},{id:"Braintree",lat:42.2078543,lng:-71.0011385},{id:"Savin Hill",lat:42.31129,lng:-71.053331},{id:"Fields Corner",lat:42.300093,lng:-71.061667},{id:"Shawmut",lat:42.29312583,lng:-71.06573796000001},{id:"Ashmont",lat:42.284652,lng:-71.06448899999999}]; 
  var southstation = new google.maps.LatLng(42.352271, -71.05524200000001);
    
  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: southstation
  }); 

  var marker = new google.maps.Marker({
    position: southstation,
    setMap: map
  })    

    // var image = {
    //   url: 'tsign.jpg',
    //   size: new google.maps.Size(25,25),
    //         origin: new google.maps.Point(0,0),
    //         anchor: new google.maps.Point(0,25)
    // };

    //       //   Shapes define the clickable region of the icon. The type defines an HTML
    //     // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    //     // The final coordinate closes the poly by connecting to the first coordinate.
    // var shape = {
    //       coords: [1, 1, 1, 25, 25, 25, 25, 1],
    //       type: 'poly'
    // };

  // for (var i = 0; i < all.length; i++) {
  //     var marker_lat = all[i].lat;
  //     var marker_lng = all[i].lng;
  //     station = new google.maps.LatLng(marker_lat, marker_lng);
  //     var name = all[i].id;
  //     var marker = new google.maps.Marker({
  //         postion: station,
  //         setMap: map,
  //         // icon: image,
  //         // title: name,
  //     });

  // };  

    // var mainbranchPath = new google.maps.Polyline({
  //         path: mainbranch,
  //         geodesic: true,
  //         strokeColor: '#FF0000',
  //         strokeOpacity: 1.0,
  //         strokeWeight: 2
  //       });
  //       mainbranchPath.setMap();

    // var fork_one_Path = new google.maps.Polyline({
  //         path: fork_one,
  //         geodesic: true,
  //         strokeColor: '#FF0000',
  //         strokeOpacity: 1.0,
  //         strokeWeight: 2
  //       });
  //       fork_one_Path.setMap();

  //       var fork_two_Path = new google.maps.Polyline({
  //         path: fork_two,
  //         geodesic: true,
  //         strokeColor: '#FF0000',
  //         strokeOpacity: 1.0,
  //         strokeWeight: 2
  //       });
  //       fork_two_Path.setMap();



        // getMyLocation(map); 	
};





// function getMyLocation() {
// 	if (navigator.geolocation) { 
// 		// var myLat = 0;
// 		// var myLng = 0;
// 		navigator.geolocation.getCurrentPosition(function(position) {
// 			var myLat = position.coords.latitude;
// 			var myLng = position.coords.longitude;
// 		});
// 		var myPosition = new google.maps.LatLng(myLat,myLng);
// 		marker = new google.maps.Marker(){
// 			position: myPosition,
// 			title: "My Location"
// 		};
// 		marker.setMap(map);
// 		var infowindow = new google.maps.InfoWindow();
// 		google.maps.event.addListener(marker, 'click', function() {
// 		infowindow.setContent(stuff);
// 		infowindow.open(map, marker);
// 	});
// 		findClosestStation();
// 	};
// 	else {
// 		alert("Geolocation is not supported by your web browser.");
// 	};
// }


// function findClosestStation() { // How do I make this so that this only selects the marker with mylocation???
// 	var closestStation = 0;
// 	var distances = [];
// 	for (var i = 0; i < all_parse.length; i++) {	
// 		var a = new.google.maps.LatLng(all_parse[i].lat,all_parse[i].lng);
// 		var b = google.maps.geometry.spherical.computeDistanceBetween(myPosition,a);
// 		distances.push(b);
// 	};	
// 	var stuff = "";
// };