//onLoad
//Adesione_File_DomandaDiContributoModello
values.put('Adesione_File_DomandaDiContributoModello','740dd52d7ce54978a2fc6a233e7ab263');

//Validazione
//pratica duplicata
{
	var codiceFiscaleRichiedente = values.get('Richiedente_CodiceFiscale');
	var sqlPraticheDuplicate =
	"  SELECT SM_ID ID_PRATICA "+
	"  FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
	"  WHERE DETTAGLIO.DAT_PTH = 'Richiedente_CodiceFiscale' "+
	"  AND DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' "+
	"  AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
	"  AND PRATICA.SM_TMPL_DN = 'Rigenerazione urbana' "+
	"  AND PRATICA.CURRENT_STATE in ('b6eb1d6973c8432281d3de1f66272093', 'a849d6d6b98040f092fbb7b814f1da06')"
	//							  					    	Attesa protocollazione			  			Presentata
	;
	var praticheDuplicate = dizionarioService.getList(null, sqlPraticheDuplicate);
	if(praticheDuplicate.size() > 0) {
		errors.put('Adesione_File_DomandaContributoFirmato', 'PraticaDuplicata_val');
	}
}

//Operations
// messageAvviaProtocolloAdesione
message(username, 'edmaSyncProtocollaAdesione');
// edmaSyncProtocollaAdesione
var dm = initEdmaDocumentManager();
dm.setPrimaryDocument('Adesione_File_DomandaContributoFirmato_idDocumento',
                      'Adesione_File_DomandaContributoFirmato',
                      'title',
                      'DomandaAdesione_DataProtocollo',
                      'DomandaAdesione_NumeroProtocollo');
dm.addAttachmentDocument('Adesione_File_AttoDelega_idDocumento','Adesione_File_AttoDelega');
dm.addAttachmentDocument('Adesione_File_SchedaSintesi_Criterio1_idDocumento','Adesione_File_SchedaSintesi_Criterio1');
dm.addAttachmentDocument('Adesione_File_SchedaSintesi_Criterio2_idDocumento','Adesione_File_SchedaSintesi_Criterio2');
dm.addAttachmentDocument('Adesione_File_SchedaSintesi_Criterio3_idDocumento','Adesione_File_SchedaSintesi_Criterio3');
dm.addAttachmentDocument('Adesione_File_SchedaSintesi_Criterio4_idDocumento','Adesione_File_SchedaSintesi_Criterio4');
dm.addAttachmentDocument('Adesione_File_SchedaSintesi_Criterio5_idDocumento','Adesione_File_SchedaSintesi_Criterio5');
var j = 0;
while (values.get('AltriDocumenti['+j+'].Contenuto') !== null) {
	dm.addAttachmentDocument('AltriDocumenti['+j+'].Contenuto_idDocumento', 'AltriDocumenti['+j+'].Contenuto');
	j++;
}
var tipoEnteCapofila = values.get('Richiedente_Tipologia');
var nomeEnte = values.get('Richiedente_Denominazione');
var nomeProgetto = values.get('Progetto_Nome');
dm.addMessageAttributes(['DomandaAdesione_NumeroProtocollo','DomandaAdesione_DataProtocollo']);
dm.doRegistration("Domanda di partecipazione al bando per la selezione delle migliori iniziative di programmazione territoriale e urbanistica in tema di rigenerazione urbana e territoriale - " + tipoEnteCapofila + " di " + nomeEnte,
                  "La Vs. domanda di partecipazione relativa al progetto denominato " + nomeProgetto + " &egrave; stata accettata dal sistema con identificativo pratica " + instance.getIdPratica() + "  e protocollata con protocollo regionale %s in data %s.<br>Responsabile del procedimento: Anna Cozzi. Dirigente della Struttura Sistema Informativo Territoriale Integrato.<br>Per informazioni contattare la segreteria di Struttura - tel. 02 6765 4002<br>Referente per l’istruttoria: Matteo Masini - tel. 02 6765 5331<br>email matteo_masini@regione.lombardia.it",
                  'Richiedente_RupPec');
if (dm.isRegistrered()) {
	notifyOrRepeat('b6eb1d6973c8432281d3de1f66272093', 'Accettato', 'edmaSyncProtocollaAdesione');
} else {
	message(username,'edmaSyncProtocollaAdesione');
}
