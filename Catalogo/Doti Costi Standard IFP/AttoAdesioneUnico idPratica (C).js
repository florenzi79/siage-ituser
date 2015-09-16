{
	var idStato1 = '19358b018f8746de8b6e325b1cadd945';
	var iamInStato1 = (instance.getCurrentState() == idStato1);
	if (iamInRoot())  {
		logger.info("XXXXXMMMMM DOTE IFP: INIZIO Script ONLOAD su IdPratica - Modulo 1");

// PARAMETRI da valorizzare correttamente usando il CATALOGO
		var nomeTemplate ="Doti IeFP DDF I anni"; // usato nella query per il check dell'atto unico
		var annualita ="1";
		//		var nomeTemplate ="TEST CATALOGO Dote IFP "; // temporaneo... per prova ********
		var offerteFormative = ['048','120'];
		// TODO: Inserire le offerte formative corrette
		var idStatiAttoUnicoPresentato = "'859506c362764ba1a70277d1345e7cee','8c8999ca9712409f81b1f5c39ef2f052'";
		var idFildsetDettagliAttoUnicoPresentato = 'b19c24e93a98431bbb1c5720807fcf2f'; // viene nascosto o mostrato a secondo che è stato o non è stato presentato l'atto di adesione unico
		var idFildsetFirmatario = 'e681dd72e6e647d68429e9e6dab34be3';
		var idFildsetDichiarazioni = '2089fc04d0294984b2f85cdbe3eda960';
		var nomeBando ="Doti IeFP DDF I anni - (Nome strumento attuativo) wait chiusura  punto aperto PA_020";

		var descrizioneBando ="wait chiusura  punto aperto PA_020 - inserire la descrizione del bando";

	//**** VALORIZZAZIONE CAMPI dei DATI GENERICI
		values.put('NumeroPratica', values.get('idPratica'));
		values.put('Bando_Descrizione', descrizioneBando); // da definire cosa dovrà essere nel caso in cui si sta compilando l'atto unico
		values.put('Bando_Nome', nomeBando);
		values.put('Bando_Annualita', annualita); // da definire cosa dovrà essere nel caso in cui si sta compilando l'atto unico


		var i=0;
		while (offerteFormative[i]) {
			values.put('Bando_OfferteFormative['+i+']',offerteFormative[i]);
			i++;
		}
	//**** SCRIPT di INIZIALIZZAZIONE
		values.put('statoPratica', "Bozza");
		values.put('fasePratica', "Adesione"); // da definire cosa dovrà essere nel caso in cui si sta compilando l'atto unico
		if (iamInStato1) {
			//**** LETTURA user
			if (user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf() !== null) {
			values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
			}

			//**** LETTURA da SGPROF
			var mappaValoriSgProf = ricercaProfiloSgProf(user);
			if (mappaValoriSgProf != null) {
				if((mappaValoriSgProf.get('AA037') != null )&&(isEmpty('Richiedente_Denominazione')))
					values.put( 'Richiedente_Denominazione', mappaValoriSgProf.get('AA037').toString() );
				if( mappaValoriSgProf.get('AA038') != null )
					values.put( 'Richiedente_PartitaIva', mappaValoriSgProf.get('AA038').toString() );
				if((mappaValoriSgProf.get('AA206') != null) && (isEmpty('Richiedente_CodiceFiscale')))
					values.put( 'Richiedente_CodiceFiscale', mappaValoriSgProf.get('AA206').toString());
				if((mappaValoriSgProf.get('AA062') != null)&& (isEmpty('Richiedente_SedeLegaleProvincia'))){
					values.put( 'Richiedente_SedeLegaleProvincia', mappaValoriSgProf.get('AA062').toString() );
					values.put( 'Richiedente_SedeLegaleProvinciaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_SedeLegaleProvincia')) );
				}
				if((mappaValoriSgProf.get('AA061')!= null)&&(isEmpty('Richiedente_SedeLegaleComune'))) {
					values.put( 'Richiedente_SedeLegaleComune', mappaValoriSgProf.get('AA061').toString());
					values.put( 'Richiedente_SedeLegaleComuneDn', getAnaDenominazione('comune_istat', values.get('Richiedente_SedeLegaleComune')) );
				}

				if((mappaValoriSgProf.get('AA063')!= null)&&(isEmpty('Richiedente_SedeLegaleCap'))) {
					values.put( 'Richiedente_SedeLegaleCap', mappaValoriSgProf.get('AA063').toString());
				}

				if((mappaValoriSgProf.get('AA060') != null)&&(isEmpty('Richiedente_SedeLegaleIndirizzo')))
					values.put( 'Richiedente_SedeLegaleIndirizzo', mappaValoriSgProf.get('AA060').toString() );
				if( mappaValoriSgProf.get('AA030') != null && isEmpty('Richiedente_RappresentanteLegaleNome'))
					values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
				if( mappaValoriSgProf.get('AA029') != null && isEmpty('Richiedente_RappresentanteLegaleCognome'))
					values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
				if( mappaValoriSgProf.get('AA142') != null && isEmpty('Richiedente_RappresentanteLegaleCodiceFiscale') )
					values.put( 'Richiedente_RappresentanteLegaleCodiceFiscale', mappaValoriSgProf.get('AA142').toString() );
			} // **** FINE LETTURA da SGPROF

			// Campi derivati
			var descrizioneSedeLegaleOperatore = values.get('Richiedente_SedeLegaleComuneDn')+" ("+
																  values.get('Richiedente_SedeLegaleProvinciaDn')+") "+
																	values.get('Richiedente_SedeLegaleIndirizzo');
			values.put('Richiedente_SedeLegaleDescrizione', descrizioneSedeLegaleOperatore);

			// Verifica Accreditamento Operatore
			var CF_Oper = values.get('Richiedente_CodiceFiscale');
			var m_accreditamentoOperatore = verificaAccreditamentoOperatore(CF_Oper);
			logger.info("XXXXX DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.success:"+m_accreditamentoOperatore.success);
			if (m_accreditamentoOperatore.success) {
				logger.info("XXXXX DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.result:"+m_accreditamentoOperatore.result);
				items.get('Avviso_AccreditamentoOperatoreNonVerificabile').setHidden(true);
				values.put('InterrogazioneAlboAccreditati','ok');
				if(m_accreditamentoOperatore.result) {
						logger.info('XXXXXXXX  Ente Accreditato');
						values.put('Richiedente_OperatoreAccreditato','true');
						items.get('Avviso_NoRequisitiAttoUnico').setHidden(true);
				} else {
						logger.info('XXXXXXXX  Ente NON Accreditato - Visualizzo avviso 01');
						values.put('Richiedente_OperatoreAccreditato','false');
						items.get('Avviso_NoRequisitiAttoUnico').setHidden(false);
				}
			} else {  // se non è stato possibile verificare l'accreditamento dell'operatore
				logger.info("\n\n\n\n\n XXXXXXXX Errore su verificaAccreditamentoOperatore: " + m_accreditamentoOperatore.message + "\n\n\n\n\n");
				values.put('InterrogazioneAlboAccreditati','m_accreditamentoOperatore.message');
				items.get('Avviso_NoRequisitiAttoUnico').setHidden(true);
				items.get('Avviso_AccreditamentoOperatoreNonVerificabile').setHidden(false);
			}
			logger.info("XXXXX DOTE IFP: FINE verificaAccreditamentoOperatore");

			// ricavo idSede
			result_SedePratica = recuperaSedePratica();
			/*
		 recuperaSedePratica: {
		 cap=25048,
		 cf=02481950984,
			 denominazionesede=C.F.P. EDOLO,
		 email=l.gazzoli@cfpzanardelli.it,
		 fax=0364/73165,
			 idoperatore=171919,
			 idsede=179778,
		 indirizzo=VIA MARCONI, 73,
		 istatcomune=017068,
		 reanum=453948,
		 telefono=0364/71256,
		 tipologia=Sede operativa,
		 www=www.cfpzanardelli.it}

			*/
			if (result_SedePratica.success) {
				var m_InfoSedePratica=result_SedePratica.result;
					logger.info("XXXXX Test-Integrazione-GEFO: m_InfoSedePratica: "+ m_InfoSedePratica);

					logger.info("XXXXX Test-Integrazione-GEFO: denominazionesede: "+ m_InfoSedePratica.get("denominazionesede"));
					logger.info("XXXXX Test-Integrazione-GEFO: idsede: "+ m_InfoSedePratica.get("idsede"));
					logger.info("XXXXX Test-Integrazione-GEFO: idoperatore: "+ m_InfoSedePratica.get("idoperatore"));
					logger.info("XXXXX Test-Integrazione-GEFO: cap: "+ m_InfoSedePratica.get("cap"));
					logger.info("XXXXX Test-Integrazione-GEFO: cf: "+ m_InfoSedePratica.get("cf"));
					logger.info("XXXXX Test-Integrazione-GEFO: email: "+ m_InfoSedePratica.get("email"));
					logger.info("XXXXX Test-Integrazione-GEFO: fax: "+ m_InfoSedePratica.get("fax"));
					logger.info("XXXXX Test-Integrazione-GEFO: indirizzo: "+ m_InfoSedePratica.get("indirizzo"));
					logger.info("XXXXX Test-Integrazione-GEFO: istatcomune: "+ m_InfoSedePratica.get("istatcomune"));
					logger.info("XXXXX Test-Integrazione-GEFO: reanum: "+ m_InfoSedePratica.get("reanum"));
					logger.info("XXXXX Test-Integrazione-GEFO: telefono: "+ m_InfoSedePratica.get("telefono"));
					logger.info("XXXXX Test-Integrazione-GEFO: tipologia: "+ m_InfoSedePratica.get("tipologia"));
					logger.info("XXXXX Test-Integrazione-GEFO: www: "+ m_InfoSedePratica.get("www"));

					values.put('Richiedente_IdOperatore',m_InfoSedePratica.get("idoperatore"));
					values.put('Richiedente_IdSede',m_InfoSedePratica.get("idsede"));
					values.put('Richiedente_SedeOperativa',m_InfoSedePratica.get("denominazionesede"));
					values.put('Richiedente_SedeOperativa_Comune',m_InfoSedePratica.get("istatcomune"));
					values.put('Richiedente_SedeOperativa_ComuneDn', getAnaDenominazione('comune_istat', values.get('Richiedente_SedeOperativa_Comune')));

					var istatComuneP = m_InfoSedePratica.get("istatcomune");
					values.put('Richiedente_SedeOperativa_Provincia',istatComuneP.substr(0, 3));
					values.put('Richiedente_SedeOperativa_ProvinciaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_SedeOperativa_Provincia')));

			} else {
					logger.info("\n\n\n\n\nErrore su recuperaSedePratica: " + result_SedePratica.message + "\n\n\n\n\n");
			}
		} // fine if I am in stato 1
		else { // se non sono in stato 1
			items.get('Avviso_NoRequisitiAttoUnico').setHidden(true);
			items.get('Avviso_AccreditamentoOperatoreNonVerificabile').setHidden(true);
		}


    // Verifica Se atto unico è stato presentato
	var isAttoUnicoPresentato =false;
	var CF_Operatore = values.get('Richiedente_CodiceFiscale');
	var sql_AttoUnicoPresentato = " select count(*)  from ag_sm_data_entries data_entries where dat_pth = 'Richiedente_CodiceFiscale'  and fk_id in (select sm_id  FROM ag_sm_instances inst  WHERE  inst.sm_tmpl_dn = '"+nomeTemplate+"' and  inst.current_state in ("+idStatiAttoUnicoPresentato+") and DAT_VL ='"+CF_Operatore+"')";
	var numAttiUniciPresentati = dizionarioService.getSingle(null, sql_AttoUnicoPresentato);
	logger.info("XXXXX DOTE IFP: Numero Atti unici presentati per il CF "+CF_Operatore+": "+numAttiUniciPresentati);
	if(numAttiUniciPresentati >0){
		isAttoUnicoPresentato = true;
		values.put('Richiedente_AttoUnicoPresentato','true');
		var dataAtto = values.get('AttoUnico_ProtocolloData');
		var numeroAtto = values.get('AttoUnico_ProtocolloNumero');
		if ((dataAtto!== null) && (numeroAtto!== null) &&(dataAtto!== '') && (numeroAtto!== '')) {
		    values.put('AttoUnico_ProtocolloData_1',dataAtto);
		    values.put('AttoUnico_ProtocolloNumero_1',numeroAtto);
				items.get('AttoUnico_ProtocolloData_1').setHidden(false);
				items.get('AttoUnico_ProtocolloNumero_1').setHidden(false);
		} else {
		    items.get('AttoUnico_ProtocolloData_1').setHidden(true);
		    items.get('AttoUnico_ProtocolloNumero_1').setHidden(true);
		}
	} else {
		isAttoUnicoPresentato = false;
		values.put('Richiedente_AttoUnicoPresentato','false');
		// NASCONDI I DATI RELATIVI ALLA PROTOCOLLAZIONE dell'ATTO UNICO che non è stato ancora PRESENTATO
		fieldsets.get(idFildsetDettagliAttoUnicoPresentato).setHidden(true);
		items.get('AttoUnico_ProtocolloData_1').setHidden(true);
		items.get('AttoUnico_ProtocolloNumero_1').setHidden(true);

		// VALORIZZO i campi che servono per l'ATTO unico, compresa la prodizione dei PDF
		values.put('AttoUnico_RappresentanteLegaleNome',values.get('Richiedente_RappresentanteLegaleNome'));
		values.put('AttoUnico_RappresentanteLegaleCognome',values.get('Richiedente_RappresentanteLegaleCognome'));
		values.put('AttoUnico_RappresentanteLegaleCodiceFiscale',values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
		if (!isEmpty('Richiedente_Denominazione')) {
				values.put('title', "Atto di adesione unico - "+ values.get('Richiedente_Denominazione'));
		}
	}
	values.put('TitoloPratica',values.get('title'));

	// NASCONDI o MOSTRA fieldsets e ITEMS per la raccolta dati atto unico
	fieldsets.get(idFildsetFirmatario).setHidden(isAttoUnicoPresentato);
	fieldsets.get(idFildsetDichiarazioni).setHidden(isAttoUnicoPresentato);

	// MOSTRA/NASCONDI AVVISO di atto unico ok e DATIPROCOCOLLAZIONE ATTO UNICO PRESENTATO
	fieldsets.get(idFildsetDettagliAttoUnicoPresentato).setHidden(!isAttoUnicoPresentato);
	items.get('Avviso_AttoUnicoOk').setHidden(!isAttoUnicoPresentato);

	//Rende  non obbligatori / obbligatori ITEMS per la raccolta dati atto unico
	items.get('AttoUnico_FirmatarioRappresentanteLegale').setRequired(!isAttoUnicoPresentato);
	/*items.get('AttoUnico_RappresentanteLegaleNascitaProvincia').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_RappresentanteLegaleNascitaComune').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_RappresentanteLegaleNascitaData').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioCodiceFiscale').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNome').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioCognome').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNascitaProvincia').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNascitaComune').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNascitaData').setRequired(!isAttoUnicoPresentato);
	items.get('SelezionaTutteDichiarazioni').setRequired(!isAttoUnicoPresentato);*/
	if ((values.get('AttoUnico_FirmatarioRappresentanteLegale') == 'true') && !isAttoUnicoPresentato) {
		items.get('AttoUnico_RappresentanteLegaleNascitaProvincia').setHidden(false);
		items.get('AttoUnico_RappresentanteLegaleNascitaProvincia').setRequired(true);

		items.get('AttoUnico_RappresentanteLegaleNascitaComune').setHidden(false);
		items.get('AttoUnico_RappresentanteLegaleNascitaComune').setRequired(true);

		items.get('AttoUnico_RappresentanteLegaleNascitaData').setHidden(false);
		items.get('AttoUnico_RappresentanteLegaleNascitaData').setRequired(true);

		items.get('AttoUnico_FirmatarioCodiceFiscale').setHidden(true);
		items.get('AttoUnico_FirmatarioCodiceFiscale').setRequired(false);

		items.get('AttoUnico_FirmatarioCognome').setHidden(true);
		items.get('AttoUnico_FirmatarioCognome').setRequired(false);

		items.get('AttoUnico_FirmatarioNome').setHidden(true);
		items.get('AttoUnico_FirmatarioNome').setRequired(false);

		items.get('AttoUnico_FirmatarioNascitaProvincia').setHidden(true);
		items.get('AttoUnico_FirmatarioNascitaProvincia').setRequired(false);

		items.get('AttoUnico_FirmatarioNascitaComune').setHidden(true);
		items.get('AttoUnico_FirmatarioNascitaComune').setRequired(false);

		items.get('AttoUnico_FirmatarioNascitaData').setHidden(true);
		items.get('AttoUnico_FirmatarioNascitaData').setRequired(false);
	}
	else if ((values.get('AttoUnico_FirmatarioRappresentanteLegale') == 'false') && !isAttoUnicoPresentato) {
		items.get('AttoUnico_RappresentanteLegaleNascitaProvincia').setHidden(true);
		items.get('AttoUnico_RappresentanteLegaleNascitaProvincia').setRequired(false);

		items.get('AttoUnico_RappresentanteLegaleNascitaComune').setHidden(true);
		items.get('AttoUnico_RappresentanteLegaleNascitaComune').setRequired(false);

		items.get('AttoUnico_RappresentanteLegaleNascitaData').setHidden(true);
		items.get('AttoUnico_RappresentanteLegaleNascitaData').setRequired(false);

		items.get('AttoUnico_FirmatarioCodiceFiscale').setHidden(false);
		items.get('AttoUnico_FirmatarioCodiceFiscale').setRequired(true);

		items.get('AttoUnico_FirmatarioCognome').setHidden(false);
		items.get('AttoUnico_FirmatarioCognome').setRequired(true);

		items.get('AttoUnico_FirmatarioNome').setHidden(false);
		items.get('AttoUnico_FirmatarioNome').setRequired(true);

		items.get('AttoUnico_FirmatarioNascitaProvincia').setHidden(false);
		items.get('AttoUnico_FirmatarioNascitaProvincia').setRequired(true);

		items.get('AttoUnico_FirmatarioNascitaComune').setHidden(false);
		items.get('AttoUnico_FirmatarioNascitaComune').setRequired(true);

		items.get('AttoUnico_FirmatarioNascitaData').setHidden(false);
		items.get('AttoUnico_FirmatarioNascitaData').setRequired(true);
	}

  var idItemDichiarazioni;
	idItemDichiarazioni = items.get('Dichiaraz_0001'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0002'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0003'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0004'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0005'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0007'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0008'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0009'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0009_1'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0010'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0010_1'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0011'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0012'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0013'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}




// TODO MARCO SCOTTI -  verificare da qui in avanti......
/*
  // Mostro avviso solo se ente La dotazione finanziaria per la linea di intervento relativa A o B  è terminata
		{
			  var sqlLineaA=""+
			"   select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO" +
			"     from ag_sm_data_entries data_entries                                                                                                                                                              " +
			"     where                                                                                                                                                                                                                       " +
			"      dat_pth = 'SintesiServizi_TotaleImporti_LineaA'                                                                                                                                               " +
			"      and fk_id in                                                                                                                                                                                                             " +
			"      (                                                                                                                                                                                                                                " +
			"      select sm_id  FROM ag_sm_instances inst                                                                                                                                                       " +
			"     WHERE                                                                                                                                                                                                                    " +
			"       inst.sm_tmpl_dn = 'Dote Apprendistato art 3'                                                                                                                                                    " +
    		"       and  inst.current_state in ('1629519c9d5f43d1bc8b6b036f4a4a8e','4a8eb456b84549a895bd0e87a59e0b67')                                   " +
			"      )                                                                                                                                                                                                                                 " +
			"";

			var sqlLineaB=""+
			"   select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO " +
			"     from ag_sm_data_entries data_entries                                                                                                                                                              " +
			"     where                                                                                                                                                                                                                       " +
			"      dat_pth = 'SintesiServizi_TotaleImporti_LineaB'                                                                                                                                               " +
			"      and fk_id in                                                                                                                                                                                                             " +
			"      (                                                                                                                                                                                                                                " +
			"      select sm_id  FROM ag_sm_instances inst                                                                                                                                                       " +
			"     WHERE                                                                                                                                                                                                                    " +
			"       inst.sm_tmpl_dn = 'Dote Apprendistato art 3'                                                                                                                                                    " +
    		"       and  inst.current_state in ('1629519c9d5f43d1bc8b6b036f4a4a8e','4a8eb456b84549a895bd0e87a59e0b67')                                   " +
			"      )                                                                                                                                                                                                                                 " +
			"";

				var ImportoErogatoLineaA = dizionarioService.getSingle(null, sqlLineaA);
				var ImportoErogatoLineaB = dizionarioService.getSingle(null, sqlLineaB);

				if (ImportoErogatoLineaA >= 3800000 ) {
						items.get('Avviso_03').setHidden(false);
				} else {
						items.get('Avviso_03').setHidden(true);
				}
				if (ImportoErogatoLineaB >= 4800000 ) {
						items.get('Avviso_04').setHidden(false);
				} else {
						items.get('Avviso_04').setHidden(true);
				}

		}

*/
logger.info("XXXXXMMMMM DOTE IFP: FINE Script ONLOAD su IdPratica - Modulo 1");

	}  // fine if iamInRoot() e sono nel modulo 1
}
