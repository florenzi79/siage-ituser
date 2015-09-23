logger.info("XXXXXMMMMM DOTE IFP: INIZIO Script ONLOAD su IdPratica - Modulo 1");
function nascondiFieldsetPrincipali(valore) {
	// NASCONDI fieldsets e ITEMS per la raccolta dati atto unico
	fieldsets.get(idFildsetFirmatario).setHidden(valore);
	fieldsets.get(idFildsetDichiarazioni).setHidden(valore);
	fieldsets.get(idFildsetDettagliAttoUnicoPresentato).setHidden(valore);

}

{
//	var catalogoBando ='DDFIanni';
		var catalogoBando ='DDFIIanni' ;
//		var catalogoBando ='DDFIIIanni';
//		var catalogoBando ='DDFIVanni' ;
//		var catalogoBando ='PPDIanni'  ;
//		var catalogoBando ='PPDIIanni'  ;
//		var catalogoBando ='PPDIIIanni';


	var idStatiAttoUnicoPresentato = "'859506c362764ba1a70277d1345e7cee','8c8999ca9712409f81b1f5c39ef2f052'";
	var idStatiDotePresentata = "'4a8eb456b84549a895bd0e87a59e0b67','1629519c9d5f43d1bc8b6b036f4a4a8e'";
	var idFildsetDettagliAttoUnicoPresentato = 'b19c24e93a98431bbb1c5720807fcf2f'; // viene nascosto o mostrato a secondo che è stato o non è stato presentato l'atto di adesione unico
	var idFildsetFirmatario = 'e681dd72e6e647d68429e9e6dab34be3';
	var idFildsetDichiarazioni = '2089fc04d0294984b2f85cdbe3eda960';

	var idStato1 = '19358b018f8746de8b6e325b1cadd945';
	var iamInStato1 = (instance.getCurrentState() == idStato1);
	if (iamInRoot())  {
		logger.info("XXXXXMMMMM DOTE IFP: INIZIO Script ONLOAD su IdPratica - Modulo 1");

// PARAMETRI da valorizzare correttamente usando il CATALOGO
		var catalogoNome ='Doti Costi Standard IFP' ;


		mappaNomeTemplate={  // usato nelle where condition delle query
			"DDFIanni"  :"DDF I anni",
			"DDFIIanni" :"DDF II anni",
			"DDFIIIanni":"DDF III anni",
			"DDFIVanni" :"DDF IV anni",
			"PPDIanni"  :"Percorsi Personalizzati Disabili I anni",
			"PPDIIanni" :"Percorsi Personalizzati Disabili II anni",
			"PPDIIIanni":"Percorsi Personalizzati Disabili III anni"};
	var nomeTemplate = mappaNomeTemplate[catalogoBando];
	//	 nomeTemplate ="TEST CATALOGO Dote IFP "; // usato solo su ***.81***
	// 	 nomeTemplate ="Doti IeFP DDF I anni";    // usato solo su ***.81***

			mappaAnnualita={
				"DDFIanni"  :"1",
				"DDFIIanni" :"2",
				"DDFIIIanni":"3",
				"DDFIVanni" :"4",
				"PPDIanni"  :"1",
				"PPDIIanni" :"2",
				"PPDIIIanni":"3"};
		var annualita = mappaAnnualita[catalogoBando];

		//var offerteFormative = ['161'];
		//var offerteFormative = ['048','120'];  // usato solo su ***.81***

		var offerteFormative = [];
		if (catalogoBando=='DDFIanni'  ) {offerteFormative = ['161']; }
		if (catalogoBando=='DDFIIanni' ) {offerteFormative = ['121']; }
		if (catalogoBando=='DDFIIIanni') {offerteFormative = ['087']; }
		if (catalogoBando=='DDFIVanni' ) {offerteFormative = ['163']; }
		if (catalogoBando=='PPDIanni'  ) {offerteFormative = ['162']; }
		if (catalogoBando=='PPDIIanni' ) {offerteFormative = ['122']; }
		if (catalogoBando=='PPDIIIanni') {offerteFormative = ['188']; }

		mappaNomeBando={
			"DDFIanni"  :"DOTE DDIF I ANNI 2015-2016",
			"DDFIIanni" :"DOTE DDIF II ANNI 2015-2016",
			"DDFIIIanni":"DOTE DDIF III ANNI 2015-2016",
			"DDFIVanni" :"DOTE IV ANNI 2015-2016",
			"PPDIanni"  :"I ANNI - PERCORSI PERSONALIZZATI PER ALLIEVI DISABILI ANNO FORMATIVO 2015-2016",
			"PPDIIanni" :"II ANNI - PERCORSI PERSONALIZZATI PER ALLIEVI DISABILI ANNO FORMATIVO 2015-2016",
			"PPDIIIanni":"III ANNI - PERCORSI PERSONALIZZATI PER ALLIEVI DISABILI ANNO FORMATIVO 2015-2016"};
		var nomeBando =mappaNomeBando[catalogoBando];

		mappaDescrizioneBando={
			"DDFIanni"  :"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando",
			"DDFIIanni" :"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando",
			"DDFIIIanni":"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando",
			"DDFIVanni" :"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando",
			"PPDIanni"  :"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando",
			"PPDIIanni" :"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando",
			"PPDIIIanni":"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando"};
		var descrizioneBando =mappaDescrizioneBando[catalogoBando];

		mappaDotazioneFinCorsi={
			"DDFIanni"  :"59600000",
			"DDFIIanni" :"59300000",
			"DDFIIIanni":"54100000",
			"DDFIVanni" :"19099998",
			"PPDIanni"  :"2602500",
			"PPDIIanni" :"2617500",
			"PPDIIIanni":"2775000"};
		mappaDotazioneFinDisabilita={
				"DDFIanni"  :"4648500",
				"DDFIIanni" :"4411700",
				"DDFIIIanni":"3995955",
				"DDFIVanni" :"900000",
				"PPDIanni"  :"0",
				"PPDIIanni" :"0",
				"PPDIIIanni":"0"
			};
		mappa_DotazioneFinCorsi_SogliaPrimoModulo={ // se la dot fin rimanente va sotto questa soglia, viene bloccato il proseguimento
			"DDFIanni"  :"4000",
			"DDFIIanni" :"4000",
			"DDFIIIanni":"4000",
			"DDFIVanni" :"-999999999",
			"PPDIanni"  :"-999999999",
			"PPDIIanni" :"-999999999",
			"PPDIIIanni":"-999999999"
		};
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo={
			"DDFIanni"  :"-999999999",
			"DDFIIanni" :"-999999999",
			"DDFIIIanni":"-999999999",
			"DDFIVanni" :"3000",
			"PPDIanni"  :"-999999999",
			"PPDIIanni" :"-999999999",
			"PPDIIIanni":"-999999999"
		};
		mappa_DotazioneFinOperatore_SogliaPrimoModulo={ // se la dot fin rimanente va sotto questa soglia, viene bloccato il proseguimento
			"DDFIanni"  :"4000",
			"DDFIIanni" :"4000",
			"DDFIIIanni":"4000",
			"DDFIVanni" :"0",
			"PPDIanni"  :"0",
			"PPDIIanni" :"0",
			"PPDIIIanni":"0"
		};




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

	//**** VALORIZZAZIONE CAMPI dei DATI GENERICI
		values.put('NumeroPratica', values.get('idPratica'));
		values.put('Bando_Descrizione', descrizioneBando);
		values.put('Bando_Nome', nomeBando);
		values.put('Bando_Annualita', annualita);
		values.put('CatalogoNome', catalogoNome);
		values.put('CatalogoBando', catalogoBando);

		values.put('Bando_DotazioneFinCorsi_Iniziale',''+mappaDotazioneFinCorsi[catalogoBando]);
		values.put('Bando_DotazioneFinDisabilita_Iniziale',''+mappaDotazioneFinDisabilita[catalogoBando]);

		values.put('Bando_DotazioneFinCorsi_SogliaPrimoModulo', ''+parseFloat(mappa_DotazioneFinCorsi_SogliaPrimoModulo[catalogoBando]));
		values.put('Bando_DotazioneFinDisabilita_SogliaPrimoModulo', ''+parseFloat(mappa_DotazioneFinDisabilita_SogliaPrimoModulo[catalogoBando]));
		values.put('Bando_DotazioneFinOperatore_SogliaPrimoModulo', ''+parseFloat(mappa_DotazioneFinOperatore_SogliaPrimoModulo[catalogoBando]));

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
			logger.info("XXXXX Natura Giuridica ricavata : "+values.get( 'Richiedente_NaturaGiuridica'));
			}

			//**** LETTURA da SGPROF
			var mappaValoriSgProf = ricercaProfiloSgProf(user);
			if ((mappaValoriSgProf !== null) ) {
				logger.info("XXXXX Lettura da SgProf - mappaValoriSgProf: "+mappaValoriSgProf);
				if((mappaValoriSgProf.get('AA037') !== null )&&(isEmpty('Richiedente_Denominazione')))
					values.put( 'Richiedente_Denominazione', mappaValoriSgProf.get('AA037').toString() );
				if( mappaValoriSgProf.get('AA038') !== null )
					values.put( 'Richiedente_PartitaIva', mappaValoriSgProf.get('AA038').toString() );
				if((mappaValoriSgProf.get('AA206') !== null) && (isEmpty('Richiedente_CodiceFiscale')))
					values.put( 'Richiedente_CodiceFiscale', mappaValoriSgProf.get('AA206').toString());
				if((mappaValoriSgProf.get('AA062') !== null)&& (isEmpty('Richiedente_SedeLegaleProvincia'))){
					values.put( 'Richiedente_SedeLegaleProvincia', mappaValoriSgProf.get('AA062').toString() );
					values.put( 'Richiedente_SedeLegaleProvinciaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_SedeLegaleProvincia')) );
				}
				if((mappaValoriSgProf.get('AA061')!== null)&&(isEmpty('Richiedente_SedeLegaleComune'))) {
					values.put( 'Richiedente_SedeLegaleComune', mappaValoriSgProf.get('AA061').toString());
					values.put( 'Richiedente_SedeLegaleComuneDn', getAnaDenominazione('comune_istat', values.get('Richiedente_SedeLegaleComune')) );
				}

				if((mappaValoriSgProf.get('AA063')!== null)&&(isEmpty('Richiedente_SedeLegaleCap'))) {
					values.put( 'Richiedente_SedeLegaleCap', mappaValoriSgProf.get('AA063').toString());
				}

				if((mappaValoriSgProf.get('AA060') !== null)&&(isEmpty('Richiedente_SedeLegaleIndirizzo')))
					values.put( 'Richiedente_SedeLegaleIndirizzo', mappaValoriSgProf.get('AA060').toString() );
				if( mappaValoriSgProf.get('AA030') !== null && isEmpty('Richiedente_RappresentanteLegaleNome'))
					values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
				if( mappaValoriSgProf.get('AA029') !== null && isEmpty('Richiedente_RappresentanteLegaleCognome'))
					values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
				if( mappaValoriSgProf.get('AA142') !== null && isEmpty('Richiedente_RappresentanteLegaleCodiceFiscale') )
					values.put( 'Richiedente_RappresentanteLegaleCodiceFiscale', mappaValoriSgProf.get('AA142').toString() );
			} // **** FINE LETTURA da SGPROF
			else {  // fallimento sgprof
					logger.info("XXXXX Lettura da SgProf Fallita");
					// TODO: Impostare campo che indica un errore di connessione che non fa proseguire il modulo
			}

			// Campi derivati
			var descrizioneSedeLegaleOperatore = values.get('Richiedente_SedeLegaleComuneDn')+" ("+
																  values.get('Richiedente_SedeLegaleProvinciaDn')+") "+
																	values.get('Richiedente_SedeLegaleIndirizzo');
			values.put('Richiedente_SedeLegaleDescrizione', descrizioneSedeLegaleOperatore);

			// Verifica Accreditamento Operatore
			var CF_Oper = values.get('Richiedente_CodiceFiscale');
			logger.info("XXXXX Richiedente_CodiceFiscale ( Operatore): "+CF_Oper);
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
				nascondiFieldsetPrincipali(true);
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
					logger.info("XXXXX DOTE IFP: m_InfoSedePratica: "+ m_InfoSedePratica);

					logger.info("XXXXX DOTE IFP: denominazionesede: "+ m_InfoSedePratica.get("denominazionesede"));
					logger.info("XXXXX DOTE IFP: idsede: "+ m_InfoSedePratica.get("idsede"));
					logger.info("XXXXX DOTE IFP: idoperatore: "+ m_InfoSedePratica.get("idoperatore"));
					logger.info("XXXXX DOTE IFP: cap: "+ m_InfoSedePratica.get("cap"));
					logger.info("XXXXX DOTE IFP: cf: "+ m_InfoSedePratica.get("cf"));
					logger.info("XXXXX DOTE IFP: email: "+ m_InfoSedePratica.get("email"));
					logger.info("XXXXX DOTE IFP: fax: "+ m_InfoSedePratica.get("fax"));
					logger.info("XXXXX DOTE IFP: indirizzo: "+ m_InfoSedePratica.get("indirizzo"));
					logger.info("XXXXX DOTE IFP: istatcomune: "+ m_InfoSedePratica.get("istatcomune"));
					logger.info("XXXXX DOTE IFP: reanum: "+ m_InfoSedePratica.get("reanum"));
					logger.info("XXXXX DOTE IFP: telefono: "+ m_InfoSedePratica.get("telefono"));
					logger.info("XXXXX DOTE IFP: tipologia: "+ m_InfoSedePratica.get("tipologia"));
					logger.info("XXXXX DOTE IFP: www: "+ m_InfoSedePratica.get("www"));

					values.put('Richiedente_IdOperatore',m_InfoSedePratica.get("idoperatore"));
					values.put('Richiedente_IdSede',m_InfoSedePratica.get("idsede"));
					values.put('Richiedente_SedeOperativa',m_InfoSedePratica.get("denominazionesede"));
					values.put('Richiedente_SedeOperativa_Comune',m_InfoSedePratica.get("istatcomune"));
					values.put('Richiedente_SedeOperativa_ComuneDn', getAnaDenominazione('comune_istat', values.get('Richiedente_SedeOperativa_Comune')));

					var istatComuneP = m_InfoSedePratica.get("istatcomune");
					values.put('Richiedente_SedeOperativa_Provincia',istatComuneP.substr(0, 3));
					values.put('Richiedente_SedeOperativa_ProvinciaDn', getAnaDenominazione('provincia_istat', values.get('Richiedente_SedeOperativa_Provincia')));

					// verifica accreditamento sede
					var idSedePratica = values.get('Richiedente_IdSede');
					var result_AccrSedeSezA = verificaAccreditamentoSedeFormazioneSezioneA(idSedePratica);
					if (result_AccrSedeSezA.success) {
						var is_AccrSedeSezA=result_AccrSedeSezA.result;
						logger.info("XXXXX Test-Integrazione-GEFO: m_AccrSedeSezA: "+ is_AccrSedeSezA);
						if (is_AccrSedeSezA) {
							values.put('Richiedente_SedeOperativaAccrSezA','true');
						} else {
							values.put('Richiedente_SedeOperativaAccrSezA','false');
						}

					}
					else { // interrogazione gefo accreditamento Sede non andata a buon fine
						logger.info("XXXXX interrogazione gefo accreditamento Sede non andata a buon fine");
					}
					// fine verifica accreditamento sede


			} else {
					logger.info("\n\n\n\n\nErrore su recuperaSedePratica: " + result_SedePratica.message + "\n\n\n\n\n");
					nascondiFieldsetPrincipali(true);

			}



	   // verifiche dotazioni finanziarie
		 var idOperatore = values.get('Richiedente_IdOperatore');
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

     var sql_dotazioneFinCorsiOperatore_Erosa =
																				 " Select sum(IMPORTO) from 																																		"+
																					" (																																												"+
																					"   SELECT TO_NUMBER (IMPORTO.DAT_VL) as IMPORTO                                                                                          "+
																					"   FROM                                                                                                                                                                     "+
																					"     (SELECT sm_id                                                                                                                                                     "+
																					"     FROM ag_sm_instances inst                                                                                                                                   "+
																					"     WHERE inst.sm_tmpl_dn   = '"+nomeTemplate+"'                                                                                                  "+
																					"     AND inst.current_state IN ("+idStatiDotePresentata+")                         "+
																					"     ) I                                                                                                                                                                          "+
																					"   LEFT OUTER JOIN                                                                                                                                                   "+
																					"     (SELECT FK_ID,                                                                                                                                                    "+
																					"       DAT_VL                                                                                                                                                               "+
																					"     FROM ag_sm_data_entries data_entries                                                                                                                   "+
																					"     WHERE dat_pth = 'ServiziFormazione_ImportoTotaleCorsi'                                                                                        "+
																					"     ) IMPORTO                                                                                                                                                             "+
																					"   ON I.sm_id= IMPORTO.fk_id                                                                                                                                      "+
																					"   LEFT OUTER JOIN                                                                                                                                                    "+
																					"     (SELECT FK_ID,                                                                                                                                                     "+
																					"       DAT_VL                                                                                                                                                                "+
																					"     FROM ag_sm_data_entries data_entries                                                                                                                    "+
																					"     WHERE dat_pth = 'Richiedente_IdOperatore'                                                                                                             "+
																					"     ) ID_OPERATORE                                                                                                                                                   "+
																					"   ON I.sm_id            = ID_OPERATORE.fk_id                                                                                                                "+
																					"   WHERE IMPORTO.dat_VL IS NOT NULL                                                                                                                     "+
																					"   AND ID_OPERATORE.DAT_VL ='"+idOperatore+"'                                                                                                                     "+
																					"   UNION ALL                                                                                                                                                                "+
																					"   Select 0 as IMPORTO from dual                                                                                                                                  "+
																					"  )                                                                                                                                                                                 "+
																					"                                                                                                                                                                                    "
																					;


     logger.info("XXXXX DOTI - sql_dotazioneFinCorsi_Erosa:"+sql_dotazioneFinCorsi_Erosa);
		 logger.info("XXXXX DOTI - sql_dotazioneFinDisabilita_Erosa:"+sql_dotazioneFinDisabilita_Erosa);
		 logger.info("XXXXX DOTI - sql_dotazioneFinCorsiOperatore_Erosa:"+sql_dotazioneFinCorsiOperatore_Erosa);

		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 3");

		 var dotazioneFinCorsi_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinCorsi_Erosa);
		 logger.info("XXXXX DOTE IFP: Dotazione Finanziaria Corsi BANDO:"+dotazioneFinCorsi_Erosa);
		 values.put('Bando_DotazioneFinCorsi_Erosa',''+dotazioneFinCorsi_Erosa);

		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 4");

		 var dotazioneFinDisabilita_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinDisabilita_Erosa);
		 logger.info("XXXXX DOTE IFP: Dotazione Finanziaria DISABILITA:"+dotazioneFinDisabilita_Erosa);
		 values.put('Bando_DotazioneFinDisabilita_Erosa',''+dotazioneFinDisabilita_Erosa);
		 if((idOperatore !== null)|| (idOperatore ==='')) {  // se ha funzionato l'integrazione con gefo e conosco quindi idOperatore
			logger.info('XXXXX DOTI  idOperatore:' + idOperatore);
			if (catalogoBando =='DDFIanni') {
				 values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIAnno[idOperatore]);
				 logger.info('XXXXX DOTI  mappaBudgetDDFIAnno[idOperatore] ' + mappaBudgetDDFIAnno[idOperatore]);
			} else if (catalogoBando =='DDFIIanni') {
				values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIIAnno[idOperatore]);
				 logger.info('XXXXX DOTI  mappaBudgetDDFIIAnno[idOperatore] ' + mappaBudgetDDFIIAnno[idOperatore]);
			}else if (catalogoBando =='DDFIIIanni') {
				values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIIIAnno[idOperatore]);
				 logger.info('XXXXX DOTI  mappaBudgetDDFIIIAnno[idOperatore] ' + mappaBudgetDDFIIIAnno[idOperatore]);
			}

		 var dotazioneFinCorsiOperatore_Erosa = dizionarioService.getSingle(null, sql_dotazioneFinCorsiOperatore_Erosa);
	 		 logger.info("XXXXX DOTE IFP: Dotazione Finanziaria OPERATORE:"+dotazioneFinCorsiOperatore_Erosa);
	 		 values.put('Bando_DotazioneFinOperatore_Erosa',''+dotazioneFinCorsiOperatore_Erosa);
		 }
		 else {
			 logger.info("XXXXX DOTE IFP: Dotazione Finanziaria OPERATORE non ricavata per mancanza di IdOperatore");
			 values.put('Bando_DotazioneFinOperatore_Erosa','');
		 }


		 logger.info("XXXXX DOTI - Inizio calcolo dotazione finanziaria STEP 5 FINE");

		 var corsiDF = parseFloat(values.get('Bando_DotazioneFinCorsi_Iniziale'))-parseFloat(values.get('Bando_DotazioneFinCorsi_Erosa'));
		 logger.info('XXXXX DOTI  corsiDF ' + corsiDF);
		 var disabilitaDF = parseFloat(values.get('Bando_DotazioneFinDisabilita_Iniziale'))-parseFloat(values.get('Bando_DotazioneFinDisabilita_Erosa'));
		 logger.info('XXXXX DOTI  disabilitaDF ' + disabilitaDF);
		 var operatoreDF = parseFloat(values.get('Bando_DotazioneFinOperatore_Iniziale'))-parseFloat(values.get('Bando_DotazioneFinOperatore_Erosa'));
		 logger.info('XXXXX DOTI  operatoreDF ' + operatoreDF);

		 values.put('Bando_DotazioneFinCorsi_Rimanente',''+corsiDF);
		 values.put('Bando_DotazioneFinDisabilita_Rimanente',''+disabilitaDF);
		 if((idOperatore !== null)|| (idOperatore ==='')) {  // se ha funzionato l'integrazione con gefo
		 	values.put('Bando_DotazioneFinOperatore_Rimanente',''+operatoreDF);
		 }
		 else {
			values.put('Bando_DotazioneFinOperatore_Rimanente','');
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
	idItemDichiarazioni = items.get('Dichiaraz_0009');
	if (idItemDichiarazioni !== null) {
		if ((catalogoBando=='DDFIanni'  )||(catalogoBando=='DDFIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0009_1');
	if (idItemDichiarazioni !== null) {
		if ((catalogoBando=='DDFIIIanni'  )||(catalogoBando=='DDFIVanni' )||(catalogoBando=='PPDIanni' )||(catalogoBando=='PPDIIanni' )||(catalogoBando=='PPDIIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0010');
	if (idItemDichiarazioni !== null) {
		if ((catalogoBando=='DDFIanni'  )||(catalogoBando=='DDFIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0010_1');
	if (idItemDichiarazioni !== null) {
		if ((catalogoBando=='DDFIIIanni'  )||(catalogoBando=='DDFIVanni' )||(catalogoBando=='PPDIanni' )||(catalogoBando=='PPDIIanni' )||(catalogoBando=='PPDIIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0011'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0012'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0013'); if (idItemDichiarazioni !== null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}

	var isMostrareDotazionePerDisabilita =(catalogoBando=='DDFIVanni');
	items.get('Bando_DotazioneFinDisabilita_Rimanente').setHidden(!isMostrareDotazionePerDisabilita);

logger.info("XXXXXMMMMM DOTE IFP: FINE Script ONLOAD su IdPratica - Modulo 1");

	}  // fine if iamInRoot() e sono nel modulo 1
}
