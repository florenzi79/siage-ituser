//onLoad
//PrimoMinore_TipologiaDote
items.get('PrimoMinore_TipologiaDote').setHidden(isEmpty('PrimoMinore_DataNascita'));
var dataStartTeen = new Date(1998, 9, 19, 0, 0, 0, 0).getTime();
var dataStartJunior = new Date(2001, 9, 19, 0, 0, 0, 0).getTime();
var dataEndJunior = new Date(2007, 9, 20, 0, 0, 0, 0).getTime();
if (!isEmpty('PrimoMinore_DataNascita')) {
	var dataNascita = Math.floor(parseFloat(values.get('PrimoMinore_DataNascita')));
	if ((dataNascita >= dataStartJunior) && (dataNascita < dataEndJunior)) {
		values.put('PrimoMinore_TipologiaDote','Dote Junior');
	} else if ((dataNascita >= dataStartTeen) && (dataNascita < dataStartJunior)) {
		values.put('PrimoMinore_TipologiaDote','Dote Teen');
	} else {
	    values.put('PrimoMinore_TipologiaDote','La data di nascita inserita non rispetta le regole previste dal bando');
	}
}
//PrimoMinore_RicercaCodiceFiscale
var cfAssociazionePresente = (!isEmpty('PrimoMinore_RicercaCodiceFiscale'));
var isAssociazioneTrovata = (values.get('PrimoMinore_EsitoRicerca') == 'ok');
items.get('PrimoMinore_EtichettaInserisciAssociazione').setHidden(!cfAssociazionePresente || isAssociazioneTrovata);
items.get('PrimoMinore_RicercaDenominazione').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaIndirizzo').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaComune').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaProvincia').setHidden(!cfAssociazionePresente);
items.get('PrimoMinore_RicercaFsnDsa').setHidden(!cfAssociazionePresente);
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
//PrimoMinore_Disabile
var isDisabile = (values.get('PrimoMinore_Disabile') == 'true');
items.get('PrimoMinore_CertificatoDisabile').setHidden(!isDisabile);
items.get('PrimoMinore_CertificatoDisabile').setRequired(isDisabile);
items.get('PrimoMinore_EnteCertificatoDisabile').setHidden(!isDisabile);
items.get('PrimoMinore_EnteCertificatoDisabile').setRequired(isDisabile);
//PrimoMinore_DoteAssegnabile
if (isEmpty('PrimoMinore_CostoCorso')) {
	values.put('PrimoMinore_DoteAssegnabile',''+0);
}
//PrimoMinore_SecondaDote
var isSecondoMinore = (values.get('PrimoMinore_SecondaDote') == 'true');
fieldsets.get('45701b65c0614990a0c678878b11f38a').setHidden('PrimoMinore_SecondaDote');
items.get('SecondoMinore_Nome').setRequired(isSecondoMinore);
items.get('SecondoMinore_Cognome').setRequired(isSecondoMinore);
items.get('SecondoMinore_CodiceFiscale').setRequired(isSecondoMinore);
items.get('SecondoMinore_DataNascita').setRequired(isSecondoMinore);
items.get('SecondoMinore_Disabile').setRequired(isSecondoMinore);
items.get('SecondoMinore_Iscrizione').setRequired(isSecondoMinore);
items.get('SecondoMinore_RicercaCodiceFiscale').setRequired(isSecondoMinore);
items.get('SecondoMinore_DisciplinaSportiva').setRequired(isSecondoMinore);
items.get('SecondoMinore_CostoCorso').setRequired(isSecondoMinore);
items.get('SecondoMinore_DurataCorso').setRequired(isSecondoMinore);
items.get('SecondoMinore_Dichiarazione').setRequired(isSecondoMinore);
//SecondoMinore_TipologiaDote
items.get('SecondoMinore_TipologiaDote').setHidden(isEmpty('SecondoMinore_DataNascita'));
var dataStartSecondoTeen = new Date(1997, 9, 19, 0, 0, 0, 0).getTime();
var dataStartSecondoJunior = new Date(2001, 9, 19, 0, 0, 0, 0).getTime();
var dataEndSecondoJunior = new Date(2009, 9, 20, 0, 0, 0, 0).getTime();
if (!isEmpty('SecondoMinore_DataNascita')) {
	var dataNascitaSecondo = Math.floor(parseFloat(values.get('SecondoMinore_DataNascita')));
	if ((dataNascitaSecondo >= dataStartSecondoJunior) && (dataNascitaSecondo < dataEndSecondoJunior)) {
		values.put('SecondoMinore_TipologiaDote','Dote Junior');
	} else if ((dataNascitaSecondo >= dataStartSecondoTeen) && (dataNascitaSecondo < dataStartSecondoJunior)) {
		values.put('SecondoMinore_TipologiaDote','Dote Teen');
	} else {
	    values.put('SecondoMinore_TipologiaDote','La data di nascita inserita non rispetta le regole previste dal bando');
	}
}
//SecondoMinore_Disabile
var isDisabile = (values.get('SecondoMinore_Disabile') == 'true');
items.get('SecondoMinore_CertificatoDisabile').setHidden(!isDisabile);
items.get('SecondoMinore_CertificatoDisabile').setRequired(isDisabile);
items.get('SecondoMinore_EnteCertificatoDisabile').setHidden(!isDisabile);
items.get('SecondoMinore_EnteCertificatoDisabile').setRequired(isDisabile);
//SecondoMinore_DoteAssegnabile
if ((isEmpty('SecondoMinore_CostoCorso')) && (values.get('PrimoMinore_SecondaDote') == 'true')) {
	values.put('SecondoMinore_DoteAssegnabile',''+0);
}
//SecondoMinore_RicercaCodiceFiscale
var cfAssociazioneSecondoPresente = (!isEmpty('SecondoMinore_RicercaCodiceFiscale'));
var isAssociazioneSecondoTrovata = (values.get('SecondoMinore_EsitoRicerca') == 'ok');
var secondaDote = (values.get('PrimoMinore_SecondaDote') == 'true');
items.get('SecondoMinore_EtichettaInserisciAssociazione').setHidden(!cfAssociazioneSecondoPresente || isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaDenominazione').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaIndirizzo').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaComune').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaProvincia').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaFsnDsa').setHidden(!cfAssociazioneSecondoPresente);
items.get('SecondoMinore_RicercaDenominazione').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaIndirizzo').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaComune').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaProvincia').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaFsnDsa').setReadonly(isAssociazioneSecondoTrovata);
items.get('SecondoMinore_RicercaDenominazione').setRequired(!isAssociazioneSecondoTrovata && secondaDote);
items.get('SecondoMinore_RicercaIndirizzo').setRequired(!isAssociazioneSecondoTrovata && secondaDote);
items.get('SecondoMinore_RicercaComune').setRequired(!isAssociazioneSecondoTrovata && secondaDote);
items.get('SecondoMinore_RicercaProvincia').setRequired(!isAssociazioneSecondoTrovata && secondaDote);
items.get('SecondoMinore_RicercaFsnDsa').setRequired(!isAssociazioneSecondoTrovata && secondaDote);

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
values.remove('PrimoMinore_EsitoRicerca');
var cfAssociazione = values.get('PrimoMinore_RicercaCodiceFiscale');
var conisql = "SELECT ANA_DS "+
			  "FROM AG_ANAGRAFICHE "+
			  "WHERE ANA_TIPO = 'associati_coni' "+
			  "AND ANA_CD = '"+cfAssociazione+"'";
