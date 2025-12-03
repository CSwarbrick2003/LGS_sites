ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-369116.118939, 7036825.253211, -259121.796867, 7099157.902900]);
var wms_layers = [];


        var lyr_GoogleMapshybrid_0 = new ol.layer.Tile({
            'title': 'Google Maps hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LGSPoints_1 = new ol.format.GeoJSON();
var features_LGSPoints_1 = format_LGSPoints_1.readFeatures(json_LGSPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGSPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGSPoints_1.addFeatures(features_LGSPoints_1);
cluster_LGSPoints_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LGSPoints_1
});
var lyr_LGSPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LGSPoints_1, 
                style: style_LGSPoints_1,
                popuplayertitle: 'LGS Points',
                interactive: true,
                title: '<img src="styles/legend/LGSPoints_1.png" /> LGS Points'
            });
var format_Liverpool_2 = new ol.format.GeoJSON();
var features_Liverpool_2 = format_Liverpool_2.readFeatures(json_Liverpool_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liverpool_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liverpool_2.addFeatures(features_Liverpool_2);
var lyr_Liverpool_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liverpool_2, 
                style: style_Liverpool_2,
                popuplayertitle: 'Liverpool',
                interactive: false,
                title: '<img src="styles/legend/Liverpool_2.png" /> Liverpool'
            });
var format_Sefton_region_3 = new ol.format.GeoJSON();
var features_Sefton_region_3 = format_Sefton_region_3.readFeatures(json_Sefton_region_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sefton_region_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sefton_region_3.addFeatures(features_Sefton_region_3);
var lyr_Sefton_region_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sefton_region_3, 
                style: style_Sefton_region_3,
                popuplayertitle: 'Sefton_region',
                interactive: false,
                title: '<img src="styles/legend/Sefton_region_3.png" /> Sefton_region'
            });
var format_StHelens_4 = new ol.format.GeoJSON();
var features_StHelens_4 = format_StHelens_4.readFeatures(json_StHelens_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StHelens_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StHelens_4.addFeatures(features_StHelens_4);
var lyr_StHelens_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StHelens_4, 
                style: style_StHelens_4,
                popuplayertitle: 'St Helens',
                interactive: false,
                title: '<img src="styles/legend/StHelens_4.png" /> St Helens'
            });
var format_Knowsley_5 = new ol.format.GeoJSON();
var features_Knowsley_5 = format_Knowsley_5.readFeatures(json_Knowsley_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Knowsley_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Knowsley_5.addFeatures(features_Knowsley_5);
var lyr_Knowsley_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Knowsley_5, 
                style: style_Knowsley_5,
                popuplayertitle: 'Knowsley',
                interactive: false,
                title: '<img src="styles/legend/Knowsley_5.png" /> Knowsley'
            });

lyr_GoogleMapshybrid_0.setVisible(true);lyr_LGSPoints_1.setVisible(true);lyr_Liverpool_2.setVisible(true);lyr_Sefton_region_3.setVisible(true);lyr_StHelens_4.setVisible(true);lyr_Knowsley_5.setVisible(true);
var layersList = [lyr_GoogleMapshybrid_0,lyr_LGSPoints_1,lyr_Liverpool_2,lyr_Sefton_region_3,lyr_StHelens_4,lyr_Knowsley_5];
lyr_LGSPoints_1.set('fieldAliases', {'Site_Code': 'Site_Code', 'Site_Name': 'Site_Name', 'Interest': 'Interest', 'Type': 'Type', 'Total_Scor': 'Total_Scor', 'RIG_select': 'RIG_select', 'Digitised': 'Digitised', 'Last_Surve': 'Last_Surve', 'Grid_Refer': 'Grid_Refer', 'X': 'X', 'Y': 'Y', });
lyr_Liverpool_2.set('fieldAliases', {'NAME': 'NAME', 'AREA_KMsq': 'AREA_KMsq', 'CREATED_BY': 'CREATED_BY', 'DATE': 'DATE', });
lyr_Sefton_region_3.set('fieldAliases', {'NAME': 'NAME', 'AREA_KMsq': 'AREA_KMsq', 'CREATED_BY': 'CREATED_BY', 'DATE': 'DATE', });
lyr_StHelens_4.set('fieldAliases', {'NAME': 'NAME', 'AREA_KMsq': 'AREA_KMsq', 'CREATED_BY': 'CREATED_BY', 'DATE': 'DATE', });
lyr_Knowsley_5.set('fieldAliases', {'NAME': 'NAME', 'AREA_KMsq': 'AREA_KMsq', 'CREATED_BY': 'CREATED_BY', 'DATE': 'DATE', });
lyr_LGSPoints_1.set('fieldImages', {'Site_Code': 'TextEdit', 'Site_Name': 'TextEdit', 'Interest': 'TextEdit', 'Type': 'TextEdit', 'Total_Scor': 'TextEdit', 'RIG_select': 'TextEdit', 'Digitised': 'TextEdit', 'Last_Surve': 'TextEdit', 'Grid_Refer': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Liverpool_2.set('fieldImages', {'NAME': 'TextEdit', 'AREA_KMsq': 'TextEdit', 'CREATED_BY': 'TextEdit', 'DATE': 'DateTime', });
lyr_Sefton_region_3.set('fieldImages', {'NAME': 'TextEdit', 'AREA_KMsq': 'TextEdit', 'CREATED_BY': 'TextEdit', 'DATE': 'DateTime', });
lyr_StHelens_4.set('fieldImages', {'NAME': 'TextEdit', 'AREA_KMsq': 'TextEdit', 'CREATED_BY': 'TextEdit', 'DATE': 'DateTime', });
lyr_Knowsley_5.set('fieldImages', {'NAME': 'TextEdit', 'AREA_KMsq': 'TextEdit', 'CREATED_BY': 'TextEdit', 'DATE': 'DateTime', });
lyr_LGSPoints_1.set('fieldLabels', {'Site_Code': 'header label - always visible', 'Site_Name': 'inline label - always visible', 'Interest': 'inline label - always visible', 'Type': 'inline label - always visible', 'Total_Scor': 'inline label - visible with data', 'RIG_select': 'inline label - visible with data', 'Digitised': 'no label', 'Last_Surve': 'no label', 'Grid_Refer': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Liverpool_2.set('fieldLabels', {'NAME': 'no label', 'AREA_KMsq': 'no label', 'CREATED_BY': 'no label', 'DATE': 'no label', });
lyr_Sefton_region_3.set('fieldLabels', {'NAME': 'no label', 'AREA_KMsq': 'no label', 'CREATED_BY': 'no label', 'DATE': 'no label', });
lyr_StHelens_4.set('fieldLabels', {'NAME': 'no label', 'AREA_KMsq': 'no label', 'CREATED_BY': 'no label', 'DATE': 'no label', });
lyr_Knowsley_5.set('fieldLabels', {'NAME': 'no label', 'AREA_KMsq': 'no label', 'CREATED_BY': 'no label', 'DATE': 'no label', });
lyr_Knowsley_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});