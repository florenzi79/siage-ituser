//onLoad
//Richiedente_NaturaGiuridica
values.put('StatoPratica','In bozza');
values.put('fasePratica','Adesione');
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
	values.put('Richiedente_CodiceFiscale',user.getCodiceFiscale());
	values.put('Richiedente_Mail',user.getEmail());
	values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf != null) {
		if( mappaValoriSgProf.get('ASIS015') != null ) values.put( 'Richiedente_Cognome', mappaValoriSgProf.get('ASIS015').toString() );
		if( mappaValoriSgProf.get('ASIS016') != null ) values.put( 'Richiedente_Nome', mappaValoriSgProf.get('ASIS016').toString() );
		if( mappaValoriSgProf.get('ASIS018') != null ) {
			var timestampDataNascita = mappaValoriSgProf.get('ASIS018').toString();
			var giornoNascita = parseInt(timestampDataNascita.substring(0,2));
			var meseNascita = parseInt(timestampDataNascita.substring(3,5)) -1;
			var annoNascita = parseInt(timestampDataNascita.substring(6,10));
			var dataNascita = new Date(annoNascita, meseNascita, giornoNascita, 0, 0, 0, 0);
			var dataNascitaMillis = parseFloat(dataNascita.getTime());
			values.put( 'Richiedente_DataNascita', ''+dataNascitaMillis );
		}
		if( (mappaValoriSgProf.get('ASIS009') != null) && (values.get('Richiedente_ComuneNascita') == null)) {
			values.put( 'Richiedente_ComuneNascita', mappaValoriSgProf.get('ASIS009').toString() );
			values.put( 'Richiedente_ComuneNascitaDn', getAnaDenominazione('comune_istat', values.get('Richiedente_ComuneNascita')) );
		}
		if( (mappaValoriSgProf.get('ASIS010') != null) && (values.get('Richiedente_ProvinciaNascita') == null)) {
			values.put( 'Richiedente_ProvinciaNascita', mappaValoriSgProf.get('ASIS010').toString() );
			values.put( 'Richiedente_ProvinciaNascitaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_ProvinciaNascita')) );
		}
		if( (mappaValoriSgProf.get('ASIS011') != null) && (values.get('Richiedente_IndirizzoResidenza') == null)) values.put( 'Richiedente_IndirizzoResidenza', mappaValoriSgProf.get('ASIS011').toString() );
		if( (mappaValoriSgProf.get('ASIS012') != null) && (values.get('Richiedente_ComuneResidenza') == null)) {
			values.put( 'Richiedente_ComuneResidenza', mappaValoriSgProf.get('ASIS012').toString() );
			values.put( 'Richiedente_ComuneResidenzaDn', getAnaDenominazione('comune_istat', values.get('Richiedente_ComuneResidenza')) );
		}
		if( (mappaValoriSgProf.get('ASIS013') != null) && (values.get('Richiedente_ProvinciaResidenza') == null)) {
			values.put( 'Richiedente_ProvinciaResidenza', mappaValoriSgProf.get('ASIS013').toString() );
			values.put( 'Richiedente_ProvinciaResidenzaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_ProvinciaResidenza')) );
		}
	}
}
//titolo pratica
{
	values.put('title',values.get('SoggettoRichiedente_Denominazione') );
	items.get('title').setHidden(true);
}
//Richiedente_ProvinciaNascita
setSelectOptionsCached('Richiedente_ProvinciaNascita','provincia_istat');
setSelectDependedOptionsAndShowCached('Richiedente_ComuneNascita', 'comune_istat', path+'Richiedente_ProvinciaNascita');
//Richiedente_ProvinciaResidenza
var provinceLombarde = dizionarioService.getMap('provincia_istat','03');
items.get('Richiedente_ProvinciaResidenza').clearOptions();
items.get('Richiedente_ProvinciaResidenza').addOption('','- seleziona -');
items.get('Richiedente_ProvinciaResidenza').addOptions(provinceLombarde);
setSelectDependedOptionsAndShowCached('Richiedente_ComuneResidenza', 'comune_istat', path+'Richiedente_ProvinciaResidenza');
//AltroGenitore_Nome
var isAltroGenitoreRequired = ((values.get('Richiedente_DichiarazioneResidenza') == 'false') && ((values.get('Richiedente_Parentela') == 'genitore') || (values.get('Richiedente_Parentela') == 'affidatario')));
fieldsets.get('36257d0e93134d4a86a48dec74f4ad70').setHidden(!isAltroGenitoreRequired);
items.get('AltroGenitore_Nome').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_Cognome').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_CodiceFiscale').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_DataNascita').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_ProvinciaResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_ComuneResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_IndirizzoResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_Parentela').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_DichiarazioneResidenza').setRequired(isAltroGenitoreRequired);
//AltroGenitore_ProvinciaResidenza
if ((values.get('Richiedente_DichiarazioneResidenza') == 'false') && ((values.get('Richiedente_Parentela') == 'genitore') || (values.get('Richiedente_Parentela') == 'affidatario'))) {
	var provinceLombarde = dizionarioService.getMap('provincia_istat','03');
    items.get('AltroGenitore_ProvinciaResidenza').clearOptions();
    items.get('AltroGenitore_ProvinciaResidenza').addOption('','- seleziona -');
    items.get('AltroGenitore_ProvinciaResidenza').addOptions(provinceLombarde);
	setSelectDependedOptionsAndShowCached('AltroGenitore_ComuneResidenza', 'comune_istat', path+'AltroGenitore_ProvinciaResidenza');
}

