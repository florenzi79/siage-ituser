//onLoad
//Adesione_File_AttoDelega
var isNotFirmatarioRappresentante = (values.get('Firmatario_CoincideRappresentanteLegale') == 'false');
items.get('Adesione_File_AttoDelega').setHidden(!isNotFirmatarioRappresentante);
items.get('Adesione_File_AttoDelega').setRequired(isNotFirmatarioRappresentante);
//Adesione_File_DeMinimisModello
values.put('Adesione_File_DeMinimisModello', getContextPath()+'/file/0e97401561994496a711ff67b1f8647c');
values.put('Adesione_File_DeMinimisControllateModello', getContextPath()+'/file/5c1916fd6da2441b832c2f615262edde');
values.put('Adesione_File_DeMinimisIstruzioni', getContextPath()+'/file/3f939bcbaba04091997a51999e06b397');
values.put('Adesione_File_AntiriciclaggioModello', getContextPath()+'/file/ee23c707e4d747e993b4b6972449b1cb');
values.put('Adesione_File_DescrizioneProgettoModello', getContextPath()+'/file/acc789a318e94730bbdc2b972f284a9b');
values.put('Adesione_File_DettaglioBudgetModello', getContextPath()+'/file/ef72d4477d3e496aa475868e61b69072');


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
  errors.put('Adesione_File_DescrizioneProgettoCompilato', 'PraticaDuplicata_val');
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
  errors.put('Adesione_File_DettaglioBudgetCompilato','DisponibilitaEsaurita_val');
}


//operations
//setDatiBozzaEliminata
values.put('statoPratica','Bozza eliminata');
