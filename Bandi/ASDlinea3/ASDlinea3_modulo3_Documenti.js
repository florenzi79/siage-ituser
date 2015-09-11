// onLoad
// Avviso_NonModificabile
var isFirmatarioRappresentante = (values.get('Firmatario_CoincideLegaleRappresentante') == 'true');
items.get('Adesione_File_AttoDelega').setHidden(isFirmatarioRappresentante);
items.get('Adesione_File_AttoDelega').setRequired(!isFirmatarioRappresentante);
var isAttivitaEconomica = (values.get('Dichiarazioni_AttivitaEconomica') == 'true');
items.get('Adesione_File_DeMinimisFirmato').setRequired(isAttivitaEconomica);
//Adesione_File_DeMinimisIstruzioni
values.put('Adesione_File_DeMinimisIstruzioni', getContextPath()+'/file/8e6c310631a14a9da483c7354353c886');
//Adesione_File_DeMinimisModello
values.put('Adesione_File_DeMinimisModello', getContextPath()+'/file/b56948a5ae2b4a47b0c7e843d2eb6a16');
//Adesione_File_DeMinimisControllateModello
values.put('Adesione_File_DeMinimisControllateModello', getContextPath()+'/file/3497478ae4254671902b25723be6505a');

//Validazione
//pratica duplicata
var codiceFiscaleRichiedente = values.get('SoggettoRichiedente_CodiceFiscale');
var sql =
"  select SM_ID PRATICA_BLOCCANTE"+
"  from AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO"+
"  where"+
"  DETTAGLIO.DAT_PTH like 'SoggettoRichiedente_CodiceFiscale' and"+
"  DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' and"+
"  DETTAGLIO.FK_ID = PRATICA.SM_ID and"+
"  PRATICA.SM_TMPL_DN = 'Contributi ASD Eccellenze Linea 3' and"+
"  PRATICA.CURRENT_STATE in ('63549fd5d8c64e519a29e8788755fc0a', '5a8a62f27a704dc2a3afa45a164ff7c1')"
  //							  					Attesa protocollazione			  			Presentata
;
var pratiche = dizionarioService.getList(null, sql);
if(pratiche.size() > 0) {
	errors.put('Avviso_NonModificabile', 'PraticaDuplicata_val');
}
