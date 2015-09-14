//onLoad
//Richiedente_Denominazione
values.put('statoPratica','In bozza');
values.put('fasePratica','Adesione');
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf !== null) {
		values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
		if( mappaValoriSgProf.get('AA037') !== null ) values.put( 'Richiedente_Denominazione', mappaValoriSgProf.get('AA037').toString() );
		if( mappaValoriSgProf.get('AA206') !== null ) {
			values.put( 'Richiedente_CodiceFiscale', mappaValoriSgProf.get('AA206').toString() );
		} else if ( mappaValoriSgProf.get('AA241') !== null ) {
			values.put( 'Richiedente_CodiceFiscale', mappaValoriSgProf.get('AA241').toString() );
		}
		// Sede legale
		if( mappaValoriSgProf.get('AA061') !== null ) {
			values.put( 'Richiedente_SedeLegaleComune', mappaValoriSgProf.get('AA061').toString());
			values.put( 'Richiedente_SedeLegaleComuneDn', getAnaDenominazione('comune_istat', values.get('Richiedente_SedeLegaleComune')) );
		}
		if( mappaValoriSgProf.get('AA062') !== null ) {
			values.put( 'Richiedente_SedeLegaleProvincia', mappaValoriSgProf.get('AA062').toString() );
			values.put( 'Richiedente_SedeLegaleProvinciaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_SedeLegaleProvincia')) );
		}
		if( mappaValoriSgProf.get('AA060') !== null ) values.put( 'Richiedente_SedeLegaleIndirizzo', mappaValoriSgProf.get('AA060').toString() );
		if( mappaValoriSgProf.get('AA063') !== null ) values.put( 'Richiedente_SedeLegaleCap', mappaValoriSgProf.get('AA063').toString() );
		if( (mappaValoriSgProf.get('AA208') !== null) && (values.get('Richiedente_Pec') === null) ) values.put( 'Richiedente_Pec', mappaValoriSgProf.get('AA208').toString() );
		// Rappresentante legale
		if( mappaValoriSgProf.get('AA142') !== null ) values.put( 'Richiedente_RappresentanteLegaleCodiceFiscale', mappaValoriSgProf.get('AA142').toString() );
		if( mappaValoriSgProf.get('AA029') !== null ) values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
		if( mappaValoriSgProf.get('AA030') !== null ) values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
	}
}
var naturaGiuridica = values.get('Richiedente_NaturaGiuridica');
if (naturaGiuridica == '2.4.20') {
	values.put('Richiedente_Tipologia','Provincia');
} else if (naturaGiuridica == '2.4.30') {
	values.put('Richiedente_Tipologia','Comune (anche in forma asociata)');
} else if (naturaGiuridica == '2.4.60') {
	values.put('Richiedente_Tipologia','Città metropolitana');
} else {
	values.put('Richiedente_Tipologia','Tipologia di ente non ammessa');
}
//titolo pratica
values.put('title',values.get('Richiedente_Denominazione') );
items.get('title').setHidden(true);

//onChange
//Richiedente_TipologiaPartecipazione
values.remove('TipologiaPartenership');
var indexPartner = 0;
while (values.get('Partnership['+indexPartner+'].NomePartner') !== null) {
	values.remove('Partnership['+indexPartner+'].NomePartner');
	indexPartner++;
}

//Validazione
	//pratica duplicata
var codiceFiscaleRichiedente = values.get('Richiedente_CodiceFiscale');
var sqlPraticheDuplicate =
"  SELECT SM_ID ID_PRATICA "+
"  FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
"  WHERE DETTAGLIO.DAT_PTH = 'Richiedente_CodiceFiscale' "+
"  AND DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' "+
"  AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
"  AND PRATICA.SM_TMPL_DN = 'Rigenerazione urbana' "+
"  AND PRATICA.CURRENT_STATE in ('b6eb1d6973c8432281d3de1f66272093', 'a849d6d6b98040f092fbb7b814f1da06')"
//							  					    	Attesa protocollazione			  			Presentata
;
var praticheDuplicate = dizionarioService.getList(null, sqlPraticheDuplicate);
if(praticheDuplicate.size() > 0) {
	errors.put('RequisitiMinimi_Avviso', 'PraticaDuplicata_val');
}
	//tipologia Ente
if (values.get('Richiedente_Tipologia') == 'Tipologia di ente non ammessa') {
	errors.put('Richiedente_Tipologia','TipologiaEnte_val');
}
	//formato mail
if (!isEmpty('Richiedente_Mail')) {
	if (!isValidEmail(values.get('Richiedente_Mail'))) {
		errors.put('Richiedente_Mail','Richiedente_Mail_val');
	}
}
if (!isEmpty('Richiedente_Pec')) {
	if (!isValidEmail(values.get('Richiedente_Pec'))) {
		errors.put('Richiedente_Pec','Richiedente_Pec_val');
	}
}
	//dichiarazioni
if (values.get('Dichiarazioni_PresaVisone') != 'true') {
	errors.put('Dichiarazioni_PresaVisone','Dichiarazioni_val')
}
if (values.get('Dichiarazioni_ApprovazionePiano') != 'true') {
	errors.put('Dichiarazioni_ApprovazionePiano','Dichiarazioni_val')
}
if (values.get('Dichiarazioni_CompletamentoPiano') != 'true') {
	errors.put('Dichiarazioni_CompletamentoPiano','Dichiarazioni_val')
}
if (values.get('Dichiarazioni_Impegno') != 'true') {
	errors.put('Dichiarazioni_Impegno','Dichiarazioni_val')
}
