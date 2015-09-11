function f() {
    var res = values.get('AltroGenitore_DichiarazioneResidenza');
    if (res == 'true') {
    	res = 'Sì';
    } else if (res == 'false') {
    	res = 'No';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('PrimoMinore_Disabile');
    if (res == 'true') {
    	res = 'Sì';
    } else if (res == 'false') {
    	res = 'No';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('PrimoMinore_SecondaDote');
    if (res == 'true') {
    	res = 'Sì';
    } else if (res == 'false') {
    	res = 'No';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('Richiedente_DichiarazioneResidenza');
    if (res == 'true') {
    	res = 'Sì';
    } else if (res == 'false') {
    	res = 'No';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('Richiedente_Monoparentale');
    if (res == 'true') {
    	res = 'Sì';
    } else if (res == 'false') {
    	res = 'No';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('SecondoMinore_Disabile');
    if (res == 'true') {
    	res = 'Sì';
    } else if (res == 'false') {
    	res = 'No';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();