//onChange
//Richiedente_ProvinciaNascita
values.put('Richiedente_ProvinciaNascitaDn', getOptionLabel('Richiedente_ProvinciaNascita', values.get(path+'Richiedente_ProvinciaNascita')));
values.put(path+'Richiedente_ComuneNascita', '');
values.remove('Richiedente_ComuneNascitaDn');
//Richiedente_ProvinciaResidenza
values.put('Richiedente_ProvinciaResidenzaDn', getOptionLabel('Richiedente_ProvinciaResidenza', values.get(path+'Richiedente_ProvinciaResidenza')));
values.put(path+'Richiedente_ComuneResidenza', '');
values.remove('Richiedente_ComuneResidenzaDn');
setSelectDependedOptionsAndShowCached('Richiedente_ComuneResidenza', 'comune_istat', path+'Richiedente_ProvinciaResidenza');
//Richiedente_ComuneNascita
values.put('Richiedente_ComuneNascitaDn', getOptionLabel('Richiedente_ComuneNascita', values.get(path+'Richiedente_ComuneNascita')));
//Richiedente_ComuneResidenza
values.put('Richiedente_ComuneResidenzaDn', getOptionLabel('Richiedente_ComuneResidenza', values.get(path+'Richiedente_ComuneResidenza')));
//Richiedente_Parentela
if (values.get('Richiedente_Parentela') == 'tutore') {
	values.remove('AltroGenitore_Nome');
	values.remove('AltroGenitore_Cognome');
	values.remove('AltroGenitore_CodiceFiscale');
	values.remove('AltroGenitore_DataNascita');
	values.remove('AltroGenitore_ProvinciaResidenza');
	values.remove('AltroGenitore_ProvinciaResidenzaDn');
	values.remove('AltroGenitore_ComuneResidenza');
	values.remove('AltroGenitore_ComuneResidenzaDn');
	values.remove('AltroGenitore_IndirizzoResidenza');
	values.remove('AltroGenitore_Parentela');
	values.remove('AltroGenitore_DichiarazioneResidenza');
}
var isAltroGenitoreRequired = ((values.get('Richiedente_DichiarazioneResidenza') == 'false') && ((values.get('Richiedente_Parentela') == 'genitore') || (values.get('Richiedente_Parentela') == 'affidatario')));
fieldsets.get('36257d0e93134d4a86a48dec74f4ad70').setHidden(!isAltroGenitoreRequired);
items.get('AltroGenitore_Nome').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_Cognome').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_CodiceFiscale').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_DataNascita').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_ProvinciaResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_ComuneResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_IndirizzoResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_Parentela').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_DichiarazioneResidenza').setRequired(isAltroGenitoreRequired);
//Richiedente_DichiarazioneResidenza
if (values.get('Richiedente_DichiarazioneResidenza') == 'true') {
	values.remove('AltroGenitore_Nome');
	values.remove('AltroGenitore_Cognome');
	values.remove('AltroGenitore_CodiceFiscale');
	values.remove('AltroGenitore_DataNascita');
	values.remove('AltroGenitore_ProvinciaResidenza');
	values.remove('AltroGenitore_ProvinciaResidenzaDn');
	values.remove('AltroGenitore_ComuneResidenza');
	values.remove('AltroGenitore_ComuneResidenzaDn');
	values.remove('AltroGenitore_IndirizzoResidenza');
	values.remove('AltroGenitore_Parentela');
	values.remove('AltroGenitore_DichiarazioneResidenza');
}
var isAltroGenitoreRequired = ((values.get('Richiedente_DichiarazioneResidenza') == 'false') && ((values.get('Richiedente_Parentela') == 'genitore') || (values.get('Richiedente_Parentela') == 'affidatario')));
fieldsets.get('36257d0e93134d4a86a48dec74f4ad70').setHidden(!isAltroGenitoreRequired);
items.get('AltroGenitore_Nome').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_Cognome').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_CodiceFiscale').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_DataNascita').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_ProvinciaResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_ComuneResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_IndirizzoResidenza').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_Parentela').setRequired(isAltroGenitoreRequired);
items.get('AltroGenitore_DichiarazioneResidenza').setRequired(isAltroGenitoreRequired);
//AltroGenitore_ProvinciaResidenza
values.put('AltroGenitore_ProvinciaResidenzaDn', getOptionLabel('AltroGenitore_ProvinciaResidenza', values.get(path+'AltroGenitore_ProvinciaResidenza')));
values.put(path+'AltroGenitore_ComuneResidenza', '');
values.remove('AltroGenitore_ComuneResidenzaDn');
setSelectDependedOptionsAndShowCached('AltroGenitore_ComuneResidenza', 'comune_istat', path+'AltroGenitore_ProvinciaResidenza');
//AltroGenitore_ComuneResidenza
values.put('AltroGenitore_ComuneResidenzaDn', getOptionLabel('AltroGenitore_ComuneResidenza', values.get(path+'AltroGenitore_ComuneResidenza')));
//SoggettiAmmissibili_CategoriaAppartenenza
//Validazione
//pratica duplicata
var codiceFiscaleRichiedente = values.get('Richiedente_CodiceFiscale');
var sqlGenitorePrimoPrimo = "SELECT SM_ID PRATICA_BLOCCANTE "+
             	              "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
             	              "WHERE DETTAGLIO.DAT_PTH = 'Richiedente_CodiceFiscale' "+
             	              "AND DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' "+
             	              "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
             	              "AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
             	              "AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
             	              //							  						Attesa protocollazione			  			Presentata
