print("\n************************************\n XXXXX INIZIO SCRIPT OPERATION PopolaElencoCorsi_DOTE\n************************************\n")
//PopolaElencoCorsi_DOTE
//if (!isEmpty('Partecipante_CodiceFiscale')) {
if (true) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);

  if (true) {  //		if (isValidCf(codiceFiscale)) {
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
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" iddote="+ elem.get("iddote")+" \n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" idcorsoMAPPA="+ elem.get("idcorso")+" \n");
                  print("\nXXXXX Test-Integrazione-GEFO: iteratore: "+ i +" idcorsoMAPPA="+ elem.get("idcorso")+" \n");


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
        print("\n XXXXX estraiDettagliCorsi non andato a buon fine -  \n")

      }
    }
    catch(err) {
      print("\n XXXXX CATCH  estraiDettagliCorsi non andato a buon fine -  \n")

    }



  }
}
print("\n************************************\n XXXXX FINE SCRIPT OPERATION PopolaElencoCorsi_DOTE\n************************************\n")

/*
 {datiAnagrafici={capdomicilio=23861, capresidenza=23861, codicefiscale=VLSSNO98S60E507L, cognome=VALSECCHI, datanascita=20/11/1998, genere=F, indirizzodomicilio=SEGANTINI, 95, indirizzoresidenza=SEGANTINI, 95, comunedomicilio=097021, istatcomunenascita=097042, istatcomuneresidenza=097021, nome=SONIA},

 66678={alternanza=0, annocorso=1, area=11, autofinanziato=N, datafine=05/06/2013, datainizio=null, descrizionepercorsoabilitante=Nessuna, descrizionepercorsoregolamentato=, durata=990, idcorso=66678, idoperatore=5498, idpadre=66678, idpercorsoabilitante=1, idpercorsoregolamentato=null, idsede=125962, idstato=C, ndotimax=18, numoffertaformativa=048, percorsoabilitante=NO, percorsoregolamentato=SI, stato=Concluso, tipologia=DDIF Triennali (2011-2013), titolo=OPERATORE DEL BENESSERE - TRATTAMENTI ESTETICI, totaleannualita=3, descrizionearea=COMPETENZA STORICO,SOCIO-ECONOMICA, descrizioneindirizzo=null, descrizionequalifica=null, idarea=137, idindirizzo=null, idqualifica=null, competenze=[Ljava.util.LinkedHashMap;@26ffc29a},

 91010={alternanza=232, annocorso=2, area=11, autofinanziato=N, datafine=03/06/2014, datainizio=null, descrizionepercorsoabilitante=Nessuna, descrizionepercorsoregolamentato=, durata=990, idcorso=91010, idoperatore=5498, idpadre=66678, idpercorsoabilitante=1, idpercorsoregolamentato=null, idsede=180785, idstato=C, ndotimax=24, numoffertaformativa=048, percorsoabilitante=NO, percorsoregolamentato=SI, stato=Concluso, tipologia=DDIF Triennali (2011-2013), titolo=OPERATORE DEL BENESSERE - TRATTAMENTI ESTETICI, totaleannualita=3, descrizionearea=COMPETENZA STORICO,SOCIO-ECONOMICA, descrizioneindirizzo=null, descrizionequalifica=null, idarea=137, idindirizzo=null, idqualifica=null, competenze=[Ljava.util.LinkedHashMap;@61412076},

 110036={alternanza=362, annocorso=3, area=11, autofinanziato=N, datafine=05/06/2015, datainizio=15/09/2014, descrizionepercorsoabilitante=Nessuna, descrizionepercorsoregolamentato=, durata=990, idcorso=110036, idoperatore=5498, idpadre=66678, idpercorsoabilitante=1, idpercorsoregolamentato=null, idsede=221739, idstato=A, ndotimax=22, numoffertaformativa=048, percorsoabilitante=NO, percorsoregolamentato=SI, stato=Avviato, tipologia=DDIF Triennali (2011-2013), titolo=OPERATORE DEL BENESSERE - TRATTAMENTI ESTETICI, totaleannualita=3, descrizionearea=COMPETENZA STORICO,SOCIO-ECONOMICA, descrizioneindirizzo=null, descrizionequalifica=null, idarea=137, idindirizzo=null, idqualifica=null, competenze=[Ljava.util.LinkedHashMap;@7aba54db},

 105061={idcorso=105061, iddote=51346779, idiscrizione=793791, numeroofferta=120, statoiscrizione=I},

 iscrizioni=[Ljava.util.LinkedHashMap;@5f1934cf}

 */
