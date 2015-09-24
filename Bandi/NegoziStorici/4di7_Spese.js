//onLoad
//ElencoAmbitiSelezionatiAdesione
if (values.get('Progetto_AmbitoIntervento[2]') !== null) {
  values.put('ElencoAmbitiSelezionatiAdesione',values.get('Progetto_AmbitoIntervento[0]') + ' - ' + values.get('Progetto_AmbitoIntervento[1]') + ' - ' + values.get('Progetto_AmbitoIntervento[2]'));
} else if (values.get('Progetto_AmbitoIntervento[1]') !== null) {
  values.put('ElencoAmbitiSelezionatiAdesione',values.get('Progetto_AmbitoIntervento[0]') + ' - ' + values.get('Progetto_AmbitoIntervento[1]'));
} else {
  values.put('ElencoAmbitiSelezionatiAdesione',values.get('Progetto_AmbitoIntervento[0]'));
}
//Contributo_Concedibile
var indexAmbiti = 0;
var isAmbitoUno = false;
var isAmbitoDue = false;
var isAmbitoTre = false;
while (values.get('Progetto_AmbitoIntervento['+indexAmbiti+']') !== null) {
  if (values.get('Progetto_AmbitoIntervento['+indexAmbiti+']') == 'Ambito1') {
    isAmbitoUno = true;
  } else if (values.get('Progetto_AmbitoIntervento['+indexAmbiti+']') == 'Ambito2') {
    isAmbitoDue = true;
  } else if (values.get('Progetto_AmbitoIntervento['+indexAmbiti+']') == 'Ambito3') {
    isAmbitoTre = true;
  }
  indexAmbiti++;
}
items.get('SpeseCapitale_Immobili').setHidden(!isAmbitoUno);
items.get('SpeseCapitale_Connettivita').setHidden(!isAmbitoUno);
items.get('SpeseCapitale_OpereMurarie').setHidden(!isAmbitoUno);
items.get('SpeseCapitale_InteventiInnovativi').setHidden(!isAmbitoUno);
items.get('SpeseCapitale_Impianti').setHidden(!isAmbitoUno);
items.get('SpeseCorrente_Progettazione').setHidden(!isAmbitoUno);
items.get('SpeseCorrente_AttivitaFormativa').setHidden(!isAmbitoDue && !isAmbitoTre);
if (isEmpty('SpeseCapitale_Allestimenti')) { values.put('SpeseCapitale_Allestimenti',''+0); }
if ((isEmpty('SpeseCapitale_Immobili')) && isAmbitoUno) { values.put('SpeseCapitale_Immobili',''+0); }
if (isEmpty('SpeseCapitale_Hardware')) { values.put('SpeseCapitale_Hardware',''+0); }
if (isEmpty('SpeseCapitale_Software')) { values.put('SpeseCapitale_Software',''+0); }
if ((isEmpty('SpeseCapitale_Connettivita')) && isAmbitoUno) { values.put('SpeseCapitale_Connettivita',''+0); }
if ((isEmpty('SpeseCapitale_OpereMurarie')) && isAmbitoUno) {  values.put('SpeseCapitale_OpereMurarie',''+0); }
if (isEmpty('SpeseCapitale_Rinnovamento')) { values.put('SpeseCapitale_Rinnovamento',''+0); }
if ((isEmpty('SpeseCapitale_InteventiInnovativi')) && isAmbitoUno) { values.put('SpeseCapitale_InteventiInnovativi',''+0); }
if ((isEmpty('SpeseCapitale_Impianti')) && isAmbitoUno) { values.put('SpeseCapitale_Impianti',''+0); }
if (isEmpty('SpeseCorrente_Progettazione')) { values.put('SpeseCorrente_Progettazione',''+0); }
if (isEmpty('SpeseCorrente_Comunicazione')) { values.put('SpeseCorrente_Comunicazione',''+0); }
if ((isEmpty('SpeseCorrente_AttivitaFormativa')) && (isAmbitoDue || isAmbitoTre)) { values.put('SpeseCorrente_AttivitaFormativa',''+0); }
if (isEmpty('SpeseCorrente_Consulenza')) { values.put('SpeseCorrente_Consulenza',''+0); }
if (isEmpty('SpeseCorrente_ProgettazioneDigitale')) { values.put('SpeseCorrente_ProgettazioneDigitale',''+0); }
if (isEmpty('SpeseCorrente_Pianificazione')) { values.put('SpeseCorrente_Pianificazione',''+0); }
if (isEmpty('SpeseCorrente_AnalisiMercato')) { values.put('SpeseCorrente_AnalisiMercato',''+0); }
if (isEmpty('SpeseCorrente_Personale')) { values.put('SpeseCorrente_Personale',''+0); }
var capitaleAllestimenti = 0;
var capitaleImmobili = 0;
var capitaleHardware = 0;
var capitaleSoftware = 0;
var capitaleConnettivita = 0;
var capitaleOpereMurarie = 0;
var capitaleRinnovamento = 0;
var capitaleInteventiInnovativi = 0;
var capitaleImpianti = 0;
var correnteProgettazione = 0;
var correnteComunicazione = 0;
var correnteAttivitaFormativa = 0;
var correnteConsulenza = 0;
var correnteProgettazioneDigitale = 0;
var correntePianificazione = 0;
var correnteAnalisiMercato = 0;
var correntePersonale = 0;
if (!isEmpty('SpeseCapitale_Allestimenti')) { capitaleAllestimenti = parseFloat(values.get('SpeseCapitale_Allestimenti')); }
if (!isEmpty('SpeseCapitale_Immobili')) { capitaleImmobili = parseFloat(values.get('SpeseCapitale_Immobili')); }
if (!isEmpty('SpeseCapitale_Hardware')) { capitaleHardware = parseFloat(values.get('SpeseCapitale_Hardware')); }
if (!isEmpty('SpeseCapitale_Software')) { capitaleSoftware = parseFloat(values.get('SpeseCapitale_Software')); }
if (!isEmpty('SpeseCapitale_Connettivita')) { capitaleConnettivita = parseFloat(values.get('SpeseCapitale_Connettivita')); }
if (!isEmpty('SpeseCapitale_OpereMurarie')) {  capitaleOpereMurarie = parseFloat(values.get('SpeseCapitale_OpereMurarie')); }
if (!isEmpty('SpeseCapitale_Rinnovamento')) { capitaleRinnovamento = parseFloat(values.get('SpeseCapitale_Rinnovamento')); }
if (!isEmpty('SpeseCapitale_InteventiInnovativi')) { capitaleInteventiInnovativi = parseFloat(values.get('SpeseCapitale_InteventiInnovativi')); }
if (!isEmpty('SpeseCapitale_Impianti')) { capitaleImpianti = parseFloat(values.get('SpeseCapitale_Impianti')); }
if (!isEmpty('SpeseCorrente_Progettazione')) { correnteProgettazione = parseFloat(values.get('SpeseCorrente_Progettazione')); }
if (!isEmpty('SpeseCorrente_Comunicazione')) { correnteComunicazione = parseFloat(values.get('SpeseCorrente_Comunicazione')); }
if (!isEmpty('SpeseCorrente_AttivitaFormativa')) { correnteAttivitaFormativa = parseFloat(values.get('SpeseCorrente_AttivitaFormativa')); }
if (!isEmpty('SpeseCorrente_Consulenza')) { correnteConsulenza = parseFloat(values.get('SpeseCorrente_Consulenza')); }
if (!isEmpty('SpeseCorrente_ProgettazioneDigitale')) { correnteProgettazioneDigitale = parseFloat(values.get('SpeseCorrente_ProgettazioneDigitale')); }
if (!isEmpty('SpeseCorrente_Pianificazione')) { correntePianificazione = parseFloat(values.get('SpeseCorrente_Pianificazione')); }
if (!isEmpty('SpeseCorrente_AnalisiMercato')) { correnteAnalisiMercato = parseFloat(values.get('SpeseCorrente_AnalisiMercato')); }
if (!isEmpty('SpeseCorrente_Personale')) { correntePersonale = parseFloat(values.get('SpeseCorrente_Personale')); }
var totCapitale = capitaleAllestimenti + capitaleImmobili + capitaleHardware + capitaleSoftware + capitaleConnettivita + capitaleOpereMurarie + capitaleRinnovamento + capitaleInteventiInnovativi + capitaleImpianti;
var totCorrente = correnteProgettazione + correnteComunicazione + correnteAttivitaFormativa + correnteConsulenza + correnteProgettazioneDigitale + correntePianificazione + correnteAnalisiMercato + correntePersonale;
var totSpese = totCapitale + totCorrente;
var percCorrenti = 0;
var totAmmissibile = 0;
var concedibile = 0;
if (totSpese > 0) {
  percCorrenti = 100 * (totCorrente / totSpese);
  if (percCorrenti <= 30) {
    totAmmissibile = totSpese;
  } else {
    totAmmissibile = 100 * (totCapitale / 70);
  }
  if (percCorrenti <= 30) {
    concedibile = totAmmissibile * 0.7;
  } else {
    concedibile = totCapitale;
  }
}
if (concedibile > 20000) {
  concedibile = 20000;
}
values.put('Totale_SpeseCapitale',''+totCapitale.toFixed(2));
values.put('Totale_SpeseCorrente',''+totCorrente.toFixed(2));
values.put('Totale_CostoProgetto',''+totSpese.toFixed(2));
values.put('SpeseCorrenti_Percentuale',''+percCorrenti.toFixed(2));
values.put('Totale_CostoProgettoAmmissibile',''+totAmmissibile.toFixed(2));
values.put('Contributo_Concedibile',''+concedibile.toFixed(2));


