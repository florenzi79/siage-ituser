//onLoad
//Richiedente_NaturaGiuridica
values.put('statoPratica','In bozza');
values.put('fasePratica','Adesione');
values.put('title',values.get('SoggettoRichiedente_Denominazione') );
items.get('title').setHidden(true);
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf != null) {
		if( mappaValoriSgProf.get('AA037') != null ) values.put( 'Richiedente_Denominazione', mappaValoriSgProf.get('AA037').toString() );
		if( mappaValoriSgProf.get('AA206') != null ) values.put( 'Richiedente_CodiceFiscale', mappaValoriSgProf.get('AA206').toString() );
		//if( mappaValoriSgProf.get('AA038') != null) values.put( 'SoggettoRichiedente_Piva', mappaValoriSgProf.get('AA038').toString() );
		values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
		// Sede legale
		if (mappaValoriSgProf.get('AA061') != null) {
			values.put( 'SedeComune', mappaValoriSgProf.get('AA061').toString());
			values.put( 'SedeComuneDn', getAnaDenominazione('comune_istat', values.get('SedeLegale_Comune')) );
		}
		if (mappaValoriSgProf.get('AA062') != null) {
			values.put( 'SedeProvincia', mappaValoriSgProf.get('AA062').toString() );
			values.put( 'SedeProvinciaDn', getAnaDenominazione('provincia_istat', values.get('SedeLegale_Provincia')) );
		}
		if( mappaValoriSgProf.get('AA060') != null) values.put( 'SedeIndirizzo', mappaValoriSgProf.get('AA060').toString() );
		if( mappaValoriSgProf.get('AA063') != null) values.put( 'SedeCAP',  mappaValoriSgProf.get('AA063').toString() );
		// Rappresentante legale
		if( mappaValoriSgProf.get('AA142') != null ) values.put( 'Richiedente_RappresentanteLegaleCodiceFiscale', mappaValoriSgProf.get('AA142').toString() );
		if( mappaValoriSgProf.get('AA029') != null ) values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
		if( mappaValoriSgProf.get('AA030') != null ) values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
	}
}
values.put('Titolo',values.get('idPratica') + ' ' + values.get('Richiedente_Denominazione'));

//onChange
//Operations
//elimina
values.put('statoPratica','Bozza eliminata');
values.put('faseoPratica','Chiusa');
