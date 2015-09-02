
if (!isEmpty('Partecipante_CodiceFiscale')) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);
		if (isValidCf(codiceFiscale)) {
      var dati_estraiStatoIscrizioni = estraiStatoIscrizioni(codiceFiscale,null);
      if (dati_estraiStatoIscrizioni.success) {
        logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni result: "+ dati_estraiStatoIscrizioni.result);
        logger.info("\n\n\n\n\n XXXXXX (1) estraiStatoIscrizioni message: " + dati_estraiStatoIscrizioni.message + "\n\n\n\n\n");
        if (dati_estraiStatoIscrizioni.result!== null) {
          var m_Ana = dati_estraiStatoIscrizioni.result.get('datiAnagrafici');
          logger.info("\n XXXXX Test-Integrazione-GEFO: cognome: "+ m_Ana.get("cognome")+"\n");
          logger.info("\n XXXXX Test-Integrazione-GEFO: nome   : "+ m_Ana.get("nome")+"\n");
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
          }
      }
    }
}
