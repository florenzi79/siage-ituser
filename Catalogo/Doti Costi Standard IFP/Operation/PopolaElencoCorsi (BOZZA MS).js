
//if (!isEmpty('Partecipante_CodiceFiscale')) {
if (true) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);
//		if (isValidCf(codiceFiscale)) {
  if (true) {
      // TODO: Specificare correttamente l'offerta formativa come sarà indicato dai BU per ogni Bando
      var dati_estraiStatoIscrizioni = estraiStatoIscrizioni(codiceFiscale,null);
      if (dati_estraiStatoIscrizioni.success) {
        print("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni result: "+ dati_estraiStatoIscrizioni.result+"\n");
        print("\n\n\n\n\n XXXXXX (1) estraiStatoIscrizioni message: " + dati_estraiStatoIscrizioni.message + "\n\n\n\n\n");
        if (dati_estraiStatoIscrizioni.result!== null) {
          var a_Iscr = dati_estraiStatoIscrizioni.result.get('iscrizioni');
          if (a_Iscr!==null) {

            for (i = 0; i < a_Iscr.length; i++) {
                var elem = a_Iscr[i];
                print("\nXXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: "+ elem+"\n");
//                print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" idcorso="+ elem.get("idcorso")+" \n");
//                print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" iddote="+ elem.get("iddote")+" \n");

            }

            /*
                {datiAnagrafici={
                  capdomicilio=23861,
                  capresidenza=23861,
                  codicefiscale=VLSSNO98S60E507L,
                  cognome=VALSECCHI,s
                  datanascita=20/11/1998,
                  genere=F,
                  indirizzodomicilio=SEGANTINI, 95,
                  indirizzoresidenza=SEGANTINI, 95,
                  comunedomicilio=097021,
                  istatcomunenascita=097042,
                  istatcomuneresidenza=097021,
                  nome=SONIA},
                  66678={idcorso=66678, iddote=35417757, idiscrizione=502926, numeroofferta=048, statoiscrizione=I}, 91010={idcorso=91010, iddote=41180104, idiscrizione=588364, numeroofferta=048, statoiscrizione=I}, 110036={idcorso=110036, iddote=50420706, idiscrizione=748344, numeroofferta=048, statoiscrizione=I}, 105061={idcorso=105061, iddote=51346779, idiscrizione=793791, numeroofferta=120, statoiscrizione=I},
                  iscrizioni=[Ljava.util.LinkedHashMap;@1051506f}
                  17:28:06,347 INFO  [stdout] (http-/0.0.0.0:8080-3) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=66678, iddote=35417757, idiscrizione=502926, numeroofferta=048, statoiscrizione=I}
                  17:28:06,348 INFO  [stdout] (http-/0.0.0.0:8080-3) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=91010, iddote=41180104, idiscrizione=588364, numeroofferta=048, statoiscrizione=I}
                  17:28:06,349 INFO  [stdout] (http-/0.0.0.0:8080-3) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=110036, iddote=50420706, idiscrizione=748344, numeroofferta=048, statoiscrizione=I}
                  17:28:06,349 INFO  [stdout] (http-/0.0.0.0:8080-3) XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: {idcorso=105061, iddote=51346779, idiscrizione=793791, numeroofferta=120, statoiscrizione=I}

            */

          }

          }
      }
      else {
        {
          // l'integrazione con gefo ha problemi
          // TODO: Valorizzare una variabile per permettere un avviso nel modulo successivo e relativo blocco
          print("/n XXXXX estraiStatoIscrizioni non andato a buon fine -  /n")

        }
      }
    }
}
