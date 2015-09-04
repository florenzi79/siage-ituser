//onLoad
//SedeProgetto_Provincia
setSelectOptionsCached('Richiedente_FirmatarioNascitaProvincia','provincia_istat');
setSelectDependedOptionsAndShowCached('Richiedente_FirmatarioNascitaComune', 'comune_istat', path+'Richiedente_FirmatarioNascitaProvincia');
//Beneficiario_DomicilioResidenza
var isDomicilioResidenza = (values.get('Beneficiario_DomicilioResidenza') == 'true');
fieldsets.get('82a5696790ed401eaebe8ea511cdb24a').setHidden((isDomicilioResidenza) || (isEmpty('Beneficiario_DomicilioResidenza')));
items.get('SedeProgetto_Provincia').setRequired(!isDomicilioResidenza);
items.get('SedeProgetto_Comune').setRequired(!isDomicilioResidenza);
items.get('SedeProgetto_Cap').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_IndirizzoDomicilio').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_CivicoDomicilio').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_TelefonoDomicilio').setRequired(!isDomicilioResidenza);
//SintesiCosti_ContributoRichiesto
if (iamIn('PI')) {
  items.get('PI.ServizioErogato').clearOptions();
  if (path.indexOf('[0]') > 0) {
    items.get('PI.ServizioErogato').addOption('Valutazione progetto','Valutazione dell’equipe multidisciplinare e predisposizione del progetto individualizzato');
    items.get('PI.ServizioErogato').setReadonly(true);
  }
  if (path.indexOf('[1]') > 0) {
    items.get('PI.ServizioErogato').addOption('Osservazione e stesura PEI','Osservazione finalizzata alla definizione del programma educativo individuale - PEI');
    items.get('PI.ServizioErogato').setReadonly(true);
  }
  if (path.indexOf('[2]') > 0) {
    items.get('PI.ServizioErogato').addOption('Selezionare','Selezionare');
    items.get('PI.ServizioErogato').addOption('Sviluppo di competenze individuali','Sviluppo di competenze individuali e comportamenti protettivi mediante potenziamento della funzione educativa scolastica/formativa');
    items.get('PI.ServizioErogato').addOption('Sostegno alla rete delle relazioni sociali','Sostegno alla rete delle relazioni sociali prossimali mediante supporti mirati educativi e/o psicologici ai componenti della famiglia');
    items.get('PI.ServizioErogato').addOption('Supporto e accompagnamento','Supporto e accompagnamento dell’adolescente/famiglia nell’accesso alla rete dei servizi socio-sanitari e sociali nonché del sistema educativo/formativo territoriale');
    items.get('PI.ServizioErogato').addOption('Interventi a carattere psico/socio/educativo','Interventi a carattere psico/socio/educativo in presenza di fattori di vulnerabilità o manifeste problematiche anche connesse all’uso/abuso di sostanze nonché interventi integrativi della presa in carico relativa all’applicazione di procedimenti in ambito amministrativo (art. 75 D.P.R. 309/90)');
    items.get('PI.ServizioErogato').addOption('Supporto psico-socio-educativo','Supporto psico-socio-educativo a giovani e adolescenti con problemi connessi a comportamenti di rischio per la salute e/o problematiche significative connesse all’uso/abuso di sostanze e/o presa in carico relativa all’applicazione di procedimenti in ambito penale (D.P.R. 448/88 e d.l. 92/14).');
    items.get('PI.ServizioErogato').setReadonly(false);
  }
} else {
  items.get('PI.ServizioErogato').clearOptions();
//  items.get('PI.ServizioErogato').addOption('Selezionare','-- Selezionare --');
  items.get('PI.ServizioErogato').addOption('Valutazione progetto','Valutazione dell’equipe multidisciplinare e predisposizione del progetto individualizzato');
  items.get('PI.ServizioErogato').addOption('Osservazione e stesura PEI','Osservazione finalizzata alla definizione del programma educativo individuale - PEI');
  items.get('PI.ServizioErogato').addOption('Sviluppo di competenze individuali','Sviluppo di competenze individuali e comportamenti protettivi mediante potenziamento della funzione educativa scolastica/formativa');
  items.get('PI.ServizioErogato').addOption('Sostegno alla rete delle relazioni sociali','Sostegno alla rete delle relazioni sociali prossimali mediante supporti mirati educativi e/o psicologici ai componenti della famiglia');
  items.get('PI.ServizioErogato').addOption('Supporto e accompagnamento','Supporto e accompagnamento dell’adolescente/famiglia nell’accesso alla rete dei servizi socio-sanitari e sociali nonché del sistema educativo/formativo territoriale');
  items.get('PI.ServizioErogato').addOption('Interventi a carattere psico/socio/educativo','Interventi a carattere psico/socio/educativo in presenza di fattori di vulnerabilità o manifeste problematiche anche connesse all’uso/abuso di sostanze nonché interventi integrativi della presa in carico relativa all’applicazione di procedimenti in ambito amministrativo (art. 75 D.P.R. 309/90)');
  items.get('PI.ServizioErogato').addOption('Supporto psico-socio-educativo','Supporto psico-socio-educativo a giovani e adolescenti con problemi connessi a comportamenti di rischio per la salute e/o problematiche significative connesse all’uso/abuso di sostanze e/o presa in carico relativa all’applicazione di procedimenti in ambito penale (D.P.R. 448/88 e d.l. 92/14).');
}
if ((values.get('PI[0].ServizioErogato') == null) || (values.get('PI[0].ServizioErogato') == '')) {
  values.put('PI[0].ServizioErogato','Valutazione progetto');
  values.put('PI[0].NumeroAccessi',''+2);
  values.put('PI[0].CostoAccessoStandard',''+45);
  values.put('PI[0].CostoServizio',''+90);
  values.put('PI[1].ServizioErogato','Osservazione e stesura PEI');
  values.put('PI[1].NumeroAccessi',''+6);
  values.put('PI[1].CostoAccessoStandard',''+45);
  values.put('PI[1].CostoServizio',''+270);
  values.put('PI[2].ServizioErogato','Selezionare');
  values.put('PI[2].NumeroAccessi',''+0);
  values.put('PI[2].CostoAccessoStandard',''+0.00);
  values.put('PI[2].CostoServizio',''+0.00);
}
var totaleServizio1 = parseFloat(values.get('PI[0].CostoServizio'));
var totaleServizio2 = parseFloat(values.get('PI[1].CostoServizio'));
var totaleServizio3 = parseFloat(values.get('PI[2].CostoServizio'));
var costoTotale = totaleServizio1 + totaleServizio2 + totaleServizio3;
values.put('SintesiCosti_ContributoRichiesto',''+costoTotale);

