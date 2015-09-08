print("/n XXXXX INIZIO SCRIPT OPERATION PopolaElencoCorsi_DOTE")
//PopolaElencoCorsi_DOTE
//if (!isEmpty('Partecipante_CodiceFiscale')) {
if (true) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);
//		if (isValidCf(codiceFiscale)) {
  if (true) {
    var idOperatore = values.get('Richiedente_IdOperatore');
    var idSede = values.get('Richiedente_IdSede');
// TODO  Usare Parametro valorizzato all'inizio del bando
    var offerteFormative = ['048','120'];
    try {
      var dati_estraiDettagliCorsi = estraiDettagliCorsi(idOperatore, codiceFiscale, offerteFormative, idSede);
      if (dati_estraiDettagliCorsi.success) {
          print("XXXXX Test-Integrazione-GEFO: dati_estraiDettagliCorsi result: "+ dati_estraiDettagliCorsi.result+"\n");
          if (dati_estraiDettagliCorsi.result!== null) {
            var a_IscrDC = dati_estraiDettagliCorsi.result.get('iscrizioni');
            if (a_IscrDC!==null) {

              for (i = 0; i < a_IscrDC.length; i++) {
                  var elem = a_IscrDC[i];
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" estraiStatoIscrizioni.iscrizioni: "+ elem+"\n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" idcorsoMAPPA="+ elem.get("idcorso")+" \n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" iddote="+ elem.get("iddote")+" \n");

              }

            }
            var a_idcorsoDC = dati_estraiDettagliCorsi.result.get('idcorso');
            if (a_idcorsoDC!==null) {

              for (i = 0; i < a_idcorsoDC.length; i++) {
                  var elem3 = a_idcorsoDC[i];
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" estraiStatoIscrizioni.iscrizioni: "+ elem3+"\n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" idcorsoMAPPA="+ elem3.get("alternanza")+" \n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" iddote="+ elem3.get("annocorso ")+" \n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" area="+ elem3.get("area")+" \n");

              }

            }

          }
      }
      else  {
        // l'integrazione con gefo ha problemi
        // TODO: Valorizzare una variabile per permettere un avviso nel modulo successivo e relativo blocco
        print("/n XXXXX estraiDettagliCorsi non andato a buon fine -  /n")

      }
    }
    catch(err) {
      print("/n XXXXX CATCH  estraiDettagliCorsi non andato a buon fine -  /n")

    }




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
                print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" idcorso="+ elem.get("idcorso")+" \n");
                print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" iddote="+ elem.get("iddote")+" \n");

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
print("/n XXXXX FINE SCRIPT OPERATION PopolaElencoCorsi_DOTE")
