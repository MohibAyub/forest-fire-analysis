 function addDraggableMarker(map, behavior){

    var marker = new H.map.Marker({lat: 41.9, lng: -6.85}, {
      
      volatility: true
    });
    
    marker.draggable = true;
    map.addObject(marker);
  
    map.addEventListener('dragstart', function(ev) {
      var target = ev.target,
          pointer = ev.currentPointer;
      if (target instanceof H.map.Marker) {
        var targetPosition = map.geoToScreen(target.getGeometry());
        target['offset'] = new H.math.Point(pointer.viewportX - targetPosition.x, pointer.viewportY - targetPosition.y);
        behavior.disable();
      }
    }, false);
  
    map.addEventListener('dragend', function(ev) {
      var target = ev.target;
      if (target instanceof H.map.Marker) {
        behavior.enable();
      }
    }, false);

     map.addEventListener('drag', function(ev) {
      var target = ev.target,
          pointer = ev.currentPointer;
      if (target instanceof H.map.Marker) {
        target.setGeometry(map.screenToGeo(pointer.viewportX - target['offset'].x, pointer.viewportY - target['offset'].y));
      }
    }, false);
  }

  function addCircleToMap(map){
    map.addObject(new H.map.Circle(
      
      {lat: 41.9, lng: -6.85},
      
      1000,
      {
        style: {
          strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
          lineWidth: 2,
          fillColor: 'rgba(0, 128, 0, 0.7)'  // Color of the circle
        }
      }
    ));
  }

  function addCircleToMap1(map){
    map.addObject(new H.map.Circle(
      
      {lat: 41.7, lng: -6.87},
      
      1000,
      {
        style: {
          strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
          lineWidth: 2,
          fillColor: 'rgba(0, 128, 0, 0.7)'  // Color of the circle
        }
      }
    ));
  }


  var platform = new H.service.Platform({
    app_id: 'devportal-demo-20180625',
    app_code: '9v2BkviRwi9Ot26kp2IysQ',
    useHTTPS: true
  });

  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
});

  var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map, {
        center: {lat: 41.9, lng: -6.85},
        zoom: 11,
        pixelRatio: pixelRatio
    });


var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');
  
  addDraggableMarker(map, behavior);
  addCircleToMap(map);
  addCircleToMap1(map);