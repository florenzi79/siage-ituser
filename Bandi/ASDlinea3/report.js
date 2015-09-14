function f() {
    var res = values.get('SoggettiAmmissibili_CategoriaAppartenenza');
    if (res == 'uno') {
    	res = 'A) Comitati/Delegazioni regionali delle FSN e delle FSN - CIP (Linea 1)';
    } else if (res == 'due') {
    	res = 'B) Associazioni e società sportive dilettantistiche affiliate a Federazioni Sportive Nazionali (FSN) (Linea 2)';
    } else if (res == 'tre') {
    	res = 'C) Associazioni e società sportive dilettantistiche affiliate a Discipline Sportive Associate (DSA) o ad Enti di Promozione Sportiva (EPS) (Linea 2)';
    } else if (res == 'quattro') {
    	res = 'D) Associazioni e società sportive dilettantistiche affiliate a FSN-CIP Che curano ed organizzano l’attivtià di base ed agonistica per gli atleti disabili (Linea 2)';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('Richiedente_Polisportiva');
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
    var res = values.get('SoggettiAmmissibili_Polisportiva');
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
