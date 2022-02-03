///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [40, -3],
		zoom: 6,
		minZoom: 3,
		maxZoom: 20,
		maxBounds: [
			[20, -50],
			[50, 50]
			],
	});



///////////Funcionalidades estructura del visor///////////

//Layers on top

map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';



//Barra de interacción de capas	tantaas sildebar como grupos de capas


var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultMarkGeocode: false
	}).addTo(map);

///////////Diseño caracteriticas basicas del visor///////////
//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h3>Déficit hídrico climático en España';
	 return div;
	};
	title2.addTo(map);

//Logo Matrix	
var title1 = L.control({position: 'bottomright'});
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/matrix_nuevo.png" width="100px" height="55px"></img></a>'; 
	 return div;
	};
	title1.addTo(map);
		//Logo proyecto

var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/CLIMVAC.png" width="90px" height="63px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 

	//Logo mayorsig
/*var title3 = L.control({position: 'bottomright'});
	title3.onAdd = function (map) {
var div = L.DomUtil.create('div','info3');
	 div.innerHTML +=
	 '<a><img src="images/MAYORSIG.jpg" width="90px" height="63px" ></img></a>';
	 return div;
	};
	title3.addTo(map);  
*/

///////////Cartografía de referencia///////////
var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a>| Map data © 2021 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	}).addTo(map);		
//			var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
//			attribution: '©OpenStreetMap, ©CartoDB'
//			}).addTo(map);
//			var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
//			attribution: '©OpenStreetMap, ©CartoDB',
//			pane: 'labels'
//			}).addTo(map);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy'
	});
var osm1 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	opacity: 0,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});
var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});
var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap </a>| Map data © 2021 <a href="https://www.fundacionmatrix.es"><strong>Fundación Matrix</strong></a>',
	});


//Límites
/*var comunidades = L.geoJson(comunidades, {
	color: "#17202A", 
	weight: 1.4,
	opacity: 0.3,
	fillOpacity: 0,
		attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional |'			
	}).addTo(map);
*/

	



///////////Otras funcionalidades

//minimapa	
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"bottomright", width:100,height:100,}).addTo(map); 					
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[40, -5], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);

///////////Estilo de las capas especificas del visor///////////


//capas de limites

//prov_limit.js
/*
function styleprov(feature) {
	return {
		//fillColor: getColor1(feature.properties.), aqui relleno no se asocia a ningun valor
		weight: 0.3,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		//fillOpacity: 0.8
	};

};

var prov = L.geoJson(prov_limit,{
	style: styleprov,
	
}).addTo(map);
*/

//estilo y popups de Déficit hídrico climático 1989-2019


function getColor1(a) {
	return a < 150 ? '#fedb99' :
	a < 300  ? '#ffbf99' : 
	a <450 ? '#ffa998' :
	a <600 ? '#f63433': 
	a <750  ? '#d83232' :
	a <900 ? '#c23232' :
	a <1050 ? '#8f3433' : 
	a <1200  ? '#72004d' :
	a <1351  ? '#950076' :
		'YELLOW';
};


