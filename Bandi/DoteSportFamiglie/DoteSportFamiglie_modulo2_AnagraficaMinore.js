//onLoad
//PrimoMinore_TipologiaDote
items.get('PrimoMinore_TipologiaDote').setHidden(isEmpty('PrimoMinore_DataNascita'));
var dataStartTeen = new Date(1998, 9, 19, 0, 0, 0, 0).getTime();
var dataStartJunior = new Date(2002, 9, 19, 0, 0, 0, 0).getTime();
var dataEndJunior = new Date(2009, 9, 20, 0, 0, 0, 0).getTime();
if (!isEmpty('PrimoMinore_DataNascita')) {
	var dataNascita = Math.floor(parseFloat(values.get('PrimoMinore_DataNascita')));
	if ((dataNascita >= dataStartJunior) && (dataNascita < dataEndJunior)) {
		values.put('PrimoMinore_TipologiaDote','Dote Junior');
	} else if ((dataNascita >= dataStartTeen) && (dataNascita < dataStartJunior)) {
		values.put('PrimoMinore_TipologiaDote','Dote Teen');
	}
}
//PrimoMinore_RicercaCodiceFiscale
var cfAssociazionePresente = (!isEmpty('PrimoMinore_RicercaCodiceFiscale'));
items.get('PrimoMinore_EtichettaInserisciAssociazione').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaDenominazione').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaIndirizzo').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaComune').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaProvincia').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaFsnDsa').setHidden(!cfAssociazionePresente);
//SecondoMinore_TipologiaDote
items.get('SecondoMinore_TipologiaDote').setHidden(isEmpty('SecondoMinore_DataNascita'));
var dataStartSecondoTeen = new Date(1998, 9, 19, 0, 0, 0, 0).getTime();
var dataStartSecondoJunior = new Date(2002, 9, 19, 0, 0, 0, 0).getTime();
var dataEndSecondoJunior = new Date(2009, 9, 20, 0, 0, 0, 0).getTime();
if (!isEmpty('SecondoMinore_DataNascita')) {
	var dataNascitaSecondo = Math.floor(parseFloat(values.get('SecondoMinore_DataNascita')));
	if ((dataNascitaSecondo >= dataStartSecondoJunior) && (dataNascitaSecondo < dataEndSecondoJunior)) {
		values.put('SecondoMinore_TipologiaDote','Dote Junior');
	} else if ((dataNascitaSecondo >= dataStartSecondoTeen) && (dataNascitaSecondo < dataStartSecondoJunior)) {
		values.put('SecondoMinore_TipologiaDote','Dote Teen');
	}
}
//SecondoMinore_RicercaCodiceFiscale
var cfAssociazioneSecondoPresente = (!isEmpty('SecondoMinore_RicercaCodiceFiscale'));
items.get('SecondoMinore_EtichettaInserisciAssociazione').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaDenominazione').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaIndirizzo').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaComune').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaProvincia').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaFsnDsa').setHidden(!cfAssociazioneSecondoPresente);

//onChange
//PrimoMinore_DataNascita
var dataStartTeen = new Date(1998, 9, 19, 0, 0, 0, 0).getTime();
var dataStartJunior = new Date(2002, 9, 19, 0, 0, 0, 0).getTime();
var dataEndJunior = new Date(2009, 9, 20, 0, 0, 0, 0).getTime();
if (!isEmpty('PrimoMinore_DataNascita')) {
	var dataNascita = Math.floor(parseFloat(values.get('PrimoMinore_DataNascita')));
	if ((dataNascita >= dataStartJunior) && (dataNascita < dataEndJunior)) {
		values.put('PrimoMinore_TipologiaDote','Dote Junior');
	} else if ((dataNascita >= dataStartTeen) && (dataNascita < dataStartJunior)) {
		values.put('PrimoMinore_TipologiaDote','Dote Teen');
	}
}
//PrimoMinore_RicercaCodiceFiscale
values.remove('PrimoMinore_RicercaDenominazione');
values.remove('PrimoMinore_RicercaIndirizzo');
values.remove('PrimoMinore_RicercaComune');
values.remove('PrimoMinore_RicercaProvincia');
values.remove('PrimoMinore_RicercaFsnDsa');
var cfAssociazione = values.get('PrimoMinore_RicercaCodiceFiscale');
var isAssociazioneTrovata = false;
var conisql = "SELECT ANA_DS "+
							"FROM AG_ANAGRAFICHE "+
							"WHERE ANA_TIPO = 'associati_coni' "
							"AND ANA_CD = '"+cfAssociazione+"'";
