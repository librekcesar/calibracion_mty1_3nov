var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mty1_zipcodes_volumen_1 = new ol.format.GeoJSON();
var features_mty1_zipcodes_volumen_1 = format_mty1_zipcodes_volumen_1.readFeatures(json_mty1_zipcodes_volumen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mty1_zipcodes_volumen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mty1_zipcodes_volumen_1.addFeatures(features_mty1_zipcodes_volumen_1);
var lyr_mty1_zipcodes_volumen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mty1_zipcodes_volumen_1, 
                style: style_mty1_zipcodes_volumen_1,
                interactive: false,
                title: '<img src="styles/legend/mty1_zipcodes_volumen_1.png" /> mty1_zipcodes_volumen'
            });
var format_mty1_zonas_volumen_2 = new ol.format.GeoJSON();
var features_mty1_zonas_volumen_2 = format_mty1_zonas_volumen_2.readFeatures(json_mty1_zonas_volumen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mty1_zonas_volumen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mty1_zonas_volumen_2.addFeatures(features_mty1_zonas_volumen_2);
var lyr_mty1_zonas_volumen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mty1_zonas_volumen_2, 
                style: style_mty1_zonas_volumen_2,
                interactive: true,
                title: '<img src="styles/legend/mty1_zonas_volumen_2.png" /> mty1_zonas_volumen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mty1_zipcodes_volumen_1.setVisible(true);lyr_mty1_zonas_volumen_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mty1_zipcodes_volumen_1,lyr_mty1_zonas_volumen_2];
lyr_mty1_zipcodes_volumen_1.set('fieldAliases', {'zonificacion': 'zonificacion', 'zipcode': 'zipcode', 'Reporte de Volumen__zipcode_mty_cda_zipcode': 'Reporte de Volumen__zipcode_mty_cda_zipcode', 'Reporte de Volumen__zipcode_mty_Promedio_diario': 'Reporte de Volumen__zipcode_mty_Promedio_diario', 'tag': 'tag', 'Reporte de Volumen__zipcode_mty_tag': 'Reporte de Volumen__zipcode_mty_tag', });
lyr_mty1_zonas_volumen_2.set('fieldAliases', {'zonificacion': 'zonificacion', 'promedio_diario': 'promedio_diario', 'tag': 'tag', });
lyr_mty1_zipcodes_volumen_1.set('fieldImages', {'zonificacion': 'TextEdit', 'zipcode': 'TextEdit', 'Reporte de Volumen__zipcode_mty_cda_zipcode': 'TextEdit', 'Reporte de Volumen__zipcode_mty_Promedio_diario': 'TextEdit', 'tag': 'TextEdit', 'Reporte de Volumen__zipcode_mty_tag': 'TextEdit', });
lyr_mty1_zonas_volumen_2.set('fieldImages', {'zonificacion': 'TextEdit', 'promedio_diario': '', 'tag': '', });
lyr_mty1_zipcodes_volumen_1.set('fieldLabels', {'zonificacion': 'no label', 'zipcode': 'no label', 'Reporte de Volumen__zipcode_mty_cda_zipcode': 'no label', 'Reporte de Volumen__zipcode_mty_Promedio_diario': 'no label', 'tag': 'no label', 'Reporte de Volumen__zipcode_mty_tag': 'no label', });
lyr_mty1_zonas_volumen_2.set('fieldLabels', {'zonificacion': 'header label', 'promedio_diario': 'header label', 'tag': 'header label', });
lyr_mty1_zonas_volumen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});