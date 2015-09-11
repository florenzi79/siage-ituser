//onLoad
//Adesione_File_DomandaDiContributoModello
values.put('Adesione_File_DomandaDiContributoModello','740dd52d7ce54978a2fc6a233e7ab263');

//Validazione

//Operations
// messageAvviaProtocolloAdesione
message(username, 'edmaSyncProtocollaAdesione');
// edmaSyncProtocollaAdesione
var dm = initEdmaDocumentManager();
dm.setPrimaryDocument('Adesione_File_DomandaDiContributo_idDocumento',
                      'Adesione_File_DomandaDiContributoFirmato',
                      'title',
                      'DomandaDiAdesione_DataProtocollo',
                      'DomandaDiAdesione_NumeroProtocollo');
dm.addMessageAttributes(['DomandaDiAdesione_DataProtocollo','DomandaDiAdesione_NumeroProtocollo']);
dm.doRegistration("Domanda di assegnazione della Dote Sport",
                  "La sua domanda di assegnazione della Dote Sport con numero identificativo " + instance.getIdPratica() + " &egrave; stata protocollata in data %s con numero di protocollo %s.<br>Cordiali saluti<br><br>Regione Lombardia<br>Direzione Generale Sport e Politiche per i Giovani",
                  'Richiedente_Mail');
if (dm.isRegistrered()) {
	notifyOrRepeat('e63f4d0b55f346ca9716a95b48b28196', 'Accettato', 'edmaSyncProtocollaAdesione');
} else {
	message(username,'edmaSyncProtocollaAdesione');
}
// creaPdfDomanda
generatePdf('Adesione_File_DomandaDiContributoFirmato', '5ea89d85f5aa46219046d0a032639c63', 'DomandaDiAdesione.pdf');
