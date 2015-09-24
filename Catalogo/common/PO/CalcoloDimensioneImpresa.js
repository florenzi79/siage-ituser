//Fieldset Dati per il calcolo della dimensione di impresa
  //tooltip Il periodo di riferimento è l’ultimo esercizio contabile chiuso ed approvato precedentemente la data di sottoscrizione della domanda di agevolazione; per le imprese esonerate dalla tenuta della contabilità ordinaria e/o dalla redazione del bilancio le predette informazioni sono desunte, per quanto riguarda il fatturato dall’ultima dichiarazione dei redditi presentata e, per quanto riguarda l’attivo patrimoniale, sulla base del prospetto delle attività e delle passività redatto con i criteri di cui al DPR n.689/74 ed in conformità agli art.2423 e seguenti del codice civile; per le imprese per le quali alla data di sottoscrizione della domanda di agevolazioni non è stato approvato il primo bilancio ovvero, nel caso di imprese esonerate dalla tenuta della contabilità ordinaria e/o dalla redazione del bilancio, non è stata presentata la prima dichiarazione dei redditi, sono considerati esclusivamente il numero degli occupati ed il totale di bilancio risultanti alla stessa data.
  //validation
if (!isEmpty('Azienda_periodoRiferimentoDimensioneImpresa')) {
  var valore = values.get('Azienda_periodoRiferimentoDimensioneImpresa');
  if (!isInteger(valore)) {
    errors.put('Azienda_periodoRiferimentoDimensioneImpresa', 'Azienda_periodoRiferimentoNonIntero_val');
  } else if ( !(1900 <= parseInt(valore,10) && parseInt(valore,10) <= 2100) ) {
    errors.put('Azienda_periodoRiferimentoDimensioneImpresa', 'Azienda_periodoRiferimentoFuoriRange_val');
  }
}
// Il valore dell'esercizio di riferimento per il calcolo della dimensione d'impresa non è valido
// Il formato dell'esercizio di riferimento per il calcolo della dimensione d'impresa non è valido
  //Item Azienda_pmi required radio(sì/no) labelIT L'impresa dichiara di essere una micro, piccola, media impresa
  //Item Azienda_periodoRiferimentoDimensioneImpresa required testo labelIT Periodo di riferimento per il calcolo della dimensione d'impresa
    //onload
    if (isEmpty('Azienda_periodoRiferimentoDimensioneImpresa')) {
      var today = new Date();
      var ultimoAnno = parseInt(today.getFullYear(),10)-1;
      values.put('Azienda_periodoRiferimentoDimensioneImpresa', ''+ultimoAnno);
    }
  //Item AziendaValoriEconomici_totaleBilancio required valuta labelIT Totale di bilancio
  //Item AziendaValoriEconomici_totaleFatturato required valuta labelIT Totale fatturato
  //Item Azienda_Personale_totaleULA required decimale labelIT ULA (Unità Lavorative Annue) totali
  //Item ImpreseAssociateCollegate_presenza required radio(Autonoma/Collegata_ad_altre_imprese/Associata_ad_altre_imprese/Collegata_e_associata_ad_altre_imprese) labelIT L'azienda è autonoma o associata e/o collegata ad altre imprese?
    //onload
    var presenzaAssociate = (values.get('ImpreseAssociateCollegate_presenza') == 'Associata_ad_altre_imprese') || (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_e_associata_ad_altre_imprese');
    var presenzaCollegate = (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_ad_altre_imprese') || (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_e_associata_ad_altre_imprese');
    modules.get('AziendaAssociate').setHidden(!presenzaAssociate);
    modules.get('AziendaCollegate').setHidden(!presenzaCollegate);
    modules.get('AziendaAssociate').setRequired(presenzaAssociate);
    modules.get('AziendaCollegate').setRequired(presenzaCollegate);
    //onChange
    var presenzaAssociate = (values.get('ImpreseAssociateCollegate_presenza') == 'Associata_ad_altre_imprese') || (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_e_associata_ad_altre_imprese');
    var presenzaCollegate = (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_ad_altre_imprese') || (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_e_associata_ad_altre_imprese');
    if (!presenzaAssociate){
      clearModule('AziendaAssociate');
    }
    if (!presenzaCollegate){
      clearModule('AziendaCollegate');
    }
    items.get('AziendaAssociate.societa').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.indirizzoSedeLegale').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.iscrizioneRegistroImprese').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.ulaUltimoAnno').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.fatturatoUltimoAnno').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.totaleBilancioUltimoAnno').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.percentualePartecipazioneRichiedente').setRequired(presenzaAssociate);
    items.get('AziendaAssociate.percentualePartecipazioneAssociata').setRequired(presenzaAssociate);
    items.get('AziendaCollegate.societa').setRequired(presenzaCollegate);
    items.get('AziendaCollegate.indirizzoSedeLegale').setRequired(presenzaCollegate);
    items.get('AziendaCollegate.iscrizioneRegistroImprese').setRequired(presenzaCollegate);
    items.get('AziendaCollegate.ulaUltimoAnno').setRequired(presenzaCollegate);
    items.get('AziendaCollegate.fatturatoUltimoAnno').setRequired(presenzaCollegate);
    items.get('AziendaCollegate.totaleBilancioUltimoAnno').setRequired(presenzaCollegate);
    modules.get('AziendaAssociate').setHidden(!presenzaAssociate);
    modules.get('AziendaCollegate').setHidden(!presenzaCollegate);
    modules.get('AziendaAssociate').setRequired(presenzaAssociate);
    modules.get('AziendaCollegate').setRequired(presenzaCollegate);
