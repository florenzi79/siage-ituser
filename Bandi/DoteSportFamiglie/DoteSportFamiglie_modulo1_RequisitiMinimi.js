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
		if( mappaValoriSgProf.get('ASIS018') != null) values.put( 'Richiedente_DataNascita', mappaValoriSgProf.get('ASIS018').toString() );
		if( mappaValoriSgProf.get('ASIS009') != null ) values.put( 'Richiedente_ComuneNascita', mappaValoriSgProf.get('ASIS009').toString() );
		if( mappaValoriSgProf.get('ASIS010') != null ) values.put( 'Richiedente_ProvinciaNascita', mappaValoriSgProf.get('ASIS010').toString() );
		if( mappaValoriSgProf.get('ASIS011') != null ) values.put( 'Richiedente_IndirizzoResidenza', mappaValoriSgProf.get('ASIS011').toString() );
		if( mappaValoriSgProf.get('ASIS012') != null ) values.put( 'Richiedente_ComuneResidenza', mappaValoriSgProf.get('ASIS012').toString() );
		if( mappaValoriSgProf.get('ASIS013') != null ) values.put( 'Richiedente_ProvinciaResidenza', mappaValoriSgProf.get('ASIS013').toString() );
	}
}
//titolo pratica
{
	values.put('title',values.get('SoggettoRichiedente_Denominazione') );
	items.get('title').setHidden(true);
}
var cfLinea1 = ['80109730582','00493410583','00528960588','96197870585','05275570587',
                '80083470015','96321650580','97175110580','08272960587','05843520585',
                '05267450582','05228470588','05299330588','05257340587','05263360587',
                '96072950585','05288960585','05291670585','05248370586','05277720586',
                '06369180150','05284670584','05267070588','05268880589','05267300589',
                '80014530325','05281810589','97015510585','97015820588','05271310582',
                '06369340150','97016560159','97006060582','97015720580','05027640159',
                '80181390586','05244400585','05301810585','96033100585','97015850585',
                '80063130159','96135770582','95003780103','05267420585','97545260586',
                '97626090589','97626110585','97736010014','97626100586','97626120584',
                '97388210581','97497320156','03253030120','04300791003'];