var associazione = dizionarioService.getList(null, conisql);
if(associazione.size() > 0) {
	values.put('PrimoMinore_EsitoRicerca','ok');
	var datiAssociazioneStr = ''+associazione.get(0);
	var datiAssociazione = datiAssociazioneStr.split("|");
	values.put('PrimoMinore_RicercaDenominazione',''+datiAssociazione[1]);
	values.put('PrimoMinore_RicercaIndirizzo',''+datiAssociazione[2]);
	values.put('PrimoMinore_RicercaComune',''+datiAssociazione[3]);
	values.put('PrimoMinore_RicercaProvincia',''+datiAssociazione[4]);
	values.put('PrimoMinore_RicercaFsnDsa',''+datiAssociazione[5]);
}
var isAssociazioneTrovata = (values.get('PrimoMinore_EsitoRicerca') == 'ok');
items.get('PrimoMinore_EtichettaInserisciAssociazione').setHidden(isAssociazioneTrovata);
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
//PrimoMinore_SecondaDote
values.remove('SecondoMinore_Nome');
values.remove('SecondoMinore_Cognome');
values.remove('SecondoMinore_CodiceFiscale');
values.remove('SecondoMinore_DataNascita');
values.remove('SecondoMinore_TipologiaDote');
values.remove('SecondoMinore_Disabile');
values.remove('SecondoMinore_CertificatoDisabile');
values.remove('SecondoMinore_EnteCertificatoDisabile');
values.remove('SecondoMinore_Iscrizione');
values.remove('SecondoMinore_RicercaCodiceFiscale');
values.remove('SecondoMinore_RicercaDenominazione');
values.remove('SecondoMinore_RicercaIndirizzo');
values.remove('SecondoMinore_RicercaComune');
values.remove('SecondoMinore_RicercaProvincia');
values.remove('SecondoMinore_RicercaFsnDsa');
values.remove('SecondoMinore_DisciplinaSportiva');
values.remove('SecondoMinore_CostoCorso');
values.remove('SecondoMinore_DoteAssegnabile');
values.remove('SecondoMinore_DurataCorso');
values.remove('SecondoMinore_Dichiarazione');
var isSecondoMinore = (values.get('PrimoMinore_SecondaDote') == 'true');
fieldsets.get('45701b65c0614990a0c678878b11f38a').setHidden('PrimoMinore_SecondaDote');
items.get('SecondoMinore_Nome').setRequired(isSecondoMinore);
items.get('SecondoMinore_Cognome').setRequired(isSecondoMinore);
items.get('SecondoMinore_CodiceFiscale').setRequired(isSecondoMinore);
items.get('SecondoMinore_DataNascita').setRequired(isSecondoMinore);
items.get('SecondoMinore_Disabile').setRequired(isSecondoMinore);
items.get('SecondoMinore_Iscrizione').setRequired(isSecondoMinore);
items.get('SecondoMinore_RicercaCodiceFiscale').setRequired(isSecondoMinore);
items.get('SecondoMinore_DisciplinaSportiva').setRequired(isSecondoMinore);
items.get('SecondoMinore_CostoCorso').setRequired(isSecondoMinore);
items.get('SecondoMinore_DurataCorso').setRequired(isSecondoMinore);
items.get('SecondoMinore_Dichiarazione').setRequired(isSecondoMinore);
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
//PrimoMinore_Disabile
values.remove('PrimoMinore_CertificatoDisabile');
values.remove('PrimoMinore_EnteCertificatoDisabile');
var isDisabile = (values.get('PrimoMinore_Disabile') == 'true');
items.get('PrimoMinore_CertificatoDisabile').setHidden(!isDisabile);
items.get('PrimoMinore_CertificatoDisabile').setRequired(isDisabile);
items.get('PrimoMinore_EnteCertificatoDisabile').setHidden(!isDisabile);
items.get('PrimoMinore_EnteCertificatoDisabile').setRequired(isDisabile);
//PrimoMinore_CostoCorso
if (isEmpty('PrimoMinore_CostoCorso')) {
	values.put('PrimoMinore_DoteAssegnabile',''+0);
} else {
	var costoCorso = parseFloat(values.get('PrimoMinore_CostoCorso'));
	if ((costoCorso > 0) && (costoCorso < 200)) {
		values.put('PrimoMinore_DoteAssegnabile',''+costoCorso);
	} else if (costoCorso > 200) {
		values.put('PrimoMinore_DoteAssegnabile',''+200);
	} else {
		values.put('PrimoMinore_DoteAssegnabile',''+0);
	}
}
//SecondoMinore_Disabile
values.remove('SecondoMinore_CertificatoDisabile');
values.remove('SecondoMinore_EnteCertificatoDisabile');
var isDisabile = (values.get('SecondoMinore_Disabile') == 'true');
items.get('SecondoMinore_CertificatoDisabile').setHidden(!isDisabile);
items.get('SecondoMinore_CertificatoDisabile').setRequired(isDisabile);
items.get('SecondoMinore_EnteCertificatoDisabile').setHidden(!isDisabile);
items.get('SecondoMinore_EnteCertificatoDisabile').setRequired(isDisabile);
//SecondoMinore_CostoCorso
if (isEmpty('SecondoMinore_CostoCorso')) {
	values.put('SecondoMinore_DoteAssegnabile',''+0);
} else {
	var costoCorso = parseFloat(values.get('SecondoMinore_CostoCorso'));
	if ((costoCorso > 0) && (costoCorso < 200)) {
		values.put('SecondoMinore_DoteAssegnabile',''+costoCorso);
	} else if (costoCorso > 200) {
		values.put('SecondoMinore_DoteAssegnabile',''+200);
	} else {
		values.put('SecondoMinore_DoteAssegnabile',''+0);
	}
}
//SecondoMinore_RicercaCodiceFiscale
values.remove('SecondoMinore_RicercaDenominazione');
values.remove('SecondoMinore_RicercaIndirizzo');
values.remove('SecondoMinore_RicercaComune');
values.remove('SecondoMinore_RicercaProvincia');
values.remove('SecondoMinore_RicercaFsnDsa');
values.remove('SecondoMinore_EsitoRicerca');
var cfAssociazioneSecondo = values.get('SecondoMinore_RicercaCodiceFiscale');
var conisecondosql = "SELECT ANA_DS "+
							"FROM AG_ANAGRAFICHE "+
							"WHERE ANA_TIPO = 'associati_coni' "+
							"AND ANA_CD = '"+cfAssociazioneSecondo+"'";
