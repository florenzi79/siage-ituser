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
// controllo dotazioni finanziarie
// caricamento Soglie definite negli OnLoad
// var sogliaBandoCorsi    = parseFloat(values.get('Bando_DotazioneFinCorsi_SogliaPrimoModulo'));
// var sogliaOperatore     = parseFloat(values.get('Bando_DotazioneFinOperatore_SogliaPrimoModulo'));
// var sogliaBandoDisabili = parseFloat(values.get('Bando_DotazioneFinDisabilita_SogliaPrimoModulo'));

 // caricamento Soglie in base alla dote richiesta
  var sogliaBandoCorsi    = parseFloat(values.get('ServiziFormazione_ImportoTotaleCorsi'));
  var sogliaOperatore     = parseFloat(values.get('ServiziFormazione_ImportoTotaleCorsi'));
  var sogliaBandoDisabili = parseFloat(values.get('ServiziFormazione_ImportoTotaleDisabilita'));


 var rimanenzaBandoCorsi = parseFloat(values.get('Bando_DotazioneFinCorsi_Rimanente'));
 var rimanenzaOperatore = parseFloat(values.get('Bando_DotazioneFinOperatore_Rimanente'));
 var rimanenzaBandoDisabili = parseFloat(values.get('Bando_DotazioneFinDisabilita_Rimanente'));

 print('XXXX DOTE sogliaBandoCorsi:'+sogliaBandoCorsi + ' rimanenzaBandoCorsi:'+rimanenzaBandoCorsi+'\n');
 print('XXXX DOTE sogliaOperatore:'+sogliaOperatore + ' rimanenzaOperatore:'+rimanenzaOperatore+'\n');
 print('XXXX DOTE sogliaBandoDisabili:'+sogliaBandoDisabili + ' rimanenzaBandoDisabili:'+rimanenzaBandoDisabili+'\n');

 //Bando_DotazioneFinCorsi_Rimanente_Protoc   ==> Avviso_DotazioneFinCorsi_Rimanente_Esaurita_Protoc_val
 // ==> La dotazione finanziaria relativa al bando è esaurita. Non sarà possiblie proseguire con la presentazione della domanda.
 //Bando_DotazioneFinDisabilita_Rimanente_Protoc ==> Avviso_DotazioneFinDisabilita__Esaurita_Protoc_val
 // ==> La dotazione finanziaria relativa al bando per componente disabilità è esaurita. Non sarà possiblie proseguire con la presentazione della domanda.
 //Bando_DotazioneFinOperatore_Rimanente_Protoc  ==> Avviso_DotazioneFinOperatore_Rimanente_Esaurita_Protoc_val
 // ==> Il budget assegnato all'operatore è esaurito. Non sarà possibile proseguire con la presentazione della domanda.

 if (rimanenzaBandoCorsi < sogliaBandoCorsi) {
     err('Bando_DotazioneFinCorsi_Rimanente_Protoc', 'Avviso_DotazioneFinCorsi_Rimanente_Esaurita_Protoc_val');
     print('XXXX DOTE Controllo Avviso_DotazioneFinCorsi_Rimanente_Esaurita_val Violato \n');

 }
 if ((rimanenzaOperatore < sogliaOperatore)) {
       err('Bando_DotazioneFinOperatore_Rimanente_Protoc', 'Avviso_DotazioneFinOperatore_Rimanente_Esaurita_Protoc_val');
       print('XXXX DOTE Controllo Avviso_DotazioneFinOperatore_Rimanente_Esaurita_val Violato \n');
 }
 /* commentato perchè non è da bloccare nel primo modulo visto che non è possibile sapere se il destinatario sarà dichiarato disabile
 if ((rimanenzaBandoDisabili < sogliaBandoDisabili)) {
         err('Bando_DotazioneFinDisabilita_Rimanente_Protoc', 'Avviso_DotazioneFinDisabilita__Esaurita_Protoc_val');
 }
 */




println("XXXX DOTE USCITA Script Validazione 9 - Documenti(V)");
