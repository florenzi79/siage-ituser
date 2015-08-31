// onLoad
// Avviso_NonModificabile
var isAttivitaEconomica = (values.get('Dichiarazioni_AttivitaEconomica') == 'true');
items.get('Adesione_File_DeMinimisFirmato').setHidden(!isAttivitaEconomica);
items.get('Adesione_File_DeMinimisFirmato').setRequired(isAttivitaEconomica);
var isFirmatarioRappresentante = (values.get('Firmatario_CoincideLegaleRappresentante') == 'true');
items.get('Adesione_File_AttoDelega').setHidden(isFirmatarioRappresentante);
items.get('Adesione_File_AttoDelega').setRequired(!isFirmatarioRappresentante);
//Adesione_File_DeMinimisModello
values.put('Adesione_File_DeMinimisModello', getContextPath()+'/file/4457c05e76f744fa8a68c7eb7004446b');
//Adesione_File_DeMinimisControllateModello
values.put('Adesione_File_DeMinimisControllateModello', getContextPath()+'/file/99d3a6c6c1cf4623a7113531b06cd98a');
//Adesione_File_DistintaPagamentiModello
values.put('Adesione_File_DistintaPagamentiModello', getContextPath()+'/file/a2d380d213124fa980155cc1b88d6add');
//Adesione_File_RendicontazioneSpeseModello
values.put('Adesione_File_RendicontazioneSpeseModello', getContextPath()+'/file/f15bd46e40d440f0b6c5bade629997f1');
//Adesione_File_RicevutaCompensoModello
values.put('Adesione_File_RicevutaCompensoModello', getContextPath()+'/file/dc081eaac1504c28b3e1eb8639c3807b');
// DocumentiSpesa.Allegato_tipo
if (iamIn('DocumentiSpesa')) {
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
  items.get('DocumentiSpesa.Allegato_tipo').clearOptions();
  if (compensi > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Compensi','a) Compensi e/o rimborsi forfettari per allenatori, istruttori, formatori, tecnici, arbitri, giudici di gara, massaggiatori, medici sportivi e altro personale. In questa tipologia di spesa non rientrano i rapporti di lavoro dipendente a tempo determinato o indeterminato');
  }
  if (affitto > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Affitto strutture','b) Affitto di strutture e/o impianti sportivi (es. palestre, campi) utilizzati per la propria attività ordinaria');
  }
  if (abbigliamento > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Abbigliamento','c) Acquisto di abbigliamento sportivo (ad esempio tute e borse)');
  }
  if (affiliazione > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Affiliazione e tesseramento','d) Affiliazione societaria e tesseramento singolo e di categoria di atleti ed altro personale di staff (dirigenti, tecnici, giudici) a Federazioni Sportive Nazionali, Discipline Sportive Associate, Enti di Promozione Sportiva per la stagione sportiva corrente alla data di partecipazione al bando (stagione sportiva 2014- 2015, o anno solare 2015, e/o stagione sportiva 2015-2016)');
  }
  if (noleggio > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Noleggio','e) Noleggio di veicoli, spese di viaggio e trasporto, ospitalità, documentate e sostenute esclusivamente per le trasferte delle proprie squadre e/o atleti individuali – compreso relativo staff – per le competizioni cui l’associazione o società sportiva o Comitato/Delegazione regionale partecipa o ha partecipato nel periodo compreso tra l’11/10/2014 e il 31/8/2015');
  }
  if (iscrizioneCampionati > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Iscrizione Campionati','f) Iscrizione a campionati per la stagione sportiva 2014/2015, o anno solare 2015, e/o per la stagione sportiva 2015/2016');
  }
  if (iscrizioneManifestazioni > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Iscrizione Manifestazioni','g) Iscrizione a manifestazioni e/o competizioni sportive dei propri tesserati cui la associazione o società sportiva o Comitato/Delegazione regionale partecipa o ha partecipato nel periodo compreso tra l’11/10/2014 e il 31/8/2015');
  }
  if (polizze > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Polizze','h) Polizze infortuni e assicurazioni verso terzi stipulate a copertura delle attività sportive');
  }
  if (defibrillatori > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Defibrillatori','i) Acquisto e noleggio di defibrillatori e spese per assistenza sanitaria (servizi di ambulanza, materiale di pronto soccorso, personale sanitario e parasanitario)');
  }
  if (generali > 0) {
    items.get('DocumentiSpesa.Allegato_tipo').addOption('Spese generali','j) Spese generali, in particolare: utenze (luce, acqua, telefono), materiali di cancelleria, materiali di consumo, spese di pulizia, spese postali, fino alla concorrenza massima del 5% del totale di tutte le altre voci di spesa ammissibili (solo per le Associazioni o Società sportive dilettantistiche o Comitati/Delegazioni regionali che gestiscono direttamente gli impianti sportivi)');
  }
} else {
  items.get('DocumentiSpesa.Allegato_tipo').clearOptions();
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Compensi','a) Compensi e/o rimborsi forfettari per allenatori, istruttori, formatori, tecnici, arbitri, giudici di gara, massaggiatori, medici sportivi e altro personale. In questa tipologia di spesa non rientrano i rapporti di lavoro dipendente a tempo determinato o indeterminato');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Affitto strutture','b) Affitto di strutture e/o impianti sportivi (es. palestre, campi) utilizzati per la propria attività ordinaria');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Abbigliamento','c) Acquisto di abbigliamento sportivo (ad esempio tute e borse)');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Affiliazione e tesseramento','d) Affiliazione societaria e tesseramento singolo e di categoria di atleti ed altro personale di staff (dirigenti, tecnici, giudici) a Federazioni Sportive Nazionali, Discipline Sportive Associate, Enti di Promozione Sportiva per la stagione sportiva corrente alla data di partecipazione al bando (stagione sportiva 2014- 2015, o anno solare 2015, e/o stagione sportiva 2015-2016)');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Noleggio','e) Noleggio di veicoli, spese di viaggio e trasporto, ospitalità, documentate e sostenute esclusivamente per le trasferte delle proprie squadre e/o atleti individuali – compreso relativo staff – per le competizioni cui l’associazione o società sportiva o Comitato/Delegazione regionale partecipa o ha partecipato nel periodo compreso tra l’11/10/2014 e il 31/8/2015');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Iscrizione Campionati','f) Iscrizione a campionati per la stagione sportiva 2014/2015, o anno solare 2015, e/o per la stagione sportiva 2015/2016');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Iscrizione Manifestazioni','g) Iscrizione a manifestazioni e/o competizioni sportive dei propri tesserati cui la associazione o società sportiva o Comitato/Delegazione regionale partecipa o ha partecipato nel periodo compreso tra l’11/10/2014 e il 31/8/2015');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Polizze','h) Polizze infortuni e assicurazioni verso terzi stipulate a copertura delle attività sportive');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Defibrillatori','i) Acquisto e noleggio di defibrillatori e spese per assistenza sanitaria (servizi di ambulanza, materiale di pronto soccorso, personale sanitario e parasanitario)');
  items.get('DocumentiSpesa.Allegato_tipo').addOption('Spese generali','j) Spese generali, in particolare: utenze (luce, acqua, telefono), materiali di cancelleria, materiali di consumo, spese di pulizia, spese postali, fino alla concorrenza massima del 5% del totale di tutte le altre voci di spesa ammissibili (solo per le Associazioni o Società sportive dilettantistiche o Comitati/Delegazioni regionali che gestiscono direttamente gli impianti sportivi)');
}

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
