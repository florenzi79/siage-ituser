// edmaSyncDocumenti_DOTE
print('XXXXXXXXXX Operation edmaSyncDocumenti DOTE - STEP 1 inizio script\n');
  var dm = initEdmaDocumentManager();
  dm.setPrimaryDocument('File_PdfDruFirmato_idDocumento',
                        'File_PdfDruFirmato',
						'title',
						'Dote_ProtocolloData',
						'Dote_ProtocolloNumero');

print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 2\n');
var nomeBando = values.get('Bando_Nome');
  dm.addMessageAttributes(['Dote_ProtocolloNumero']);

  dm.doRegistration("Regione Lombardia _DG IFL - "+nomeBando,
  "Con la presente si comunica che la richiesta di dote  - "+ instance.getIdPratica() +  ", e' stata protocollata in data odierna  col numero %s.",
"Referente_Email");

  if (dm.isRegistrered()) {

	// sendMailProtDomandaBoDOTE
	print('XXXXXXXXXX sendMailProtDomandaBoDOTE  INIZIO');
	var dataProtocollo = values.get('File_PdfDruFirmato_dataProtocollo');
	var numProtocollo = values.get('File_PdfDruFirmato_numeroProtocollo');
	var idPratica = instance.getIdPratica();
	var mailContatto = 'doteapp3@regione.lombardia.it';

	sendEmailAddress(
	'Regione Lombardia ' + new java.lang.Character("_").toString() + 'DG IFL' + new java.lang.Character("-").toString() + ' Dote apprendisti art.3',
	'Con la presente si comunica che la richiesta di dote '+ idPratica + ', &#232; stata protocollata in data odierna  col numero '
	 + numProtocollo
	 +'.',
	[mailContatto]);
	print('XXXXXXXXXX sendMailProtDomandaBoDOTE  FINE');

	//set_Fase_e_Stato_Pratica_quando_protocollato
	print('XXXXXXXXXX set_Fase_e_Stato_Pratica_quando_protocollato  INIZIO');
	values.put('statoPratica', "Presentato");
	values.put('fasePratica', "Rendicontazione e Liquidazione Front Office");

	values.put('statoPratica', "Ammesso e Finanziato");
	print('XXXXXXXXXX set_Fase_e_Stato_Pratica_quando_protocollato  FINE');

	print('XXXXXXXXXX generaPdfDopoProtocollo  INIZIO');
	var checklist = '';
    var datiRiassuntivi = '';
    if (values.get('CatalogoBando') == 'DDFIanni') {
    	checklist = '229b8175f32b42569a90ac6d6f9e567d';
    	datiRiassuntivi = 'e78b8b4d139741f3a64d6fff5c4fa8b3';
    } else if (values.get('CatalogoBando') == 'DDFIIanni') {
    	checklist = '5236d1abfd22483d98f4f2dfad3b4f1c';
    	datiRiassuntivi = 'a2bf100e63ca4ba7823588b0dca53c8f';
    }
	generatePdf('File_CheckListIstruttoria', checklist, 'CheckListAssegnazioneDote.pdf');
	generatePdf('File_PdfDotiDatiRiassuntivi', datiRiassuntivi, 'DatiRiassuntiviDote.pdf');
	print('XXXXXXXXXX generaPdfDopoProtocollo  FINE');

	save();

    notifyOrRepeat('4a8eb456b84549a895bd0e87a59e0b67', 'Protocolla', 'edmaSyncDocumenti_DOTE');   // stato Adesione - In attesa di protocollazione
	print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 3a protocollato\n');
  } else {
    message(username, 'edmaSyncDocumentiIDOTE');
	print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 3b non protocollato\n');
  }
 print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 4 fine script\n');
