var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Sudamrica_1 = new ol.format.GeoJSON();
var features_Sudamrica_1 = format_Sudamrica_1.readFeatures(json_Sudamrica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sudamrica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sudamrica_1.addFeatures(features_Sudamrica_1);
var lyr_Sudamrica_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sudamrica_1, 
                style: style_Sudamrica_1,
                interactive: true,
                title: '<img src="styles/legend/Sudamrica_1.png" /> Sudamérica'
            });
var format_HIDROGRAFIA_2 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_2 = format_HIDROGRAFIA_2.readFeatures(json_HIDROGRAFIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGRAFIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_2.addFeatures(features_HIDROGRAFIA_2);
var lyr_HIDROGRAFIA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGRAFIA_2, 
                style: style_HIDROGRAFIA_2,
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_2.png" /> HIDROGRAFIA'
            });
var format_CIUDADESIMPORTANTES_3 = new ol.format.GeoJSON();
var features_CIUDADESIMPORTANTES_3 = format_CIUDADESIMPORTANTES_3.readFeatures(json_CIUDADESIMPORTANTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIUDADESIMPORTANTES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIUDADESIMPORTANTES_3.addFeatures(features_CIUDADESIMPORTANTES_3);
var lyr_CIUDADESIMPORTANTES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIUDADESIMPORTANTES_3, 
                style: style_CIUDADESIMPORTANTES_3,
                interactive: true,
                title: '<img src="styles/legend/CIUDADESIMPORTANTES_3.png" /> CIUDADES IMPORTANTES'
            });
var format_COLLASUYO_4 = new ol.format.GeoJSON();
var features_COLLASUYO_4 = format_COLLASUYO_4.readFeatures(json_COLLASUYO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLLASUYO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLLASUYO_4.addFeatures(features_COLLASUYO_4);
var lyr_COLLASUYO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COLLASUYO_4, 
                style: style_COLLASUYO_4,
                interactive: true,
                title: '<img src="styles/legend/COLLASUYO_4.png" /> COLLASUYO'
            });
var format_CONTISUYO_5 = new ol.format.GeoJSON();
var features_CONTISUYO_5 = format_CONTISUYO_5.readFeatures(json_CONTISUYO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTISUYO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTISUYO_5.addFeatures(features_CONTISUYO_5);
var lyr_CONTISUYO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONTISUYO_5, 
                style: style_CONTISUYO_5,
                interactive: true,
                title: '<img src="styles/legend/CONTISUYO_5.png" /> CONTISUYO'
            });
var format_CHINCHAYSUYO_6 = new ol.format.GeoJSON();
var features_CHINCHAYSUYO_6 = format_CHINCHAYSUYO_6.readFeatures(json_CHINCHAYSUYO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINCHAYSUYO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINCHAYSUYO_6.addFeatures(features_CHINCHAYSUYO_6);
var lyr_CHINCHAYSUYO_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHINCHAYSUYO_6, 
                style: style_CHINCHAYSUYO_6,
                interactive: true,
                title: '<img src="styles/legend/CHINCHAYSUYO_6.png" /> CHINCHAYSUYO'
            });
var format_ANTISUYO_7 = new ol.format.GeoJSON();
var features_ANTISUYO_7 = format_ANTISUYO_7.readFeatures(json_ANTISUYO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANTISUYO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANTISUYO_7.addFeatures(features_ANTISUYO_7);
var lyr_ANTISUYO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANTISUYO_7, 
                style: style_ANTISUYO_7,
                interactive: true,
                title: '<img src="styles/legend/ANTISUYO_7.png" /> ANTISUYO'
            });
var format_CUSCO_8 = new ol.format.GeoJSON();
var features_CUSCO_8 = format_CUSCO_8.readFeatures(json_CUSCO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUSCO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUSCO_8.addFeatures(features_CUSCO_8);
var lyr_CUSCO_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUSCO_8, 
                style: style_CUSCO_8,
                interactive: true,
                title: '<img src="styles/legend/CUSCO_8.png" /> CUSCO'
            });
