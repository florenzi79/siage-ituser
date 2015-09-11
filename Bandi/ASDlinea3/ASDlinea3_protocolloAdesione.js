//Operations adesione
// messageAvviaProtocolloAdesione
message(username, 'edmaSyncProtocollaAdesione');
// edmaSyncProtocollaAdesione
var dm = initEdmaDocumentManager();
dm.setPrimaryDocument('Adesione_File_DomandaDiContributoIdDocumento',
                      'Adesione_File_DomandaDiContributoFirmato',
                      'title',
                      'DomandadiAdesione_DataProtocollo',
                      'DomandaDiAdesione_NumeroProtocollo');
dm.addAttachmentDocument('Adesione_File_AttoDelega_idDocumento','Adesione_File_AttoDelega');
dm.addAttachmentDocument('Adesione_File_DeMinimis_idDocumento','Adesione_File_DeMinimisFirmato');
dm.addAttachmentDocument('Adesione_File_DeMinimisControllate_idDocumento','Adesione_File_DeMinimisControllateFirmato');
var idDoc = 0;
while (values.get('AltriDocumentiAdesione['+idDoc+'].AltroDocumento_Descrizione')) {
  dm.addAttachmentDocument('AltriDocumentiAdesione['+idDoc+'].AltroDocumento_idDocumento','AltriDocumentiAdesione['+idDoc+'].AltroDocumento_File');
  idDoc++;
}
dm.addMessageAttributes(['DomandaDiAdesione_NumeroProtocollo','DomandadiAdesione_DataProtocollo']);
dm.doRegistration("Domanda di Adesione al Bando 'Contributi ASD Eccellenze Linea 3' - Id pratica: " + instance.getIdPratica() + " - Avvenuta protocollazione",
                  "Con la presente si comunica che la domanda di adesione al bando in oggetto &egrave; stata presentata correttamente.<br>I dati di riferimento della domanda di partecipazione sono:<br><br>Id pratica: " + instance.getIdPratica() + "<br>Numero protocollo: %s<br>Data protocollo: %s.",
                  'ReferentePratica_Mail');
if (dm.isRegistrered()) {
	notifyOrRepeat('63549fd5d8c64e519a29e8788755fc0a', 'Accettato', 'edmaSyncProtocollaAdesione');
} else {
	message(username,'edmaSyncProtocollaAdesione');
}
// creaPdfDatiAdesione
generatePdf('Pdf_Adesione', '9069ee815a2044d9bf9ce5859a11389a', 'DatiAdesione.pdf');
