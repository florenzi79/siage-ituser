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