var group_CAPITAL = new ol.layer.Group({
                                layers: [lyr_CUSCO_8,],
                                title: "CAPITAL"});
var group_ANTISUYO = new ol.layer.Group({
                                layers: [lyr_ANTISUYO_7,],
                                title: "ANTISUYO"});
var group_CHINCHAYSUYO = new ol.layer.Group({
                                layers: [lyr_CHINCHAYSUYO_6,],
                                title: "CHINCHAYSUYO"});
var group_CONTISUYO = new ol.layer.Group({
                                layers: [lyr_CONTISUYO_5,],
                                title: "CONTISUYO"});
var group_COLLASUYO = new ol.layer.Group({
                                layers: [lyr_COLLASUYO_4,],
                                title: "COLLASUYO"});
var group_MAPASUDAMERICA = new ol.layer.Group({
                                layers: [lyr_Sudamrica_1,lyr_HIDROGRAFIA_2,lyr_CIUDADESIMPORTANTES_3,],
                                title: "MAPA SUDAMERICA"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,],
                                title: "MAPA BASE"});

lyr_ESRISatellite_0.setVisible(true);lyr_Sudamrica_1.setVisible(false);lyr_HIDROGRAFIA_2.setVisible(false);lyr_CIUDADESIMPORTANTES_3.setVisible(false);lyr_COLLASUYO_4.setVisible(false);lyr_CONTISUYO_5.setVisible(false);lyr_CHINCHAYSUYO_6.setVisible(false);lyr_ANTISUYO_7.setVisible(false);lyr_CUSCO_8.setVisible(false);
var layersList = [group_MAPABASE,group_MAPASUDAMERICA,group_COLLASUYO,group_CONTISUYO,group_CHINCHAYSUYO,group_ANTISUYO,group_CAPITAL];
lyr_Sudamrica_1.set('fieldAliases', {'PAÍS': 'PAÍS', });
lyr_HIDROGRAFIA_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_CIUDADESIMPORTANTES_3.set('fieldAliases', {'CIUDAD': 'CIUDAD', 'PAIS': 'PAIS', 'CAPITAL': 'CAPITAL', });
lyr_COLLASUYO_4.set('fieldAliases', {'CONTISUYO': 'CONTISUYO', });
lyr_CONTISUYO_5.set('fieldAliases', {'CON': 'CON', });
lyr_CHINCHAYSUYO_6.set('fieldAliases', {'CHINCHA': 'CHINCHA', });
lyr_ANTISUYO_7.set('fieldAliases', {'ANTISUYO': 'ANTISUYO', });
lyr_CUSCO_8.set('fieldAliases', {'CUSCO': 'CUSCO', });
lyr_Sudamrica_1.set('fieldImages', {'PAÍS': 'TextEdit', });
lyr_HIDROGRAFIA_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'TextEdit', });
lyr_CIUDADESIMPORTANTES_3.set('fieldImages', {'CIUDAD': 'TextEdit', 'PAIS': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_COLLASUYO_4.set('fieldImages', {'CONTISUYO': 'TextEdit', });
lyr_CONTISUYO_5.set('fieldImages', {'CON': 'TextEdit', });
lyr_CHINCHAYSUYO_6.set('fieldImages', {'CHINCHA': 'TextEdit', });
lyr_ANTISUYO_7.set('fieldImages', {'ANTISUYO': 'TextEdit', });
lyr_CUSCO_8.set('fieldImages', {'CUSCO': 'TextEdit', });
lyr_Sudamrica_1.set('fieldLabels', {});
lyr_HIDROGRAFIA_2.set('fieldLabels', {});
lyr_CIUDADESIMPORTANTES_3.set('fieldLabels', {});
lyr_COLLASUYO_4.set('fieldLabels', {});
lyr_CONTISUYO_5.set('fieldLabels', {});
lyr_CHINCHAYSUYO_6.set('fieldLabels', {});
lyr_ANTISUYO_7.set('fieldLabels', {});
lyr_CUSCO_8.set('fieldLabels', {});
lyr_CUSCO_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});