var associazioneSecondo = dizionarioService.getList(null, conisecondosql);
if(associazioneSecondo.size() > 0) {
	values.put('SecondoMinore_EsitoRicerca','ok');
	var datiAssociazioneSecondoStr = ''+associazioneSecondo.get(0);
	var datiAssociazioneSecondo = datiAssociazioneSecondoStr.split("|");
	values.put('SecondoMinore_RicercaDenominazione',''+datiAssociazioneSecondo[1]);
	values.put('SecondoMinore_RicercaIndirizzo',''+datiAssociazioneSecondo[2]);
	values.put('SecondoMinore_RicercaComune',''+datiAssociazioneSecondo[3]);
	values.put('SecondoMinore_RicercaProvincia',''+datiAssociazioneSecondo[4]);
	values.put('SecondoMinore_RicercaFsnDsa',''+datiAssociazioneSecondo[5]);
}
var isAssociazioneSecondoTrovata = (values.get('SecondoMinore_EsitoRicerca') == 'ok');
items.get('SecondoMinore_EtichettaInserisciAssociazione').setHidden(isAssociazioneSecondoTrovata);
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
//Codice fiscale
if(!isValidCf(values.get('PrimoMinore_CodiceFiscale'))) {
	errors.put('PrimoMinore_CodiceFiscale','PrimoMinore_CodiceFiscale_val');
}
//Età non corretta
if (values.get('PrimoMinore_TipologiaDote') == 'La data di nascita inserita non rispetta le regole previste dal bando') {
	errors.put('PrimoMinore_DataNascita','PrimoMinore_DataNascita_val');
}
//Già iscritto
if (values.get('PrimoMinore_Iscrizione') == 'false') {
	errors.put('PrimoMinore_Iscrizione','PrimoMinore_Iscrizione_val');
}
//Durata Corso
if (!isEmpty('PrimoMinore_DurataCorso')) {
	if (parseFloat(values.get('PrimoMinore_DurataCorso')) < 6) {
		errors.put('PrimoMinore_DurataCorso','PrimoMinore_DurataCorso_val');
	}
}
//Rimborsi precedenti
if (values.get('PrimoMinore_Dichiarazione') == 'false') {
	errors.put('PrimoMinore_Dichiarazione','PrimoMinore_Dichiarazione_val');
}
//costo corso negativo
if (!isEmpty('PrimoMinore_CostoCorso')) {
	if (parseFloat(values.get('PrimoMinore_CostoCorso')) < 0) {
		errors.put('PrimoMinore_CostoCorso','PrimoMinore_CostoCorso_val');
	}
}
//Codice fiscale secondo minore
if (!isEmpty('SecondoMinore_CodiceFiscale')) {
	if(!isValidCf(values.get('SecondoMinore_CodiceFiscale'))) {
		errors.put('SecondoMinore_CodiceFiscale','SecondoMinore_CodiceFiscale_val');
	}
} //Il formato del codice fiscale del secondo minore non è corretto
//Età non corretta secondo minore
if (!isEmpty('SecondoMinore_TipologiaDote')) {
	if (values.get('SecondoMinore_TipologiaDote') == 'La data di nascita inserita non rispetta le regole previste dal bando') {
		errors.put('SecondoMinore_DataNascita','SecondoMinore_DataNascita_val');
	}
} //La data di nascita inserita non rispetta le regole previste dal bando
//Già iscritto secondo minore
if (values.get('SecondoMinore_Iscrizione') == 'false') {
	errors.put('SecondoMinore_Iscrizione','SecondoMinore_Iscrizione_val');
} //È necessario che il minore sia preiscritto o iscritto ad un corso o attività sportiva
//Durata Corso secondo minore
if (!isEmpty('SecondoMinore_DurataCorso')) {
	if (parseFloat(values.get('SecondoMinore_DurataCorso')) < 6) {
		errors.put('SecondoMinore_DurataCorso','SecondoMinore_DurataCorso_val');
	}
} //La durata del corso deve essere di almeno 6 mesi
//Rimborsi precedenti secondo minore
if (values.get('SecondoMinore_Dichiarazione') == 'false') {
	errors.put('SecondoMinore_Dichiarazione','SecondoMinore_Dichiarazione_val');
} //La dichiarazione in merito ad altri rimborsi o agevolazioni sullo stesso corso o figlio non rispetta le condizioni previste dal bando
//costo corso negativo secondo minore
if (!isEmpty('SecondoMinore_CostoCorso')) {
	if (parseFloat(values.get('SecondoMinore_CostoCorso')) < 0) {
		errors.put('SecondoMinore_CostoCorso','SecondoMinore_CostoCorso_val');
	}
} //Il costo del corso non può essere minore di 0
