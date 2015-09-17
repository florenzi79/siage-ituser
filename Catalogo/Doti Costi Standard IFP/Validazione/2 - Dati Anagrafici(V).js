var etaSoglia = 99;
if ((values.get('CatalogoBando')=='DDFIanni' )||
    (values.get('CatalogoBando')=='PPDIanni')) {
                etaSoglia = 18;
    }
if ((values.get('CatalogoBando')=='DDFIVanni' )) {
                etaSoglia = 21;
    }

var eta = (isEmpty('Partecipante_Eta') || values.get('Partecipante_Eta') == 'null') ? 0 : parseFloat(values.get('Partecipante_Eta'));
if (eta >= etaSoglia) {
	errors.put('Partecipante_Eta', 'Partecipante_Eta_val');
}

var cf = getVal('Partecipante_CodiceFiscale');
if (cf !== null && cf !== '') {
    if (!isValidCf(cf)) {
      err('Partecipante_CodiceFiscale', 'Partecipante_CodiceFiscale_val');
    }
}

var isRichiestaDichiarazFreq = (
            (values.get('CatalogoBando')=='DDFIIanni' )||
            (values.get('CatalogoBando')=='DDFIIIanni'));

if (isRichiestaDichiarazFreq) {
    var dich_freq = getVal('dichiarazione_frequenza');
    if (dich_freq == 'false') {
        err('dichiarazione_frequenza', 'Dichiarazione_Frequenza_val');
    }
}