var associazione = dizionarioService.getList(null, conisql);
if(associazione.size() > 0) {
	isAssociazioneTrovata = true;
	var datiAssociazioneStr = ''+associazione.get(0);
	var datiAssociazione = datiAssociazioneStr.split("|");
	values.put('PrimoMinore_RicercaDenominazione',''+datiAssociazione[1]);
	values.put('PrimoMinore_RicercaIndirizzo',''+datiAssociazione[2]);
	values.put('PrimoMinore_RicercaComune',''+datiAssociazione[3]);
	values.put('PrimoMinore_RicercaProvincia',''+datiAssociazione[4]);
	values.put('PrimoMinore_RicercaFsnDsa',''+datiAssociazione[5]);
} else {
	isAssociazioneTrovata = false;
}
items.get('PrimoMinore_EtichettaInserisciAssociazione').setHidden(!isAssociazioneTrovata);
items.get('PrimoMinore_RicercaDenominazione').setReadonly(isAssociazioneTrovata);
items.get('PrimoMinore_RicercaIndirizzo').setReadonly(isAssociazioneTrovata);
items.get('PrimoMinore_RicercaComune').setReadonly(isAssociazioneTrovata);
items.get('PrimoMinore_RicercaProvincia').setReadonly(isAssociazioneTrovata);
items.get('PrimoMinore_RicercaFsnDsa').setReadonly(isAssociazioneTrovata);
items.get('PrimoMinore_RicercaDenominazione').setRequired(!isAssociazioneTrovata);
items.get('PrimoMinore_RicercaIndirizzo').setRequired(!isAssociazioneTrovata);
items.get('PrimoMinore_RicercaComune').setRequired(!isAssociazioneTrovata);
items.get('PrimoMinore_RicercaProvincia').setRequired(!isAssociazioneTrovata);
items.get('PrimoMinore_RicercaFsnDsa').setRequired(!isAssociazioneTrovata);
//SecondoMinore_DataNascita
var dataStartSecondoTeen = new Date(1998, 9, 19, 0, 0, 0, 0).getTime();
var dataStartSecondoJunior = new Date(2002, 9, 19, 0, 0, 0, 0).getTime();
var dataEndSecondoJunior = new Date(2009, 9, 20, 0, 0, 0, 0).getTime();
if (!isEmpty('SecondoMinore_DataNascita')) {
	var dataNascitaSecondo = Math.floor(parseFloat(values.get('SecondoMinore_DataNascita')));
	if ((dataNascitaSecondo >= dataStartSecondoJunior) && (dataNascitaSecondo < dataEndSecondoJunior)) {
		values.put('SecondoMinore_TipologiaDote','Dote Junior');
	} else if ((dataNascitaSecondo >= dataStartSecondoTeen) && (dataNascitaSecondo < dataStartSecondoJunior)) {
		values.put('SecondoMinore_TipologiaDote','Dote Teen');
	}
}
//SecondoMinore_RicercaCodiceFiscale
values.remove('SecondoMinore_RicercaDenominazione');
values.remove('SecondoMinore_RicercaIndirizzo');
values.remove('SecondoMinore_RicercaComune');
values.remove('SecondoMinore_RicercaProvincia');
values.remove('SecondoMinore_RicercaFsnDsa');
var cfAssociazioneSecondo = values.get('SecondoMinore_RicercaCodiceFiscale');
var isAssociazioneSecondoTrovata = false;
var conisecondosql = "SELECT ANA_DS "+
							"FROM AG_ANAGRAFICHE "+
							"WHERE ANA_TIPO = 'associati_coni' "+
							"AND ANA_CD = '"+cfAssociazioneSecondo+"'";
var associazioneSecondo = dizionarioService.getList(null, conisecondosql);
if(associazioneSecondo.size() > 0) {
	isAssociazioneSecondoTrovata = true;
	var datiAssociazioneSecondoStr = ''+associazioneSecondo.get(0);
	var datiAssociazioneSecondo = datiAssociazioneSecondoStr.split("|");
	values.put('SecondoMinore_RicercaDenominazione',''+datiAssociazioneSecondo[1]);
	values.put('SecondoMinore_RicercaIndirizzo',''+datiAssociazioneSecondo[2]);
	values.put('SecondoMinore_RicercaComune',''+datiAssociazioneSecondo[3]);
	values.put('SecondoMinore_RicercaProvincia',''+datiAssociazioneSecondo[4]);
	values.put('SecondoMinore_RicercaFsnDsa',''+datiAssociazioneSecondo[5]);
} else {
	isAssociazioneTrovata = false;
}
items.get('SecondoMinore_EtichettaInserisciAssociazione').setHidden(!isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaDenominazione').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaIndirizzo').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaComune').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaProvincia').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaFsnDsa').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaDenominazione').setRequired(!isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaIndirizzo').setRequired(!isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaComune').setRequired(!isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaProvincia').setRequired(!isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaFsnDsa').setRequired(!isAssociazioneSecondoTrovata);

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
  if (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno') {
	errors.put('Squadre_Presenza', 'PraticaDuplicata_val');
  } else {
    errors.put('Etichetta_TitoliSportivi', 'PraticaDuplicata_val');
  }
}
	//numero tesserati non negativo
if (!isEmpty('Tesserati_TotaleLineaDue')) {
	if (parseFloat(values.get('Tesserati_TotaleLineaDue')) < 0) {
		errors.put('Tesserati_TotaleLineaDue','NumeroNonNegativo_val');
	}
}
if (!isEmpty('Tesserati_UnderDiciottoLineaDue')) {
	if (parseFloat(values.get('Tesserati_UnderDiciottoLineaDue')) < 0) {
		errors.put('Tesserati_UnderDiciottoLineaDue','NumeroNonNegativo_val');
	}
}
	//presenza squadre
if ((values.get('Squadre_GiovanileMaschile') == 'false') && (values.get('Squadre_GiovanileFemminile') == 'false') && (values.get('Squadre_AssolutaMaschile') == 'false') && (values.get('Squadre_AssolutaFemminile') == 'false')) {
	errors.put('Squadre_Presenza','Squadre_Presenza_val');
}