function style1(feature) {
	return {
		fillColor: getColor1(feature.properties.DCH_act), // MUY IMPORTANTE, NO OLVIDAR PONER NOMBRE DE CAMPO EN TABLA.(DESPUES DE PROPERTIES)
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};

function popup1(feature, layer) {

	if (feature.properties && feature.properties.DCH_act) {
		layer.bindTooltip("<div id='custom'>"
			+"<strong></strong>"+feature.properties.UT.toLocaleString()+"<br>"
             
            +"<strong>Déficit hídrico: </strong>"+feature.properties.DCH_act.toFixed(0).toLocaleString().replace(".",",")+" mm/año",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson1 = L.geoJson(dhc,{
	style: style1,
	onEachFeature: popup1
});


//estilos y pop up Déficit hídrico climático 1959-1989

function getColor2(a) {
	return a < 150 ? '#fedb99' :
	a < 300  ? '#ffbf99' : 
	a <450 ? '#ffa998' :
	a <600 ? '#f63433': 
	a <750  ? '#d83232' :
	a <900 ? '#c23232' :
	a <1050 ? '#8f3433' : 
	a <1200  ? '#72004d' :
	a <1351  ? '#950076' :
		'YELLOW';
};


function style2(feature) {
	return {
		fillColor: getColor2(feature.properties.DCH_ant),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};
function popup2(feature, layer) {

	if (feature.properties && feature.properties.DCH_ant) {
		layer.bindTooltip("<div id='custom'>"
			+"<strong></strong>"+feature.properties.UT.toLocaleString()+"<br>"
             
            +"<strong>Déficit hídrico: </strong>"+feature.properties.DCH_ant.toFixed(0).toLocaleString().replace(".",",")+" mm/año",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};




var geojson2 = L.geoJson(dhc, {
	style: style2,
	onEachFeature: popup2


});



//estilos y pop up VARIACION ABSOLUTA 1959-1989 Y 1989-2019


function getColor3(a) {
	return a <-80 ? '#33518f' :
	a <-50 ? '#356bc3' :
	a <-30 ? '#7990e0' :
	a <-10 ? '#c8c8d4': 
	a <10 ? '#feffed' :
	a <30 ? '#ffd2b5' :
	a <50 ? '#fea384': 
	a <80 ? '#eb3333' :
	a <86  ? '#b93332' :	
	'#C2523C';
};
function style3(feature) {
	return {
		fillColor: getColor3(feature.properties.dabsDCH),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};
function popup3(feature, layer) {

	if (feature.properties && feature.properties.dabsDCH) {
		layer.bindTooltip("<div id='custom'>"
             +feature.properties.UT.toLocaleString()+"<br>"
		+"<strong>Variación absoluta: </strong>"+feature.properties.dabsDCH.toFixed(0).toLocaleString().replace(".",",")+" mm/año",
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};



var geojson3 = L.geoJson(dhc, {
	style: style3,
	onEachFeature: popup3
});


//estilos y pop up VARIACION relativa 1959-1989 Y 1989-2019


function getColor4(a) {
	return a <-35 ? '#33518f' :
	a <-25  ? '#356bc3' :
	a <-15 ? '#7990e0' :
	a <-5 ? '#c8c8d4': 
	a <5  ? '#feffed' :
	a <15 ? '#ffd2b5' :
	a <25 ? '#fea384': 
	a <35  ? '#eb3333' :
	a <48  ? '#b93332' :	
	'#C2523C';
};
function style4(feature) {
	return {
		fillColor: getColor4(feature.properties.dDCH),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '0',
		fillOpacity: 0.8
	};

};
function popup4(feature, layer) {

	if (feature.properties && feature.properties.dDCH) {
		layer.bindTooltip("<div id='custom'>"
             +feature.properties.UT.toLocaleString()+"<br>"+"<strong>Variación relativa: </strong>"
		+feature.properties.dDCH.toFixed(0).toLocaleString().replace(".",",")+"%",
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};



var geojson4 = L.geoJson(dhc, {
	style: style4,
	onEachFeature: popup4
});


//capas de limites. La última capa en declarar se ubica siempre encima de las demás.

// rios.js

function stylerios(feature) {
	return {
		//fillColor: getColor1(feature.properties.), aqui relleno no se asocia a ningun valor
		weight: 3,
		opacity: 1,
		color: '#42f5ef',
		dashArray: '0',
		//fillOpacity: 0.8
	};

};

var rios = L.geoJson(rios,{
	style: stylerios,
	
}).addTo(map);

//Buscador de ríos
var searchControl = new L.Control.Search({
       layer: rios,
       propertyName: 'NOM_RIO',
       marker: false,
		moveToLocation: function(latlng) {
			console.log(latlng +" Coordinates");
  			map.setView(latlng, 10); // set the zoom
		}
});

map.addControl(searchControl);

//Renombrado y ordenado de capas mapas geojson


var mapa1 = L.layerGroup([geojson1]).addTo(map);
var mapa2 = L.layerGroup([geojson2]);
var mapa3 = L.layerGroup([geojson3]);
var mapa4 = L.layerGroup([geojson4]);
/*var mapa5 = L.layerGroup([geojson5]);
var mapa6 = L.layerGroup([geojson6]);
*/


// LISTA DESPLEGABLE

var baseTree = [
	{ label: "<strong>Limpiar mapa", layer: osm3 },
	{
	label: '<strong>Déficit hídrico climático en España',
	children: [
	
	    { label: "Déficit hídrico climático 1989-2019",layer: mapa1},
		{ label: "Déficit hídrico climático 1959-1989",layer: mapa2},
	    { label: "Variación absoluta del déficit hídrico climático",layer: mapa3},
		{ label: "Variación relativa del déficit hídrico climático",layer: mapa4},
		/*{ label: "Proporción de mujeres centenarias",layer: mapa5},
		{ label: "Proporción de pesonas centenarias",layer: mapa6}
		*/
		 ]
	},
	];
	
	
var overlayTree = {
	label: 'Mapas de referencia',
	children: [
	
		//{ label: "<b>Límites de Comunidades Autónomas", layer: comunidades},
		{ label: "OpenStreetMap", layer: osm},
		]
};	

//DCH_ACTUAL

var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Déficit hídrico climático promedio del periodo 1989-2019'+"<\h2>",
			style: style1,
			layer: geojson1,
			elements: [{


				label:"<h4>"+  '<br>Demanda evaporativa anual que excede el agua disponible (diferencia entre los valores promedio del periodo de evapotranspiración potencial y evapotranspiración real) de las cuencas hidrológicas y otras unidades territoriales definidas en la Directiva Marco del Agua.<br><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
		        label:"<h3>"+  '<br> mm/año'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<strong><h3>"+  '59 - 150'+"</strong><\h15>",html: '',style: {'background-color': '#fedb99','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '151 - 300'+"</strong><\h15>",html: '',style: {'background-color': '#ffbf99','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '301 - 450'+"</strong><\h15>",html: '',style: {'background-color': '#ffa998','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '451 - 600'+"</strong><\h15>",html: '',style: {'background-color': '#f63433','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '601 - 750'+"</strong><\h15>",html: '',style: {'background-color': '#d83232','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '751 - 900'+"</strong><\h15>",html: '',style: {'background-color': '#c23232','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '901 - 1.050'+"</strong><\h15>",html: '',style: {'background-color': '#8f3433','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '1.051 - 1.200'+"</strong><\h15>",html: '',style: {'background-color': '#72004d','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '1.201 - 1.350'+"</strong><\h15>",html: '',style: {'background-color': '#950076','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del modelo SIMPA (CEDEX 2021) y unidades territoriales (MITERD 2021)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);


//DCH_ANTERIOR

var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Déficit hídrico climático promedio del periodo 1959-1989'+"<\h2>",
			style: style2,
			layer: geojson2,
			elements: [{


				label:"<h4>"+  '<br>Demanda evaporativa anual que excede el agua disponible (diferencia entre los valores promedio del periodo de evapotranspiración potencial y evapotranspiración real) de las cuencas hidrológicas y otras unidades territoriales definidas en la Directiva Marco del Agua.<br><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
		        label:"<h3>"+  '<br> mm/año'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<strong><h3>"+  '59 - 150'+"</strong><\h15>",html: '',style: {'background-color': '#fedb99','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '151 - 300'+"</strong><\h15>",html: '',style: {'background-color': '#ffbf99','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '301 - 450'+"</strong><\h15>",html: '',style: {'background-color': '#ffa998','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '451 - 600'+"</strong><\h15>",html: '',style: {'background-color': '#f63433','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '601 - 750'+"</strong><\h15>",html: '',style: {'background-color': '#d83232','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '751 - 900'+"</strong><\h15>",html: '',style: {'background-color': '#c23232','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '901 - 1.050'+"</strong><\h15>",html: '',style: {'background-color': '#8f3433','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '1.051 - 1.200'+"</strong><\h15>",html: '',style: {'background-color': '#72004d','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '1.201 - 1.350'+"</strong><\h15>",html: '',style: {'background-color': '#950076','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del modelo SIMPA (CEDEX 2021) y unidades territoriales (MITERD 2021)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend2);


//dabsDCH

var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Variación absoluta del déficit hídrico climático promedio entre los periodos 1959-1989 y 1989-2019'+"<\h2>",
			style: style3,
			layer: geojson3,
			elements: [{


				label:"<h4>"+  '<br>Cambio en la demanda evaporativa anual que excede el agua disponible (diferencia entre los valores promedio del periodo de evapotranspiración potencial y evapotranspiración real) de las cuencas hidrológicas y otras unidades territoriales definidas en la Directiva Marco del Agua.<br><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
		        label:"<h3>"+  '<br>'+' mm/año'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<strong><h3>"+  '-107 ‒ -80,1'+"</strong><\h15>",html: '',style: {'background-color': '#33518f','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-80 ‒ -50,1'+"</strong><\h15>",html: '',style: {'background-color': '#356bc3','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-50 ‒ -30,1'+"</strong><\h15>",html: '',style: {'background-color': '#7990e0','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-30 ‒ -10,1'+"</strong><\h15>",html: '',style: {'background-color': '#c8c8d4','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-10 ‒ 10'+"</strong><\h15>",html: '',style: {'background-color': '#feffed','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '10,1 ‒ 30'+"</strong><\h15>",html: '',style: {'background-color': '#ffd2b5','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '30,1 ‒ 50'+"</strong><\h15>",html: '',style: {'background-color': '#fea384','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '50,1 ‒ 80'+"</strong><\h15>",html: '',style: {'background-color': '#eb3333','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '80,1 ‒ 85'+"</strong><\h15>",html: '',style: {'background-color': '#b93332','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del modelo SIMPA (CEDEX 2021) y unidades territoriales (MITERD 2021)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);



//dDCH



var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h2>"+ 'Variación relativa del déficit hídrico climático promedio entre los periodos 1959-1989 y 1989-2019'+"<\h2>",
			style: style4,
			layer: geojson4,
			elements: [{


				label:"<h4>"+  '<br>Cambio en la demanda evaporativa anual que excede el agua disponible (diferencia entre los valores promedio del periodo de evapotranspiración potencial y evapotranspiración real) de las cuencas hidrológicas y otras unidades territoriales definidas en la Directiva Marco del Agua.<br><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
		        label:"<h3>"+  '<br>%'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<strong><h3>"+  '-48 ‒ -35,1'+"</strong><\h15>",html: '',style: {'background-color': '#33518f','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-35 ‒ -25,1'+"</strong><\h15>",html: '',style: {'background-color': '#356bc3','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-25 ‒ -15,1'+"</strong><\h15>",html: '',style: {'background-color': '#7990e0','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-15 ‒ -5,1'+"</strong><\h15>",html: '',style: {'background-color': '#c8c8d4','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {
				label:"<strong><h3>"+  '-5 ‒ 5'+"</strong><\h15>",html: '',style: {'background-color': '#feffed','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '5,1 ‒ 15'+"</strong><\h15>",html: '',style: {'background-color': '#ffd2b5','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '15,1 ‒ 25'+"</strong><\h15>",html: '',style: {'background-color': '#fea384','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '25,1 ‒ 35'+"</strong><\h15>",html: '',style: {'background-color': '#eb3333','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				label:"<strong><h3>"+  '35,1 ‒ 48'+"</strong><\h15>",html: '',style: {'background-color': '#b93332','width': '40px','height': '13px', 'border': 'black 1px solid'}}, {		
				
				label: "<h5>" +'<BR><i>Fuente: Elaboración propia con datos del modelo SIMPA (CEDEX 2021) y unidades territoriales (MITERD 2021)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'},																
			}]
		}],
		collapseSimple: true,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);




//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});