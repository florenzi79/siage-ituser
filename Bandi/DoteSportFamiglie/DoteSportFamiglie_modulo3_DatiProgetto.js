//onLoad
//Squadre_GiovanileMaschile
var isLinea1 = (values.get('SoggettiAmmissibili_CategoriaAppartenenza') == 'uno');
fieldsets.get('7fb47dde352e489a9edab1a722fbdbe0').setHidden(!isLinea1);
items.get('Squadre_GiovanileMaschile').setRequired(isLinea1);
items.get('Squadre_GiovanileFemminile').setRequired(isLinea1);
items.get('Squadre_AssolutaMaschile').setRequired(isLinea1);
items.get('Squadre_AssolutaFemminile').setRequired(isLinea1);
items.get('Organizzazione_Nessuna').setRequired(isLinea1);
items.get('Organizzazione_TitoliFederaliRegionali').setRequired(isLinea1);
items.get('Organizzazione_TitoliFederaliNazionali').setRequired(isLinea1);
items.get('Organizzazione_TitoliCio').setRequired(isLinea1);
items.get('Organizzazione_TitoliFederaliInternazionali').setRequired(isLinea1);
items.get('Organizzazione_TitoliFederaliMondiali').setRequired(isLinea1);

fieldsets.get('2a7a2f1507c343c08a1599b430be6af0').setHidden(isLinea1);
items.get('Tesserati_TotaleLineaDue').setRequired(!isLinea1);
items.get('Tesserati_UnderDiciottoLineaDue').setRequired(!isLinea1);
items.get('Titoli_NessunoLineaDue').setRequired(!isLinea1);
items.get('Titoli_RegionaleLineaDue').setRequired(!isLinea1);
items.get('Titoli_NazionaleLineaDue').setRequired(!isLinea1);
items.get('Titoli_InternazionaleLineaDue').setRequired(!isLinea1);
items.get('Collaboratori_PresenzaLineaDue').setRequired(!isLinea1);
//Punteggio_TotaleLineaUno
values.put('Punteggio_GiovanileMaschile',''+0);
values.put('Punteggio_GiovanileFemminile',''+0);
values.put('Punteggio_AssolutaMaschile',''+0);
values.put('Punteggio_AssolutaFemminile',''+0);
values.put('Punteggio_OrganizzazioneNessunaLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+0);
var totaleLinea1 = 0;
if (values.get('Squadre_GiovanileMaschile') == 'true') {
	values.put('Punteggio_GiovanileMaschile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_GiovanileFemminile') == 'true') {
	values.put('Punteggio_GiovanileFemminile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_AssolutaMaschile') == 'true') {
	values.put('Punteggio_AssolutaMaschile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_AssolutaFemminile') == 'true') {
	values.put('Punteggio_AssolutaFemminile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Organizzazione_Nessuna') == 'true') {
	values.put('Organizzazione_TitoliFederaliRegionali','false');
	values.put('Organizzazione_TitoliFederaliNazionali','false');
	values.put('Organizzazione_TitoliCio','false');
	values.put('Organizzazione_TitoliFederaliInternazionali','false');
	values.put('Organizzazione_TitoliFederaliMondiali','false');
	values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+0);
	totaleLinea1 += 0;
}
items.get('Organizzazione_TitoliFederaliRegionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliNazionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliCio').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliInternazionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliMondiali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
if (values.get('Organizzazione_TitoliFederaliRegionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+5);
	totaleLinea1 += 5;
}
if (values.get('Organizzazione_TitoliFederaliNazionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+10);
	totaleLinea1 += 10;
}
if (values.get('Organizzazione_TitoliCio') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+15);
	totaleLinea1 += 15;
}
if (values.get('Organizzazione_TitoliFederaliInternazionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+20);
	totaleLinea1 += 20;
}
if (values.get('Organizzazione_TitoliFederaliMondiali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+30);
	totaleLinea1 += 30;
}
values.put('Punteggio_TotaleLineaUno',''+totaleLinea1);
//Punteggio_TotaleLineaDue
if (isEmpty('Tesserati_TotaleLineaDue')) {
	values.put('Tesserati_TotaleLineaDue',''+0);
}
if (isEmpty('Tesserati_UnderDiciottoLineaDue')) {
	values.put('Tesserati_UnderDiciottoLineaDue',''+0);
}
values.put('Punteggio_TesseratiTotaleLineaDue',''+0);
values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+0);
values.put('Punteggio_TitoliNessunoLineaDue',''+0);
values.put('Punteggio_TitoliRegionaleLineaDue',''+0);
values.put('Punteggio_TitoliNazionaleLineaDue',''+0);
values.put('Punteggio_TitoliInternazionaleLineaDue',''+0);
values.put('Punteggio_CollaboratoriLineaDue',''+0);
var totaleLinea2 = 0;
var totaleTesserati = parseFloat(values.get('Tesserati_TotaleLineaDue'));
var totaleTesseratiUnder18 = parseFloat(values.get('Tesserati_UnderDiciottoLineaDue'));
if (totaleTesserati > 0) {
	if (totaleTesserati <= 100) {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+3);
		totaleLinea2 += 3;
	} else if (totaleTesserati <= 250) {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+6);
		totaleLinea2 += 6;
	} else {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+10);
		totaleLinea2 += 10;
	}
}
if (totaleTesseratiUnder18 > 0) {
	if (totaleTesseratiUnder18 <= 10) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+5);
		totaleLinea2 += 5;
	} else if (totaleTesseratiUnder18 <= 20) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+10);
		totaleLinea2 += 10;
	} else if (totaleTesseratiUnder18 <= 20) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+10);
		totaleLinea2 += 10;
	} else if (totaleTesseratiUnder18 <= 30) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+15);
		totaleLinea2 += 15;
	} else if (totaleTesseratiUnder18 <= 40) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+20);
		totaleLinea2 += 20;
	} else if (totaleTesseratiUnder18 <= 50) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+25);
		totaleLinea2 += 25;
	} else if (totaleTesseratiUnder18 <= 60) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+30);
		totaleLinea2 += 30;
	} else if (totaleTesseratiUnder18 <= 80) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+35);
		totaleLinea2 += 35;
	} else if (totaleTesseratiUnder18 <= 100) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+40);
		totaleLinea2 += 40;
	} else if (totaleTesseratiUnder18 <= 120) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+45);
		totaleLinea2 += 45;
	} else if (totaleTesseratiUnder18 <= 140) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+50);
		totaleLinea2 += 50;
	} else if (totaleTesseratiUnder18 <= 160) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+55);
		totaleLinea2 += 55;
	} else if (totaleTesseratiUnder18 <= 180) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+60);
		totaleLinea2 += 60;
	} else if (totaleTesseratiUnder18 <= 220) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+65);
		totaleLinea2 += 65;
	} else {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+70);
		totaleLinea2 += 70;
	}
}
if (values.get('Titoli_NessunoLineaDue') == 'true') {
	values.put('Titoli_RegionaleLineaDue','false');
	values.put('Titoli_NazionaleLineaDue','false');
	values.put('Titoli_InternazionaleLineaDue','false');
	values.put('Punteggio_TitoliRegionaleLineaDue',''+0);
	values.put('Punteggio_TitoliNazionaleLineaDue',''+0);
	values.put('Punteggio_TitoliInternazionaleLineaDue',''+0);
}
items.get('Titoli_RegionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
items.get('Titoli_NazionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
items.get('Titoli_InternazionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
if (values.get('Titoli_RegionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliRegionaleLineaDue',''+2);
	totaleLinea2 += 2;
}
if (values.get('Titoli_NazionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliNazionaleLineaDue',''+4);
	totaleLinea2 += 4;
}
if (values.get('Titoli_InternazionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliInternazionaleLineaDue',''+10);
	totaleLinea2 += 10;
}
if (values.get('Collaboratori_PresenzaLineaDue') == 'true') {
	values.put('Punteggio_CollaboratoriLineaDue',''+10);
	totaleLinea2 += 10;
}
values.put('Punteggio_TotaleLineaDue',''+totaleLinea2);

//onChange
//Tutti i radio button Linea 1 Tranne "Nessuna organizzazione"
values.put('Punteggio_GiovanileMaschile',''+0);
values.put('Punteggio_GiovanileFemminile',''+0);
values.put('Punteggio_AssolutaMaschile',''+0);
values.put('Punteggio_AssolutaFemminile',''+0);
values.put('Punteggio_OrganizzazioneNessunaLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+0);
var totaleLinea1 = 0;
if (values.get('Squadre_GiovanileMaschile') == 'true') {
	values.put('Punteggio_GiovanileMaschile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_GiovanileFemminile') == 'true') {
	values.put('Punteggio_GiovanileFemminile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_AssolutaMaschile') == 'true') {
	values.put('Punteggio_AssolutaMaschile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_AssolutaFemminile') == 'true') {
	values.put('Punteggio_AssolutaFemminile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Organizzazione_Nessuna') == 'true') {
	values.put('Organizzazione_TitoliFederaliRegionali','false');
	values.put('Organizzazione_TitoliFederaliNazionali','false');
	values.put('Organizzazione_TitoliCio','false');
	values.put('Organizzazione_TitoliFederaliInternazionali','false');
	values.put('Organizzazione_TitoliFederaliMondiali','false');
	values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+0);
	totaleLinea1 += 0;
}
items.get('Organizzazione_TitoliFederaliRegionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliNazionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliCio').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliInternazionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliMondiali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
if (values.get('Organizzazione_TitoliFederaliRegionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+5);
	totaleLinea1 += 5;
}
if (values.get('Organizzazione_TitoliFederaliNazionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+10);
	totaleLinea1 += 10;
}
if (values.get('Organizzazione_TitoliCio') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+15);
	totaleLinea1 += 15;
}
if (values.get('Organizzazione_TitoliFederaliInternazionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+20);
	totaleLinea1 += 20;
}
if (values.get('Organizzazione_TitoliFederaliMondiali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+30);
	totaleLinea1 += 30;
}
values.put('Punteggio_TotaleLineaUno',''+totaleLinea1);
//Organizzazione_Nessuna
values.put('Punteggio_GiovanileMaschile',''+0);
values.put('Punteggio_GiovanileFemminile',''+0);
values.put('Punteggio_AssolutaMaschile',''+0);
values.put('Punteggio_AssolutaFemminile',''+0);
values.put('Punteggio_OrganizzazioneNessunaLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+0);
values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+0);
var totaleLinea1 = 0;
if (values.get('Squadre_GiovanileMaschile') == 'true') {
	values.put('Punteggio_GiovanileMaschile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_GiovanileFemminile') == 'true') {
	values.put('Punteggio_GiovanileFemminile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_AssolutaMaschile') == 'true') {
	values.put('Punteggio_AssolutaMaschile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Squadre_AssolutaFemminile') == 'true') {
	values.put('Punteggio_AssolutaFemminile',''+5);
	totaleLinea1 += 5;
}
if (values.get('Organizzazione_Nessuna') == 'true') {
	values.put('Organizzazione_TitoliFederaliRegionali','false');
	values.put('Organizzazione_TitoliFederaliNazionali','false');
	values.put('Organizzazione_TitoliCio','false');
	values.put('Organizzazione_TitoliFederaliInternazionali','false');
	values.put('Organizzazione_TitoliFederaliMondiali','false');
	values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+0);
	values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+0);
	totaleLinea1 += 0;
} else {
  values.remove('Organizzazione_TitoliFederaliRegionali');
	values.remove('Organizzazione_TitoliFederaliNazionali');
	values.remove('Organizzazione_TitoliCio');
	values.remove('Organizzazione_TitoliFederaliInternazionali');
	values.remove('Organizzazione_TitoliFederaliMondiali');
}
items.get('Organizzazione_TitoliFederaliRegionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliNazionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliCio').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliInternazionali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
items.get('Organizzazione_TitoliFederaliMondiali').setReadonly(values.get('Organizzazione_Nessuna') == 'true');
if (values.get('Organizzazione_TitoliFederaliRegionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliRegionaliLineaUno',''+5);
	totaleLinea1 += 5;
}
if (values.get('Organizzazione_TitoliFederaliNazionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliNazionaliLineaUno',''+10);
	totaleLinea1 += 10;
}
if (values.get('Organizzazione_TitoliCio') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliCioLineaUno',''+15);
	totaleLinea1 += 15;
}
if (values.get('Organizzazione_TitoliFederaliInternazionali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliInternazionaliLineaUno',''+20);
	totaleLinea1 += 20;
}
if (values.get('Organizzazione_TitoliFederaliMondiali') == 'true') {
	values.put('Punteggio_OrganizzazioneTitoliFederaliMondialiLineaUno',''+30);
	totaleLinea1 += 30;
}
values.put('Punteggio_TotaleLineaUno',''+totaleLinea1);

//Tutti i campi editabili di Linea 2 tranne Titoli_NessunoLineaDue
if (isEmpty('Tesserati_TotaleLineaDue')) {
	values.put('Tesserati_TotaleLineaDue',''+0);
}
if (isEmpty('Tesserati_UnderDiciottoLineaDue')) {
	values.put('Tesserati_UnderDiciottoLineaDue',''+0);
}
values.put('Punteggio_TesseratiTotaleLineaDue',''+0);
values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+0);
values.put('Punteggio_TitoliNessunoLineaDue',''+0);
values.put('Punteggio_TitoliRegionaleLineaDue',''+0);
values.put('Punteggio_TitoliNazionaleLineaDue',''+0);
values.put('Punteggio_TitoliInternazionaleLineaDue',''+0);
values.put('Punteggio_CollaboratoriLineaDue',''+0);
var totaleLinea2 = 0;
var totaleTesserati = parseFloat(values.get('Tesserati_TotaleLineaDue'));
var totaleTesseratiUnder18 = parseFloat(values.get('Tesserati_UnderDiciottoLineaDue'));
if (totaleTesserati > 0) {
	if (totaleTesserati <= 100) {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+3);
		totaleLinea2 += 3;
	} else if (totaleTesserati <= 250) {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+6);
		totaleLinea2 += 6;
	} else {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+10);
		totaleLinea2 += 10;
	}
}
if (totaleTesseratiUnder18 > 0) {
	if (totaleTesseratiUnder18 <= 10) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+5);
		totaleLinea2 += 5;
	} else if (totaleTesseratiUnder18 <= 20) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+10);
		totaleLinea2 += 10;
	} else if (totaleTesseratiUnder18 <= 20) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+10);
		totaleLinea2 += 10;
	} else if (totaleTesseratiUnder18 <= 30) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+15);
		totaleLinea2 += 15;
	} else if (totaleTesseratiUnder18 <= 40) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+20);
		totaleLinea2 += 20;
	} else if (totaleTesseratiUnder18 <= 50) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+25);
		totaleLinea2 += 25;
	} else if (totaleTesseratiUnder18 <= 60) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+30);
		totaleLinea2 += 30;
	} else if (totaleTesseratiUnder18 <= 80) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+35);
		totaleLinea2 += 35;
	} else if (totaleTesseratiUnder18 <= 100) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+40);
		totaleLinea2 += 40;
	} else if (totaleTesseratiUnder18 <= 120) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+45);
		totaleLinea2 += 45;
	} else if (totaleTesseratiUnder18 <= 140) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+50);
		totaleLinea2 += 50;
	} else if (totaleTesseratiUnder18 <= 160) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+55);
		totaleLinea2 += 55;
	} else if (totaleTesseratiUnder18 <= 180) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+60);
		totaleLinea2 += 60;
	} else if (totaleTesseratiUnder18 <= 220) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+65);
		totaleLinea2 += 65;
	} else {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+70);
		totaleLinea2 += 70;
	}
}
if (values.get('Titoli_NessunoLineaDue') == 'true') {
	values.put('Titoli_RegionaleLineaDue','false');
	values.put('Titoli_NazionaleLineaDue','false');
	values.put('Titoli_InternazionaleLineaDue','false');
	values.put('Punteggio_TitoliRegionaleLineaDue',''+0);
	values.put('Punteggio_TitoliNazionaleLineaDue',''+0);
	values.put('Punteggio_TitoliInternazionaleLineaDue',''+0);
}
items.get('Titoli_RegionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
items.get('Titoli_NazionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
items.get('Titoli_InternazionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
if (values.get('Titoli_RegionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliRegionaleLineaDue',''+2);
	totaleLinea2 += 2;
}
if (values.get('Titoli_NazionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliNazionaleLineaDue',''+4);
	totaleLinea2 += 4;
}
if (values.get('Titoli_InternazionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliInternazionaleLineaDue',''+10);
	totaleLinea2 += 10;
}
if (values.get('Collaboratori_PresenzaLineaDue') == 'true') {
	values.put('Punteggio_CollaboratoriLineaDue',''+10);
	totaleLinea2 += 10;
}
values.put('Punteggio_TotaleLineaDue',''+totaleLinea2);
//Titoli_NessunoLineaDue
if (isEmpty('Tesserati_TotaleLineaDue')) {
	values.put('Tesserati_TotaleLineaDue',''+0);
}
if (isEmpty('Tesserati_UnderDiciottoLineaDue')) {
	values.put('Tesserati_UnderDiciottoLineaDue',''+0);
}
values.put('Punteggio_TesseratiTotaleLineaDue',''+0);
values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+0);
values.put('Punteggio_TitoliNessunoLineaDue',''+0);
values.put('Punteggio_TitoliRegionaleLineaDue',''+0);
values.put('Punteggio_TitoliNazionaleLineaDue',''+0);
values.put('Punteggio_TitoliInternazionaleLineaDue',''+0);
values.put('Punteggio_CollaboratoriLineaDue',''+0);
var totaleLinea2 = 0;
var totaleTesserati = parseFloat(values.get('Tesserati_TotaleLineaDue'));
var totaleTesseratiUnder18 = parseFloat(values.get('Tesserati_UnderDiciottoLineaDue'));
if (totaleTesserati > 0) {
	if (totaleTesserati <= 100) {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+3);
		totaleLinea2 += 3;
	} else if (totaleTesserati <= 250) {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+6);
		totaleLinea2 += 6;
	} else {
		values.put('Punteggio_TesseratiTotaleLineaDue',''+10);
		totaleLinea2 += 10;
	}
}
if (totaleTesseratiUnder18 > 0) {
	if (totaleTesseratiUnder18 <= 10) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+5);
		totaleLinea2 += 5;
	} else if (totaleTesseratiUnder18 <= 20) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+10);
		totaleLinea2 += 10;
	} else if (totaleTesseratiUnder18 <= 20) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+10);
		totaleLinea2 += 10;
	} else if (totaleTesseratiUnder18 <= 30) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+15);
		totaleLinea2 += 15;
	} else if (totaleTesseratiUnder18 <= 40) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+20);
		totaleLinea2 += 20;
	} else if (totaleTesseratiUnder18 <= 50) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+25);
		totaleLinea2 += 25;
	} else if (totaleTesseratiUnder18 <= 60) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+30);
		totaleLinea2 += 30;
	} else if (totaleTesseratiUnder18 <= 80) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+35);
		totaleLinea2 += 35;
	} else if (totaleTesseratiUnder18 <= 100) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+40);
		totaleLinea2 += 40;
	} else if (totaleTesseratiUnder18 <= 120) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+45);
		totaleLinea2 += 45;
	} else if (totaleTesseratiUnder18 <= 140) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+50);
		totaleLinea2 += 50;
	} else if (totaleTesseratiUnder18 <= 160) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+55);
		totaleLinea2 += 55;
	} else if (totaleTesseratiUnder18 <= 180) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+60);
		totaleLinea2 += 60;
	} else if (totaleTesseratiUnder18 <= 220) {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+65);
		totaleLinea2 += 65;
	} else {
		values.put('Punteggio_TesseratiUnderDiciottoLineaDue',''+70);
		totaleLinea2 += 70;
	}
}
if (values.get('Titoli_NessunoLineaDue') == 'true') {
	values.put('Titoli_RegionaleLineaDue','false');
	values.put('Titoli_NazionaleLineaDue','false');
	values.put('Titoli_InternazionaleLineaDue','false');
	values.put('Punteggio_TitoliRegionaleLineaDue',''+0);
	values.put('Punteggio_TitoliNazionaleLineaDue',''+0);
	values.put('Punteggio_TitoliInternazionaleLineaDue',''+0);
} else {
	values.remove('Titoli_RegionaleLineaDue');
	values.remove('Titoli_NazionaleLineaDue');
	values.remove('Titoli_InternazionaleLineaDue');
}
items.get('Titoli_RegionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
items.get('Titoli_NazionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
items.get('Titoli_InternazionaleLineaDue').setReadonly(values.get('Titoli_NessunoLineaDue') == 'true');
if (values.get('Titoli_RegionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliRegionaleLineaDue',''+2);
	totaleLinea2 += 2;
}
if (values.get('Titoli_NazionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliNazionaleLineaDue',''+4);
	totaleLinea2 += 4;
}
if (values.get('Titoli_InternazionaleLineaDue') == 'true') {
	values.put('Punteggio_TitoliInternazionaleLineaDue',''+10);
	totaleLinea2 += 10;
}
if (values.get('Collaboratori_PresenzaLineaDue') == 'true') {
	values.put('Punteggio_CollaboratoriLineaDue',''+10);
	totaleLinea2 += 10;
}
values.put('Punteggio_TotaleLineaDue',''+totaleLinea2);

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
