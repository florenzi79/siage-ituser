//onLoad
//Progetto_AmbitoIntervento
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
items.get('Progetto_DettaglioAmbitoUno').setHidden(!isAmbitoUno);
items.get('Progetto_DettaglioAmbitoDue').setHidden(!isAmbitoDue);
items.get('Progetto_DettaglioAmbitoTre').setHidden(!isAmbitoTre);
items.get('Progetto_DettaglioAmbitoUno').setRequired(isAmbitoUno);
items.get('Progetto_DettaglioAmbitoDue').setRequired(isAmbitoDue);
items.get('Progetto_DettaglioAmbitoTre').setRequired(isAmbitoTre);


//onChange
//Progetto_AmbitoIntervento
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
if (!isAmbitoUno) {
  //var indexuno = 0;
  //while (values.get('Progetto_DettaglioAmbitoUno['+indexuno+']') !== null) {
  //  values.remove('Progetto_DettaglioAmbitoUno['+indexuno+']');
  //  indexuno++;
  //}
  clearModule('Progetto_DettaglioAmbitoUno');
  values.remove('SpeseCapitale_Immobili');
  values.remove('SpeseCapitale_Connettivita');
  values.remove('SpeseCapitale_OpereMurarie');
  values.remove('SpeseCapitale_InteventiInnovativi');
  values.remove('SpeseCapitale_Impianti');
  values.remove('SpeseCorrente_Progettazione');
}
if (!isAmbitoDue) {
  //var indexdue = 0;
  //while (values.get('Progetto_DettaglioAmbitoDue['+indexdue+']') !== null) {
  //  values.remove('Progetto_DettaglioAmbitoDue['+indexdue+']');
  //  indexdue++;
  //}
  clearModule('Progetto_DettaglioAmbitoDue');
}
if (!isAmbitoTre) {
  //var indextre = 0;
  //while (values.get('Progetto_DettaglioAmbitoTre['+indextre+']') !== null) {
  //  values.remove('Progetto_DettaglioAmbitoTre['+indextre+']');
  //  indextre++;
  //}
  clearModule('Progetto_DettaglioAmbitoTre');
}
if (!isAmbitoDue && !isAmbitoTre) {
  values.remove('SpeseCorrente_AttivitaFormativa');
}
items.get('Progetto_DettaglioAmbitoUno').setHidden(!isAmbitoUno);
items.get('Progetto_DettaglioAmbitoDue').setHidden(!isAmbitoDue);
items.get('Progetto_DettaglioAmbitoTre').setHidden(!isAmbitoTre);
items.get('Progetto_DettaglioAmbitoUno').setRequired(isAmbitoUno);
items.get('Progetto_DettaglioAmbitoDue').setRequired(isAmbitoDue);
items.get('Progetto_DettaglioAmbitoTre').setRequired(isAmbitoTre);


//Validazione
  //Progetto_DettaglioAmbitoTre
if ((values.get('Progetto_AmbitoIntervento[0]') == 'Ambito3') && isEmpty('Progetto_AmbitoIntervento[1]')) {
  errors.put('Progetto_AmbitoIntervento[0]','Ambito3_val');
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
  errors.put('Progetto_AmbitoIntervento[0]', 'PraticaDuplicata_val');
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
  errors.put('Progetto_AmbitoIntervento[0]','DisponibilitaEsaurita_val');
}

//operations
//setDatiBozzaEliminata
values.put('statoPratica','Bozza eliminata');
