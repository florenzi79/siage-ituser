print("\n************************************\n XXXXX INIZIO SCRIPT OPERATION PopolaElencoCorsi_DOTE\n************************************\n")
//PopolaElencoCorsi_DOTE
//if (!isEmpty('Partecipante_CodiceFiscale')) {
//Svuota il sottomodulo ServiziFormazione_ElencoCorsi
var annualita = values.get('Bando_Annualita');
var  it = values.keySet().iterator();
while (it.hasNext()) {
	var property = it.next();
	if (property.startsWith('ServiziFormazione_ElencoCorsi'+'[')){
		it.remove();
	}
}

if (true) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);
//		if (isValidCf(codiceFiscale)) {
  if (true) {
    var idOperatore = values.get('Richiedente_IdOperatore');
    var idSede = values.get('Richiedente_IdSede');
    
// recupera offerte formative del bando definite nel primo modulo
    var offerteFormative = [];
    var i=0;
    while (values.get('Bando_OfferteFormative['+i+']')!==null) {
      offerteFormative[i]=values.get('Bando_OfferteFormative['+i+']');
      i++;
    }
    // per forzare le offerte formative per test, togliere il commento all'istruzione seguente:
    // offerteFormative = [048];
    //

    print("XXXXX DOTI - Offerte Formative: "+offerteFormative+"\n");
    try {
      print("XXXXX DOTI - esecuzione di estraiDettagliCorsi(IdOperatore = "+idOperatore+" codiceFiscale="+codiceFiscale+" offerteFormative:"+offerteFormative+" idSede:"+idSede+")\n");
      var dati_estraiDettagliCorsi = estraiDettagliCorsi(idOperatore, codiceFiscale, offerteFormative, idSede);
      if (dati_estraiDettagliCorsi.success) {
          print("XXXXX DOTI: dati_estraiDettagliCorsi result: "+ dati_estraiDettagliCorsi.result+"\n");
          print("XXXXX DOTI: dati_estraiDettagliCorsi result 66678: "+ dati_estraiDettagliCorsi.result.get('66678')+"\n");
          print("XXXXX DOTI: dati_estraiDettagliCorsi competenze 66678: "+ dati_estraiDettagliCorsi.result.get('66678').get('competenze')[0]+"\n");
          print("XXXXX DOTI: dati_estraiDettagliCorsi result 66678 datafine: "+ dati_estraiDettagliCorsi.result.get('66678').get('datafine')+"\n");


          if (dati_estraiDettagliCorsi.result!== null) {
            var a_IscrDC = dati_estraiDettagliCorsi.result.get('iscrizioni');
            if (a_IscrDC!==null) {
              var j=0;
              var offerta;
              for (i = 0; i < a_IscrDC.length; i++) {
                  var elem = a_IscrDC[i];
                  offerta = dati_estraiDettagliCorsi.result.get(elem.get('idcorso'));
                  //print("\nXXXXX DOTI i="+i+" estraiStatoIscrizioni.iscrizioni: "+ elem+"\n");
                  print("XXXXX DOTI i="+i+" elem.get('idcorso')="+ elem.get('idcorso')+" \n");
                  print("XXXXX DOTI: dati_estraiDettagliCorsi result datafine i-esima: "+ dati_estraiDettagliCorsi.result.get(elem.get('idcorso')).get('datafine')+"\n");
                  print("XXXXX DOTI: dati_estraiDettagliCorsi result titolo i-esimo: "+ dati_estraiDettagliCorsi.result.get(elem.get('idcorso')).get('titolo')+"\n");
                  print("XXXXX DOTI: offerta get titolo i-esimo: "+ offerta.get('titolo')+"\n");

                  if(annualita == offerta.get('annocorso')+'') {  // TODO Aggiungere le condizioni corrette che devono essere soddisfatte per popolare l'elenco corsi
                    var competenze = offerta.get('competenze')[0];
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].NomeServizio',offerta.get('titolo'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].NomeServizioDn',offerta.get('titolo'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].IdCorso',offerta.get('idcorso'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].DenominazioneOperatore',values.get('Richiedente_Denominazione'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].DenominazioneSedeOperatore',values.get('Richiedente_SedeOperativa'));

                    //TODO Da verificare se è la provincia dell'operatore o della sede del corso
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Provincia',values.get('Richiedente_SedeOperativa_ProvinciaDn'));

                    //TODO Da verificare se è il comune dell'operatore o della sede del corso
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Comune',values.get('Richiedente_SedeOperativa_ComuneDn'));

                    values.put('ServiziFormazione_ElencoCorsi['+j+'].IdAnnualita',offerta.get('annocorso'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Area',competenze.get('descrizionearea'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].IdQualifica',competenze.get('idqualifica'));
                    print('XXXXX idqualifica di competenze: ' + competenze.get('idqualifica')+'\n');
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].QualificaDiploma',competenze.get('descrizionequalifica'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Indirizzo',competenze.get('descrizioneindirizzo'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Ore',''+((offerta.get('durata') == 'null') ? 0 : parseFloat(offerta.get('durata'))));

                    //TODO Valorizzare ImportoAmmissibile Da tabella "tabella qualifica valori Dote" in base al valore di c43
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].ImportoAmmissibile',''+parseFloat('1234567890'));
                    if (offerta.get('datainizio')!== null) {
                      var dataAvvioMS = offerta.get('datainizio');
                      values.put('ServiziFormazione_ElencoCorsi['+j+'].DataAvvio',''+dataAvvioMS);
                    }
                    if (offerta.get('datafine')!== null) {
                      var dataConclusioneMS = offerta.get('datafine');
                      values.put('ServiziFormazione_ElencoCorsi['+j+'].DataConclusione',''+dataConclusioneMS);
                    }
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].StatoCorso',offerta.get('stato'));
                    j++;

                  }

                  //print("\nXXXXX DOTI i="+i+" iddote="+ elem.get("iddote")+" \n");

              }

            } else {
              print("XXXXX DOTI dati_estraiDettagliCorsi.result.get('iscrizioni')=null\n");
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
          else {
          print("dati_estraiDettagliCorsi.result = null\n");
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



/*
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



          }

          }
      }
      else {
        {
          // l'integrazione con gefo ha problemi
          // TODO: Valorizzare una variabile per permettere un avviso nel modulo successivo e relativo blocco
          print("\n XXXXX estraiStatoIscrizioni non andato a buon fine -  \n")

        }
      }
*/
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