//module AziendaAssociate dinamico compilabile multiplo labelIT Imprese associate summary societa/ulaUltimoAnnoTotale/fatturatoUltimoAnnoTotale/totaleBilancioUltimoAnnoTotale/maxPercentualePartecipazione
  //validazione
{
  var presenzaAssociate = (values.get('ImpreseAssociateCollegate_presenza') == 'Associata_ad_altre_imprese') || (values.get('ImpreseAssociateCollegate_presenza') == 'Collegata_e_associata_ad_altre_imprese');
  if (presenzaAssociate) {
    var indexAssociate = 0;
    while (values.get('AziendaAssociate['+indexAssociate+'].societa') !== null) {
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneRichiedente')) {
        var valore = values.get('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneRichiedente');
        if ( !(0 <= parseFloat(valore) && parseFloat(valore) <= 100) ) {
          errors.put('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneRichiedente', 'AziendaAssociate_percentualePartecipazioneRichiedente_val');
        }
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneAssociata')) {
        var valore = values.get('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneAssociata');
        if ( !(0 <= parseFloat(valore) && parseFloat(valore) <= 100) ) {
          errors.put('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneAssociata', 'AziendaAssociate_percentualePartecipazioneAssociata_val');
        }
      }
      indexAssociate++;
    }
  }
}
  //section Imprese associate
    //fieldset Imprese associate nell'esercizio di riferimento tooltip Si richiede di compilare una scheda per ogni impresa associata all’impresa richiedente e per le imprese associate alle eventuali imprese collegate, i cui dati non sono ancora ripresi nei conti consolidati
      //Item AziendaAssociate.anno readonly testo labelIT Esercizio di riferimento
        //onLoad
        if (iamIn('AziendaAssociate')) {
          values.put(path+'anno', values.get('Azienda_periodoRiferimentoDimensioneImpresa'));
        }
      //Item AziendaAssociate.societa required testo labelIT Ragione sociale dell'impresa associata
      //Item AziendaAssociate.indirizzoSedeLegale required testo labelIT Indirizzo della sede legale
      //Item AziendaAssociate.provinciaSedeLegale required menu labelIT Provincia della sede legale (EE per stato estero)
        //onLoad
        setSelectOptionsCached('AziendaAssociate.provinciaSedeLegale', 'provincia_istat');
        if (iamIn('AziendaAssociate')) {
          setSelectDependedOptionsAndShowCached('AziendaAssociate.comuneSedeLegale', 'comune_istat', path+'provinciaSedeLegale');
        } else {
          setDependedOptionsAndShowFromParent('AziendaAssociate.comuneSedeLegale', 'comune_istat', 'AziendaAssociate.provinciaSedeLegale');
        }
        //onChange
        values.put(path+'provinciaSedeLegaleDn', getOptionLabel('AziendaAssociate.provinciaSedeLegale', values.get(path+'provinciaSedeLegale')));
        setSelectDependedOptionsAndShowCached('AziendaAssociate.comuneSedeLegale', 'comune_istat', path+'provinciaSedeLegale');
      //Item AziendaAssociate.provinciaSedeLegaleDn hidden testo
      //Item AziendaAssociate.comuneSedeLegale required menu labelIT Comune/stato estero della sede legale
        //onChange
        values.put(path+'comuneSedeLegaleDn', getOptionLabel('AziendaAssociate.comuneSedeLegale', values.get(path+'comuneSedeLegale')));
      //Item AziendaAssociate.comuneSedeLegaleDn hidden testo
      //Item AziendaAssociate.iscrizioneRegistroImprese required testo labelIT Numero di iscrizione al registro delle imprese
      //Item AziendaAssociate.ulaUltimoAnno required decimale labelIT U.L.A. (Unità Lavorative Annue) dell'esercizio di riferimento
      //Item AziendaAssociate.fatturatoUltimoAnno required valuta labelIT Fatturato dell'esercizio di riferimento
      //Item AziendaAssociate.totaleBilancioUltimoAnno required valuta labelIT Totale di bilancio dell'esercizio di riferimento
      //Item AziendaAssociate.ulaUltimoAnnoCollegateAssociata required decimale labelIT U.L.A. (Unità Lavorative Annue) dell'esercizio di riferimento di eventuali imprese collegate all’impresa associata
      //Item AziendaAssociate.fatturatoUltimoAnnoCollegateAssociata required valuta labelIT Fatturato dell’esercizio di riferimento di eventuali imprese collegate all’impresa associata
      //Item AziendaAssociate.totaleBilancioUltimoAnnoCollegateAssociata required valuta labelIT Totale di bilancio dell’esercizio di riferimento di eventuali imprese collegate all’impresa associata
      //Item AziendaAssociate.ulaUltimoAnnoTotale hidden readonly decimale labelIT U.L.A. dell’esercizio di riferimento totali
      //Item AziendaAssociate.fatturatoUltimoAnnoTotale hidden readonly valuta labelIT Fatturato dell’esercizio di riferimento totale
      //Item AziendaAssociate.totaleBilancioUltimoAnnoTotale hidden readonly valuta labelIT Totale di bilancio dell’esercizio di riferimento totale
      //Item AziendaAssociate.percentualePartecipazioneRichiedente required decimale labelIT % dell’azienda associata detenuta dall’azienda richiedente tooltip Indicare la percentuale di partecipazione detenuta dall’impresa richiedente (o dall’impresa collegata attraverso la quale esiste la relazione con l’impresa associata) nell’impresa associata oggetto della presente scheda
      //Item AziendaAssociate.percentualePartecipazioneAssociata required decimale labelIT % dell’azienda richiedente detenuta dall’azienda associata tooltip Indicare la percentuale di partecipazione detenuta dall’impresa associata oggetto della presente scheda nell’impresa richiedente (o nell’impresa collegata)
      //Item AziendaAssociate.maxPercentualePartecipazione hidden readonly decimale labelIT % di partecipazione più elevata