var sqlGenitorePrimoSecondo = "SELECT SM_ID PRATICA_BLOCCANTE "+
             	                "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
             	                "WHERE DETTAGLIO.DAT_PTH = 'AltroGenitore_CodiceFiscale' "+
             	                "AND DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' "+
             	                "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
															"AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
															"AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
             	                //							  						Attesa protocollazione			  			Presentata
var duplicatiGenitorePrimoPrimo = dizionarioService.getList(null, sqlGenitorePrimoPrimo);
var duplicatiGenitorePrimoSecondo = dizionarioService.getList(null, sqlGenitorePrimoSecondo);
if ((duplicatiGenitorePrimoPrimo.size() > 0) || (duplicatiGenitorePrimoSecondo.size() > 0)) {
	errors.put('Richiedente_CodiceFiscale', 'PraticaDuplicataRichiedente_val');
}
//Il codice fiscale del soggetto richiedente è già stato utilizzato per presentare una domanda, pertanto non è possibile proseguire
if (!isEmpty('AltroGenitore_CodiceFiscale')) {
	var codiceFiscaleAltroGenitore = values.get('AltroGenitore_CodiceFiscale');
	var sqlGenitoreSecondoPrimo = "SELECT SM_ID PRATICA_BLOCCANTE "+
                                "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
                                "WHERE DETTAGLIO.DAT_PTH = 'Richiedente_CodiceFiscale' "+
                                "AND DETTAGLIO.DAT_VL = '" + codiceFiscaleAltroGenitore +"' "+
                                "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
	                              "AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
	                              "AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
                                //							  						Attesa protocollazione			  			Presentata
	var sqlGenitoreSecondoSecondo = "SELECT SM_ID PRATICA_BLOCCANTE "+
  	                              "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
  	                              "WHERE DETTAGLIO.DAT_PTH = 'AltroGenitore_CodiceFiscale' "+
  	                              "AND DETTAGLIO.DAT_VL = '" + codiceFiscaleAltroGenitore +"' "+
  	                              "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
		                              "AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
		                              "AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
  	                              //							  						Attesa protocollazione			  			Presentata
	var duplicatiGenitoreSecondoPrimo = dizionarioService.getList(null, sqlGenitoreSecondoPrimo);
	var duplicatiGenitoreSecondoSecondo = dizionarioService.getList(null, sqlGenitoreSecondoSecondo);
	if ((duplicatiGenitoreSecondoPrimo.size() > 0) || (duplicatiGenitoreSecondoSecondo.size() > 0)) {
		errors.put('AltroGenitore_CodiceFiscale', 'PraticaDuplicataAltroGenitore_val');
	}
}
//Il codice fiscale dell'altro genitore è già stato utilizzato per presentare una domanda, pertanto non è possibile proseguire
var codiceFiscalePrimoFiglio = values.get('PrimoMinore_CodiceFiscale');
var sqlFiglioPrimoPrimo = "SELECT SM_ID PRATICA_BLOCCANTE "+
             	            "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
             	            "WHERE DETTAGLIO.DAT_PTH = 'PrimoMinore_CodiceFiscale' "+
             	            "AND DETTAGLIO.DAT_VL = '" + codiceFiscalePrimoFiglio +"' "+
             	            "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
													"AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
													"AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
             	            //							  						Attesa protocollazione			  			Presentata
