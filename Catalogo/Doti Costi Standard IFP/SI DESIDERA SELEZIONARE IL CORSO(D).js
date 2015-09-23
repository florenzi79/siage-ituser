if(values.get(path+'Selezionato') == 'true') {
    clearModule('ServiziFormazione_RiepilogoServizi');
    if (values.get(path+'NomeServizio')) {
     values.put('ServiziFormazione_RiepilogoServizi[0].TitoloCorso',''+values.get(path+'NomeServizio'));
    }
    if (values.get(path+'DataAvvio') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].DataAvvio',''+values.get(path+'DataAvvio'));
    }
    if (values.get(path+'DataConclusione') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].DataConclusione',''+values.get(path+'DataConclusione'));
    }
    if (values.get(path+'Ore') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].Ore',''+((values.get(path+'Ore') == 'null') ? 0 : parseFloat(values.get(path+'Ore'))));
    }
    if (values.get(path+'ImportoAmmissibile') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].ImportoAmmissibile',''+values.get(path+'ImportoAmmissibile'));
    }
    if (values.get(path+'IdCorso') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].IdCorso',''+values.get(path+'IdCorso'));
    }
    if (values.get(path+'DenominazioneOperatore') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].DenominazioneOperatore',''+values.get(path+'DenominazioneOperatore'));
    }
    if (values.get(path+'DenominazioneSedeOperatore') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].DenominazioneSedeOperatore',''+values.get(path+'DenominazioneSedeOperatore'));
    }
    if (values.get(path+'Provincia') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].Provincia',''+values.get(path+'Provincia'));
    }
    if (values.get(path+'Comune') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].Comune',''+values.get(path+'Comune'));
    }
    if (values.get(path+'IdAnnualita') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].IdAnnualita',''+values.get(path+'IdAnnualita'));
    }
    if (values.get(path+'Area') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].Area',''+values.get(path+'Area'));
    }
    if (values.get(path+'QualificaDiploma') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].QualificaDiploma',''+values.get(path+'QualificaDiploma'));
    }
    if (values.get(path+'Indirizzo') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].Indirizzo',''+values.get(path+'Indirizzo'));
    }
    if (values.get(path+'StatoCorso') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].StatoCorso',''+values.get(path+'StatoCorso'));
    }
    if (values.get(path+'IdQualifica') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].IdQualifica',''+values.get(path+'IdQualifica'));
    }
    if (values.get(path+'IdIndirizzo') != null) {
	    values.put('ServiziFormazione_RiepilogoServizi[0].IdIndirizzo',''+values.get(path+'IdIndirizzo'));
    }
    values.put('disabile','false');


    var i=0;
    while  (values.get('Partecipante_CategorieSvantaggio['+i+']')!= null) {
    	logger.info('FFFF disabile? ' + values.get('Partecipante_CategorieSvantaggio['+i+']'));
    	if (values.get('Partecipante_CategorieSvantaggio['+i+']') == 'disabile') {
    		values.put('ServiziFormazione_RiepilogoServizi[1].TitoloCorso','Funzione di servizio di sostegno durante il percorso formativo, riservato agli allievi disabili');
    	    if (values.get(path+'DataAvvio') != null) {
    	        values.put('ServiziFormazione_RiepilogoServizi[1].DataAvvio',''+values.get(path+'DataAvvio'));
            }
            if (values.get(path+'DataConclusione') != null) {
        	    values.put('ServiziFormazione_RiepilogoServizi[1].DataConclusione',''+values.get(path+'DataConclusione'));
            }
            if (values.get(path+'Ore')) {
        	    values.put('ServiziFormazione_RiepilogoServizi[1].Ore',''+values.get(path+'Ore'));
            }
    		values.put('ServiziFormazione_RiepilogoServizi[1].ImportoAmmissibile',''+3000);
    		values.put('disabile','true');
    	}
        i++;
    }
    var j=0;
    while  (values.get('ServiziFormazione_ElencoCorsi['+j+'].IdCorso')!= null) {
        logger.info('FFFFFFF path: '+values.get(path+'IdCorso'));
        logger.info('FFFFFFF corso: '+values.get('ServiziFormazione_ElencoCorsi['+j+'].IdCorso'));
        if (values.get('ServiziFormazione_ElencoCorsi['+j+'].IdCorso') != values.get(path+'IdCorso')) {
            values.remove('ServiziFormazione_ElencoCorsi['+j+'].Selezionato');
        }
        j++;
    }
}
