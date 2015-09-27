var dru = '';
var pip = '';
if (values.get('CatalogoBando') == 'DDFIanni') {
	dru = 'dfb20e6f3a6e4623bc292236980905ac';
	pip = 'd042358c750748f8ac13525dba7ef24a';
} else if (values.get('CatalogoBando') == 'DDFIIanni') {
	dru = '077e8d4ae26541d38abf2fcd32243107';
	pip = '883b9b69bfb34aa7a3691fa9dc595014';
}

generatePdf('File_PdfDruTmp', dru, 'Allegato 3 - DRU_Dote.pdf');
generatePdf('File_PdfPipTmp', pip, 'Allegato 5 - PIPeDomandaPartecipazione.pdf');
