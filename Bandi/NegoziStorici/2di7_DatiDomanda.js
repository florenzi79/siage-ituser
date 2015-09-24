//onLoad
//Firmatario_CoincideRappresentanteLegale
var isNotFirmatarioRappresentante = (values.get('Firmatario_CoincideRappresentanteLegale') == 'false');
items.get('Firmatario_CodiceFiscale').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_CodiceFiscale').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setRequired(isNotFirmatarioRappresentante);

//SedeLegale_Provincia
setSelectOptionsCached('SedeLegale_Provincia','provincia_istat');
setSelectDependedOptionsCached('SedeLegale_Citta','comune_istat','SedeLegale_Provincia');

//IndirizzoNegozio_Provincia
var dizionario = dizionarioService.getMap('provincia_istat', '03');
items.get('IndirizzoNegozio_Provincia').clearOptions();
items.get('IndirizzoNegozio_Provincia').addOption('','- seleziona -');
items.get('IndirizzoNegozio_Provincia').addOptions(dizionario);
setSelectDependedOptionsAndShowCached('IndirizzoNegozio_Citta', 'comune_istat', path+'IndirizzoNegozio_Provincia');

//onChange
//Firmatario_CoincideRappresentanteLegale
values.remove('Firmatario_CodiceFiscale');
values.remove('Firmatario_Cognome');
values.remove('Firmatario_Nome');
values.remove('Firmatario_Ruolo');
var isNotFirmatarioRappresentante = (values.get('Firmatario_CoincideRappresentanteLegale') == 'false');
items.get('Firmatario_CodiceFiscale').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_CodiceFiscale').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setRequired(isNotFirmatarioRappresentante);
//IndirizzoNegozio_Provincia
values.put('IndirizzoNegozio_ProvinciaDn', getOptionLabel('IndirizzoNegozio_Provincia', values.get(path+'IndirizzoNegozio_Provincia')));
values.put(path+'IndirizzoNegozio_Citta', '');
values.remove('IndirizzoNegozio_CittaDn');
setSelectDependedOptionsAndShowCached('IndirizzoNegozio_Citta', 'comune_istat', path+'IndirizzoNegozio_Provincia');
//SedeLegaleDichiarata_Comune
values.put('IndirizzoNegozio_CittaDn', getOptionLabel('IndirizzoNegozio_Citta', values.get(path+'IndirizzoNegozio_Citta')));


//Validazione
  //codicefiscalefirmatario
if ((values.get('Firmatario_CoincideRappresentanteLegale') == 'false') && !isValidCf(values.get('Firmatario_CodiceFiscale'))) {
  errors.put('Firmatario_CodiceFiscale','Firmatario_CodiceFiscale_val');
}
  //IndirizzoNegozio_Cap
if (!isValidCap(values.get('IndirizzoNegozio_Cap'))) {
  errors.put('IndirizzoNegozio_Cap','IndirizzoNegozio_Cap_val');
}
  //CoordBancarie_Iban
if (!isValidIbanIta(values.get('CoordBancarie_Iban'))) {
  errors.put('CoordBancarie_Iban','CoordBancarie_Iban_val');
}
//IndirizzoNegozio_Provincia
if (isEmpty('IndirizzoNegozio_Provincia')) {
  errors.put('IndirizzoNegozio_Provincia','IndirizzoNegozio_Provincia_val');
}
//IndirizzoNegozio_Citta
if (isEmpty('IndirizzoNegozio_Citta')) {
  errors.put('IndirizzoNegozio_Citta','IndirizzoNegozio_Citta_val');
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
  errors.put('RappresentanteLegale_CodiceFiscale', 'PraticaDuplicata_val');
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
  errors.put('IndirizzoNegozio_Via','DisponibilitaEsaurita_val');
}

//operations
//setDataFirmatarioRappresentante
if (values.get('Firmatario_CoincideRappresentanteLegale') == 'true') {
  values.put('Firmatario_CodiceFiscale',values.get('RappresentanteLegale_CodiceFiscale'));
  values.put('Firmatario_Cognome',values.get('RappresentanteLegale_Cognome'));
  values.put('Firmatario_Nome',values.get('RappresentanteLegale_Nome'));
  values.put('Firmatario_Ruolo','Rappresentante legale');
}
//setDatiBozzaEliminata
values.put('statoPratica','Bozza eliminata');
