//onLoad
//Adesione_File_DomandaContributo
values.put('Adesione_File_DomandaContributo','c306794ce2da417fa7275d634af2f783');
var sqlImportiPrenotati = " SELECT NVL(SUM(CAST(DAT_VL AS NUMBER)), 0) importo_richiesto "+
                          " FROM AG_SM_DATA_ENTRIES en "+
                          " WHERE DAT_PTH = 'Contributo_Concedibile' "+
                          " AND FK_ID IN ( "+
                          "   SELECT inst.SM_ID "+
                          "   FROM AG_SM_INSTANCES inst "+
                          "   WHERE inst.SM_TMPL_DN = 'Negozi storici' "+
                          "   AND inst.CURRENT_STATE IN ( "+
                          "     '2c3cdcc69cc0457f8deb8e7bd8785dd0', "+
                          "     'c09f4f9b695e435b876be8a2edbe965b' "+
                          "   ) ";
var importiPrenotati = parseFloat(dizionarioService.getSingle(null, sqlImportiPrenotati));
fieldsets.get('b8a7babfb1e14d10a12eec6162a2ecd1').setHidden(importiPrenotati <= 1000000);
//onChange

//Validazione
//praticaduplicata
var sqlContaPratiche =
"  SELECT SM_ID PRATICA_BLOCCANTE "+
"  FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
"  WHERE DETTAGLIO.DAT_PTH = 'SoggettoRichiedente_CodiceFiscale' "+
"  AND DETTAGLIO.DAT_VL = '" + cfRichiedente +"' "+
"  AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
"  AND PRATICA.SM_TMPL_DN = 'Negozi storici' "+
"  AND PRATICA.CURRENT_STATE IN ('2c3cdcc69cc0457f8deb8e7bd8785dd0', 'c09f4f9b695e435b876be8a2edbe965b')";
//							  						    Attesa protocollazione			  			Presentata
var praticheDuplicate = dizionarioService.getList(null, sqlContaPratiche);
if(praticheDuplicate.size() > 0) {
  errors.put('Adesione_File_DomandaContributoFirmata', 'PraticaDuplicata_val');
}
//disponibilitaresidua
var sqlImportiRichiesti = " SELECT NVL(SUM(CAST(DAT_VL AS NUMBER)), 0) importo_richiesto "+
                          " FROM AG_SM_DATA_ENTRIES en "+
                          " WHERE DAT_PTH = 'Contributo_Concedibile' "+
                          " AND FK_ID IN ( "+
                          "   SELECT inst.SM_ID "+
                          "   FROM AG_SM_INSTANCES inst "+
                          "   WHERE inst.SM_TMPL_DN = 'Negozi storici' "+
                          "   AND inst.CURRENT_STATE IN ( "+
                          "     '2c3cdcc69cc0457f8deb8e7bd8785dd0', "+
                          "     'c09f4f9b695e435b876be8a2edbe965b' "+
                          "   ) ";
var importiRichiesti = parseFloat(dizionarioService.getSingle(null, sqlImportiRichiesti));
if (importiRichiesti > 1200000) {
  errors.put('Adesione_File_DomandaContributoFirmata','DisponibilitaEsaurita_val');
}

//operations
//setDatiBozzaEliminata
values.put('statoPratica','Bozza eliminata');
