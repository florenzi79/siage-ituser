if (!isEmpty('Partecipante_CodiceFiscale')) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);
		if (isValidCf(codiceFiscale)) {

			// chiamata a GeFo per compilare i restanti campi
			var dati_estraiStatoIscrizioni = estraiStatoIscrizioni(codiceFiscale,null);
			if (dati_estraiStatoIscrizioni.success) {
				logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni result: "+ dati_estraiStatoIscrizioni.result);
				logger.info("\n\n\n\n\n XXXXXX (1) estraiStatoIscrizioni message: " + dati_estraiStatoIscrizioni.message + "\n\n\n\n\n");
				if (dati_estraiStatoIscrizioni.result!== null) {
					var m_Ana = dati_estraiStatoIscrizioni.result.get('datiAnagrafici');
					logger.info("\n XXXXX Test-Integrazione-GEFO: datiAnagrafici: \n "+ dati_estraiStatoIscrizioni.result.get('datiAnagrafici')+"\n");
					logger.info("\n XXXXX Test-Integrazione-GEFO: datiAnagrafici - Cognome: \n "+ dati_estraiStatoIscrizioni.result.get('datiAnagrafici').get("cognome")+"\n");
/*
					{datiAnagrafici={
						capdomicilio=23861,
						capresidenza=23861,
						codicefiscale=VLSSNO98S60E507L,
						cognome=VALSECCHI,
						datanascita=20/11/1998,
						genere=F,
						indirizzodomicilio=SEGANTINI, 95,
						indirizzoresidenza=SEGANTINI, 95,
						comunedomicilio=097021,
						istatcomunenascita=097042,
						istatcomuneresidenza=097021,
						nome=SONIA},
						66678={idcorso=66678, iddote=35417757, idiscrizione=502926, numeroofferta=048, statoiscrizione=I}, 91010={idcorso=91010, iddote=41180104, idiscrizione=588364, numeroofferta=048, statoiscrizione=I}, 110036={idcorso=110036, iddote=50420706, idiscrizione=748344, numeroofferta=048, statoiscrizione=I}, 105061={idcorso=105061, iddote=51346779, idiscrizione=793791, numeroofferta=120, statoiscrizione=I}, iscrizioni=[Ljava.util.LinkedHashMap;@1051506f}
*/
						values.put('Partecipante_Cognome',m_Ana.get("cognome"));
						values.put('Partecipante_Nome',m_Ana.get("nome"));
						values.put('Partecipante_Genere',m_Ana.get("genere"));
						// ToDo Convertire Data di nascita in TS partendo da 						datanascita=20/11/1998, e valorizzando la Partecipante_NascitaData
						// ToDo calcolare l'età ad oggi valorizzando  valorizzando Partecipante_Eta
						var istatComune = m_Ana.get("istatcomunenascita");
						values.put('Partecipante_NascitaProvincia',istatComune.substr(0, 3));
						values.put('Partecipante_NascitaComune',istatComune);
						setSelectDependedOptionsAndShowCached('Partecipante_NascitaComune', 'comune_istat', path+'Partecipante_NascitaProvincia');
						// imposto la label provincia per i PDF
						var codeProvincia = values.get(path+'Partecipante_NascitaProvincia');
						var labelProvincia = getOptionLabel('Partecipante_NascitaProvincia', codeProvincia);
						values.put('Partecipante_NascitaProvinciaDn', labelProvincia);
						// imposto la label comune  per i PDF
						var codeComune = values.get(path+'Partecipante_NascitaComune');
						var labelComune = getOptionLabel('Partecipante_NascitaComune', codeComune);
						values.put('Partecipante_NascitaComuneDn', labelComune);


					/*
			    for (i = 0; i < dati_estraiStatoIscrizioni.result.get('iscrizioni').length; i++) {
			        var elem = dati_estraiStatoIscrizioni.result.get('iscrizioni')[i];
			        logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: "+ elem);
			    }
					*/
				}
			} else {
			    logger.info("\n\n\n\n\n XXXXXX  Errore su estraiStatoIscrizioni message: " + dati_estraiStatoIscrizioni.message + "\n\n\n\n\n");
			}
		}
}