//module AziendaCollegate dinamico compilabile multiplo labelIT Imprese collegate summary societa/ulaUltimoAnno/fatturatoUltimoAnno/totaleBilancioUltimoAnno
  //section Imprese collegate
    //fieldset Imprese collegate nell'esercizio di riferimento tooltip Si richiede di compilare una scheda per ogni impresa associata all’impresa richiedente e per le imprese associate alle eventuali imprese collegate, i cui dati non sono ancora ripresi nei conti consolidati
      //Item AziendaCollegate.anno readonly testo labelIT Esercizio di riferimento
        //onLoad
        if (iamIn('AziendaCollegate')) {
          values.put(path+'anno', values.get('Azienda_periodoRiferimentoDimensioneImpresa'));
        }
      //Item AziendaCollegate.societa required testo labelIT Ragione sociale dell'impresa associata
      //Item AziendaCollegate.indirizzoSedeLegale required testo labelIT Indirizzo della sede legale
      //Item AziendaCollegate.provinciaSedeLegale required menu labelIT Provincia della sede legale (EE per stato estero)
        //onLoad
        setSelectOptionsCached('AziendaCollegate.provinciaSedeLegale', 'provincia_istat');
        if (iamIn('AziendaCollegate')) {
          setSelectDependedOptionsAndShowCached('AziendaCollegate.comuneSedeLegale', 'comune_istat', path+'provinciaSedeLegale');
        } else {
          setDependedOptionsAndShowFromParent('AziendaCollegate.comuneSedeLegale', 'comune_istat', 'AziendaCollegate.provinciaSedeLegale');
        }
        //onChange
        values.put(path+'provinciaSedeLegaleDn', getOptionLabel('AziendaCollegate.provinciaSedeLegale', values.get(path+'provinciaSedeLegale')));
        setSelectDependedOptionsAndShowCached('AziendaCollegate.comuneSedeLegale', 'comune_istat', path+'provinciaSedeLegale');
      //Item AziendaCollegate.provinciaSedeLegaleDn hidden testo
      //Item AziendaCollegate.comuneSedeLegale required menu labelIT Comune/stato estero della sede legale
        //onChange
        values.put(path+'comuneSedeLegaleDn', getOptionLabel('AziendaCollegate.comuneSedeLegale', values.get(path+'comuneSedeLegale')));
      //Item AziendaCollegate.comuneSedeLegaleDn hidden testo
      //Item AziendaCollegate.iscrizioneRegistroImprese required testo labelIT Numero di iscrizione al registro delle imprese
      //Item AziendaCollegate.ulaUltimoAnno required decimale labelIT U.L.A. (Unità Lavorative Annue) dell'esercizio di riferimento
      //Item AziendaCollegate.fatturatoUltimoAnno required valuta labelIT Fatturato dell'esercizio di riferimento
      //Item AziendaCollegate.totaleBilancioUltimoAnno required valuta labelIT Totale di bilancio dell'esercizio di riferimento
