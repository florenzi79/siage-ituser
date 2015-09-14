function f() {
    var res = values.get('TipologiaPartenership');
    if (res == 'associazioni') {
    	res = 'Associazioni';
    } else if (res == 'universita') {
    	res = 'Università';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();

function f() {
    var res = values.get('Progetto_TipologiaIniziativa');
    if (res == 'piani_attuativi') {
    	res = 'Piani attuativi comunali del piano di governo del territorio previsti dalla legislazione statale e regionale';
    } else if (res == 'programmazione_negoziata') {
    	res = 'Programmazione negoziata (Accordi di programma e Programmi integrati di intervento)';
    } else if (res == 'contratti_quartiere') {
    	res = 'Contratti di quartiere';
    } else if (res == 'altre_iniziative') {
    	res = 'Altre iniziative di programmazione territoriale e urbanistica, non incluse nei punti sopra riportati, che rientrino nella definizione di rigenerazione urbana';
    } else {
        res = 'Nessuna selezione';
    }
    return res;
}

f();
