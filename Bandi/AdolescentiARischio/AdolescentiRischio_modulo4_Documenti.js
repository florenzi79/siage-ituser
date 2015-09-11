//onLoad
//


//onChange
//

//Validazione

//Operations
// messageAvviaProtocolloAdesione
message(username, 'edmaSyncProtocollaAdesione');
// edmaSyncProtocollaAdesione
var dm = initEdmaDocumentManager();
dm.setPrimaryDocument('Adesione_File_DomandaPI_idDocumento',
                      'Adesione_File_DomandaPIFirmato',
                      'title',
                      'DomandaDiAdesione_dataProtocollo',
                      'DomandaDiAdesione_numeroProtocollo');
dm.addAttachmentDocument('Adesione_File_SintesiValutazione_idDocumento','Adesione_File_SintesiValuzioneFirmato');
dm.addMessageAttributes(['DomandaDiAdesione_dataProtocollo','DomandaDiAdesione_numeroProtocollo']);
dm.doRegistration("Regione Lombardia - DG Famiglia - Avviso ADOLESCENTI A RISCHIO DI DIPENDENZE",
                  "Con la presente si comunica che la richiesta di voucher con Id " + instance.getIdPratica() + " &egrave; stata protocollata in data %s con numero di protocollo %s.",
                  'Richiedente_RUPMail');
if (dm.isRegistrered()) {
	notifyOrRepeat('8e96cc52ae7a4141867441eb055d7996', 'protocollo ok', 'edmaSyncProtocollaAdesione');
} else {
	message(username,'edmaSyncProtocollaAdesione');
}
// creaPdfDatiAdesione
generatePdf('PdfDatiDomanda', '3c98798f2e7b44f7ac6c0b783185be8a', 'DatiAdesione.pdf');
// sendMailProtDomandaBo
var dataProtocollo = values.get('DomandaDiAdesione_dataProtocollo');
var numProtocollo = values.get('DomandaDiAdesione_numeroProtocollo');
var idPratica = instance.getIdPratica();
var richiedente = values.get('Richiedente_Denominazione');
var mailContatto = 'progettinnovativifamiglia@regione.lombardia.it';
sendEmailAddress('Regione Lombardia ' + new java.lang.Character("-").toString() + ' DG Famiglia ' + new java.lang.Character("-").toString() + ' Avviso ADOLESCENTI A RISCHIO DI DIPENDENZE',
                 'Con la presente si comunica che la richiesta di voucher con Id ' + idPratica + ' &egrave; stata protocollata in data ' + dataProtocollo + ' con numero di protocollo '+ numProtocollo + '.',
                 [mailContatto]);
