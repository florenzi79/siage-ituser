print("\n************************************\n XXXXX INIZIO SCRIPT OPERATION PopolaElencoCorsi_DOTE\n************************************\n");
//PopolaElencoCorsi_DOTE
//if (!isEmpty('Partecipante_CodiceFiscale')) {
//Svuota il sottomodulo ServiziFormazione_ElencoCorsi
var annualita = values.get('Bando_Annualita');
var isIdentificazioneImportoOk =true;
var isInterrogazioneGefoOk = true;
var  it = values.keySet().iterator();
while (it.hasNext()) {
	var property = it.next();
	if (property.startsWith('ServiziFormazione_ElencoCorsi'+'[')){
		it.remove();
	}
}

var codiceFiscale= values.get('Partecipante_CodiceFiscale');
codiceFiscale = codiceFiscale.toUpperCase();
values.put('Partecipante_CodiceFiscale',codiceFiscale);
var idOperatore = values.get('Richiedente_IdOperatore');
var idSede = values.get('Richiedente_IdSede');
	var annualita = values.get('Bando_Annualita');

// recupera offerte formative del bando definite nel primo modulo
var offerteFormative = [];
var i=0;
while (values.get('Bando_OfferteFormative['+i+']')!=null) {
  offerteFormative[i]=values.get('Bando_OfferteFormative['+i+']');
  i++;
}
// per forzare le offerte formative per test, togliere il commento all'istruzione seguente:
// offerteFormative = [048];
//

print("\n XXXXX SCRIPT OPERATION PopolaElencoCorsi_DOTE 01\n");
		// mappa qualifiche
		var mappaQualificheImporti= new java.util.LinkedHashMap();
				mappaQualificheImporti.put("800|","4000");
				mappaQualificheImporti.put("796|","4000");
				mappaQualificheImporti.put("910|","4000");
				mappaQualificheImporti.put("910|189","4000");
				mappaQualificheImporti.put("809|","4000");
				mappaQualificheImporti.put("109|","4000");
				mappaQualificheImporti.put("108|","4000");
				mappaQualificheImporti.put("918|","4000");
				mappaQualificheImporti.put("977|","4000");
				mappaQualificheImporti.put("793|","4300");
				mappaQualificheImporti.put("789|","4300");
				mappaQualificheImporti.put("792|","4300");
				mappaQualificheImporti.put("795|","4300");
				mappaQualificheImporti.put("794|","4300");
				mappaQualificheImporti.put("791|","4300");
				mappaQualificheImporti.put("799|","4300");
				mappaQualificheImporti.put("788|","4300");
				mappaQualificheImporti.put("13|","4300");
				mappaQualificheImporti.put("820|","4300");
				mappaQualificheImporti.put("916|","4300");
				mappaQualificheImporti.put("917|","4300");
				mappaQualificheImporti.put("808|","4300");
				mappaQualificheImporti.put("804|","4300");
				mappaQualificheImporti.put("806|","4300");
				mappaQualificheImporti.put("805|","4300");
				mappaQualificheImporti.put("52|","4300");
				mappaQualificheImporti.put("36|","4300");
				mappaQualificheImporti.put("12|","4600");
				mappaQualificheImporti.put("786|","4600");
				mappaQualificheImporti.put("14|","4600");
				mappaQualificheImporti.put("18|","4600");
				mappaQualificheImporti.put("1|","4600");
				mappaQualificheImporti.put("790|","4600");
				mappaQualificheImporti.put("16|","4600");
				mappaQualificheImporti.put("793|188","4600");
				mappaQualificheImporti.put("19|","4600");
				mappaQualificheImporti.put("910|186","4600");
				mappaQualificheImporti.put("910|119","4600");
				mappaQualificheImporti.put("803|","4600");
				mappaQualificheImporti.put("801|","4600");
				mappaQualificheImporti.put("103|","4600");
				mappaQualificheImporti.put("104|","4600");
				mappaQualificheImporti.put("915|","4600");
				mappaQualificheImporti.put("28|","4600");
				mappaQualificheImporti.put("39|","4600");
				mappaQualificheImporti.put("110|","4600");
				mappaQualificheImporti.put("819|","4600");
				mappaQualificheImporti.put("975|","4600");
				mappaQualificheImporti.put("976|","4600");

print("\n XXXXX SCRIPT OPERATION PopolaElencoCorsi_DOTE 02\n");
//print("XXXXX mappaQualificheImporti: "+ mappaQualificheImporti+"\n");

