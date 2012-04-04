/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    
        // Modernizr + yepNope: media-queries
        /**
        yepnope({
		test: Modernizr.mq(),
		nope: 'js/libs/css3-mediaqueries.js'
	})
        **/
    
	// Modernizr + yepNope: Geolocation
	yepnope({
		test: Modernizr.geolocation,
		nope: 'js/libs/geo-polyfiller.js'
	})
	// Modernizr + yepNope: FileReader
	yepnope({
		test: Modernizr.draganddrop, // && window.FileReader, No anda en IE
		nope: 'js/libs/dropfile.js'
	})

	// Modernizr + yepNope: webWorkers
	yepnope({
		test: Modernizr.webworkers,
		nope: 'js/libs/fakeworker-0.1.js'
	})
	// Modernizr + yepNope: webSockets
        // 
        //Set URL of your WebSocketMain.swf here:
	WEB_SOCKET_SWF_LOCATION = "WebSocketMain.swf";
        // Set this to dump debug message from Flash to console.log:
        //WEB_SOCKET_DEBUG = true;
	yepnope({
		test: Modernizr.websockets,
		nope: ['js/libs/swfobject.js','js/libs/web_socket.js']
	})

    
    var area = document.getElementById('code');
    
    //Ejecutar javascript del area de texto
    $("#code-button").bind('click',function(){
            var value= area.value;
            eval(value);
    });

    //Persist your text code
    // place content from previous edit
    if (!area.value) {
        area.value = window.localStorage.getItem('value');
    }

    // your content will be saved locally
    area.addEventListener('keyup', function () {
    window.localStorage.setItem('value', area.value);
    window.localStorage.setItem('timestamp', (new Date()).getTime());
    }, false);
    
        //Drag & Drop
        function cancel(e) {
            if (e.preventDefault) {
                e.preventDefault();
        }
            return false;
        }

        var drop = document.querySelector('#drop');

        // Tells the browser that we *can* drop on this target
        addEvent(drop, 'dragover', cancel);
        addEvent(drop, 'dragenter', cancel);
        addEvent(drop, 'drop', function (e) {
        if (e.preventDefault) e.preventDefault(); // stops the browser from redirecting off to the text.
        this.innerHTML += '<p>' + e.dataTransfer.getData('Text') + '</p>';
        return false;
        });
        
    //Geolocation 
    var initialLocation;
    var mdq = new google.maps.LatLng(-38, -57.55);
    var map;
    var infowindow = new google.maps.InfoWindow();
    
    var mapOptions = {
      zoom: 8,
      center: mdq,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, onError);
      // also monitor position as it changes
      // navigator.geolocation.watchPosition(showPosition);
    } else {
      onError();
    }

    function showPosition(position) {
      map = new google.maps.Map(document.getElementById("Gmap"), mapOptions);
      
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      
      initialLocation = new google.maps.LatLng(lat, lng);
      map.setCenter(initialLocation);
      infowindow.setContent("You are here:<br/>lat: "+lat + "<br/>" +"lng: " +lng);
      infowindow.setPosition(initialLocation);
      infowindow.open(map);
    }

    function onError() {
      if (navigator.geolocation) {
          initialLocation = mdq;
          contentString = "Error: The Geolocation service failed.";
      } else {
          initialLocation = mdq;
          contentString = "Error: Your browser doesn't support geolocation.";
      }
      mapOptions.zoom = 4;
      map = new google.maps.Map(document.getElementById("Gmap"), mapOptions);
      map.setCenter(initialLocation);
      infowindow.setContent(contentString);
      infowindow.setPosition(initialLocation);
      infowindow.open(map);
    }

        //Web Worker
        var worker= new Worker("js/worker.js");
	worker.onmessage = function (event) { 
		$("#worker").html(event.data); 
	};
        
    //Web Socket
    if ("WebSocket" in window) {
  	var ws = new WebSocket("ws://echo.websocket.org");
  	
        ws.onopen = function() {
            // Web Socket is connected. You can send data by send() method.
            ws.send("Mensaje desde web Socket"); 
  	};
        
  	ws.onmessage = function (evt) { 
  		var received_msg = evt.data; 
  		$("#socket").html(received_msg);
  	};
        
  	ws.onclose = function() {}; 
  	}


})