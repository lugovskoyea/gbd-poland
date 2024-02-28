var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Deposits_2 = new ol.format.GeoJSON();
var features_Deposits_2 = format_Deposits_2.readFeatures(json_Deposits_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deposits_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deposits_2.addFeatures(features_Deposits_2);
var lyr_Deposits_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deposits_2, 
                style: style_Deposits_2,
                popuplayertitle: "Deposits",
                interactive: true,
                title: '<img src="styles/legend/Deposits_2.png" /> Deposits'
            });
var format_Drilledboreholes_3 = new ol.format.GeoJSON();
var features_Drilledboreholes_3 = format_Drilledboreholes_3.readFeatures(json_Drilledboreholes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drilledboreholes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drilledboreholes_3.addFeatures(features_Drilledboreholes_3);cluster_Drilledboreholes_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Drilledboreholes_3
});
var lyr_Drilledboreholes_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Drilledboreholes_3, 
                style: style_Drilledboreholes_3,
                popuplayertitle: "Drilled boreholes",
                interactive: true,
                title: '<img src="styles/legend/Drilledboreholes_3.png" /> Drilled boreholes'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Deposits_2.setVisible(true);lyr_Drilledboreholes_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_Deposits_2,lyr_Drilledboreholes_3];
lyr_Deposits_2.set('fieldAliases', {'name': 'name', 'reg_number': 'reg_number', 'area_ha': 'area_ha', 'mineral': 'mineral', 'prj_status': 'prj_status', 'name org': 'name org', 'nam search': 'nam search', });
lyr_Drilledboreholes_3.set('fieldAliases', {'well name': 'well name', 'dep name': 'dep name', 'drill date': 'drill date', 'photo': 'photo', });
lyr_Deposits_2.set('fieldImages', {'name': '', 'reg_number': '', 'area_ha': '', 'mineral': '', 'prj_status': '', 'name org': '', 'nam search': '', });
lyr_Drilledboreholes_3.set('fieldImages', {'well name': '', 'dep name': '', 'drill date': '', 'photo': '', });
lyr_Deposits_2.set('fieldLabels', {'name': 'inline label - always visible', 'reg_number': 'inline label - visible with data', 'area_ha': 'inline label - always visible', 'mineral': 'inline label - always visible', 'prj_status': 'inline label - always visible', 'name org': 'inline label - always visible', 'nam search': 'inline label - always visible', });
lyr_Drilledboreholes_3.set('fieldLabels', {'well name': 'inline label - always visible', 'dep name': 'header label - always visible', 'drill date': 'header label - visible with data', 'photo': 'no label', });
lyr_Drilledboreholes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});