var sqlFiglioPrimoSecondo = "SELECT SM_ID PRATICA_BLOCCANTE "+
             	              "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
             	              "WHERE DETTAGLIO.DAT_PTH = 'SecondoMinore_CodiceFiscale' "+
             	              "AND DETTAGLIO.DAT_VL = '" + codiceFiscalePrimoFiglio +"' "+
             	              "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
														"AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
														"AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
             	              //							  						Attesa protocollazione			  			Presentata
var duplicatiFiglioPrimoPrimo = dizionarioService.getList(null, sqlFiglioPrimoPrimo);
var duplicatiFiglioPrimoSecondo = dizionarioService.getList(null, sqlFiglioPrimoSecondo);
if ((duplicatiFiglioPrimoPrimo.size() > 0) || (duplicatiFiglioPrimoSecondo.size() > 0)) {
	errors.put('PrimoMinore_CodiceFiscale', 'PraticaDuplicataPrimoFiglio_val');
}
//Il codice fiscale del primo minore è già stato utilizzato per presentare una domanda, pertanto non è possibile proseguire
if (!isEmpty('SecondoMinore_CodiceFiscale')) {
	var codiceFiscaleSecondoFiglio = values.get('SecondoMinore_CodiceFiscale');
	var sqlFiglioSecondoPrimo = "SELECT SM_ID PRATICA_BLOCCANTE "+
             	                "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
             	                "WHERE DETTAGLIO.DAT_PTH = 'PrimoMinore_CodiceFiscale' "+
             	                "AND DETTAGLIO.DAT_VL = '" + codiceFiscaleSecondoFiglio +"' "+
             	                "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
														  "AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
														  "AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
             	                //							  						Attesa protocollazione			  			Presentata
	var sqlFiglioSecondoSecondo = "SELECT SM_ID PRATICA_BLOCCANTE "+
             	                  "FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
             	                  "WHERE DETTAGLIO.DAT_PTH = 'SecondoMinore_CodiceFiscale' "+
             	                  "AND DETTAGLIO.DAT_VL = '" + codiceFiscaleSecondoFiglio +"' "+
             	                  "AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
															  "AND PRATICA.SM_TMPL_DN = 'Dote sport famiglie' "+
															  "AND PRATICA.CURRENT_STATE in ('e63f4d0b55f346ca9716a95b48b28196', 'df5f52099a6a4f8894083a9ed5724b51')";
             	                  //							  						Attesa protocollazione			  			Presentata
	var duplicatiFiglioSecondoPrimo = dizionarioService.getList(null, sqlFiglioSecondoPrimo);
	var duplicatiFiglioSecondoSecondo = dizionarioService.getList(null, sqlFiglioSecondoSecondo);
	if ((duplicatiFiglioSecondoPrimo.size() > 0) || (duplicatiFiglioSecondoSecondo.size() > 0)) {
		errors.put('SecondoMinore_CodiceFiscale', 'PraticaDuplicataSecondoFiglio_val');
	}
}
//Il codice fiscale del secondo minore è già stato utilizzato per presentare una domanda, pertanto non è possibile proseguire
//verifica residenza in comune della manifestazione d'interesse
//1. ricercare la lista dei richiedenti e aggiungerla all'elenco dei comuni
//2. per ogni richiedente, valutare se ha presentato in forma singola o associata, in questo secondo caso, ricercare la lista degli associati
var comuneResidenzaRichiedente = values.get('Richiedente_ComuneResidenza');
var isComuneManifestazione = false;
var sqlRichiedenti = "SELECT "+
										 "  CODICEISTAT.DAT_VL AS CODICEISTAT "+
										 "FROM ( "+
										 "  SELECT SM_ID "+
										 "  FROM AG_SM_INSTANCES inst "+
										 "  WHERE inst.SM_TMPL_DN = 'Manifestazione interesse comuni Dote sport' "+
										 "  AND inst.CURRENT_STATE IN ('b6eb1d6973c8432281d3de1f66272093','a849d6d6b98040f092fbb7b814f1da06') "+
										 ") I "+
										 "LEFT OUTER JOIN ( "+
										 "  SELECT FK_ID,DAT_VL "+
										 "  FROM AG_SM_DATA_ENTRIES data_entries "+
										 "  WHERE DAT_PTH = 'Richiedente_Istat' "+
										 ") CODICEISTAT ON I.SM_ID= CODICEISTAT.FK_ID";