var cfRichiedente = values.get('SoggettoRichiedente_CodiceFiscale');
var k = 0;
var cfPresente = false;
while (k<cfLinea1.length) {
	if (cfRichiedente == cfLinea1[k]) {
		cfPresente = true;
	}
	k++;
}
if (isEmpty('SoggettiAmmissibili_CategoriaAppartenenza')) {
  if (cfPresente) {
    values.put('SoggettiAmmissibili_CategoriaAppartenenza','uno');
  }
}
var richiedente_NatGiu = values.get('Richiedente_NaturaGiuridica');
if ((richiedente_NatGiu != null) && (richiedente_NatGiu != '')) {
	var codicePubblico = richiedente_NatGiu.substring(0,3);
	var pubblico = ((codicePubblico == '2.4'));
	items.get('Dichiarazioni_AttivitaCommerciale').setRequired(!pubblico);
	items.get('Dichiarazioni_RegimeImpresa').setRequired(!pubblico);
	items.get('Dichiarazioni_EnteNonCommerciale').setRequired(!pubblico);
	items.get('Dichiarazioni_Iva').setRequired(!pubblico);
}
//deroga ritenuta
if (values.get('Dichiarazioni_EnteNonCommerciale')!=null) {
	var i = 0;
	var deroga = false;
	while (values.get('Dichiarazioni_EnteNonCommerciale['+i+']') != null) {
		if (values.get('Dichiarazioni_EnteNonCommerciale['+i+']') == 'deroga') {
			deroga = true;
		}
		i++;
	}
	items.get('Dichiarazioni_SpecificareLegge').setHidden(!deroga);
	items.get('Dichiarazioni_SpecificareLegge').setRequired(deroga);
}
//percentuale detrazione
var ivaParziale = (values.get('Dichiarazioni_Iva')=='parzialmente');
items.get('Dichiarazioni_Detrazione').setHidden(!ivaParziale);
items.get('Dichiarazioni_Detrazione').setRequired(ivaParziale);
//SoggettiAmmissibili_CategoriaAppartenenza
{
	var categoriaUno = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno');
	var categoriaDue = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'due');
	var categoriaTre = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'tre');
	var categoriaQuattro = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'quattro');
	items.get('SoggettiAmmissibili_Polisportiva').setHidden(categoriaUno || isEmpty('SoggettiAmmissibili_CategoriaAppartenenza'));
	items.get('SoggettiAmmissibili_Polisportiva').setRequired(!categoriaUno && !isEmpty('SoggettiAmmissibili_CategoriaAppartenenza'));
	fieldsets.get('e46f9164a3254c1ba7558d3efea8b33e').setHidden(!categoriaDue);
	items.get('Federazione_AppartenenzaNome').setRequired(categoriaDue);
	items.get('Federazione_CodiceAffiliazione').setRequired(categoriaDue);
	items.get('Federazione_RegistroConi').setRequired(categoriaDue);
	fieldsets.get('3f06c854b4e74908a1702331e6859b6e').setHidden(!categoriaTre);
	items.get('DisciplineEnti_AppartenenzaNome').setRequired(categoriaTre);
	items.get('DisciplineEnti_CodiceAffiliazione').setRequired(categoriaTre);
	items.get('DisciplineEnti_RegistroConi').setRequired(categoriaTre);
	fieldsets.get('b4c92b5cc530475ebdb5e5778496d341').setHidden(!categoriaQuattro);
	items.get('FederazioneCip_AppartenenzaNome').setRequired(categoriaQuattro);
	items.get('FederazioneCip_CodiceAffiliazione').setRequired(categoriaQuattro);
	items.get('FederazioneCip_RegistroParallelo').setRequired(categoriaQuattro);
	items.get('Dichiarazioni_Polisportiva').setHidden(categoriaUno || isEmpty('SoggettiAmmissibili_CategoriaAppartenenza'));
	items.get('Dichiarazioni_Polisportiva').setRequired(!categoriaUno && !isEmpty('SoggettiAmmissibili_CategoriaAppartenenza'));
}
//Dichiarazioni_NoContributiBandi
var domandaAltriBandi = (values.get('Dichiarazioni_NoContributiBandi') == 'true');
items.get('Dichiarazioni_ContributiBandiSpecificare').setHidden(!domandaAltriBandi);
items.get('Dichiarazioni_ContributiBandiSpecificare').setRequired(domandaAltriBandi);
items.get('Dichiarazioni_NoContributiSpese').setHidden(!domandaAltriBandi);
items.get('Dichiarazioni_NoContributiSpese').setRequired(domandaAltriBandi);
//Dichiarazioni_NoContributiSpese
var speseAltriBandi = (values.get('Dichiarazioni_NoContributiSpese') == 'true');
items.get('Dichiarazioni_ContributiSpeseSpecificare').setHidden(!speseAltriBandi);
items.get('Dichiarazioni_ContributiSpeseSpecificare').setRequired(speseAltriBandi);

