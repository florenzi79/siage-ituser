{
	if (iamInRoot()) {
// PARAMETRI da valorizzare correttamente usando il CATALOGO
		var idStatiAttoUnicoPresentato = "'859506c362764ba1a70277d1345e7cee','8c8999ca9712409f81b1f5c39ef2f052'";
		var nomeTemplate ="Doti IeFP DDF I anni"; // usato nella query per il check dell'atto unico
//		var nomeTemplate ="TEST CATALOGO Dote IFP "; // temporaneo... per prova ********

		var idFildsetDettagliAttoUnicoPresentato = 'e242e43908354a728b9c7286441a0245'; // viene nascosto o mostrato a secondo che è stato o non è stato presentato l'atto di adesione unico
		var idFildsetFirmatario = '9286c54bf9b442bb831963add45108e1';
		var idFildsetDichiarazioni = 'f14ac1d78de84e8c92e1b0bbd5235110';
		var descrizioneBando ="wait chiusura  punto aperto PA_020 - inserire la descrizione del bando";
		var descrizioneSedeLegale = "wait chiusura  punto aperto PA_019 - inserire la descrizione della Sede Operatore";


	//**** VALORIZZAZIONE CAMPI dei DATI GENERICI
		values.put('NumeroPratica', values.get('idPratica'));
		values.put('Bando_Descrizione', descrizioneBando); // da definire cosa dovrà essere nel caso in cui si sta compilando l'atto unico
		values.put('Richiedente_SedeLegaleDescrizione', descrizioneSedeLegale); // da definire cosa dovrà essere nel caso in cui si sta compilando l'atto unico

		if (!isEmpty('Richiedente_Denominazione') && !isEmpty('title')) {
				values.put('TitoloPratica',values.get('title') + ' ' + values.get('Richiedente_Denominazione'));
		}
		if ((!isEmpty('Partecipante_Cognome')) && (!isEmpty('Partecipante_Nome'))) {
				values.put('title',values.get('Partecipante_Cognome')+' '+values.get('Partecipante_Nome'));
		}
	//    items.get('title').setHidden(true);


	//**** SCRIPT di INIZIALIZZAZIONE
		values.put('statoPratica', "Bozza");
		values.put('fasePratica', "Adesione"); // da definire cosa dovrà essere nel caso in cui si sta compilando l'atto unico

    //values.put('DataPubblicazioneAvviso', "18/05/2015");

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
		if((mappaValoriSgProf.get('AA060') != null)&&(isEmpty('Richiedente_SedeLegaleIndirizzo')))
			values.put( 'Richiedente_SedeLegaleIndirizzo', mappaValoriSgProf.get('AA060').toString() );
		if( mappaValoriSgProf.get('AA030') != null && isEmpty('Richiedente_RappresentanteLegaleNome'))
			values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
		if( mappaValoriSgProf.get('AA029') != null && isEmpty('Richiedente_RappresentanteLegaleCognome'))
			values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
		if( mappaValoriSgProf.get('AA142') != null && isEmpty('Richiedente_RappresentanteLegaleCodiceFiscale') )
			values.put( 'Richiedente_RappresentanteLegaleCodiceFiscale', mappaValoriSgProf.get('AA142').toString() );
	} // **** FINE LETTURA da SGPROF
    // Verifica Se atto unico è stato presentato

	var isAttoUnicoPresentato =false;
	var CF_Operatore = values.get('Richiedente_CodiceFiscale');
	var sql_AttoUnicoPresentato = " select count(*)  from ag_sm_data_entries data_entries where dat_pth = 'Richiedente_CodiceFiscale'  and fk_id in (select sm_id  FROM ag_sm_instances inst  WHERE  inst.sm_tmpl_dn = '"+nomeTemplate+"' and  inst.current_state in ("+idStatiAttoUnicoPresentato+") and DAT_VL ='"+CF_Operatore+"')";
	var numAttiUniciPresentati = dizionarioService.getSingle(null, sql_AttoUnicoPresentato);
	logger.info("XXXXX DOTE IFP: Numero Atti unici presentati per il CF "+CF_Operatore+": "+numAttiUniciPresentati);
	if(numAttiUniciPresentati >0){
		isAttoUnicoPresentato = true;
		var dataAtto = values.get('AttoDiAdesioneUnico_dataProtocollo');
		var numeroAtto = values.get('AttoDiAdesioneUnico_numeroProtocollo');
		if ((dataAtto!== null) && (numeroAtto!== null) &&(dataAtto!== '') && (numeroAtto!== '')) {
		    values.put('AttoDiAdesioneUnico_dataProtocollo_1',dataAtto);
		    values.put('AttoDiAdesioneUnico_numeroProtocollo_1',numeroAtto);
				items.get('AttoDiAdesioneUnico_dataProtocollo_1').setHidden(false);
				items.get('AttoDiAdesioneUnico_numeroProtocollo_1').setHidden(false);
		} else {
		    items.get('AttoDiAdesioneUnico_dataProtocollo_1').setHidden(true);
		    items.get('AttoDiAdesioneUnico_numeroProtocollo_1').setHidden(true);
		}
	} else {
		isAttoUnicoPresentato = false;
		// NASCONDI I DATI RELATIVI ALLA PROTOCOLLAZIONE dell'ATTO UNICO che non è stato ancora PRESENTATO
		fieldsets.get(idFildsetDettagliAttoUnicoPresentato).setHidden(true);
		items.get('AttoDiAdesioneUnico_dataProtocollo_1').setHidden(true);
		items.get('AttoDiAdesioneUnico_numeroProtocollo_1').setHidden(true);

		// VALORIZZO i campi che servono per l'ATTO unico, compresa la prodizione dei PDF
		values.put('AttoUnico_RappresentanteLegaleNome',values.get('Richiedente_RappresentanteLegaleNome'));
		values.put('AttoUnico_RappresentanteLegaleCognome',values.get('Richiedente_RappresentanteLegaleCognome'));
		values.put('AttoUnico_RappresentanteLegaleCodiceFiscale',values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
	}

	// NASCONDI o MOSTRA fieldsets e ITEMS per la raccolta dati atto unico
	fieldsets.get(idFildsetFirmatario).setHidden(isAttoUnicoPresentato);
	fieldsets.get(idFildsetDichiarazioni).setHidden(isAttoUnicoPresentato);

	// MOSTRA/NASCONDI AVVISO di atto unico ok e DATIPROCOCOLLAZIONE ATTO UNICO PRESENTATO
	fieldsets.get(idFildsetDettagliAttoUnicoPresentato).setHidden(!isAttoUnicoPresentato);
	items.get('Avviso_AttoUnicoOk').setHidden(!isAttoUnicoPresentato);

	//Rende  non obbligatori / obbligatori ITEMS per la raccolta dati atto unico
	items.get('AttoUnico_FirmatarioRappresentanteLegale').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_RappresentanteLegaleNascitaProvincia').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_RappresentanteLegaleNascitaComune').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_RappresentanteLegaleNascitaData').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioCodiceFiscale').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNome').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioCognome').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNascitaProvincia').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNascitaComune').setRequired(!isAttoUnicoPresentato);
	items.get('AttoUnico_FirmatarioNascitaData').setRequired(!isAttoUnicoPresentato);
	items.get('SelezionaTutteDichiarazioni').setRequired(!isAttoUnicoPresentato);
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


	}  // fine if iamInRoot()
}

logger.info("XXXXXMMMMM DOTE IFP: FINE Script ONLOAD su IdPratica");
