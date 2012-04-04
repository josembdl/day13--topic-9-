<!DOCTYPE html>

<html manifest="cache.manifest" class="  js flexbox canvas canvastext webgl no-touch geolocation postmessage  no-websqldatabase indexeddb hashchange history draganddrop no-websockets  rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow  textshadow opacity no-cssanimations csscolumns cssgradients  no-cssreflections csstransforms no-csstransforms3d csstransitions  fontface video audio localstorage no-sessionstorage webworkers  applicationcache svg inlinesvg smil svgclippaths" lang="en" >
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                
        <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
        
        <script src="js/libs/modernizr.js" type="text/javascript"></script>    
        <script src="js/libs/yepnope.js" type="text/javascript"></script>   
        
        <script src="js/worker.js" type="text/javascript"></script>    
        <script src="js/script.js" type="text/javascript"></script>            
        <script src="http://html5demos.com/h5utils.js"></script>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>

        <style type="text/css">
               html { height: 100% }
               body { height: 100%; margin: 0px; padding: 0px }
               #drop {
                    min-height: 100px;
                    width: 600px;
                    border: 3px dashed #ccc;
                    margin: 10px;
                    padding: 10px;
                }
                #Gmap { height: 100%; }
        </style>
    
        <title>Tema 8</title>
    </head>
    <body>
        
        <div id="codeTester">
            <header>Code Tester</header>	
            <textarea id="code" placeholder="Ingrese el texto aqui... "></textarea>       
            <button id="code-button">Ejecutar</button>
	</div>	
     
        <div id="DnD">
            <header>Drag & Drop</header>
            <div id="drop"></div>
        </div>
        
        <div id="geo">
            <header>Geolocation</header>
            <div id="Gmap" style="height: 350px; width: 500px"></div>
        </div>	

        <div id="webWorker">
            <header>Web Worker</header>
            <div id="worker"></div>
        </div>	

        <div id="webSocket">
            <header>Web Socket</header>
            <div id="socket"></div>
        </div>	
        
        
    </body>
</html>
