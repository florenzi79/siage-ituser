println("XXXX DOTE ENTRATA Script Validazione 9 - Documenti(V)");

// verifica accreditamento sede
var queryVerificaSedeAccreditataOk = getVal('isQueryVerificaSedeAccreditataOk');
if (queryVerificaSedeAccreditataOk == 'false') {
  err('Avviso_AccreditamentoSedeNonVerificabileDOTE', 'Avviso_AccreditamentoSedeNonVerificabile_val');
}
//Richiedente_SedeOperativaAccrSezA
var is_SedeOperativaAccreditata = getVal('Richiedente_SedeOperativaAccrSezA');
println('XXXX Dote is_SedeOperativaAccreditata:'+is_SedeOperativaAccreditata);
if (is_SedeOperativaAccreditata == 'false') {
  println('XXXX DOTE RAISE sede non accreditata');
  err('Richiedente_IdSede_12', 'Richiedente_IdSede_12_val');
}
// fine verifica accreditamento sede

// **** Inizio Controllo Numero massimo di doti per ID corso:  25
// TODO
// **** Fine Controllo Numero massimo di doti per ID corso:  25


// **** Inizio Controllo numero massimo componenti disabilità per classe: 4 per I anni  5 II anni
// TODO
// **** Fine  Controllo numero massimo componenti disabilità per classe: 4 per I anni  5 II anni

var templateName = values.get('Bando_NomeTemplate');
var maxIscritti = parseFloat(values.get('Bando_SogliaIscrittiCorso'));
var maxDisabili = parseFloat(values.get('Bando_SogliaDisabiliCorso'));
// conteggio iscritti
var idCorso = values.get('ServiziFormazione_RiepilogoServizi[0].IdCorso');
var sqlIscrittiCorso = " SELECT COUNT(DAT_VL) numero_iscrizioni "+
                       " FROM AG_SM_DATA_ENTRIES en "+
                       " WHERE DAT_PTH = 'ServiziFormazione_RiepilogoServizi[0].IdCorso' "+
                       " AND DAT_VL = '"+idCorso+"' "+
                       " AND FK_ID IN ( "+
                       "   SELECT inst.SM_ID "+
                       "   FROM AG_SM_INSTANCES inst "+
                       "   WHERE inst.SM_TMPL_DN = '"+templateName+"' "+
                       "   AND inst.CURRENT_STATE IN ( "+
                       "     '4a8eb456b84549a895bd0e87a59e0b67', "+
                       "     '1629519c9d5f43d1bc8b6b036f4a4a8e' "+
                       "   ) "+
                       " ) ";
var numIscritti = parseFloat(dizionarioService.getSingle(null, sqlIscrittiCorso));
if (numIscritti >= maxIscritti) {
  errors.put('File_PdfDruFirmato','MaxNumIscrittiCorso_val');
}
// conteggio disabili
if (!isEmpty('ServiziFormazione_RiepilogoServizi[1].TitoloCorso')) {
  var idCorsoDisabile = values.get('ServiziFormazione_RiepilogoServizi[1].TitoloCorso');
  var sqlDisabiliCorso = " SELECT COUNT(DAT_VL) numero_disabili "+
                         " FROM AG_SM_DATA_ENTRIES en "+
                         " WHERE DAT_PTH = 'ServiziFormazione_RiepilogoServizi[1].TitoloCorso' "+
                         " AND DAT_VL = '"+idCorsoDisabile+"' "+
                         " AND FK_ID IN ( "+
                         "   SELECT inst.SM_ID "+
                         "   FROM AG_SM_INSTANCES inst "+
                         "   WHERE inst.SM_TMPL_DN = '"+templateName+"' "+
                         "   AND inst.CURRENT_STATE IN ( "+
                         "     '4a8eb456b84549a895bd0e87a59e0b67', "+
                         "     '1629519c9d5f43d1bc8b6b036f4a4a8e' "+
                         "   ) "+
                         " ) ";
  var numDisabili = parseFloat(dizionarioService.getSingle(null, sqlDisabiliCorso));
  if (numDisabili >= maxDisabili) {
    errors.put('File_PdfDruFirmato','MaxNumDisabiliCorso_val');
  }
}


println("XXXX DOTE USCITA Script Validazione 9 - Documenti(V)");
