/* ******************************************************
Questo script presuppone che siano configurati i seguenti errori:
AttoUnico_FirmatarioCodiceFiscale_val ==> Codice fiscale del firmatario non valido
Richiedente_AttoUnicoPresentato_FALSE_val  ==> Prima di presentare una richiesta di dote è necessario presentare l'atto di adesione unico
Richiedente_AttoUnicoPresentato_TRUE_val ==> E' gia stato presentato un atto di adesione unico. Proseguire con il pulsante "Compila Dote"
Avviso_DotazioneFinCorsi_Rimanente_Esaurita_val
Avviso_DotazioneFinOperatore_Rimanente_Esaurita_val
Avviso_DotazioneFinOperatore_Rimanente_Esaurita_val
Avviso_AccreditamentoOperatoreNonVerificabile_val
Richiedente_IdOperatore_val
Richiedente_IdSede_val


 ******************************************************
*/
println('XXXX DOTE ENTRATA Script Validazione Primo Modulo');
//Simulazione DIAMANTE
var isPresentatoAttoUnico = getVal('Richiedente_AttoUnicoPresentato');

if ((isPresentatoAttoUnico !== null) && (isPresentatoAttoUnico !== '')) {
    if ((inputAction == 'Compila Dote')&& (isPresentatoAttoUnico == 'false')) {
        err('Richiedente_Denominazione', 'Richiedente_AttoUnicoPresentato_FALSE_val');
    }
}

if ((isPresentatoAttoUnico !== null) && (isPresentatoAttoUnico !== '')) {
    if ((inputAction == 'Compila Atto di Adesione Unico')&& (isPresentatoAttoUnico == 'true')) {
        err('Avviso_AttoUnicoOk', 'Richiedente_AttoUnicoPresentato_TRUE_val');
    }
}

if (inputAction == 'Compila Atto di Adesione Unico') {

  var cf = getVal('AttoUnico_FirmatarioCodiceFiscale');
  if ((cf !== null) && (cf !== '')) {
      if (!isValidCf(cf)) {
        err('AttoUnico_FirmatarioCodiceFiscale', 'AttoUnico_FirmatarioCodiceFiscale_val');
      }
  }
  var queryAlboAccreditatiOk = getVal('isQueryAlboAccreditatiOk');
  if (queryAlboAccreditatiOk !== 'true') {
      err('Avviso_AccreditamentoOperatoreNonVerificabile', 'Avviso_AccreditamentoOperatoreNonVerificabile_val');
  }

  var is_OperatoreAccreditato = getVal('Richiedente_OperatoreAccreditato');
  if (is_OperatoreAccreditato == 'false') {
      err('Richiedente_IdOperatore', 'Richiedente_IdOperatore_val');
  }

} // fine se ho cliccato 'Compila Atto di Adesione Unico'


if (inputAction == 'Compila Dote') {

  var queryVerificaSedeAccreditataOk = getVal('isQueryVerificaSedeAccreditataOk');
  if (queryVerificaSedeAccreditataOk == 'false') {
      err('Avviso_AccreditamentoSedeNonVerificabile', 'Avviso_AccreditamentoSedeNonVerificabile_val');
  }
  //Richiedente_SedeOperativaAccrSezA
  var is_SedeOperativaAccreditata = getVal('Richiedente_SedeOperativaAccrSezA');
  println('XXXX Dote is_SedeOperativaAccreditata:'+is_SedeOperativaAccreditata);
  if (is_SedeOperativaAccreditata == 'false') {
      println('XXXX Dote Controllo attivato Richiedente_IdSede_val');
      err('Richiedente_IdSede', 'Richiedente_IdSede_val');
  }
  // caricamento Soglie definite negli OnLoad
  var sogliaBandoCorsi    = parseFloat(values.get('Bando_DotazioneFinCorsi_SogliaPrimoModulo'));
  var sogliaOperatore     = parseFloat(values.get('Bando_DotazioneFinOperatore_SogliaPrimoModulo'));
  var sogliaBandoDisabili = parseFloat(values.get('Bando_DotazioneFinDisabilita_SogliaPrimoModulo'));

  var rimanenzaBandoCorsi = parseFloat(values.get('Bando_DotazioneFinCorsi_Rimanente'));
  var rimanenzaOperatore = parseFloat(values.get('Bando_DotazioneFinOperatore_Rimanente'));
  var rimanenzaBandoDisabili = parseFloat(values.get('Bando_DotazioneFinDisabilita_Rimanente'));

  print('XXXX DOTE sogliaBandoCorsi:'+sogliaBandoCorsi + ' rimanenzaBandoCorsi:'+rimanenzaBandoCorsi+'\n');
  print('XXXX DOTE sogliaOperatore:'+sogliaOperatore + ' rimanenzaOperatore:'+rimanenzaOperatore+'\n');
  print('XXXX DOTE sogliaBandoDisabili:'+sogliaBandoDisabili + ' rimanenzaBandoDisabili:'+rimanenzaBandoDisabili+'\n');


  if (rimanenzaBandoCorsi < sogliaBandoCorsi) {
      err('Bando_DotazioneFinCorsi_Rimanente', 'Avviso_DotazioneFinCorsi_Rimanente_Esaurita_val');
      //  "La dotazione finanziaria relativa al bando è esaurita. Non sarà possiblie proseguire con la compilazione delle doti."
      print('XXXX DOTE Controllo Avviso_DotazioneFinCorsi_Rimanente_Esaurita_val Violato \n');

  }
  if ((rimanenzaOperatore < sogliaOperatore)) {
        err('Bando_DotazioneFinOperatore_Rimanente', 'Avviso_DotazioneFinOperatore_Rimanente_Esaurita_val');
          //  "Il budget assegnato all'operatore è esaurito. Non sarà possiblie proseguire con la compilazione delle doti."
        print('XXXX DOTE Controllo Avviso_DotazioneFinOperatore_Rimanente_Esaurita_val Violato \n');
  }
  /* commentato perchè non è da bloccare nel primo modulo visto che non è possibile sapere se il destinatario sarà dichiarato disabile
  if ((rimanenzaBandoDisabili < sogliaBandoDisabili)) {
          err('Bando_DotazioneFinDisabilita_Rimanente', 'Avviso_DotazioneFinDisabilita__Esaurita_val');
      //  "La dotazione finanziaria relativa al bando per componente disabilità è esaurita. Non sarà possiblie proseguire con la compilazione delle doti."
  }
  */
} // fine if (inputAction == 'Compila Dote')
println('XXXX DOTE USCITA Script Validazione Primo Modulo');
