//onLoad
//Richiedente_NaturaGiuridica
values.put('statoPratica','In bozza');
values.put('fasePratica','Adesione');
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
	values.put('Richiedente_CodiceFiscale',user.getCodiceFiscale());
	values.put('Richiedente_Mail',user.getEmail());
	values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf != null) {
<<<<<<< HEAD
		if (values.get('Richiedente_NaturaGiuridica') == 'NGPFL') {
			if( mappaValoriSgProf.get('ASCS013') != null ) values.put( 'Richiedente_Cognome', mappaValoriSgProf.get('ASCS013').toString() );
			if( mappaValoriSgProf.get('ASCS000') != null ) values.put( 'Richiedente_Nome', mappaValoriSgProf.get('ASCS000').toString() );
			if( mappaValoriSgProf.get('ASCS002') != null ) values.put( 'Richiedente_DataNascita', mappaValoriSgProf.get('ASCS002').toString() );
			if( (mappaValoriSgProf.get('ASCS003') != null) && (values.get('Richiedente_ComuneNascita') == null)) {
				values.put( 'Richiedente_ComuneNascita', mappaValoriSgProf.get('ASCS003').toString() );
				values.put( 'Richiedente_ComuneNascitaDn', getAnaDenominazione('comune_istat', values.get('Richiedente_ComuneNascita')) );
				var sqlProvinciaNascita = "SELECT ANA_PARENT_CD "+
																	"FROM AG_ANAGRAFICHE "+
																	"WHERE ANA_TIPO = 'comune_istat' "+
																	"AND ANA_CD = '"+values.get('Richiedente_ComuneNascita')+"' ";
				var provinciaNascita = dizionarioService.getList(null, sqlProvinciaNascita);
				if(provinciaNascita.size() > 0) {
					values.put('Richiedente_ProvinciaNascita',''+provinciaNascita.get(0));
					values.put( 'Richiedente_ProvinciaNascitaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_ProvinciaNascita')) );
				}
			}
			if( (mappaValoriSgProf.get('ASCS005') != null) && (values.get('Richiedente_ComuneResidenza') == null)) {
				values.put( 'Richiedente_ComuneResidenza', mappaValoriSgProf.get('ASCS005').toString() );
				values.put( 'Richiedente_ComuneResidenzaDn', getAnaDenominazione('comune_istat', values.get('Richiedente_ComuneResidenza')) );
				var sqlProvinciaResidenza = "SELECT ANA_PARENT_CD "+
																	  "FROM AG_ANAGRAFICHE "+
																	  "WHERE ANA_TIPO = 'comune_istat' "+
																	  "AND ANA_CD = '"+values.get('Richiedente_ComuneResidenza')+"' ";
				var provinciaResidenza = dizionarioService.getList(null, sqlProvinciaResidenza);
				if(sqlProvinciaResidenza.size() > 0) {
					values.put('Richiedente_ProvinciaResidenza',''+provinciaResidenza.get(0));
					values.put( 'Richiedente_ProvinciaResidenzaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_ProvinciaResidenza')) );
				}
			}
		} else if (values.get('Richiedente_NaturaGiuridica') == 'NGPFNL') {
			if( mappaValoriSgProf.get('ASIS015') != null ) values.put( 'Richiedente_Cognome', mappaValoriSgProf.get('ASIS015').toString() );
			if( mappaValoriSgProf.get('ASIS016') != null ) values.put( 'Richiedente_Nome', mappaValoriSgProf.get('ASIS016').toString() );
			if( mappaValoriSgProf.get('ASIS018') != null ) {
				var timestampDataNascita = mappaValoriSgProf.get('ASIS018').toString();
				var giornoNascita = parseInt(timestampDataNascita.substring(0,2),10);
				var meseNascita = parseInt(timestampDataNascita.substring(3,5),10) -1;
				var annoNascita = parseInt(timestampDataNascita.substring(6,10),10);
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
}
values.put('title',values.get('Richiedente_Nome') + ' ' + values.get('Richiedente_Cognome'));
items.get('title').setHidden(true);

//Richiedente_ProvinciaNascita
=======
		if( mappaValoriSgProf.get('ASIS015') != null ) values.put( 'Richiedente_Cognome', mappaValoriSgProf.get('ASIS015').toString() );
		if( mappaValoriSgProf.get('ASIS016') != null ) values.put( 'Richiedente_Nome', mappaValoriSgProf.get('ASIS016').toString() );
		if( mappaValoriSgProf.get('ASIS018') != null ) values.put( 'Richiedente_DataNascita', mappaValoriSgProf.get('ASIS018').toString() );
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
//Richiedente_ComuneNascita
>>>>>>> origin/master
setSelectOptionsCached('Richiedente_ProvinciaNascita','provincia_istat');
setSelectDependedOptionsAndShowCached('Richiedente_ComuneNascita', 'comune_istat', path+'Richiedente_ProvinciaNascita');

//onChange
//SoggettiAmmissibili_CategoriaAppartenenza
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
	errors.put('SoggettoRichiedente_AvvisiPresentazione', 'PraticaDuplicata_val');
}
//verifica residenza in comune della manifestazione d'interesse
//1. ricercare la lista dei richiedenti e aggiungerla all'elenco dei comuni
//2. per ogni richiedente, valutare se ha presentato in forma singola o associata, in questo secondo caso, ricercare la lista degli associati
var comuneResidenzaRichiedente = values.get('Richiedente_ComuneResidenza');
var isComuneManifestazione = false;
var sqlRichiedenti = "SELECT"+
										 "  CODICEISTAT.DAT_VL AS CODICEISTAT"+
										 "FROM ("+
										 "  SELECT SM_ID"+
										 "  FROM AG_SM_INSTANCES inst"+
										 "  WHERE inst.SM_TMPL_DN = 'Manifestazione interesse comuni Dote sport'"+
										 "  AND inst.CURRENT_STATE IN ('b6eb1d6973c8432281d3de1f66272093','a849d6d6b98040f092fbb7b814f1da06')"+
										 ") I"+
										 "LEFT OUTER JOIN ("+
										 "  SELECT FK_ID,DAT_VL"+
										 "  FROM AG_SM_DATA_ENTRIES data_entries"+
										 "  WHERE DAT_PTH = 'Richiedente_Istat'"+
										 ") CODICEISTAT ON I.SM_ID= CODICEISTAT.FK_ID";
