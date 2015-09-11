// onLoad
// Richiedente_FirmatarioRappresentanteLegale
var isEmptyFirmatarioRappresentante = isEmpty(Richiedente_FirmatarioRappresentanteLegale);
items.get('Richiedente_FirmatarioCodiceFiscale').setHidden(isEmptyFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCognome').setHidden(isEmptyFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNome').setHidden(isEmptyFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNascitaProvincia').setHidden(isEmptyFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNascitaComune').setHidden(isEmptyFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNascitaData').setHidden(isEmptyFirmatarioRappresentante);
items.get('Richiedente_FirmatarioGenere').setHidden(isEmptyFirmatarioRappresentante);
//Richiedente_FirmatarioNascitaProvincia
setSelectOptionsCached('Richiedente_FirmatarioNascitaProvincia','provincia_istat');
setSelectDependedOptionsAndShowCached('Richiedente_FirmatarioNascitaComune', 'comune_istat', path+'Richiedente_FirmatarioNascitaProvincia');

// onChange
//Firmatario_CoincideLegaleRappresentante
values.remove('Richiedente_FirmatarioCodiceFiscale');
values.remove('Richiedente_FirmatarioCognome');
values.remove('Richiedente_FirmatarioNome');
values.remove('Richiedente_FirmatarioNascitaProvincia');
values.remove('Richiedente_FirmatarioNascitaProvinciaDn');
values.remove('Richiedente_FirmatarioNascitaComune');
values.remove('Richiedente_FirmatarioNascitaComuneDn');
values.remove('Richiedente_FirmatarioNascitaData');
values.remove('Richiedente_FirmatarioGenere');
if (values.get('Richiedente_FirmatarioRappresentanteLegale') == 'true') {
  values.put('Richiedente_FirmatarioCodiceFiscale',values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
  values.put('Richiedente_FirmatarioCognome',values.get('Richiedente_RappresentanteLegaleCognome'));
  values.put('Richiedente_FirmatarioNome',values.get('Richiedente_RappresentanteLegaleNome'));
}
items.get('Richiedente_FirmatarioCodiceFiscale').setHidden(false);
items.get('Richiedente_FirmatarioCognome').setHidden(false);
items.get('Richiedente_FirmatarioNome').setHidden(false);
items.get('Richiedente_FirmatarioNascitaProvincia').setHidden(false);
items.get('Richiedente_FirmatarioNascitaComune').setHidden(false);
items.get('Richiedente_FirmatarioNascitaData').setHidden(false);
items.get('Richiedente_FirmatarioGenere').setHidden(false);
var isFirmatarioRappresentante = (values.get('Richiedente_FirmatarioRappresentanteLegale') == 'true');
items.get('Richiedente_FirmatarioCodiceFiscale').setReadonly(isFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCognome').setReadonly(isFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNome').setReadonly(isFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCodiceFiscale').setRequired(!isFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCognome').setRequired(!isFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNome').setRequired(!isFirmatarioRappresentante);
//Richiedente_FirmatarioNascitaProvincia
values.put('Richiedente_FirmatarioNascitaProvinciaDn', getOptionLabel('Richiedente_FirmatarioNascitaProvincia', values.get(path+'Richiedente_FirmatarioNascitaProvincia')));
values.put(path+'Richiedente_FirmatarioNascitaComune', '');
values.remove('Richiedente_FirmatarioNascitaComuneDn');
setSelectDependedOptionsAndShowCached('Richiedente_FirmatarioNascitaComune', 'comune_istat', path+'Richiedente_FirmatarioNascitaProvincia');
//Richiedente_FirmatarioNascitaComune
values.put('Richiedente_FirmatarioNascitaComuneDn', getOptionLabel('Richiedente_FirmatarioNascitaComune', values.get(path+'Richiedente_FirmatarioNascitaComune')));

//Validazione
if (values.get('Richiedente_FirmatarioRappresentanteLegale') == 'false') {
    if (!isValidCf(values.get('Richiedente_FirmatarioCodiceFiscale'))) {
        errors.put('Richiedente_FirmatarioCodiceFiscale','Richiedente_FirmatarioCodiceFiscale_val');
    }
}
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
	errors.put('Richiedente_RappresentanteLegaleCf', 'PraticaDuplicata_val');
}

//Operation
//setDatiReferentiAdesione
if (values.get('Richiedente_FirmatarioRappresentanteLegale') == 'true') {
    values.put('Richiedente_FirmatarioCodiceFiscale',values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
    values.put('Richiedente_FirmatarioCognome',values.get('Richiedente_RappresentanteLegaleCognome'));
    values.put('Richiedente_FirmatarioNome',values.get('Richiedente_RappresentanteLegaleNome'));
    values.put('Richiedente_FirmatarioNascitaProvincia',values.get('Richiedente_RappresentanteLegaleNascitaProvincia'));
    values.put('Richiedente_FirmatarioNascitaComune',values.get('Richiedente_RappresentanteLegaleNascitaComune'));
    values.put('Richiedente_FirmatarioNascitaData',values.get('Richiedente_RappresentanteLegaleNascitaData'));
    values.put('Richiedente_FirmatarioGenere','Richiedente_RappresentanteLegaleGenere');
}
