{
	var idStato1 = '19358b018f8746de8b6e325b1cadd945';
	var iamInStato1 = (instance.getCurrentState() == idStato1);
	if (iamInRoot())  {
		logger.info("XXXXXMMMMM DOTE IFP: INIZIO Script ONLOAD su IdPratica - Modulo 1");

// PARAMETRI da valorizzare correttamente usando il CATALOGO
		var nomeTemplate ="Doti IeFP DDF I anni"; // usato nella query per il check dell'atto unico
		var catalogoNome ='Doti Costi Standard IFP' ;
		var catalogoBando ='DDFIanni';
//		var catalogoBando ='DDFIIanni';
//		var catalogoBando ='DDFIIIanni';
//		var catalogoBando ='DDFIVanni';
//		var catalogoBando ='PPDIanni';
//		var catalogoBando ='PPDIIIanni';

		var annualita ="1";
//		var annualita ="2";
//		var annualita ="3";
//		var annualita ="4";
		//		var nomeTemplate ="TEST CATALOGO Dote IFP "; // temporaneo... per prova ********
		var offerteFormative = ['048','120'];
		// TODO: Inserire le offerte formative corrette

		var idStatiAttoUnicoPresentato = "'859506c362764ba1a70277d1345e7cee','8c8999ca9712409f81b1f5c39ef2f052'";
		var idStatiDotePresentata = "'4a8eb456b84549a895bd0e87a59e0b67','1629519c9d5f43d1bc8b6b036f4a4a8e'";

		var idFildsetDettagliAttoUnicoPresentato = 'b19c24e93a98431bbb1c5720807fcf2f'; // viene nascosto o mostrato a secondo che è stato o non è stato presentato l'atto di adesione unico

		var idFildsetFirmatario = 'e681dd72e6e647d68429e9e6dab34be3';
		var idFildsetDichiarazioni = '2089fc04d0294984b2f85cdbe3eda960';
		var nomeBando ="Dote DDIF I Anni 2015-2016";
//		var nomeBando ="Dote DDIF II Anni 2015-2016";
//		var nomeBando ="Dote DDIF III Anni 2015-2016";
//		var nomeBando ="Dote IV anni 2015-2016";

		var descrizioneBando ="wait chiusura  punto aperto PA_020 - inserire la descrizione del bando";

		mappaDotazioneFinCorsi={
			"DDFIanni":"59600000",
			"DDFIIanni":"59300000",
			"DDFIIIanni":"54100000",
			"DDFIVanni":"19099998",
			"PPDIanni":"2602500",
			"PPDIIanni":"2617500",
			"PPDIIIanni":"2775000"};

		mappaDotazioneFinDisabilita={
				"DDFIanni":"4648500",
				"DDFIIanni":"4411700",
				"DDFIIIanni":"3995955",
				"DDFIVanni":"900000",
				"PPDIanni":"0",
				"PPDIIanni":"0",
				"PPDIIIanni":"0"};

				mappaBudgetDDFIAnno={
				"158735":"1989000",
				"127859":"236200",
				"1710241":"144000",
				"154877":"580800",
				"136109":"490300",
				"6372":"548200",
				"122076":"1647400",
				"1651219":"707000",
				"6050":"822800",
				"336317":"950800",
				"5372":"665400",
				"173938":"556500",
				"577313":"317400",
				"133537":"547400",
				"151013":"164000",
				"5671":"550800",
				"277239":"136000",
				"270955":"208000",
				"6073":"1791800",
				"221076":"1150200",
				"270439":"517200",
				"179057":"224000",
				"211149":"358000",
				"131315":"236000",
				"182735":"86000",
				"216010":"652200",
				"5426":"2784800",
				"271625":"195100",
				"6124":"173700",
				"967191":"211600",
				"149134":"80000",
				"261846":"253900",
				"125110":"200000",
				"267178":"64500",
				"125089":"972600",
				"221620":"64500",
				"126372":"603900",
				"15571":"154800",
				"153060":"263800",
				"171919":"2717500",
				"1078883":"84700",
				"15480":"1435000",
				"3558":"141800",
				"173624":"277200",
				"168690":"296000",
				"120655":"400200",
				"163950":"233900",
				"134547":"115000",
				"167336":"146700",
				"213042":"155600",
				"127050":"342300",
				"171134":"690200",
				"15392":"1545100",
				"133457":"103200",
				"1113467":"298200",
				"189562":"1333400",
				"201384":"325100",
				"244070":"477400",
				"1103775":"170900",
				"205692":"78200",
				"149460":"174800",
				"121645":"96600",
				"240357":"0",
				"928055":"316000",
				"224810":"185200",
				"1456914":"500600",
				"120965":"568200",
				"223271":"412700",
				"5384":"4331100",
				"157130":"151800",
				"1598015":"91000",
				"5498":"2928800",
				"275740":"96600",
				"6185":"211600",
				"900283":"60000",
				"1098085":"213000",
				"1112381":"192100",
				"134900":"716600",
				"5324":"1611700",
				"275827":"96600",
				"174448":"160000",
				"5438":"1267500",
				"1604039":"1473000",
				"365195":"172000",
				"266008":"101200",
				"125412":"220800",
				"128613":"506000",
				"1512303":"164000",
				"226125":"477900",
				"235979":"392000",
				"122636":"69000",
				"201870":"348000",
				"267000":"929000",
				"199965":"547400",
				"122042":"151800",
				"178087":"381000",
				"152823":"92000",
				"231256":"220800",
				"269925":"110400",
				"903097":"207000",
				"238553":"337500"
	};

	mappaBudgetDDFIIAnno={
		"158735":"1988400",
		"127859":"236200",
		"1710241":"140000",
		"154877":"580800",
		"136109":"486000",
		"6372":"547900",
		"122076":"1643100",
		"1651219":"707000",
		"6050":"822800",
		"336317":"945900",
		"5372":"665400",
		"173938":"545500",
		"577313":"317400",
		"133537":"547400",
		"151013":"164000",
		"5671":"550800",
		"277239":"136000",
		"270955":"208000",
		"6073":"1791800",
		"221076":"1151400",
		"270439":"517500",
		"179057":"224000",
		"211149":"358000",
		"131315":"236000",
		"182735":"86000",
		"216010":"652200",
		"5426":"2784800",
		"271625":"195100",
		"6124":"173700",
		"967191":"211600",
		"149134":"80000",
		"261846":"253900",
		"125110":"200000",
		"267178":"64500",
		"125089":"972600",
		"221620":"64500",
		"126372":"603000",
		"15571":"154800",
		"153060":"263800",
		"171919":"2717800",
		"1078883":"84700",
		"15480":"1435000",
		"3558":"141800",
		"173624":"277200",
		"168690":"296000",
		"120655":"400200",
		"163950":"234200",
		"134547":"115000",
		"167336":"146700",
		"213042":"155600",
		"127050":"342300",
		"171134":"690200",
		"15392":"1545100",
		"133457":"103200",
		"1113467":"298200",
		"189562":"1333400",
		"201384":"325100",
		"244070":"477700",
		"1103775":"170900",
		"205692":"78200",
		"149460":"174800",
		"121645":"96600",
		"240357":"0",
		"928055":"316000",
		"224810":"185200",
		"1456914":"475100",
		"120965":"568200",
		"223271":"412100",
		"5384":"4332000",
		"157130":"151800",
		"1598015":"91000",
		"5498":"2927000",
		"275740":"96600",
		"6185":"211600",
		"900283":"60000",
		"1098085":"213600",
		"1112381":"192100",
		"134900":"716600",
		"5324":"1611700",
		"275827":"96600",
		"174448":"160000",
		"5438":"1268100",
		"1604039":"1473000",
		"365195":"172000",
		"266008":"101200",
		"125412":"220800",
		"128613":"501400",
		"1512303":"164000",
		"226125":"477300",
		"235979":"392000",
		"122636":"69000",
		"201870":"348000",
		"267000":"929000",
		"199965":"547400",
		"122042":"151800",
		"178087":"381300",
		"152823":"87400",
		"231256":"220800",
		"269925":"110400",
		"903097":"207000",
		"238553":"337500"
};
mappaBudgetDDFIIIAnno={
	"158735":"1951965",
	"127859":"213180",
	"1710241":"125400",
	"154877":"526205",
	"136109":"394820",
	"6372":"411730",
	"122076":"1517625",
	"1651219":"614175",
	"6050":"743755",
	"336317":"855475",
	"5372":"621870",
	"173938":"507585",
	"577313":"257830",
	"133537":"511290",
	"151013":"159600",
	"5671":"442510",
	"277239":"102600",
	"270955":"201400",
	"6073":"1717505",
	"221076":"1009755",
	"270439":"517275",
	"179057":"182400",
	"211149":"357010",
	"131315":"197600",
	"182735":"65360",
	"216010":"615030",
	"5426":"2648695",
	"271625":"148390",
	"6124":"152475",
	"967191":"192280",
	"149134":"45600",
	"261846":"183730",
	"125110":"167200",
	"267178":"36765",
	"125089":"967670",
	"221620":"44935",
	"126372":"498940",
	"15571":"151145",
	"153060":"245955",
	"171919":"2467530",
	"1078883":"76095",
	"15480":"1326580",
	"3558":"93480",
	"173624":"271510",
	"168690":"243200",
	"120655":"358340",
	"163950":"174895",
	"134547":"83030",
	"167336":"69920",
	"213042":"138510",
	"127050":"319865",
	"171134":"631275",
	"15392":"1493590",
	"133457":"98040",
	"1113467":"211470",
	"189562":"1318030",
	"201384":"259160",
	"244070":"447450",
	"1103775":"162355",
	"205692":"48070",
	"149460":"214130",
	"121645":"83030",
	"240357":"61180",
	"928055":"269800",
	"224810":"121220",
	"1456914":"473955",
	"120965":"563350",
	"223271":"378670",
	"5384":"4002825",
	"157130":"131100",
	"1598015":"71250",
	"5498":"2728115",
	"275740":"96140",
	"6185":"209760",
	"900283":"0",
	"1098085":"188100",
	"1112381":"186390",
	"134900":"620255",
	"5324":"1560850",
	"275827":"91770",
	"174448":"148200",
	"5438":"1152730",
	"1604039":"1287440",
	"365195":"144400",
	"266008":"96140",
	"125412":"218500",
	"128613":"450110",
	"1512303":"155800",
	"226125":"404130",
	"235979":"353400",
	"122636":"38000",
	"201870":"247000",
	"267000":"774250",
	"199965":"541880",
	"122042":"131100",
	"178087":"366700",
	"152823":"109250",
	"231256":"218500",
	"269925":"100510",
	"903097":"205390",
	"238553":"311600"

};
// mappaBudgetDDFIAnno
// mappaBudgetDDFIIAnno
// mappaBudgetDDFIIIAnno



	//**** VALORIZZAZIONE CAMPI dei DATI GENERICI
		values.put('NumeroPratica', values.get('idPratica'));
		values.put('Bando_Descrizione', descrizioneBando);
		values.put('Bando_Nome', nomeBando);
		values.put('Bando_Annualita', annualita);
		values.put('CatalogoNome', catalogoNome);
		values.put('CatalogoBando', catalogoBando);

		values.put('Bando_DotazioneFinCorsi_Iniziale',''+mappaDotazioneFinCorsi[catalogoBando]);
		values.put('Bando_DotazioneFinDisabilita_Iniziale',''+mappaDotazioneFinDisabilita[catalogoBando]);


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
						logger.info('XXXXXXXX  Operatore NON Accreditato - Visualizzo avviso 01');
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
	   // verifiche dotazioni finanziarie
		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 1");
		 var sql_dotazioneFinCorsi_Erosa =   " select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO_CORSI   " +
		 																		 " from ag_sm_data_entries data_entries "+
																				 " where "+
																				 " dat_pth = 'ServiziFormazione_ImportoTotaleCorsi'     "+
																				 " and fk_id in"+
																				 " ( select sm_id  FROM ag_sm_instances inst "+
																				 " WHERE "+
																				 " inst.sm_tmpl_dn = '"+nomeTemplate+"' "+
																				 " and inst.current_state in ("+idStatiDotePresentata+")) ";
		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 2");

		 var sql_dotazioneFinDisabilita_Erosa = "select nvl(sum(to_number(DAT_VL, '999999999999999999999.9999999999999999999999999')),0) as IMPORTO_EROGATO_Disabilita   " +
		 																		 " from ag_sm_data_entries data_entries "+
																				 " where "+
																				 " dat_pth = 'ServiziFormazione_ImportoTotaleDisabilita'"+
																				 " and fk_id in"+
																				 " ( select sm_id  FROM ag_sm_instances inst"+
																				 " WHERE "+
																				 " inst.sm_tmpl_dn = '"+nomeTemplate+"' "+
																				 " and inst.current_state in ("+idStatiDotePresentata+"))";

     logger.info("XXXXX DOTI - sql_dotazioneFinCorsi_Erosa:"+sql_dotazioneFinCorsi_Erosa);
		 logger.info("XXXXX DOTI - sql_dotazioneFinDisabilita_Erosa:"+sql_dotazioneFinDisabilita_Erosa);
		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 3");

		 var dotazioneFinCorsi_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinCorsi_Erosa);
		 logger.info("XXXXX DOTE IFP: Dotazione Finanziaria Corsi:"+dotazioneFinCorsi_Erosa);
		 values.put('Bando_DotazioneFinCorsi_Erosa',''+dotazioneFinCorsi_Erosa);

		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 4");

		 var dotazioneFinDisabilita_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinDisabilita_Erosa);
		 logger.info("XXXXX DOTE IFP: Dotazione Finanziaria Disabilita:"+dotazioneFinDisabilita_Erosa);
		 values.put('Bando_DotazioneFinDisabilita_Erosa',''+dotazioneFinDisabilita_Erosa);

		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 5 FINE");

		 var idOperatore = values.get('Richiedente_IdOperatore');
		 if (catalogoBando ='DDFIanni') {
			 	values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIAnno[idOperatore]);
		 } else if (catalogoBando ='DDFIIanni') {
			 values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIIAnno[idOperatore]);
		 }else if (catalogoBando ='DDFIIIanni') {
			 values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIIIAnno[idOperatore]);
		 }



		 //TODO: Calcolare Dotazione finanziaria erosa per il singolo operatore



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


logger.info("XXXXXMMMMM DOTE IFP: FINE Script ONLOAD su IdPratica - Modulo 1");

	}  // fine if iamInRoot() e sono nel modulo 1
}
