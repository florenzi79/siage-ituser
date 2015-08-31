//onLoad
//Richiedente_NaturaGiuridica
values.put('StatoPratica','In bozza');
values.put('fasePratica','Adesione');
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf != null) {
		if( mappaValoriSgProf.get('AA037') != null ) values.put( 'SoggettoRichiedente_Denominazione', mappaValoriSgProf.get('AA037').toString() );
		if( mappaValoriSgProf.get('AA206') != null ) values.put( 'SoggettoRichiedente_CodiceFiscale', mappaValoriSgProf.get('AA206').toString() );
		if( mappaValoriSgProf.get('AA038') != null) values.put( 'SoggettoRichiedente_Piva', mappaValoriSgProf.get('AA038').toString() );
		if( (mappaValoriSgProf.get('AA208') != null) && (values.get('SoggettoRichiedente_Pec') == null) ) values.put( 'SoggettoRichiedente_Pec', mappaValoriSgProf.get('AA208').toString() );
		values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
		// Sede legale
		if( (mappaValoriSgProf.get('AA061') != null)  && (values.get('SedeLegale_Comune') == null)) {
			values.put( 'SedeLegale_Comune', mappaValoriSgProf.get('AA061').toString());
			values.put( 'SedeLegale_ComuneDn', getAnaDenominazione('comune_istat', values.get('SedeComune')) );
		}
		if( (mappaValoriSgProf.get('AA062') != null) && (values.get('SedeLegale_Provincia') == null)) {
			values.put( 'SedeLegale_Provincia', mappaValoriSgProf.get('AA062').toString() );
			values.put( 'SedeLegale_ProvinciaDn', getAnaDenominazione('provincia_istat', values.get('SedeProvincia')) );
		}
		if( (mappaValoriSgProf.get('AA060') != null) && (values.get('SedeLegale_Indirizzo') == null) ) values.put( 'SedeLegale_Indirizzo', mappaValoriSgProf.get('AA060').toString() );
		// Rappresentante legale
		if( mappaValoriSgProf.get('AA142') != null ) values.put( 'Richiedente_RappresentanteLegaleCf', mappaValoriSgProf.get('AA142').toString() );
		if( mappaValoriSgProf.get('AA029') != null ) values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
		if( mappaValoriSgProf.get('AA030') != null ) values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
	}
}
	//titolo pratica
values.put('title',values.get('SoggettoRichiedente_Denominazione') );
items.get('title').setHidden(true);

//onChange
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
"  PRATICA.SM_TMPL_DN = 'Contributi ASD Eccellenze Linea 3' and"+
"  PRATICA.CURRENT_STATE in ('63549fd5d8c64e519a29e8788755fc0a', '5a8a62f27a704dc2a3afa45a164ff7c1')"
//							  						Attesa protocollazione			  			Presentata
;
var pratiche = dizionarioService.getList(null, sql);
if(pratiche.size() > 0) {
	errors.put('SoggettoRichiedente_AvvisiPresentazione', 'PraticaDuplicata_val');
}
	//formato mail
if (!isEmpty('SoggettoRichiedente_Mail')) {
	if (!isValidEmail(values.get('SoggettoRichiedente_Mail'))) {
		errors.put('SoggettoRichiedente_Mail','FormatoEmail_val');
	}
}
if (!isEmpty('SoggettoRichiedente_Pec')) {
	if (!isValidEmail(values.get('SoggettoRichiedente_Pec'))) {
		errors.put('SoggettoRichiedente_Pec','FormatoEmail_val');
	}
}
	//dichiarazioni
{
    var dichiarazioni_value=  values.get('Dichiarazioni_Dpr');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_Dpr', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_CondizioniProvvedimento');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_CondizioniProvvedimento', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_CondannaIllecito');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_CondannaIllecito', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_CondannaDoping');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_CondannaDoping', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_SanzioneConi');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_SanzioneConi', 'Dichiarazioni_val');
    }
}
