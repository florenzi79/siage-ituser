//Operations adesione
// messageAvviaProtocolloAdesione
message(username, 'edmaSyncProtocollaAdesione');
// edmaSyncProtocollaAdesione
var dm = initEdmaDocumentManager();
dm.setPrimaryDocument('Adesione_File_SchedaIntervento_idDocumento',
                      'Adesione_File_SchedaInterventoFirmato',
                      'title',
                      'DomandaDiAdesione_dataProtocollo',
                      'DomandaDiAdesione_numeroProtocollo');
dm.addMessageAttributes(['DomandaDiAdesione_numeroProtocollo','DomandaDiAdesione_dataProtocollo']);
dm.doRegistration("Domanda di Adesione al Bando 'INAIL EDILIZIA SCOLASTICA LEGGE 107' - Id pratica: " + instance.getIdPratica() + " - Avvenuta protocollazione",
                  "Con la presente si comunica che la domanda di adesione al bando in oggetto &egrave; stata presentata correttamente.<br>I dati di riferimento della domanda di partecipazione sono:<br><br>Id pratica: " + instance.getIdPratica() + "<br>Numero protocollo: %s<br>Data protocollo: %s.",
                  'Adesione_fakeMailAddressProtocollo');
if (dm.isRegistrered()) {
	notifyOrRepeat('1a06885ea1754ba7b9174aa455ef9ee8', 'protocollo ok', 'edmaSyncProtocollaAdesione');
} else {
	message(username,'edmaSyncProtocollaAdesione');
}
// creaPdfDatiAdesione
generatePdf('PdfDatiDomanda', '5b042cf4fd284eb59be5d7ef41ef23c2', 'DatiAdesione.pdf');