//onChange
//tutte le voci di spesa
var capitaleAllestimenti = 0;
var capitaleImmobili = 0;
var capitaleHardware = 0;
var capitaleSoftware = 0;
var capitaleConnettivita = 0;
var capitaleOpereMurarie = 0;
var capitaleRinnovamento = 0;
var capitaleInteventiInnovativi = 0;
var capitaleImpianti = 0;
var correnteProgettazione = 0;
var correnteComunicazione = 0;
var correnteAttivitaFormativa = 0;
var correnteConsulenza = 0;
var correnteProgettazioneDigitale = 0;
var correntePianificazione = 0;
var correnteAnalisiMercato = 0;
var correntePersonale = 0;
if (!isEmpty('SpeseCapitale_Allestimenti')) { capitaleAllestimenti = parseFloat(values.get('SpeseCapitale_Allestimenti')); }
if (!isEmpty('SpeseCapitale_Immobili')) { capitaleImmobili = parseFloat(values.get('SpeseCapitale_Immobili')); }
if (!isEmpty('SpeseCapitale_Hardware')) { capitaleHardware = parseFloat(values.get('SpeseCapitale_Hardware')); }
if (!isEmpty('SpeseCapitale_Software')) { capitaleSoftware = parseFloat(values.get('SpeseCapitale_Software')); }
if (!isEmpty('SpeseCapitale_Connettivita')) { capitaleConnettivita = parseFloat(values.get('SpeseCapitale_Connettivita')); }
if (!isEmpty('SpeseCapitale_OpereMurarie')) {  capitaleOpereMurarie = parseFloat(values.get('SpeseCapitale_OpereMurarie')); }
if (!isEmpty('SpeseCapitale_Rinnovamento')) { capitaleRinnovamento = parseFloat(values.get('SpeseCapitale_Rinnovamento')); }
if (!isEmpty('SpeseCapitale_InteventiInnovativi')) { capitaleInteventiInnovativi = parseFloat(values.get('SpeseCapitale_InteventiInnovativi')); }
if (!isEmpty('SpeseCapitale_Impianti')) { capitaleImpianti = parseFloat(values.get('SpeseCapitale_Impianti')); }
if (!isEmpty('SpeseCorrente_Progettazione')) { correnteProgettazione = parseFloat(values.get('SpeseCorrente_Progettazione')); }
if (!isEmpty('SpeseCorrente_Comunicazione')) { correnteComunicazione = parseFloat(values.get('SpeseCorrente_Comunicazione')); }
if (!isEmpty('SpeseCorrente_AttivitaFormativa')) { correnteAttivitaFormativa = parseFloat(values.get('SpeseCorrente_AttivitaFormativa')); }
if (!isEmpty('SpeseCorrente_Consulenza')) { correnteConsulenza = parseFloat(values.get('SpeseCorrente_Consulenza')); }
if (!isEmpty('SpeseCorrente_ProgettazioneDigitale')) { correnteProgettazioneDigitale = parseFloat(values.get('SpeseCorrente_ProgettazioneDigitale')); }
if (!isEmpty('SpeseCorrente_Pianificazione')) { correntePianificazione = parseFloat(values.get('SpeseCorrente_Pianificazione')); }
if (!isEmpty('SpeseCorrente_AnalisiMercato')) { correnteAnalisiMercato = parseFloat(values.get('SpeseCorrente_AnalisiMercato')); }
if (!isEmpty('SpeseCorrente_Personale')) { correntePersonale = parseFloat(values.get('SpeseCorrente_Personale')); }
var totCapitale = capitaleAllestimenti + capitaleImmobili + capitaleHardware + capitaleSoftware + capitaleConnettivita + capitaleOpereMurarie + capitaleRinnovamento + capitaleInteventiInnovativi + capitaleImpianti;
var totCorrente = correnteProgettazione + correnteComunicazione + correnteAttivitaFormativa + correnteConsulenza + correnteProgettazioneDigitale + correntePianificazione + correnteAnalisiMercato + correntePersonale;
var totSpese = totCapitale + totCorrente;
var percCorrenti = 0;
var totAmmissibile = 0;
var concedibile = 0;
if (totSpese > 0) {
  percCorrenti = 100 * (totCorrente / totSpese);
  if (percCorrenti <= 30) {
    totAmmissibile = totSpese;
  } else {
    totAmmissibile = 100 * (totCapitale / 70);
  }
  if (percCorrenti <= 30) {
    concedibile = totAmmissibile * 0.7;
  } else {
    concedibile = totCapitale;
  }
}
if (concedibile > 20000) {
  concedibile = 20000;
}
values.put('Totale_SpeseCapitale',''+totCapitale.toFixed(2));
values.put('Totale_SpeseCorrente',''+totCorrente.toFixed(2));
values.put('Totale_CostoProgetto',''+totSpese.toFixed(2));
values.put('SpeseCorrenti_Percentuale',''+percCorrenti.toFixed(2));
values.put('Totale_CostoProgettoAmmissibile',''+totAmmissibile.toFixed(2));
values.put('Contributo_Concedibile',''+concedibile.toFixed(2));