var elencoComuniResults = dizionarioService.getList(null, sqlRichiedenti);
var sqlAderenti = "SELECT"+
									"  CODICEISTAT.DAT_VL AS CODICEISTAT"+
									"FROM ("+
									"  SELECT SM_ID"+
									"  FROM AG_SM_INSTANCES inst"+
									"  WHERE inst.SM_TMPL_DN = 'Manifestazione interesse comuni Dote sport'"+
									"  AND inst.CURRENT_STATE IN ('b6eb1d6973c8432281d3de1f66272093','a849d6d6b98040f092fbb7b814f1da06')"+
									") I"+
									"LEFT OUTER JOIN ("+
									"  SELECT FK_ID,DAT_VL"+
									"  FROM AG_SM_DATA_ENTRIES data_entries"+
									"  WHERE DAT_PTH like 'ComuniAderenti[%].CodiceIstat'"+
									") CODICEISTAT ON I.SM_ID= CODICEISTAT.FK_ID";
elencoComuniResults.addAll(dizionarioService.getList(null, sqlAderenti));
for (var i=0; i<elencoComuniResults.size(); i++) {
	var codiceIstat = professionisti.get(i)[0];
	if (codiceIstat == comuneResidenzaRichiedente) {
		isComuneManifestazione = true;
		break;
	}
}
if (!isComuneManifestazione) {
	errors.put('Richiedente_ComuneResidenza','Richiedente_ComuneResidenza_val');
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_Dpr');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_Dpr', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_Veridicita');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_Veridicita', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_PresaVisione');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_PresaVisione', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_PrendereAtto');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_PrendereAtto', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_ProvvedutoCaricamento');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_ProvvedutoCaricamento', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_PossessoRequisiti');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_PossessoRequisiti', 'Dichiarazioni_val');
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
{
    var dichiarazioni_value=  values.get('Dichiarazioni_SpeseAmmissibili');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_SpeseAmmissibili', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_Polisportiva');
    if((values.get('SoggettiAmmissibili_CategoriaAppartenenza') != 'uno') && (dichiarazioni_value=='false')) {
        errors.put('Dichiarazioni_Polisportiva', 'Dichiarazioni_val');
    }
}
{
	var ritenuta = false;
	var noRitenuta = false;
	var deroga = false;
	var noNotivoDeroga = ((values.get('Dichiarazioni_SpecificareLegge') == null) || (values.get('Dichiarazioni_SpecificareLegge') == ''));
	var i = 0;
	while (values.get('Dichiarazioni_EnteNonCommerciale['+i+']') != null) {
		if (values.get('Dichiarazioni_EnteNonCommerciale['+i+']') == 'ritenuta') {
			ritenuta = true;
		} else {
			noRitenuta = true;
		}
		if (values.get('Dichiarazioni_EnteNonCommerciale['+i+']') == 'deroga') {
			deroga = true;
		}
		i++;
	}
	if ((ritenuta) && (noRitenuta)) {
		errors.put('Dichiarazioni_EnteNonCommerciale','Dichiarazioni_EnteNonCommerciale_val');
	}
	if (deroga && noNotivoDeroga) {
		errors.put('Dichiarazioni_SpecificareLegge','Dichiarazioni_SpecificareLegge_val');
	}
}
//percentuale di detrazione
{
    if (!isEmpty('Dichiarazioni_Detrazione')) {
        var dichiarazioni_IvaPercentualeDetrazione =  parseFloat(values.get('Dichiarazioni_Detrazione'));
        if(dichiarazioni_IvaPercentualeDetrazione>=100 || dichiarazioni_IvaPercentualeDetrazione<=0)
        	errors.put('Dichiarazioni_Detrazione','Dichiarazioni_Detrazione_val');
    }
}
{
	var categoriaDue = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'due');
	var categoriaTre = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'tre');
	var categoriaQuattro = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'quattro');
	if (isEmpty('Federazione_AppartenenzaNome') && categoriaDue) {
		errors.put('Federazione_AppartenenzaNome','Federazione_val');
	}
	if (isEmpty('DisciplineEnti_AppartenenzaNome') && categoriaTre) {
		errors.put('DisciplineEnti_AppartenenzaNome','Federazione_val');
	}
	if (isEmpty('FederazioneCip_AppartenenzaNome') && categoriaQuattro) {
		errors.put('FederazioneCip_AppartenenzaNome','Federazione_val');
	}
}
	//formato email
if (!isEmpty('SoggettoRichiedente_Mail')) {
	if (!isValidEmail(values.get('SoggettoRichiedente_Mail'))) {
	  errors.put('SoggettoRichiedente_Mail','SoggettoRichiedente_Mail_val');
	}
}
if (!isEmpty('SoggettoRichiedente_Pec')) {
	if (!isValidEmail(values.get('SoggettoRichiedente_Pec'))) {
	  errors.put('SoggettoRichiedente_Pec','SoggettoRichiedente_Pec_val');
	}
}