var elencoComuniResults = dizionarioService.getList(null, sqlRichiedenti);
var sqlAderenti = "SELECT "+
									"  CODICEISTAT.DAT_VL AS CODICEISTAT "+
									"FROM ( "+
									"  SELECT SM_ID "+
									"  FROM AG_SM_INSTANCES inst "+
									"  WHERE inst.SM_TMPL_DN = 'Manifestazione interesse comuni Dote sport' "+
									"  AND inst.CURRENT_STATE IN ('b6eb1d6973c8432281d3de1f66272093','a849d6d6b98040f092fbb7b814f1da06') "+
									") I "+
									"LEFT OUTER JOIN ( "+
									"  SELECT FK_ID,DAT_VL "+
									"  FROM AG_SM_DATA_ENTRIES data_entries "+
									"  WHERE DAT_PTH like 'ComuniAderenti[%].CodiceIstat' "+
									") CODICEISTAT ON I.SM_ID= CODICEISTAT.FK_ID";
elencoComuniResults.addAll(dizionarioService.getList(null, sqlAderenti));
for (var i=0; i<elencoComuniResults.size(); i++) {
	var codiceIstat = elencoComuniResults.get(i);
	if (codiceIstat == comuneResidenzaRichiedente) {
		isComuneManifestazione = true;
		break;
	}
}
if (!isComuneManifestazione) {
	errors.put('Richiedente_ComuneResidenza','Richiedente_ComuneResidenza_val');
}
if (!isEmpty('AltroGenitore_CodiceFiscale')) {
	var comuneResidenzaAltroGenitore = values.get('AltroGenitore_ComuneResidenza');
	var isComuneAltroManifestazione = false;
	for (var j=0; j<elencoComuniResults.size(); j++) {
		var codiceIstat = elencoComuniResults.get(j);
		if (codiceIstat == comuneResidenzaAltroGenitore) {
			isComuneAltroManifestazione = true;
			break;
		}
	}
	if (!isComuneAltroManifestazione) {
			errors.put('AltroGenitore_ComuneResidenza','AltroGenitore_ComuneResidenza_val');
	}
}
if ((values.get('Richiedente_DichiarazioneResidenza') == 'false') && (values.get('Richiedente_Parentela') == 'tutore')) {
	errors.put('Richiedente_DichiarazioneResidenza','Richiedente_DichiarazioneResidenza_val');
}
if (values.get('AltroGenitore_DichiarazioneResidenza') == 'false') {
	errors.put('AltroGenitore_DichiarazioneResidenza','AltroGenitore_DichiarazioneResidenza_val');
}
var isee = 0;
if (!isEmpty('Richiedente_Isee')) {
	isee = parseFloat(values.get('Richiedente_Isee'));
}
if (isee > 20000) {
	errors.put('Richiedente_Isee','Richiedente_Isee_val');
}
if (isee < 0) {
	errors.put('Richiedente_Isee','IseeNegativo_val');
}
var numFigliMinori = 0;
if (!isEmpty('Richiedente_NumeroMinori')) {
	numFigliMinori = parseFloat(values.get('Richiedente_NumeroMinori'));
}
if (numFigliMinori < 1) {
	errors.put('Richiedente_NumeroMinori','Richiedente_NumeroMinori_val');
}
if (!isValidEmail(values.get('Richiedente_Mail'))) {
	errors.put('Richiedente_Mail','Richiedente_Mail_val');
}
if (!isEmpty('AltroGenitore_CodiceFiscale')) {
	if (!isValidCf(values.get('AltroGenitore_CodiceFiscale'))) {
		errors.put('AltroGenitore_CodiceFiscale','AltroGenitore_CodiceFiscale_val');
	}
}
