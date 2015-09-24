// edmaSyncDocumenti_DOTE_ATTO
print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE_ATTO  - STEP 1 inizio script\n');
  var dm = initEdmaDocumentManager();
  dm.setPrimaryDocument('AttoUnico_FilePdfAttoAdesioneFirmato_idDocumento',
                        'AttoUnico_FilePdfAttoAdesioneFirmato',
						'title',
						'AttoUnico_ProtocolloData',
						'AttoUnico_ProtocolloNumero');

print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE_ATTO - STEP 2\n');
//dm.addAttachmentDocument('File_EDMA_idDocumento', 'File_EDMA');
//dm.addAttachmentDocument('Atto_FilePdfAttoAdesioneFirmato_idDocumento2', 'Atto_FilePdfAttoAdesioneFirmato');

  //dm.addMessageAttributes(['File_DomandaIncentivoFirmata_dataProtocollo', 'File_DomandaIncentivoFirmata_numeroProtocollo']);
  //dm.addMessageAttributes(['File_DomandaIncentivoFirmata_dataProtocollo']);

  //dm.addCC(['donna_moda_design@regione.lombardia.it', 'regione_lombardia@borsadelcredito.it']);
  //dm.addMessageAttributes(['File_DomandaIncentivoFirmata_dataProtocollo']);
 dm.addMessageAttributes(['AttoUnico_ProtocolloNumero']);
print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 3\n');

//  dm.doRegistration("Regione Lombardia _DG IFL- Dote apprendisti art.3 Atto di adesione unico",
//  "Con la presente si comunica che la pratica relativa all'atto di adesione unico  di dote  - "+ instance.getIdPratica() +  ", è stata protocollata in data odierna  con il numero %s.",
// "Richiedente_FirmatarioEmail");

// dm.doRegistration("Prova titolo", "Corpo email", "Richiedente_FirmatarioEmail");

  dm.doRegistration("Regione Lombardia _DG IFL- Doti IeFP DDF I anni -  Atto di adesione unico",
  "Con la presente si comunica che la pratica relativa all'atto di adesione unico   - "+ instance.getIdPratica() +", e' stata protocollata in data odierna  con il numero %s.",
"AttoUnico_FirmatarioEmail");

print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE_ATTO - STEP 4\n');

  if (dm.isRegistrered()) {

	print('XXXXXXXXXX set_Fase_e_Stato_Pratica_quando_protocollato_ATTO_UNICO  INIZIO');
	values.put('statoPratica', "N/D");
	values.put('fasePratica', "N/D");
	print('XXXXXXXXXX set_Fase_e_Stato_Pratica_quando_protocollato_ATTO_UNICO  FINE');

	print('XXXXXXXXXX AttoUnico_FilePdfAttoAdesioneDatiRiassuntivi  INIZIO');
	var datiRiassuntivi = '';
    if (values.get('CatalogoBando') == 'DDFIanni') {
        print('FFFF ddfIanni');
        attoUnicoRiassuntivo = '823e0676885944ff86971e65bd5b69c2';
    } else if (values.get('CatalogoBando') == 'DDFIIanni') {
        print('FFFF ddfIIanni');
        attoUnicoRiassuntivo = '0f224a5934614419b303f68405f3f03c';
    }
    generatePdf('AttoUnico_FilePdfAttoAdesioneDatiRiassuntivi', attoUnicoRiassuntivo, 'AttoDiAdesioneDatiRiassuntivi.pdf');
	print('XXXXXXXXXX AttoUnico_FilePdfAttoAdesioneDatiRiassuntivi  FINE');

	save();

    notifyOrRepeat('859506c362764ba1a70277d1345e7cee', 'Protocolla', 'edmaSyncDocumenti_DOTE_ATTO');   // stato Adesione - In attesa di protocollazione
	print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE_ATTO - STEP 5a protocollato\n');
  } else {
    message(username, 'edmaSyncDocumenti_DOTE_ATTO');
	print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE_ATTO - STEP 5b non protocollato\n');
  }
 print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE_ATTO - STEP 6 fine script\n');