//Validazione
  //Totale_CostoProgetto
if (!isEmpty('Totale_CostoProgetto')) {
  if (parseFloat(values.get('Totale_CostoProgetto')) < 8000) {
    errors.put('Totale_CostoProgetto','Totale_CostoProgetto_val');
  }
}
  //SpeseCapitale_Immobili
if (!isEmpty('SpeseCapitale_Immobili')) {
  if (parseFloat(values.get('SpeseCapitale_Immobili')) > 10000) {
    errors.put('SpeseCapitale_Immobili','SpeseCapitale_Immobili_val');
  }
}
  //spese non negative
if (!isEmpty('SpeseCapitale_Allestimenti')) {
  if (parseFloat(values.get('SpeseCapitale_Allestimenti')) < 0) {
    errors.put('SpeseCapitale_Allestimenti','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_Immobili')) {
  if (parseFloat(values.get('SpeseCapitale_Immobili')) < 0) {
    errors.put('SpeseCapitale_Immobili','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_Hardware')) {
  if (parseFloat(values.get('SpeseCapitale_Hardware')) < 0) {
    errors.put('SpeseCapitale_Hardware','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_Software')) {
  if (parseFloat(values.get('SpeseCapitale_Software')) < 0) {
    errors.put('SpeseCapitale_Software','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_Connettivita')) {
  if (parseFloat(values.get('SpeseCapitale_Connettivita')) < 0) {
    errors.put('SpeseCapitale_Connettivita','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_OpereMurarie')) {
  if (parseFloat(values.get('SpeseCapitale_OpereMurarie')) < 0) {
    errors.put('SpeseCapitale_OpereMurarie','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_Rinnovamento')) {
  if (parseFloat(values.get('SpeseCapitale_Rinnovamento')) < 0) {
    errors.put('SpeseCapitale_Rinnovamento','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_InteventiInnovativi')) {
  if (parseFloat(values.get('SpeseCapitale_InteventiInnovativi')) < 0) {
    errors.put('SpeseCapitale_InteventiInnovativi','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCapitale_Impianti')) {
  if (parseFloat(values.get('SpeseCapitale_Impianti')) < 0) {
    errors.put('SpeseCapitale_Impianti','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_Progettazione')) {
  if (parseFloat(values.get('SpeseCorrente_Progettazione')) < 0) {
    errors.put('SpeseCorrente_Progettazione','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_Comunicazione')) {
  if (parseFloat(values.get('SpeseCorrente_Comunicazione')) < 0) {
    errors.put('SpeseCorrente_Comunicazione','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_AttivitaFormativa')) {
  if (parseFloat(values.get('SpeseCorrente_AttivitaFormativa')) < 0) {
    errors.put('SpeseCorrente_AttivitaFormativa','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_Consulenza')) {
  if (parseFloat(values.get('SpeseCorrente_Consulenza')) < 0) {
    errors.put('SpeseCorrente_Consulenza','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_ProgettazioneDigitale')) {
  if (parseFloat(values.get('SpeseCorrente_ProgettazioneDigitale')) < 0) {
    errors.put('SpeseCorrente_ProgettazioneDigitale','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_Pianificazione')) {
  if (parseFloat(values.get('SpeseCorrente_Pianificazione')) < 0) {
    errors.put('SpeseCorrente_Pianificazione','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_AnalisiMercato')) {
  if (parseFloat(values.get('SpeseCorrente_AnalisiMercato')) < 0) {
    errors.put('SpeseCorrente_AnalisiMercato','SpeseNonNegative_val');
  }
}
if (!isEmpty('SpeseCorrente_Personale')) {
  if (parseFloat(values.get('SpeseCorrente_Personale')) < 0) {
    errors.put('SpeseCorrente_Personale','SpeseNonNegative_val');
  }
}
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
  errors.put('Contributo_Concedibile', 'PraticaDuplicata_val');
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
  errors.put('Contributo_Concedibile','DisponibilitaEsaurita_val');
}

//operations
//setDatiBozzaEliminata
values.put('statoPratica','Bozza eliminata');
