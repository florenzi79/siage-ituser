function calcolaEtaRichiedente(dobTime) {
    if (parseInt(dobTime,10) == 0)
        return '';

	var age;

	var today = new Date();
	var todaysDay = today.getDate();
	var todaysMonth = today.getMonth()+1;
	var todaysYear = today.getFullYear();
    // todaysDay=28; todaysMonth=2; todaysYear=2000; // simulate today is another day

	var dob = new Date();
	dob.setTime(parseInt(dobTime,10));
	var myDay = dob.getDate();
	var myMonth = dob.getMonth()+1;
	var myYear = dob.getFullYear();

	age = todaysYear - myYear;
	if (todaysMonth < myMonth) age--;

	if (todaysMonth == myMonth) {
		if (todaysDay < myDay) age--;
	}

	if (isNaN(age))
    	return '';
	return age;
}

function svuotaCampiDestinatario() {
  values.put('Partecipante_Cognome','');
  values.put('Partecipante_Nome','');
  values.put('title','nuova pratica');
  values.put('Partecipante_Genere','');
  values.put('Partecipante_NascitaData','');
  values.put('Partecipante_Eta','');
  values.put('Partecipante_NascitaProvincia','');
  values.put('Partecipante_NascitaComune','');
  values.put('Partecipante_NascitaProvinciaDn','');
  values.put('Partecipante_NascitaComuneDn','');
  values.put('Partecipante_ResidenzaProvincia','');
  values.put('Partecipante_ResidenzaComune','');
  values.put('Partecipante_ResidenzaProvinciaDn','');
  values.put('Partecipante_ResidenzaComuneDn','');
  values.put('Partecipante_DomicilioProvincia','');
  values.put('Partecipante_DomicilioComune','');
  values.put('Partecipante_DomicilioProvinciaDn','');
  values.put('Partecipante_DomicilioComuneDn','');
  values.put('Partecipante_ResidenzaCap','');
  values.put('Partecipante_ResidenzaIndirizzo','');
  values.put('Partecipante_DomicilioCap','');
  values.put('Partecipante_DomicilioIndirizzo','');
  values.put('Partecipante_DomicilioComeResidenza','');
}
function nascondiCampiDestinatario(flag) {
  items.get('Partecipante_Cognome').setHidden(flag);
  items.get('Partecipante_Nome').setHidden(flag);
  items.get('Partecipante_Genere').setHidden(flag);
  items.get('Partecipante_NascitaData').setHidden(flag);
  items.get('Partecipante_Eta').setHidden(flag);
  items.get('Partecipante_NascitaProvincia').setHidden(flag);
  items.get('Partecipante_NascitaComune').setHidden(flag);
  //items.get('dichiarazione_frequenza').setHidden(flag);
}



