print('FFFF CatalogoBando: ' + values.get('CatalogoBando'));

var attoUnicoGenerato = '';
if (values.get('CatalogoBando') == 'DDFIanni') {
    print('FFFF ddfIanni');
    attoUnicoGenerato = '7424393893134aa49c306259d7c9647a';
} else if (values.get('CatalogoBando') == 'DDFIIanni') {
    print('FFFF ddfIIanni');
    attoUnicoGenerato = '89ecf2d9e69a47e3b01576a7de5e54c1';
}
print('FFFF CatalogoBando: ' + values.get('CatalogoBando'));
generatePdf('AttoUnico_FilePdfAttoAdesioneGeneratoTmp', attoUnicoGenerato, 'AttoDiAdesione.pdf');