//			print("XXXXX amQualifiche: "+ amQualifiche[k].get(indirizzoId)+"\n");
print("\n XXXXX SCRIPT OPERATION PopolaElencoCorsi_DOTE 03\n");
print("XXXXX DOTI - Offerte Formative: "+offerteFormative+"\n");
try {
      print("XXXXX DOTI - esecuzione di estraiDettagliCorsi(IdOperatore = "+idOperatore+" codiceFiscale="+codiceFiscale+" offerteFormative:"+offerteFormative+" idSede:"+idSede+")\n");
      var dati_estraiDettagliCorsi = estraiDettagliCorsi(idOperatore, codiceFiscale, offerteFormative, idSede);
      if (dati_estraiDettagliCorsi.success) {
          if (dati_estraiDettagliCorsi.result!= null) {
						print("XXXXX DOTI: dati_estraiDettagliCorsi.result:"+ dati_estraiDettagliCorsi.result+"\n");
            var a_IscrDC = dati_estraiDettagliCorsi.result.get('iscrizioni');
						print("XXXXX DOTI: array di iscrizioni: a_IscrDC:"+ a_IscrDC+"\n");
            if (a_IscrDC!=null) {
              var j=0;
              var offerta;
							var isAnnualitaOk = false;
		          var isOffertaFormativaOk = false;
		          var isStatoIscrizioneOk = false;
              for (i = 0; i < a_IscrDC.length; i++) {
  								print("\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
                  var elem = a_IscrDC[i];
									print("XXXXX DOTI: elemento elem=a_IscrDC["+i+"] = elem:"+ a_IscrDC+"\n");
                  offerta = dati_estraiDettagliCorsi.result.get(elem.get('idcorso'));
                  //print("\nXXXXX DOTI i="+i+" estraiStatoIscrizioni.iscrizioni: "+ elem+"\n");
									print("\nXXXXX DOTI i="+i+" \nXXXX offerta = elem.get('idcorso')="+ elem.get('idcorso')+" \n");
                  print("XXXXX DOTI: dati_estraiDettagliCorsi result datafine i-esima: "+ dati_estraiDettagliCorsi.result.get(elem.get('idcorso')).get('datafine')+"\n");
                  print("XXXXX DOTI: dati_estraiDettagliCorsi result titolo i-esimo: "+ dati_estraiDettagliCorsi.result.get(elem.get('idcorso')).get('titolo')+"\n");
                  print("XXXXX DOTI: offerta get titolo i-esimo: "+ offerta.get('titolo')+"\n");
                  var competenze = offerta.get('competenze')[0];

                  print('XXXXX mappa competenze: ' +competenze+'\n');
									print('XXXXX idqualifica di competenze: ' + competenze.get('idqualifica')+'\n');
									print('XXXXX idindirizzo di competenze: ' + competenze.get('idindirizzo')+'\n');
									print('XXXXX qualifica|indirizzo:==>' + competenze.get('idqualifica')+"|"+competenze.get('idindirizzo')+'<==\n');
                  print('XXXXX annocorso: ' +offerta.get('annocorso')+'\n');
                  print('XXXXX idqualifica: ' +offerta.get('idqualifica')+'\n');
                  print('XXXXX annocorso: ' +offerta.get('annocorso')+'\n');

									// verifica se l'annualità dell'iscrizione corrisponde con quella del bando
			            isAnnualitaOk = (annualita == offerta.get('annocorso')+'');
			            print("MSMS DOTI: annualita bando= "+ annualita+" Annualita iscrizione = "+offerta.get('annocorso')+" isAnnualitaOk = "+isAnnualitaOk+"\n");
			            // verifica se l'offerta formativa dell'iscrizione corrisponde con quella del bando
			            var l=0;
			            for (l = 0; l < offerteFormative.length; l++) {
			              print("MSMS DOTI: offerteFormative[l] bando= "+ offerteFormative[l] +
			                          " offerta Formativa iscrizione = " + offerta.get('numoffertaformativa')+"\n");
			              if (offerteFormative[l]== offerta.get('numoffertaformativa')+'') {
			                isOffertaFormativaOk = true;
			              }
			            }
			            print("MSMS DOTI: isOffertaFormativaOk="+ isOffertaFormativaOk+"\n");
			            print('MSMS stato: ' +offerta.get('stato')+'\n');
			            print('MSMS idstato : ' +offerta.get('idstato')+'\n');
			            if (offerta.get('stato')+''=='I') {
			              isOffertaFormativaOk = true;
			            }
			            // togliere la seguente riga nel caso si voglia abilitare il controllo dello stato iscrizione
			            isStatoIscrizioneOk = true;

									if ((offerta.get('idoperatore') != null) && (isAnnualitaOk) && (isOffertaFormativaOk)){
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

                    values.put('ServiziFormazione_ElencoCorsi['+j+'].QualificaDiploma',competenze.get('descrizionequalifica'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Indirizzo',competenze.get('descrizioneindirizzo'));
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].Ore',''+((offerta.get('durata') == 'null') ? 0 : parseFloat(offerta.get('durata'))));

                    //TODO Valorizzare ImportoAmmissibile Da tabella "tabella qualifica valori Dote" in base al valore di c43
										var chiaveRicercaImporto= competenze.get('idqualifica')+"|"+competenze.get('idindirizzo');
										print('XXXXX PRIMO TENTATIVO: chiaveRicercaImporto '+chiaveRicercaImporto+'\n');
										var importo = mappaQualificheImporti.get(chiaveRicercaImporto);
										print('XXXXX PRIMO TENTATIVO: ==> importo '+importo+'\n');

										if (importo == undefined)	{
											chiaveRicercaImporto= competenze.get('idqualifica')+"|";
											print('XXXXX importo non trovato usando sia qualifica che indirizzo.\n');
											print('XXXXX SECONDO TENTATIVO: chiaveRicercaImporto '+chiaveRicercaImporto+'\n');
											importo = mappaQualificheImporti.get(chiaveRicercaImporto);
											print('XXXXX SECONDO TENTATIVO: ==> importo '+importo+'\n');
										}
//                    values.put('ServiziFormazione_ElencoCorsi['+j+'].ImportoAmmissibile',''+parseFloat('1234567890'));
										if (importo != undefined) {
											isIdentificazioneImportoOk = true;
											values.put('ServiziFormazione_ElencoCorsi['+j+'].ImportoAmmissibile',importo);
										} else {
											print('XXXXX ricerca in mappaQualificheImporti per '+chiaveRicercaImporto+' non andata a buon fine\n');
											isIdentificazioneImportoOk = false;
										}


                    if (offerta.get('datainizio')!= null) {
                      var dataAvvioMS = offerta.get('datainizio');
                      values.put('ServiziFormazione_ElencoCorsi['+j+'].DataAvvio',''+dataAvvioMS);
                    }
                    if (offerta.get('datafine')!= null) {
                      var dataConclusioneMS = offerta.get('datafine');
                      values.put('ServiziFormazione_ElencoCorsi['+j+'].DataConclusione',''+dataConclusioneMS);
                    }
                    values.put('ServiziFormazione_ElencoCorsi['+j+'].StatoCorso',offerta.get('stato'));
                    j++;

                  }
              }

            } else {
              print("XXXXX DOTI dati_estraiDettagliCorsi.result.get('iscrizioni')=null\n");
							//			  values.get('Avviso_ricercaEmpty').setHidden(false);
            }
            var a_idcorsoDC = dati_estraiDettagliCorsi.result.get('idcorso');
            if (a_idcorsoDC!=null) {
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
//		  values.get('Avviso_ricercaEmpty').setHidden(false);
          }
			isInterrogazioneGefoOk = true;
      }
      else  {
        // l'integrazione con gefo ha problemi
        // TODO: Valorizzare una variabile per permettere un avviso nel modulo successivo e relativo blocco
        print("\n XXXXX estraiDettagliCorsi non andato a buon fine -  \n");
				isInterrogazioneGefoOk = false;
//		values.get('Avviso_ricercaEmpty').setHidden(false);

      }
        if (isInterrogazioneGefoOk) {
        values.put('avvisare_problema_tecnico','false');
        }   else{
       values.put('avvisare_problema_tecnico','false');
        }
    }

    catch(err) {
		print("\n XXXXX CATCH  estraiDettagliCorsi non andato a buon fine -  \n");
		isInterrogazioneGefoOk = false;
//		values.get('Avviso_ricercaEmpty').setHidden(false);
        values.put('avvisare_problema_tecnico','false');


    }

print("\n************************************\n XXXXX FINE SCRIPT OPERATION PopolaElencoCorsi_DOTE\n************************************\n");