//fieldset Dichiarazione della dimensione d'impresa
  //Item Azienda_CalcoloDimensione_esercizio readonly testo labelIT Esercizio di riferimento per il calcolo della dimensione d’impresa
    //onload
    values.put('Azienda_CalcoloDimensione_esercizio', values.get('Azienda_periodoRiferimentoDimensioneImpresa'));
  //Item Totale_ULA_Associate hidden readonly decimale labelIT ULA totali per le imprese associate
  //Item Totale_Fatturato_Associate hidden readonly valuta labelIT Fatturato totale per le imprese associate
  //Item Totale_Bilancio_Associate hidden readonly valuta labelIT Totale di bilancio per le imprese associate
  //Item Totale_ULA_Collegate hidden readonly decimale labelIT ULA totali per le imprese collegate
  //Item Totale_Fatturato_Collegate hidden readonly valuta labelIT Fatturato totale per le imprese collegate
  //Item Totale_Bilancio_Collegate hidden readonly valuta labelIT Totale di bilancio per le imprese collegate
  //Item Totale_ULA_Complessivo readonly decimale labelIT ULA totali
  //Item Totale_Fatturato_Complessivo readonly valuta labelIT Fatturato totale
  //Item Totale_Bilancio_Complessivo readonly valuta labelIT Totale di bilancio complessivo
  //Item Azienda_Dimensione readonly testo labelIT Dimensione dell’impresa calcolata nell'esercizio di riferimento
    //onload
    var ulaAssociatePesate = 0;
    var fatturatoAssociatePesato = 0;
    var bilancioAssociatePesato = 0;
    var indexAssociate = 0;
    while (values.get('AziendaAssociate['+indexAssociateUla+'].societa') != null) {
      var ulaTotaliAssociata = 0;
      var ulaAssociata = 0;
      var ulaCollegateAssociata = 0;
      var ulaTotaliAssociataPesate = 0;
      var fatturatoTotaleAssociata = 0;
      var fatturatoAssociata = 0;
      var fatturatoCollegateAssociata = 0;
      var fatturatoTotaleAssociataPesato = 0;
      var bilancioTotaleAssociata = 0;
      var bilancioAssociata = 0;
      var bilancioCollegateAssociata = 0;
      var bilancioTotaleAssociataPesato = 0;
      var percentualeMax = 100;
      var percentualeRichiedente = 100;
      var percentualeAssociata = 100;
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].ulaUltimoAnno')) {
        ulaAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].ulaUltimoAnno'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].ulaUltimoAnnoCollegateAssociata')) {
        ulaCollegateAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].ulaUltimoAnnoCollegateAssociata'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].fatturatoUltimoAnno')) {
        fatturatoAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].fatturatoUltimoAnno'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].fatturatoUltimoAnnoCollegateAssociata')) {
        fatturatoCollegateAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].fatturatoUltimoAnnoCollegateAssociata'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].totaleBilancioUltimoAnno')) {
        bilancioAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].totaleBilancioUltimoAnno'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].totaleBilancioUltimoAnnoCollegateAssociata')) {
        bilancioCollegateAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].totaleBilancioUltimoAnnoCollegateAssociata'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneRichiedente')) {
        percentualeRichiedente = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneRichiedente'));
      }
      if (!isEmpty('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneAssociata')) {
        percentualeAssociata = parseFloat(values.get('AziendaAssociate['+indexAssociate+'].percentualePartecipazioneAssociata'));
      }
      ulaTotaliAssociata = ulaAssociata + ulaCollegateAssociata;
      fatturatoTotaleAssociata = fatturatoAssociata + fatturatoCollegateAssociata;
      bilancioTotaleAssociata = bilancioAssociata + bilancioCollegateAssociata;
      if (percentualeRichiedente > percentualeAssociata) {
        percentualeMax = percentualeRichiedente;
      } else {
        percentualeMax = percentualeAssociata;
      }
      ulaTotaliAssociataPesate = (ulaTotaliAssociata * percentualeMax)/100;
      ulaAssociatePesate += ulaTotaliAssociataPesate;
      fatturatoTotaleAssociataPesato = (fatturatoTotaleAssociata * percentualeMax)/100;
      fatturatoAssociatePesato += fatturatoTotaleAssociataPesato;
      bilancioTotaleAssociataPesato = (totaleBilancioAssociata * percentualeMax)/100;
      bilancioAssociatePesato += bilancioTotaleAssociataPesato;
      values.put('AziendaAssociate['+indexAssociate+'].ulaUltimoAnnoTotale', ''+ulaTotaliAssociata.toFixed(2));
      values.put('AziendaAssociate['+indexAssociate+'].fatturatoUltimoAnnoTotale', ''+fatturatoTotaleAssociata.toFixed(2));
      values.put('AziendaAssociate['+indexAssociate+'].totaleBilancioUltimoAnnoTotale', ''+bilancioTotaleAssociata.toFixed(2));
      values.put('AziendaAssociate['+indexAssociate+'].maxPercentualePartecipazione', ''+percentualeMax.toFixed(2));
      indexAssociate++;
    }
    values.put('Totale_ULA_Associate', ''+ulaAssociatePesate.toFixed(2));
    values.put('Totale_Fatturato_Associate', ''+fatturatoAssociatePesato.toFixed(2));
    values.put('Totale_Bilancio_Associate', ''+bilancioAssociatePesato.toFixed(2));

    var ulaCollegate = 0;
    var fatturatoCollegate = 0;
    var bilancioCollegate = 0;
    var indexCollegate = 0;
    while (values.get('AziendaCollegate['+indexCollegate+'].societa') != null) {
      var ulaCollegata = 0;
      var fatturatoCollegata = 0;
      var bilancioCollegata = 0;
      if (!isEmpty('AziendaCollegate['+indexCollegate+'].ulaUltimoAnno')) {
        ulaCollegata = parseFloat(values.get('AziendaCollegate['+indexCollegate+'].ulaUltimoAnno'));
      }
      if (!isEmpty('AziendaCollegate['+indexCollegate+'].fatturatoUltimoAnno')) {
        fatturatoCollegata = parseFloat(values.get('AziendaCollegate['+indexCollegate+'].fatturatoUltimoAnno'));
      }
      if (!isEmpty('AziendaCollegate['+indexCollegate+'].totaleBilancioUltimoAnno')) {
        bilancioCollegata = parseFloat(values.get('AziendaCollegate['+indexCollegate+'].totaleBilancioUltimoAnno'));
      }
      ulaCollegate += ulaCollegata;
      fatturatoCollegate += fatturatoCollegata;
      bilancioCollegate += bilancioCollegata;
      indexCollegate++;
    }
    values.put('Totale_ULA_Collegate', ''+ulaCollegate.toFixed(2));
    values.put('Totale_Fatturato_Collegate', ''+fatturatoCollegate.toFixed(2));
    values.put('Totale_Bilancio_Collegate', ''+bilancioCollegate.toFixed(2));

    var ulaRichiedente = 0;
    var fatturatoRichiedente = 0;
    var bilancioRichiedente = 0;
    if (!isEmpty('Azienda_Personale_totaleULA')) {
      ulaRichiedente = parseFloat(values.get('Azienda_Personale_totaleULA'));
    }
    if (!isEmpty('AziendaValoriEconomici_totaleFatturato')) {
      fatturatoRichiedente = parseFloat(values.get('AziendaValoriEconomici_totaleFatturato'));
    }
    if (!isEmpty('AziendaValoriEconomici_totaleBilancio')) {
      bilancioRichiedente = parseFloat(values.get('AziendaValoriEconomici_totaleBilancio'));
    }

    var ulaTotale = ulaRichiedente + ulaAssociatePesate + ulaCollegate;
    var fatturatoTotale = fatturatoRichiedente + fatturatoAssociatePesato + fatturatoCollegate;
    var bilancioTotale = bilancioRichiedente + bilancioAssociatePesato + bilancioCollegate;
    values.put('Totale_ULA_Complessivo', ''+ulaTotale.toFixed(2));
    values.put('Totale_Fatturato_Complessivo', ''+fatturatoTotale.toFixed(2));
    values.put('Totale_Bilancio_Complessivo', ''+bilancioTotale.toFixed(2));

    if (ulaTotale < 10 && (fatturatoTotale <= 2000000 || bilancioTotale <= 2000000) ) {
      values.put('Azienda_Dimensione', 'Micro impresa');
    } else if (ulaTotale < 50 && (fatturatoTotale <= 10000000 || bilancioTotale <= 10000000) ) {
      values.put('Azienda_Dimensione', 'Piccola impresa');
    } else if (ulaTotale < 250 && (fatturatoTotale <= 50000000 || bilancioTotale <= 43000000) ) {
      values.put('Azienda_Dimensione', 'Media impresa');
    } else {
      values.put('Azienda_Dimensione', 'Grande impresa');
    }
    var dimensione = values.get('Azienda_Dimensione');
    var dichiarato = values.get('Azienda_Dimensione_Dichiarata');
    items.get('Azienda_Dimensione_Note').setRequired(!(dimensione === dichiarato));
  //Item Azienda_Dimensione_Dichiarata required menu(null/Micro impresa/Piccola impresa/Media impresa/Grande impresa) labelIT Dimensione dell’impresa dichiarata
    //onchange
    var dimensione = values.get('Azienda_Dimensione');
    var dichiarato = values.get('Azienda_Dimensione_Dichiarata');
    items.get('Azienda_Dimensione_Note').setRequired(!(dimensione === dichiarato));
  //Item Azienda_Dimensione_Note testo esteso labelIT Note tooltip Motivare la selezione di una dimensione d’impresa diversa da quella calcolata