if (!isEmpty('Partecipante_CodiceFiscale')) {
    var codiceFiscale= values.get('Partecipante_CodiceFiscale');
    codiceFiscale = codiceFiscale.toUpperCase();
    values.put('Partecipante_CodiceFiscale',codiceFiscale);
		if (isValidCf(codiceFiscale)) {
      items.get('avviso_CfErrato').setHidden(true);
			// chiamata a GeFo per compilare i restanti campi
      var offerteFormative = [];
      logger.info("XXXXX Offerte Formative(prima): "+offerteFormative);
      var i=0;
      while (values.get('Bando_OfferteFormative['+i+']')!=null) {
        offerteFormative[i]=values.get('Bando_OfferteFormative['+i+']');
        i++;
      }
      logger.info("XXXXX Offerte Formative(dopo): "+offerteFormative);
//			var dati_estraiStatoIscrizioni = estraiStatoIscrizioni(codiceFiscale,offerteFormative);
//			if (dati_estraiStatoIscrizioni.success) {
  		var idOperatore = values.get('Richiedente_IdOperatore');
  		var idSede = values.get('Richiedente_IdSede');
  		var annualita = values.get('Bando_Annualita');

		  logger.info("XXXXX DOTI - esecuzione di estraiDettagliCorsi(IdOperatore = "+idOperatore+" codiceFiscale="+codiceFiscale+" offerteFormative:"+offerteFormative+" idSede:"+idSede+")\n");
		  var dati_estraiDettagliCorsi = estraiDettagliCorsi(idOperatore, codiceFiscale, offerteFormative, idSede);
		  if (dati_estraiDettagliCorsi.success) {

			items.get('avviso_problemaTecnico').setHidden(true);
			logger.info("XXXXX DOTI IFP Esecuzione di estraiDettagliCorsi. result:"+ dati_estraiDettagliCorsi.result);
			var esisteIscrizione = false;
			if (dati_estraiDettagliCorsi.result!= null) {
			//*****************************************************************
				// veriricare che esiste almento una iscrizione per quel operatore
				var a_IscrDC = dati_estraiDettagliCorsi.result.get('iscrizioni');
				if (a_IscrDC!=null) {
				  var j=0;
				  var offerta;
          var isAnnualitaOk = false;
          var isOffertaFormativaOk = false;
          var isStatoIscrizioneOk = false;
				  for (i = 0; i < a_IscrDC.length; i++) {
						logger.info("\n==> "+i+" <== MSMSMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXXXX\n");
						var elem = a_IscrDC[i];
						logger.info("MSMS DOTI: idcorso="+ elem.get('idcorso')+"\n");
						offerta = dati_estraiDettagliCorsi.result.get(elem.get('idcorso'));
            // verifica se l'annualità dell'iscrizione corrisponde con quella del bando
            isAnnualitaOk = (annualita == offerta.get('annocorso')+'');
            logger.info("MSMS DOTI: annualita bando= "+ annualita+" Annualita iscrizione = "+offerta.get('annocorso')+" isAnnualitaOk = "+isAnnualitaOk+"\n");
            // verifica se l'offerta formativa dell'iscrizione corrisponde con quella del bando
            var l=0;
            for (l = 0; l < offerteFormative.length; l++) {
              logger.info("MSMS DOTI: offerteFormative[l] bando= "+ offerteFormative[l] +
                          " offerta Formativa iscrizione = " + offerta.get('numoffertaformativa')+"\n");
              if (offerteFormative[l]== offerta.get('numoffertaformativa')+'') {
                isOffertaFormativaOk = true;
              }
            }
            logger.info("MSMS DOTI: isOffertaFormativaOk="+ isOffertaFormativaOk+"\n");
            logger.info('MSMS stato: ' +offerta.get('stato')+'\n');
            logger.info('MSMS idstato : ' +offerta.get('idstato')+'\n');
            if (offerta.get('stato')+''=='I') {
              isOffertaFormativaOk = true;
            }
            // togliere la seguente riga nel caso si voglia abilitare il controllo dello stato iscrizione
            isStatoIscrizioneOk = true;

						if ((offerta.get('idoperatore') != null) && (isAnnualitaOk) && (isOffertaFormativaOk)){
							  esisteIscrizione = true;
							  logger.info("MSMS DOTI i="+i+" XXXX offerta = elem.get('idcorso')="+ elem.get('idcorso')+": "+offerta+"\n");
							  logger.info("MSMS DOTI: dati_estraiDettagliCorsi result datafine i-esima: "+ dati_estraiDettagliCorsi.result.get(elem.get('idcorso')).get('datafine')+"\n");
							  logger.info("MSMS DOTI: dati_estraiDettagliCorsi result titolo i-esimo: "+ dati_estraiDettagliCorsi.result.get(elem.get('idcorso')).get('titolo')+"\n");
							  logger.info("MSMS DOTI: offerta get titolo i-esimo: "+ offerta.get('titolo')+"\n");
							  logger.info("MSMS DOTI: offerta get titolo i-esimo: idoperatore"+ offerta.get('idoperatore')+"\n");
							  logger.info("MSMS DOTI: offerta get titolo i-esimo: idsede: "+ offerta.get('idsede')+"\n");
                logger.info("MSMS DOTI: offerta get titolo i-esimo: numoffertaformativa: "+ offerta.get('numoffertaformativa')+"\n");
							  var competenze = offerta.get('competenze')[0];

							  logger.info('MSMS mappa competenze: ' +competenze+'\n');
							  logger.info('MSMS idqualifica di competenze: ' + competenze.get('idqualifica')+'\n');
							  logger.info('MSMS idindirizzo di competenze: ' + competenze.get('idindirizzo')+'\n');
							  logger.info('MSMS qualifica|indirizzo:==>' + competenze.get('idqualifica')+"|"+competenze.get('idindirizzo')+'<==\n');
							  logger.info('MSMS annocorso: ' +offerta.get('annocorso')+'\n');
							  logger.info('MSMS idqualifica: ' +offerta.get('idqualifica')+'\n');
							  logger.info('MSMS annocorso: ' +offerta.get('annocorso')+'\n');
							  logger.info('MSMS stato: ' +offerta.get('stato')+'\n');
                logger.info('MSMS idstato : ' +offerta.get('idstato')+'\n');

							}  // fine IF (offerta.get('idoperatore') != null) && (annualita == offerta.get('annocorso')+
              else {
                logger.info('MSMS Iscrizione scartata (idoperatore = null o annualità sbagliata o offerta formativa sbagliata)\n');
              }
						} // fine cidlo for sulle iscrizioni
				  } else {
					logger.info("MSMS DOTI dati_estraiDettagliCorsi.result.get('iscrizioni')=null\n");
								//			  values.get('Avviso_ricercaEmpty').setHidden(false);
				  }

			//*****************************************************************
			}


			if (esisteIscrizione ) {
				    values.put('CFvalido','true');
          // veriricare che esiste almento una iscrizione per quel opera
				nascondiCampiDestinatario(false);
					var m_Ana = dati_estraiDettagliCorsi.result.get('datiAnagrafici');
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
						values.put('Partecipante_Nome',m_Ana.get("nome"));
						values.put('title',values.get('Partecipante_Cognome')+' '+values.get('Partecipante_Nome'));
						values.put('Partecipante_Genere',m_Ana.get("genere"));
						// Prevalorizzo Data di Nascita
						var dataNascitaString = m_Ana.get("datanascita");
						var dataNascitaMS = getTimemillis(dataNascitaString,'dd/MM/yyyy');
						logger.info("XXXXXX dataNascitaString: " + dataNascitaString);
						logger.info("XXXXXX dataNascitaMS: " + dataNascitaMS);
						values.put('Partecipante_NascitaData',dataNascitaMS);

						// calcolo età ad oggi
						logger.info('XXXXXXXX DOTI 1 Entrata Script variazione Data Nascita ');
						    var dataNascita = values.get('Partecipante_NascitaData');
						logger.info('XXXXXXXX DOTI 2 Script variazione dataNascita: '+dataNascita);
						    if ( (dataNascita == null) || (dataNascita == '') ) {
						        dataNascita = '';
						    } else {
						        dataNascita = parseFloat(dataNascita);
						    }

							var etaRichiedente = calcolaEtaRichiedente(dataNascita);
							values.put('Partecipante_Eta',etaRichiedente+'');

						logger.info('XXXXXXXX DOTI 3 Script variazione dataNascita: '+dataNascita+' - anni: '+etaRichiedente);

            //valorizza da gefo Comune e Provincia di NASCITA
						var istatComuneN = m_Ana.get("istatcomunenascita");
						logger.info('FFFFF istatComuneN estero?: '+istatComuneN.indexOf('E'));
						if (istatComuneN.indexOf('E')>=0) {
						    var codiceComune = istatComuneN.substr(3, 3);
						    istatComuneN = 'EEE'+codiceComune;
						}
						var isEstero = (istatComuneN.indexOf('E')>=0);
						logger.info('FFFFF isEstero: '+isEstero);
						items.get('Partecipante_NascitaComune').setHidden(isEstero);
						values.put('Partecipante_NascitaProvincia',istatComuneN.substr(0, 3));
						values.put('Partecipante_NascitaComune',istatComuneN);
						logger.info('FFFFF istatComuneN: '+istatComuneN);
						setSelectOptionsCached('Partecipante_NascitaProvincia', 'provincia_istat');
						setSelectDependedOptionsCached('Partecipante_NascitaComune', 'comune_istat', path+'Partecipante_NascitaProvincia');
						// imposto la label provincia per i PDF
						var codeProvinciaN = values.get(path+'Partecipante_NascitaProvincia');
						logger.info('FFFFF codeProvinciaN: '+codeProvinciaN);
					    var labelProvinciaN = getOptionLabel('Partecipante_NascitaProvincia', codeProvinciaN);
						logger.info('FFFFF labelProvinciaN: '+labelProvinciaN);
						values.put('Partecipante_NascitaProvinciaDn', labelProvinciaN);
						// imposto la label comune  per i PDF
						var codeComuneN = values.get(path+'Partecipante_NascitaComune');
						logger.info('FFFFF codeComuneN: '+codeComuneN);
						var labelComuneN = getOptionLabel('Partecipante_NascitaComune', codeComuneN);
						logger.info('FFFFF labelComuneN: '+labelComuneN);
						values.put('Partecipante_NascitaComuneDn', labelComuneN);

            //valorizza da gefo Comune e Provincia di RESIDENZA
            var istatComuneR = m_Ana.get("istatcomuneresidenza");
						values.put('Partecipante_ResidenzaProvincia',istatComuneR.substr(0, 3));
						values.put('Partecipante_ResidenzaComune',istatComuneR);
						setSelectDependedOptionsAndShowCached('Partecipante_ResidenzaComune', 'comune_istat', path+'Partecipante_ResidenzaProvincia');
						// imposto la label provincia per i PDF
						var codeProvinciaN = values.get(path+'Partecipante_ResidenzaProvincia');
						var labelProvinciaN = getOptionLabel('Partecipante_ResidenzaProvincia', codeProvinciaN);
						values.put('Partecipante_ResidenzaProvinciaDn', labelProvinciaN);
						// imposto la label comune  per i PDF
						var codeComuneR = values.get(path+'Partecipante_ResidenzaComune');
						var labelComuneR = getOptionLabel('Partecipante_ResidenzaComune', codeComuneR);
						values.put('Partecipante_ResidenzaComuneDn', labelComuneR);

            //valorizza da gefo Comune e Provincia di DOMICILIO
            var istatComuneD = m_Ana.get("comunedomicilio");
						values.put('Partecipante_DomicilioProvincia',istatComuneD.substr(0, 3));
						values.put('Partecipante_DomicilioComune',istatComuneD);
						setSelectDependedOptionsAndShowCached('Partecipante_DomicilioComune', 'comune_istat', path+'Partecipante_DomicilioProvincia');
						// imposto la label provincia per i PDF
						var codeProvinciaN = values.get(path+'Partecipante_DomicilioProvincia');
						var labelProvinciaN = getOptionLabel('Partecipante_DomicilioProvincia', codeProvinciaN);
						values.put('Partecipante_DomicilioProvinciaDn', labelProvinciaN);
						// imposto la label comune  per i PDF
						var codeComuneR = values.get(path+'Partecipante_DomicilioComune');
						var labelComuneR = getOptionLabel('Partecipante_DomicilioComune', codeComuneR);
						values.put('Partecipante_DomicilioComuneDn', labelComuneR);

            // valorizza da gefo Altri dati RESIDENZA
						values.put('Partecipante_ResidenzaCap',m_Ana.get("capresidenza"));
            values.put('Partecipante_ResidenzaIndirizzo',m_Ana.get("indirizzoresidenza"));
            values.put('Partecipante_DomicilioCap',m_Ana.get("capdomicilio"));
            values.put('Partecipante_DomicilioIndirizzo',m_Ana.get("indirizzodomicilio"));

            if (
              (values.get('Partecipante_ResidenzaComune')==values.get('Partecipante_DomicilioComune')) &&
              (values.get('Partecipante_ResidenzaIndirizzo')==values.get('Partecipante_DomicilioIndirizzo')) &&
              (values.get('Partecipante_ResidenzaCap')==values.get('Partecipante_DomicilioCap'))
            ) {
                values.put('Partecipante_DomicilioComeResidenza','true');
            } else {
                values.put('Partecipante_DomicilioComeResidenza','false');
            }

            logger.info('XXXXX Partecipante_ResidenzaComune:>>>'+values.get('Partecipante_ResidenzaComune')+'<<<');
            logger.info('XXXXX Partecipante_DomicilioComune:>>>'+values.get('Partecipante_DomicilioComune')+'<<<');
            logger.info('XXXXX Partecipante_ResidenzaIndirizzo:>>>'+values.get('Partecipante_ResidenzaIndirizzo')+'<<<');
            logger.info('XXXXX Partecipante_DomicilioIndirizzo:>>>'+values.get('Partecipante_DomicilioIndirizzo')+'<<<');
            logger.info('XXXXX Partecipante_ResidenzaCap:>>>'+values.get('Partecipante_ResidenzaCap')+'<<<');
            logger.info('XXXXX Partecipante_DomicilioCap:>>>'+values.get('Partecipante_DomicilioCap')+'<<<');


            logger.info('XXXXX Partecipante_DomicilioComeResidenza: '+values.get('Partecipante_DomicilioComeResidenza'));

  					/*
  			    for (i = 0; i < dati_estraiStatoIscrizioni.result.get('iscrizioni').length; i++) {
  			        var elem = dati_estraiStatoIscrizioni.result.get('iscrizioni')[i];
  			        logger.info("XXXXX Test-Integrazione-GEFO: estraiStatoIscrizioni.iscrizioni: "+ elem);
  			    }
  					*/
            items.get('avviso_iscrizioneCorso').setHidden(true);
            // TODO: Richiamare Gefo per controllare che il destinatario non abbia già partecipato ad una dote tra quelle nel sheets "Verifica Bandi"
            // visualizzando eventualmente l'avviso  avviso_DoteGiaErogataIncompatibile e bloccando con un controllo.

				}  //if (dati_estraiDettagliCorsi.result!= null)
        else {
          // result = null ==> Non ci sono destinatari iscritti con quel CF
          logger.info("XXXXXX  DOTE: Il destinatario non risulta iscritto a nessun corso. Pertanto non è possibile procedere con la richiesta della dote");
          items.get('avviso_iscrizioneCorso').setHidden(false);
          values.put('CFvalido','false');
          svuotaCampiDestinatario();
          nascondiCampiDestinatario(true);
        }
			} else {
        // c'è un errore nell'integrazione con GeFo
			  logger.info("\n\n\n\n\n XXXXXX  Errore su estraiStatoIscrizioni message: " + dati_estraiStatoIscrizioni.message + "\n\n\n\n\n");
        // visualizzare avviso: Si è verificato un momentaneo problema di connessione. Si prega di riprovare più tardi
        items.get('avviso_problemaTecnico').setHidden(false);
        values.put('CFvalido','false');
        svuotaCampiDestinatario();
        nascondiCampiDestinatario(true);
			}
		} else {
      // CF Non Valido
      logger.info("XXXXXX  DOTE: CF Non Valido");
      values.put('CFvalido','false');
      items.get('avviso_CfErrato').setHidden(false);
      items.get('avviso_iscrizioneCorso').setHidden(true);
      svuotaCampiDestinatario();
      nascondiCampiDestinatario(true);
    }
}
clearModule('ServiziFormazione_RiepilogoServizi');
