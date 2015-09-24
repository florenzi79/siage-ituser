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
"  PRATICA.SM_TMPL_DN = 'Contibuti ASD Linea 1 e Linea 2' and"+
"  PRATICA.CURRENT_STATE in ('63549fd5d8c64e519a29e8788755fc0a', '5a8a62f27a704dc2a3afa45a164ff7c1')"
//							  						Attesa protocollazione			  			Presentata
;
var pratiche = dizionarioService.getList(null, sql);
if(pratiche.size() > 0) {
	errors.put('Avviso_NonModificabile', 'PraticaDuplicata_val');
}

var compensi = 0;
var affitto = 0;
var abbigliamento = 0;
var affiliazione = 0;
var noleggio = 0;
var iscrizioneCampionati = 0;
var iscrizioneManifestazioni = 0;
var polizze = 0;
var defibrillatori = 0;
var generali = 0;
if (!isEmpty('Spese_Compensi')) {
  compensi = parseFloat(values.get('Spese_Compensi'));
}
if (!isEmpty('Spese_Affitto')) {
  affitto = parseFloat(values.get('Spese_Affitto'));
}
if (!isEmpty('Spese_Abbigliamento')) {
  abbigliamento = parseFloat(values.get('Spese_Abbigliamento'));
}
if (!isEmpty('Spese_Affiliazione')) {
  affiliazione = parseFloat(values.get('Spese_Affiliazione'));
}
if (!isEmpty('Spese_Noleggio')) {
  noleggio = parseFloat(values.get('Spese_Noleggio'));
}
if (!isEmpty('Spese_IscrizioneCampionati')) {
  iscrizioneCampionati = parseFloat(values.get('Spese_IscrizioneCampionati'));
}
if (!isEmpty('Spese_IscrizioneManifestazioni')) {
  iscrizioneManifestazioni = parseFloat(values.get('Spese_IscrizioneManifestazioni'));
}
if (!isEmpty('Spese_Polizze')) {
  polizze = parseFloat(values.get('Spese_Polizze'));
}
if (!isEmpty('Spese_Defibrillatori')) {
  defibrillatori = parseFloat(values.get('Spese_Defibrillatori'));
}
if (!isEmpty('Spese_Generali')) {
  generali = parseFloat(values.get('Spese_Generali'));
}
var indexGiustificativi = 0;
var compensiPresente = false;
var affittoPresente = false;
var abbigliamentoPresente = false;
var affiliazionePresente = false;
var noleggioPresente = false;
var iscrizioneCampionatiPresente = false;
var iscrizioneManifestazioniPresente = false;
var polizzePresente = false;
var defibrillatoriPresente = false;
var generaliPresente = false;
while (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') !== null) {
  if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Compensi') {
    compensiPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Affitto strutture') {
    affittoPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Abbigliamento') {
    abbigliamentoPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Affiliazione e tesseramento') {
    affiliazionePresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Noleggio') {
    noleggioPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Iscrizione Campionati') {
    iscrizioneCampionatiPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Iscrizione Manifestazioni') {
    iscrizioneManifestazioniPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Polizze') {
    polizzePresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Defibrillatori') {
    defibrillatoriPresente = true;
  } else if (values.get('DocumentiSpesa['+indexGiustificativi+'].Allegato_tipo') == 'Spese generali') {
    generaliPresente = true;
  }
  indexGiustificativi++;
}
if ((compensi > 0) && !compensiPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiCompensi_val');
}
if ((affitto > 0) && !affittoPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiAffitto_val');
}
if ((abbigliamento > 0) && !abbigliamentoPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiAbbigliamento_val');
}
if ((affiliazionePresente > 0) && !affiliazionePresentePresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiAffiliazione_val');
}
if ((noleggio > 0) && !noleggioPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiNoleggio_val');
}
if ((iscrizioneCampionati > 0) && !iscrizioneCampionatiPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiIscrizioneCampionati_val');
}
if ((iscrizioneManifestazioni > 0) && !iscrizioneManifestazioniPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiIscrizioneManifestazioni_val');
}
if ((polizze > 0) && !polizzePresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiPolizze_val');
}
if ((defibrillatori > 0) && !defibrillatoriPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiDefibrillatori_val');
}
if ((generali > 0) && !generaliPresente) {
  errors.put('Avviso_CaricamentoGiustificativi','GiustificativiGenerali_val');
}
