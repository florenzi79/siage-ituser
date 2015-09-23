function calcolaEtaRichiedente(dobTime) {
    if (parseInt(dobTime) === 0)
        return '';

	var age;

	var today = new Date();
	var todaysDay = today.getDate();
	var todaysMonth = today.getMonth()+1;
	var todaysYear = today.getFullYear();
    // todaysDay=28; todaysMonth=2; todaysYear=2000; // simulate today is another day

	var dob = new Date();
	dob.setTime(parseInt(dobTime));
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
      while (values.get('Bando_OfferteFormative['+i+']')!==null) {
        offerteFormative[i]=values.get('Bando_OfferteFormative['+i+']');
        i++;
      }
      logger.info("XXXXX Offerte Formative(dopo): "+offerteFormative);
//			var dati_estraiStatoIscrizioni = estraiStatoIscrizioni(codiceFiscale,offerteFormative);
//			if (dati_estraiStatoIscrizioni.success) {
		var idOperatore = values.get('Richiedente_IdOperatore');
		var idSede = values.get('Richiedente_IdSede');

		  print("XXXXX DOTI - esecuzione di estraiDettagliCorsi(IdOperatore = "+idOperatore+" codiceFiscale="+codiceFiscale+" offerteFormative:"+offerteFormative+" idSede:"+idSede+")\n");
		  var dati_estraiDettagliCorsi = estraiDettagliCorsi(idOperatore, codiceFiscale, offerteFormative, idSede);
		  if (dati_estraiDettagliCorsi.success) {

			items.get('avviso_problemaTecnico').setHidden(true);
			logger.info("XXXXX DOTI IFP Esecuzione di estraiStatoIscrizioni. result:"+ dati_estraiDettagliCorsi.result);
				if (dati_estraiDettagliCorsi.result!== null) {
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
						values.put('Partecipante_NascitaProvincia',istatComuneN.substr(0, 3));
						values.put('Partecipante_NascitaComune',istatComuneN);
						setSelectDependedOptionsAndShowCached('Partecipante_NascitaComune', 'comune_istat', path+'Partecipante_NascitaProvincia');
						// imposto la label provincia per i PDF
						var codeProvinciaN = values.get(path+'Partecipante_NascitaProvincia');
						var labelProvinciaN = getOptionLabel('Partecipante_NascitaProvincia', codeProvinciaN);
						values.put('Partecipante_NascitaProvinciaDn', labelProvinciaN);
						// imposto la label comune  per i PDF
						var codeComuneN = values.get(path+'Partecipante_NascitaComune');
						var labelComuneN = getOptionLabel('Partecipante_NascitaComune', codeComuneN);
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

            (values.get('Partecipante_ResidenzaComune')==values.get('Partecipante_DomicilioComune')) &&
            (values.get('Partecipante_ResidenzaIndirizzo')==values.get('Partecipante_DomicilioIndirizzo')) &&
            (values.get('Partecipante_ResidenzaCap')==values.get('Partecipante_DomicilioCap'))

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

				}
        else {
          // result = null ==> Non ci sono destinatari iscritti con quel CF
          logger.info("XXXXXX  DOTE: Il destinatario non risulta iscritto a nessun corso. Pertanto non è possibile procedere con la richiesta della dote");
          items.get('avviso_iscrizioneCorso').setHidden(false);
          svuotaCampiDestinatario();
          nascondiCampiDestinatario(true);
        }
			} else {
        // c'è un errore nell'integrazione con GeFo
			  logger.info("\n\n\n\n\n XXXXXX  Errore su estraiStatoIscrizioni message: " + dati_estraiStatoIscrizioni.message + "\n\n\n\n\n");
        // visualizzare avviso: Si è verificato un momentaneo problema di connessione. Si prega di riprovare più tardi
        items.get('avviso_problemaTecnico').setHidden(false);
        //svuotaCampiDestinatario();
        //nascondiCampiDestinatario(true);
			}
		} else {
      // CF Non Valido
      logger.info("XXXXXX  DOTE: CF Non Valido");
      items.get('avviso_CfErrato').setHidden(false);
      items.get('avviso_iscrizioneCorso').setHidden(true);
      svuotaCampiDestinatario();
      nascondiCampiDestinatario(true);
    }
}
clearModule('ServiziFormazione_RiepilogoServizi');
