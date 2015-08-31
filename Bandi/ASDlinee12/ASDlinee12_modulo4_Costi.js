if (values.get('SoggettiAmmissibili_GestioneImpianti') == 'false') {
	values.remove('Spese_Generali');
}

var totaleSpese = 0;
items.get('Spese_Generali').setHidden(values.get('SoggettiAmmissibili_GestioneImpianti') != 'true');
if (isEmpty('Spese_Compensi')) {
	values.put('Spese_Compensi',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Compensi'));
}
if (isEmpty('Spese_Affitto')) {
	values.put('Spese_Affitto',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Affitto'));
}
if (isEmpty('Spese_Abbigliamento')) {
	values.put('Spese_Abbigliamento',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Abbigliamento'));
}
if (isEmpty('Spese_Affiliazione')) {
	values.put('Spese_Affiliazione',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Affiliazione'));
}
if (isEmpty('Spese_Noleggio')) {
	values.put('Spese_Noleggio',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Noleggio'));
}
if (isEmpty('Spese_IscrizioneCampionati')) {
	values.put('Spese_IscrizioneCampionati',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_IscrizioneCampionati'));
}
if (isEmpty('Spese_IscrizioneManifestazioni')) {
	values.put('Spese_IscrizioneManifestazioni',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_IscrizioneManifestazioni'));
}
if (isEmpty('Spese_Polizze')) {
	values.put('Spese_Polizze',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Polizze'));
}
if (isEmpty('Spese_Defibrillatori')) {
	values.put('Spese_Defibrillatori',''+0);
} else {
	totaleSpese += parseFloat(values.get('Spese_Defibrillatori'));
}
if (values.get('SoggettiAmmissibili_GestioneImpianti') == 'true') {
	if (isEmpty('Spese_Generali')) {
		values.put('Spese_Generali',''+0);
	} else {
		totaleSpese += parseFloat(values.get('Spese_Generali'));
	}
}
values.put('Spese_TotaleUscite',''+totaleSpese.toFixed(2));
var contributoRichiesto = 0;
if (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno') {
	contributoRichiesto = totaleSpese * 0.7;
	if (contributoRichiesto > 10000) {
		contributoRichiesto = 10000;
	}
} else {
	contributoRichiesto = totaleSpese * 0.5;
	if (contributoRichiesto > 5000) {
		contributoRichiesto = 5000;
	}
}
values.put('Spese_ContributoConcedibile',''+contributoRichiesto.toFixed(2));

// Validazione
var polizze = 0;
if (!isEmpty('Spese_Polizze')) {
	polizze = parseFloat(values.get('Spese_Polizze'));
}
if (polizze > 3000) {
	errors.put('Spese_Polizze','Spese_Polizze_val');
}
var totaleUscite = 0;
if (!isEmpty('Spese_TotaleUscite')) {
	totaleUscite = parseFloat(values.get('Spese_TotaleUscite'));
}
var speseGenerali = 0;
if (!isEmpty('Spese_Generali')) {
	speseGenerali = parseFloat(values.get('Spese_Generali'));
}
var altreSpese = totaleUscite - speseGenerali;
if (altreSpese > 0) {
	if ((speseGenerali / altreSpese) > 0.05) {
		errors.put('Spese_Generali','Spese_Generali_val');
	}
} else {
	errors.put('Spese_Generali','Spese_Generali_val');
}
if ((values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno') && (totaleUscite < 7142.86)) {
	errors.put('Spese_TotaleUscite','Spese_TotaleUscite_uno_val');
}
if (((values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'due') || (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'tre')) && (totaleUscite < 4000)) {
	errors.put('Spese_TotaleUscite','Spese_TotaleUscite_duetre_val');
}
if ((values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'quattro') && (totaleUscite < 2000)) {
	errors.put('Spese_TotaleUscite','Spese_TotaleUscite_quattro_val');
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
	errors.put('Spese_TotaleUscite', 'PraticaDuplicata_val');
}
//spese non negative
if (!isEmpty('Spese_Compensi')) {
	if (parseFloat(values.get('Spese_Compensi')) < 0) {
		errors.put('Spese_Compensi','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Affitto')) {
	if (parseFloat(values.get('Spese_Affitto')) < 0) {
		errors.put('Spese_Affitto','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Abbigliamento')) {
	if (parseFloat(values.get('Spese_Abbigliamento')) < 0) {
		errors.put('Spese_Abbigliamento','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Affiliazione')) {
	if (parseFloat(values.get('Spese_Affiliazione')) < 0) {
		errors.put('Spese_Affiliazione','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Noleggio')) {
	if (parseFloat(values.get('Spese_Noleggio')) < 0) {
		errors.put('Spese_Noleggio','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_IscrizioneCampionati')) {
	if (parseFloat(values.get('Spese_IscrizioneCampionati')) < 0) {
		errors.put('Spese_IscrizioneCampionati','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_IscrizioneManifestazioni')) {
	if (parseFloat(values.get('Spese_IscrizioneManifestazioni')) < 0) {
		errors.put('Spese_IscrizioneManifestazioni','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Polizze')) {
	if (parseFloat(values.get('Spese_Polizze')) < 0) {
		errors.put('Spese_Polizze','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Defibrillatori')) {
	if (parseFloat(values.get('Spese_Defibrillatori')) < 0) {
		errors.put('Spese_Defibrillatori','SpeseNonNegative_val');
	}
}
if (!isEmpty('Spese_Generali')) {
	if (parseFloat(values.get('Spese_Generali')) < 0) {
		errors.put('Spese_Generali','SpeseNonNegative_val');
	}
}
