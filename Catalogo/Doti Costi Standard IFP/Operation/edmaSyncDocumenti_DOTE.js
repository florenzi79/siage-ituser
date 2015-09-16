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
    notifyOrRepeat('4a8eb456b84549a895bd0e87a59e0b67', 'Protocolla', 'edmaSyncDocumenti_DOTE');   // stato Adesione - In attesa di protocollazione
	print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 3a protocollato\n');
  } else {
    message(username, 'edmaSyncDocumentiIDOTE');
	print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 3b non protocollato\n');
  }
 print('XXXXXXXXXX Operation edmaSyncDocumenti_DOTE - STEP 4 fine script\n');