//onChange
//Richiedente_FirmatarioNascitaProvincia
values.put('Richiedente_FirmatarioNascitaProvinciaDn', getOptionLabel('Richiedente_FirmatarioNascitaProvincia', values.get(path+'Richiedente_FirmatarioNascitaProvincia')));
values.put(path+'Richiedente_FirmatarioNascitaComune', '');
values.remove('Richiedente_FirmatarioNascitaComuneDn');
setSelectDependedOptionsAndShowCached('Richiedente_FirmatarioNascitaComune', 'comune_istat', path+'Richiedente_FirmatarioNascitaProvincia');
//Richiedente_ComuneNascita
values.put('Richiedente_FirmatarioNascitaComuneDn', getOptionLabel('Richiedente_FirmatarioNascitaComune', values.get(path+'Richiedente_FirmatarioNascitaComune')));
//PI.ServizioErogato
values.remove(path+'NumeroAccessi');
values.remove(path+'CostoAccessoStandard');
values.remove(path+'CostoServizio');
values.remove(path+'DataAvvioServizio');
values.remove(path+'DataFineServizio');
if (values.get(path+'ServizioErogato') == 'Sviluppo di competenze individuali') {
  values.put(path+'NumeroAccessi',''+13);
  values.put(path+'CostoAccessoStandard',''+45);
  values.put(path+'CostoServizio',''+585);
} else if (values.get(path+'ServizioErogato') == 'Sostegno alla rete delle relazioni sociali') {
  values.put(path+'NumeroAccessi',''+13);
  values.put(path+'CostoAccessoStandard',''+45);
  values.put(path+'CostoServizio',''+585);
} else if (values.get(path+'ServizioErogato') == 'Supporto e accompagnamento') {
  values.put(path+'NumeroAccessi',''+13);
  values.put(path+'CostoAccessoStandard',''+45);
  values.put(path+'CostoServizio',''+585);
} else if (values.get(path+'ServizioErogato') == 'Interventi a carattere psico/socio/educativo') {
  values.put(path+'NumeroAccessi',''+33);
  values.put(path+'CostoAccessoStandard',''+45);
  values.put(path+'CostoServizio',''+1485);
} else if (values.get(path+'ServizioErogato') == 'Supporto psico-socio-educativo') {
  values.put(path+'NumeroAccessi',''+56);
  values.put(path+'CostoAccessoStandard',''+45);
  values.put(path+'CostoServizio',''+2520);
}

//Validazione
if (values.get('PI[2].ServizioErogato') == 'Selezionare') {
  errors.put('PI[2].ServizioErogato','selezione_servizio_val');
}