//onChange
//SoggettiAmmissibili_CategoriaAppartenenza
values.remove('SoggettiAmmissibili_Polisportiva');
values.remove('Federazione_AppartenenzaNome');
values.remove('Federazione_CodiceAffiliazione');
values.remove('Federazione_RegistroConi');
values.remove('DisciplineEnti_AppartenenzaNome');
values.remove('DisciplineEnti_CodiceAffiliazione');
values.remove('DisciplineEnti_RegistroConi');
values.remove('FederazioneCip_AppartenenzaNome');
values.remove('FederazioneCip_CodiceAffiliazione');
values.remove('FederazioneCip_RegistroParallelo');
values.remove('FederazioneCip_RegistroConi');
values.remove('Dichiarazioni_Polisportiva');
var categoriaUno = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno');
var categoriaDue = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'due');
var categoriaTre = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'tre');
var categoriaQuattro = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'quattro');
items.get('SoggettiAmmissibili_Polisportiva').setHidden(categoriaUno);
items.get('SoggettiAmmissibili_Polisportiva').setRequired(!categoriaUno);
fieldsets.get('e46f9164a3254c1ba7558d3efea8b33e').setHidden(!categoriaDue);
items.get('Federazione_AppartenenzaNome').setRequired(categoriaDue);
items.get('Federazione_CodiceAffiliazione').setRequired(categoriaDue);
items.get('Federazione_RegistroConi').setRequired(categoriaDue);
fieldsets.get('3f06c854b4e74908a1702331e6859b6e').setHidden(!categoriaTre);
items.get('DisciplineEnti_AppartenenzaNome').setRequired(categoriaTre);
items.get('DisciplineEnti_CodiceAffiliazione').setRequired(categoriaTre);
items.get('DisciplineEnti_RegistroConi').setRequired(categoriaTre);
fieldsets.get('b4c92b5cc530475ebdb5e5778496d341').setHidden(!categoriaQuattro);
items.get('FederazioneCip_AppartenenzaNome').setRequired(categoriaQuattro);
items.get('FederazioneCip_CodiceAffiliazione').setRequired(categoriaQuattro);
items.get('FederazioneCip_RegistroParallelo').setRequired(categoriaQuattro);
items.get('Dichiarazioni_Polisportiva').setHidden(categoriaUno);
items.get('Dichiarazioni_Polisportiva').setRequired(!categoriaUno);
//Dichiarazioni_NoContributiBandi
values.remove('Dichiarazioni_ContributiBandiSpecificare');
values.remove('Dichiarazioni_NoContributiSpese');
var domandaAltriBandi = (values.get('Dichiarazioni_NoContributiBandi') == 'true');
items.get('Dichiarazioni_ContributiBandiSpecificare').setHidden(!domandaAltriBandi);
items.get('Dichiarazioni_ContributiBandiSpecificare').setRequired(domandaAltriBandi);
items.get('Dichiarazioni_NoContributiSpese').setHidden(!domandaAltriBandi);
items.get('Dichiarazioni_NoContributiSpese').setRequired(domandaAltriBandi);
//Dichiarazioni_NoContributiSpese
values.remove('Dichiarazioni_ContributiSpeseSpecificare');
var speseAltriBandi = (values.get('Dichiarazioni_NoContributiSpese') == 'true');
items.get('Dichiarazioni_ContributiSpeseSpecificare').setHidden(!speseAltriBandi);
items.get('Dichiarazioni_ContributiSpeseSpecificare').setRequired(speseAltriBandi);
//Dichiarazioni_EnteNonCommerciale
var i = 0;
var isDeroga = false;
while ((values.get('Dichiarazioni_EnteNonCommerciale['+i+']') != null) && (values.get('Dichiarazioni_EnteNonCommerciale['+i+']') != '')) {
	if ( values.get('Dichiarazioni_EnteNonCommerciale['+i+']') == 'deroga') {
		isDeroga = true;
	}
	i++;
}
if (!isDeroga) {
	values.remove('Dichiarazioni_SpecificareLegge');
}
items.get('Dichiarazioni_SpecificareLegge').setHidden(!isDeroga);
items.get('Dichiarazioni_SpecificareLegge').setRequired(isDeroga);
//Dichiarazioni_Iva
values.remove('Dichiarazioni_Detrazione');
var ivaParziale = (values.get('Dichiarazioni_Iva')=='parzialmente');
items.get('Dichiarazioni_Detrazione').setHidden(!ivaParziale);
items.get('Dichiarazioni_Detrazione').setRequired(ivaParziale);

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
//codici fiscali linea 1
if (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno') {
	var cfLinea1 = ['80109730582','00493410583','00528960588','96197870585','05275570587',
	                '80083470015','96321650580','97175110580','08272960587','05843520585',
	                '05267450582','05228470588','05299330588','05257340587','05263360587',
	                '96072950585','05288960585','05291670585','05248370586','05277720586',
	                '06369180150','05284670584','05267070588','05268880589','05267300589',
	                '80014530325','05281810589','97015510585','97015820588','05271310582',
	                '06369340150','97016560159','97006060582','97015720580','05027640159',
	                '80181390586','05244400585','05301810585','96033100585','97015850585',
	                '80063130159','96135770582','95003780103','05267420585','97545260586',
	                '97626090589','97626110585','97736010014','97626100586','97626120584',
	                '97388210581','97497320156','03253030120','04300791003'];
	var cfRichiedente = values.get('SoggettoRichiedente_CodiceFiscale');
	var k = 0;
	var cfPresente = false;
	while (k<cfLinea1.length) {
  	if (cfRichiedente == cfLinea1[k]) {
  		cfPresente = true;
  	}
  	k++;
	}
	if (!cfPresente) {
  	errors.put('SoggettiAmmissibili_CategoriaAppartenenza','Linea1NonAmmessa_val');
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
