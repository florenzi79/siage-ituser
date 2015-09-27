logger.info("XXXXXMMMMM DOTE IFP: INIZIO Script ONLOAD su IdPratica - Modulo 1");
function nascondiFieldsetPrincipali(valore) {
	// NASCONDI fieldsets e ITEMS per la raccolta dati atto unico
	fieldsets.get(idFildsetFirmatario).setHidden(valore);
	fieldsets.get(idFildsetDichiarazioni).setHidden(valore);
	fieldsets.get(idFildsetDettagliAttoUnicoPresentato).setHidden(valore);

}

{
	var catalogoBando ='DDFIanni';
//		var catalogoBando ='DDFIIanni' ;
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


	    var mappaNomeTemplate= new java.util.LinkedHashMap();
	    // usato nelle where condition delle query
		mappaNomeTemplate.put("DDFIanni","DDF I anni");
		mappaNomeTemplate.put("DDFIIanni","DDF II anni");
		mappaNomeTemplate.put("DDFIIIanni","DDF III anni");
		mappaNomeTemplate.put("DDFIVanni","DDF IV anni");
		mappaNomeTemplate.put("PPDIanni","Percorsi Personalizzati Disabili I anni");
		mappaNomeTemplate.put("PPDIIanni","Percorsi Personalizzati Disabili II anni");
		mappaNomeTemplate.put("PPDIIIanni","Percorsi Personalizzati Disabili III anni");
	    var nomeTemplate = mappaNomeTemplate.get(catalogoBando);
	    values.put('Bando_NomeTemplate',''+nomeTemplate);
	//	 nomeTemplate ="TEST CATALOGO Dote IFP "; // usato solo su ***.81***
	// 	 nomeTemplate ="Doti IeFP DDF I anni";    // usato solo su ***.81***
        logger.info('FFRRAANNCCEESSCCOO! nomeTemplate '+nomeTemplate);
		var	mappaAnnualita= new java.util.LinkedHashMap();
		mappaAnnualita.put("DDFIanni"  ,"1");
		mappaAnnualita.put("DDFIIanni" ,"2");
		mappaAnnualita.put("DDFIIIanni","3");
		mappaAnnualita.put("DDFIVanni" ,"4");
		mappaAnnualita.put("PPDIanni"  ,"1");
		mappaAnnualita.put("PPDIIanni" ,"2");
		mappaAnnualita.put("PPDIIIanni","3");
		var annualita = mappaAnnualita.get(catalogoBando);

		var	mappaSoglieIscrittiCorso= new java.util.LinkedHashMap();
		mappaSoglieIscrittiCorso.put("DDFIanni"  ,"25");
		mappaSoglieIscrittiCorso.put("DDFIIanni" ,"25");
		mappaSoglieIscrittiCorso.put("DDFIIIanni","3");
		mappaSoglieIscrittiCorso.put("DDFIVanni" ,"4");
		mappaSoglieIscrittiCorso.put("PPDIanni"  ,"1");
		mappaSoglieIscrittiCorso.put("PPDIIanni" ,"2");
		mappaSoglieIscrittiCorso.put("PPDIIIanni","3");
		values.put('Bando_SogliaIscrittiCorso',''+mappaSoglieIscrittiCorso.get(catalogoBando));

		var	mappaSoglieDisabiliCorso= new java.util.LinkedHashMap();
		mappaSoglieDisabiliCorso.put("DDFIanni"  ,"4");
		mappaSoglieDisabiliCorso.put("DDFIIanni" ,"5");
		mappaSoglieDisabiliCorso.put("DDFIIIanni","3");
		mappaSoglieDisabiliCorso.put("DDFIVanni" ,"4");
		mappaSoglieDisabiliCorso.put("PPDIanni"  ,"1");
		mappaSoglieDisabiliCorso.put("PPDIIanni" ,"2");
		mappaSoglieDisabiliCorso.put("PPDIIIanni","3");
		values.put('Bando_SogliaDisabiliCorso',''+mappaSoglieDisabiliCorso.get(catalogoBando));

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

		var mappaNomeBando= new java.util.LinkedHashMap();
		mappaNomeBando.put("DDFIanni"  ,"DOTE DDIF I ANNI 2015-2016");
		mappaNomeBando.put("DDFIIanni" ,"DOTE DDIF II ANNI 2015-2016");
		mappaNomeBando.put("DDFIIIanni","DOTE DDIF III ANNI 2015-2016");
		mappaNomeBando.put("DDFIVanni" ,"DOTE IV ANNI 2015-2016");
		mappaNomeBando.put("PPDIanni"  ,"I ANNI - PERCORSI PERSONALIZZATI PER ALLIEVI DISABILI ANNO FORMATIVO 2015-2016");
		mappaNomeBando.put("PPDIIanni" ,"II ANNI - PERCORSI PERSONALIZZATI PER ALLIEVI DISABILI ANNO FORMATIVO 2015-2016");
		mappaNomeBando.put("PPDIIIanni","III ANNI - PERCORSI PERSONALIZZATI PER ALLIEVI DISABILI ANNO FORMATIVO 2015-2016");
		var nomeBando =mappaNomeBando.get(catalogoBando);

		var mappaDescrizioneBando= new java.util.LinkedHashMap();
		mappaDescrizioneBando.put("DDFIanni"  ,"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		mappaDescrizioneBando.put("DDFIIanni" ,"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		mappaDescrizioneBando.put("DDFIIIanni","wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		mappaDescrizioneBando.put("DDFIVanni" ,"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		mappaDescrizioneBando.put("PPDIanni"  ,"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		mappaDescrizioneBando.put("PPDIIanni" ,"wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		mappaDescrizioneBando.put("PPDIIIanni","wait chiusura  punto aperto PA_020 - inserire la descrizione del bando");
		var descrizioneBando =mappaDescrizioneBando.get(catalogoBando);

		var mappaDotazioneFinCorsi= new java.util.LinkedHashMap();
		mappaDotazioneFinCorsi.put("DDFIanni"  ,"59600000");
		mappaDotazioneFinCorsi.put("DDFIIanni" ,"59300000");
		mappaDotazioneFinCorsi.put("DDFIIIanni","54100000");
		mappaDotazioneFinCorsi.put("DDFIVanni" ,"19099998");
		mappaDotazioneFinCorsi.put("PPDIanni"  ,"2602500");
		mappaDotazioneFinCorsi.put("PPDIIanni" ,"2617500");
		mappaDotazioneFinCorsi.put("PPDIIIanni","2775000");
		var mappaDotazioneFinDisabilita= new java.util.LinkedHashMap();
		mappaDotazioneFinDisabilita.put("DDFIanni"  ,"4648500");
		mappaDotazioneFinDisabilita.put("DDFIIanni" ,"4411700");
		mappaDotazioneFinDisabilita.put("DDFIIIanni","3995955");
		mappaDotazioneFinDisabilita.put("DDFIVanni" ,"900000");
		mappaDotazioneFinDisabilita.put("PPDIanni"  ,"0");
		mappaDotazioneFinDisabilita.put("PPDIIanni" ,"0");
		mappaDotazioneFinDisabilita.put("PPDIIIanni","0");
		var mappa_DotazioneFinCorsi_SogliaPrimoModulo= new java.util.LinkedHashMap(); // se la dot fin rimanente va sotto questa soglia, viene bloccato il proseguimento
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("DDFIanni"  ,"4000");
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("DDFIIanni" ,"4000");
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("DDFIIIanni","4000");
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("DDFIVanni" ,"-999999999");
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("PPDIanni"  ,"-999999999");
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("PPDIIanni" ,"-999999999");
		mappa_DotazioneFinCorsi_SogliaPrimoModulo.put("PPDIIIanni","-999999999");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo= new java.util.LinkedHashMap();
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("DDFIanni"  ,"-999999999");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("DDFIIanni" ,"-999999999");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("DDFIIIanni","-999999999");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("DDFIVanni" ,"3000");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("PPDIanni"  ,"-999999999");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("PPDIIanni" ,"-999999999");
		mappa_DotazioneFinDisabilita_SogliaPrimoModulo.put("PPDIIIanni","-999999999");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo= new java.util.LinkedHashMap(); // se la dot fin rimanente va sotto questa soglia, viene bloccato il proseguimento
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("DDFIanni"  ,"4000");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("DDFIIanni" ,"4000");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("DDFIIIanni","4000");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("DDFIVanni" ,"0");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("PPDIanni"  ,"0");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("PPDIIanni" ,"0");
		mappa_DotazioneFinOperatore_SogliaPrimoModulo.put("PPDIIIanni","0");




		var mappaBudgetDDFIAnno= new java.util.LinkedHashMap();
		mappaBudgetDDFIAnno.put("158735","1989000");
		mappaBudgetDDFIAnno.put("127859","236200");
		mappaBudgetDDFIAnno.put("1710241","144000");
		mappaBudgetDDFIAnno.put("154877","580800");
		mappaBudgetDDFIAnno.put("136109","490300");
		mappaBudgetDDFIAnno.put("6372","548200");
		mappaBudgetDDFIAnno.put("122076","1647400");
		mappaBudgetDDFIAnno.put("1651219","707000");
		mappaBudgetDDFIAnno.put("6050","822800");
		mappaBudgetDDFIAnno.put("336317","950800");
		mappaBudgetDDFIAnno.put("5372","665400");
		mappaBudgetDDFIAnno.put("173938","556500");
		mappaBudgetDDFIAnno.put("577313","317400");
		mappaBudgetDDFIAnno.put("133537","547400");
		mappaBudgetDDFIAnno.put("151013","164000");
		mappaBudgetDDFIAnno.put("5671","550800");
		mappaBudgetDDFIAnno.put("277239","136000");
		mappaBudgetDDFIAnno.put("270955","208000");
		mappaBudgetDDFIAnno.put("6073","1791800");
		mappaBudgetDDFIAnno.put("221076","1150200");
		mappaBudgetDDFIAnno.put("270439","517200");
		mappaBudgetDDFIAnno.put("179057","224000");
		mappaBudgetDDFIAnno.put("211149","358000");
		mappaBudgetDDFIAnno.put("131315","236000");
		mappaBudgetDDFIAnno.put("182735","86000");
		mappaBudgetDDFIAnno.put("216010","652200");
		mappaBudgetDDFIAnno.put("5426","2784800");
		mappaBudgetDDFIAnno.put("271625","195100");
		mappaBudgetDDFIAnno.put("6124","173700");
		mappaBudgetDDFIAnno.put("967191","211600");
		mappaBudgetDDFIAnno.put("149134","80000");
		mappaBudgetDDFIAnno.put("261846","253900");
		mappaBudgetDDFIAnno.put("125110","200000");
		mappaBudgetDDFIAnno.put("267178","64500");
		mappaBudgetDDFIAnno.put("125089","972600");
		mappaBudgetDDFIAnno.put("221620","64500");
		mappaBudgetDDFIAnno.put("126372","603900");
		mappaBudgetDDFIAnno.put("15571","154800");
		mappaBudgetDDFIAnno.put("153060","263800");
		mappaBudgetDDFIAnno.put("171919","2717500");
		mappaBudgetDDFIAnno.put("1078883","84700");
		mappaBudgetDDFIAnno.put("15480","1435000");
		mappaBudgetDDFIAnno.put("3558","141800");
		mappaBudgetDDFIAnno.put("173624","277200");
		mappaBudgetDDFIAnno.put("168690","296000");
		mappaBudgetDDFIAnno.put("120655","400200");
		mappaBudgetDDFIAnno.put("163950","233900");
		mappaBudgetDDFIAnno.put("134547","115000");
		mappaBudgetDDFIAnno.put("167336","146700");
		mappaBudgetDDFIAnno.put("213042","155600");
		mappaBudgetDDFIAnno.put("127050","342300");
		mappaBudgetDDFIAnno.put("171134","690200");
		mappaBudgetDDFIAnno.put("15392","1545100");
		mappaBudgetDDFIAnno.put("133457","103200");
		mappaBudgetDDFIAnno.put("1113467","298200");
		mappaBudgetDDFIAnno.put("189562","1333400");
		mappaBudgetDDFIAnno.put("201384","325100");
		mappaBudgetDDFIAnno.put("244070","477400");
		mappaBudgetDDFIAnno.put("1103775","170900");
		mappaBudgetDDFIAnno.put("205692","78200");
		mappaBudgetDDFIAnno.put("149460","174800");
		mappaBudgetDDFIAnno.put("121645","96600");
		mappaBudgetDDFIAnno.put("240357","0");
		mappaBudgetDDFIAnno.put("928055","316000");
		mappaBudgetDDFIAnno.put("224810","185200");
		mappaBudgetDDFIAnno.put("1456914","500600");
		mappaBudgetDDFIAnno.put("120965","568200");
		mappaBudgetDDFIAnno.put("223271","412700");
		mappaBudgetDDFIAnno.put("5384","4331100");
		mappaBudgetDDFIAnno.put("157130","151800");
		mappaBudgetDDFIAnno.put("1598015","91000");
		mappaBudgetDDFIAnno.put("5498","2928800");
		mappaBudgetDDFIAnno.put("275740","96600");
		mappaBudgetDDFIAnno.put("6185","211600");
		mappaBudgetDDFIAnno.put("900283","60000");
		mappaBudgetDDFIAnno.put("1098085","213000");
		mappaBudgetDDFIAnno.put("1112381","192100");
		mappaBudgetDDFIAnno.put("134900","716600");
		mappaBudgetDDFIAnno.put("5324","1611700");
		mappaBudgetDDFIAnno.put("275827","96600");
		mappaBudgetDDFIAnno.put("174448","160000");
		mappaBudgetDDFIAnno.put("5438","1267500");
		mappaBudgetDDFIAnno.put("1604039","1473000");
		mappaBudgetDDFIAnno.put("365195","172000");
		mappaBudgetDDFIAnno.put("266008","101200");
		mappaBudgetDDFIAnno.put("125412","220800");
		mappaBudgetDDFIAnno.put("128613","506000");
		mappaBudgetDDFIAnno.put("1512303","164000");
		mappaBudgetDDFIAnno.put("226125","477900");
		mappaBudgetDDFIAnno.put("235979","392000");
		mappaBudgetDDFIAnno.put("122636","69000");
		mappaBudgetDDFIAnno.put("201870","348000");
		mappaBudgetDDFIAnno.put("267000","929000");
		mappaBudgetDDFIAnno.put("199965","547400");
		mappaBudgetDDFIAnno.put("122042","151800");
		mappaBudgetDDFIAnno.put("178087","381000");
		mappaBudgetDDFIAnno.put("152823","92000");
		mappaBudgetDDFIAnno.put("231256","220800");
		mappaBudgetDDFIAnno.put("269925","110400");
		mappaBudgetDDFIAnno.put("903097","207000");
		mappaBudgetDDFIAnno.put("238553","337500");

	var mappaBudgetDDFIIAnno= new java.util.LinkedHashMap();
	mappaBudgetDDFIIAnno.put("158735","1988400");
	mappaBudgetDDFIIAnno.put("127859","236200");
	mappaBudgetDDFIIAnno.put("1710241","140000");
	mappaBudgetDDFIIAnno.put("154877","580800");
	mappaBudgetDDFIIAnno.put("136109","486000");
	mappaBudgetDDFIIAnno.put("6372","547900");
	mappaBudgetDDFIIAnno.put("122076","1643100");
	mappaBudgetDDFIIAnno.put("1651219","707000");
	mappaBudgetDDFIIAnno.put("6050","822800");
	mappaBudgetDDFIIAnno.put("336317","945900");
	mappaBudgetDDFIIAnno.put("5372","665400");
	mappaBudgetDDFIIAnno.put("173938","545500");
	mappaBudgetDDFIIAnno.put("577313","317400");
	mappaBudgetDDFIIAnno.put("133537","547400");
	mappaBudgetDDFIIAnno.put("151013","164000");
	mappaBudgetDDFIIAnno.put("5671","550800");
	mappaBudgetDDFIIAnno.put("277239","136000");
	mappaBudgetDDFIIAnno.put("270955","208000");
	mappaBudgetDDFIIAnno.put("6073","1791800");
	mappaBudgetDDFIIAnno.put("221076","1151400");
	mappaBudgetDDFIIAnno.put("270439","517500");
	mappaBudgetDDFIIAnno.put("179057","224000");
	mappaBudgetDDFIIAnno.put("211149","358000");
	mappaBudgetDDFIIAnno.put("131315","236000");
	mappaBudgetDDFIIAnno.put("182735","86000");
	mappaBudgetDDFIIAnno.put("216010","652200");
	mappaBudgetDDFIIAnno.put("5426","2784800");
	mappaBudgetDDFIIAnno.put("271625","195100");
	mappaBudgetDDFIIAnno.put("6124","173700");
	mappaBudgetDDFIIAnno.put("967191","211600");
	mappaBudgetDDFIIAnno.put("149134","80000");
	mappaBudgetDDFIIAnno.put("261846","253900");
	mappaBudgetDDFIIAnno.put("125110","200000");
	mappaBudgetDDFIIAnno.put("267178","64500");
	mappaBudgetDDFIIAnno.put("125089","972600");
	mappaBudgetDDFIIAnno.put("221620","64500");
	mappaBudgetDDFIIAnno.put("126372","603000");
	mappaBudgetDDFIIAnno.put("15571","154800");
	mappaBudgetDDFIIAnno.put("153060","263800");
	mappaBudgetDDFIIAnno.put("171919","2717800");
	mappaBudgetDDFIIAnno.put("1078883","84700");
	mappaBudgetDDFIIAnno.put("15480","1435000");
	mappaBudgetDDFIIAnno.put("3558","141800");
	mappaBudgetDDFIIAnno.put("173624","277200");
	mappaBudgetDDFIIAnno.put("168690","296000");
	mappaBudgetDDFIIAnno.put("120655","400200");
	mappaBudgetDDFIIAnno.put("163950","234200");
	mappaBudgetDDFIIAnno.put("134547","115000");
	mappaBudgetDDFIIAnno.put("167336","146700");
	mappaBudgetDDFIIAnno.put("213042","155600");
	mappaBudgetDDFIIAnno.put("127050","342300");
	mappaBudgetDDFIIAnno.put("171134","690200");
	mappaBudgetDDFIIAnno.put("15392","1545100");
	mappaBudgetDDFIIAnno.put("133457","103200");
	mappaBudgetDDFIIAnno.put("1113467","298200");
	mappaBudgetDDFIIAnno.put("189562","1333400");
	mappaBudgetDDFIIAnno.put("201384","325100");
	mappaBudgetDDFIIAnno.put("244070","477700");
	mappaBudgetDDFIIAnno.put("1103775","170900");
	mappaBudgetDDFIIAnno.put("205692","78200");
	mappaBudgetDDFIIAnno.put("149460","174800");
	mappaBudgetDDFIIAnno.put("121645","96600");
	mappaBudgetDDFIIAnno.put("240357","0");
	mappaBudgetDDFIIAnno.put("928055","316000");
	mappaBudgetDDFIIAnno.put("224810","185200");
	mappaBudgetDDFIIAnno.put("1456914","475100");
	mappaBudgetDDFIIAnno.put("120965","568200");
	mappaBudgetDDFIIAnno.put("223271","412100");
	mappaBudgetDDFIIAnno.put("5384","4332000");
	mappaBudgetDDFIIAnno.put("157130","151800");
	mappaBudgetDDFIIAnno.put("1598015","91000");
	mappaBudgetDDFIIAnno.put("5498","2927000");
	mappaBudgetDDFIIAnno.put("275740","96600");
	mappaBudgetDDFIIAnno.put("6185","211600");
	mappaBudgetDDFIIAnno.put("900283","60000");
	mappaBudgetDDFIIAnno.put("1098085","213600");
	mappaBudgetDDFIIAnno.put("1112381","192100");
	mappaBudgetDDFIIAnno.put("134900","716600");
	mappaBudgetDDFIIAnno.put("5324","1611700");
	mappaBudgetDDFIIAnno.put("275827","96600");
	mappaBudgetDDFIIAnno.put("174448","160000");
	mappaBudgetDDFIIAnno.put("5438","1268100");
	mappaBudgetDDFIIAnno.put("1604039","1473000");
	mappaBudgetDDFIIAnno.put("365195","172000");
	mappaBudgetDDFIIAnno.put("266008","101200");
	mappaBudgetDDFIIAnno.put("125412","220800");
	mappaBudgetDDFIIAnno.put("128613","501400");
	mappaBudgetDDFIIAnno.put("1512303","164000");
	mappaBudgetDDFIIAnno.put("226125","477300");
	mappaBudgetDDFIIAnno.put("235979","392000");
	mappaBudgetDDFIIAnno.put("122636","69000");
	mappaBudgetDDFIIAnno.put("201870","348000");
	mappaBudgetDDFIIAnno.put("267000","929000");
	mappaBudgetDDFIIAnno.put("199965","547400");
	mappaBudgetDDFIIAnno.put("122042","151800");
	mappaBudgetDDFIIAnno.put("178087","381300");
	mappaBudgetDDFIIAnno.put("152823","87400");
	mappaBudgetDDFIIAnno.put("231256","220800");
	mappaBudgetDDFIIAnno.put("269925","110400");
	mappaBudgetDDFIIAnno.put("903097","207000");
	mappaBudgetDDFIIAnno.put("238553","337500");

var mappaBudgetDDFIIIAnno= new java.util.LinkedHashMap();
mappaBudgetDDFIIIAnno.put("158735","1951965");
mappaBudgetDDFIIIAnno.put("127859","213180");
mappaBudgetDDFIIIAnno.put("1710241","125400");
mappaBudgetDDFIIIAnno.put("154877","526205");
mappaBudgetDDFIIIAnno.put("136109","394820");
mappaBudgetDDFIIIAnno.put("6372","411730");
mappaBudgetDDFIIIAnno.put("122076","1517625");
mappaBudgetDDFIIIAnno.put("1651219","614175");
mappaBudgetDDFIIIAnno.put("6050","743755");
mappaBudgetDDFIIIAnno.put("336317","855475");
mappaBudgetDDFIIIAnno.put("5372","621870");
mappaBudgetDDFIIIAnno.put("173938","507585");
mappaBudgetDDFIIIAnno.put("577313","257830");
mappaBudgetDDFIIIAnno.put("133537","511290");
mappaBudgetDDFIIIAnno.put("151013","159600");
mappaBudgetDDFIIIAnno.put("5671","442510");
mappaBudgetDDFIIIAnno.put("277239","102600");
mappaBudgetDDFIIIAnno.put("270955","201400");
mappaBudgetDDFIIIAnno.put("6073","1717505");
mappaBudgetDDFIIIAnno.put("221076","1009755");
mappaBudgetDDFIIIAnno.put("270439","517275");
mappaBudgetDDFIIIAnno.put("179057","182400");
mappaBudgetDDFIIIAnno.put("211149","357010");
mappaBudgetDDFIIIAnno.put("131315","197600");
mappaBudgetDDFIIIAnno.put("182735","65360");
mappaBudgetDDFIIIAnno.put("216010","615030");
mappaBudgetDDFIIIAnno.put("5426","2648695");
mappaBudgetDDFIIIAnno.put("271625","148390");
mappaBudgetDDFIIIAnno.put("6124","152475");
mappaBudgetDDFIIIAnno.put("967191","192280");
mappaBudgetDDFIIIAnno.put("149134","45600");
mappaBudgetDDFIIIAnno.put("261846","183730");
mappaBudgetDDFIIIAnno.put("125110","167200");
mappaBudgetDDFIIIAnno.put("267178","36765");
mappaBudgetDDFIIIAnno.put("125089","967670");
mappaBudgetDDFIIIAnno.put("221620","44935");
mappaBudgetDDFIIIAnno.put("126372","498940");
mappaBudgetDDFIIIAnno.put("15571","151145");
mappaBudgetDDFIIIAnno.put("153060","245955");
mappaBudgetDDFIIIAnno.put("171919","2467530");
mappaBudgetDDFIIIAnno.put("1078883","76095");
mappaBudgetDDFIIIAnno.put("15480","1326580");
mappaBudgetDDFIIIAnno.put("3558","93480");
mappaBudgetDDFIIIAnno.put("173624","271510");
mappaBudgetDDFIIIAnno.put("168690","243200");
mappaBudgetDDFIIIAnno.put("120655","358340");
mappaBudgetDDFIIIAnno.put("163950","174895");
mappaBudgetDDFIIIAnno.put("134547","83030");
mappaBudgetDDFIIIAnno.put("167336","69920");
mappaBudgetDDFIIIAnno.put("213042","138510");
mappaBudgetDDFIIIAnno.put("127050","319865");
mappaBudgetDDFIIIAnno.put("171134","631275");
mappaBudgetDDFIIIAnno.put("15392","1493590");
mappaBudgetDDFIIIAnno.put("133457","98040");
mappaBudgetDDFIIIAnno.put("1113467","211470");
mappaBudgetDDFIIIAnno.put("189562","1318030");
mappaBudgetDDFIIIAnno.put("201384","259160");
mappaBudgetDDFIIIAnno.put("244070","447450");
mappaBudgetDDFIIIAnno.put("1103775","162355");
mappaBudgetDDFIIIAnno.put("205692","48070");
mappaBudgetDDFIIIAnno.put("149460","214130");
mappaBudgetDDFIIIAnno.put("121645","83030");
mappaBudgetDDFIIIAnno.put("240357","61180");
mappaBudgetDDFIIIAnno.put("928055","269800");
mappaBudgetDDFIIIAnno.put("224810","121220");
mappaBudgetDDFIIIAnno.put("1456914","473955");
mappaBudgetDDFIIIAnno.put("120965","563350");
mappaBudgetDDFIIIAnno.put("223271","378670");
mappaBudgetDDFIIIAnno.put("5384","4002825");
mappaBudgetDDFIIIAnno.put("157130","131100");
mappaBudgetDDFIIIAnno.put("1598015","71250");
mappaBudgetDDFIIIAnno.put("5498","2728115");
mappaBudgetDDFIIIAnno.put("275740","96140");
mappaBudgetDDFIIIAnno.put("6185","209760");
mappaBudgetDDFIIIAnno.put("900283","0");
mappaBudgetDDFIIIAnno.put("1098085","188100");
mappaBudgetDDFIIIAnno.put("1112381","186390");
mappaBudgetDDFIIIAnno.put("134900","620255");
mappaBudgetDDFIIIAnno.put("5324","1560850");
mappaBudgetDDFIIIAnno.put("275827","91770");
mappaBudgetDDFIIIAnno.put("174448","148200");
mappaBudgetDDFIIIAnno.put("5438","1152730");
mappaBudgetDDFIIIAnno.put("1604039","1287440");
mappaBudgetDDFIIIAnno.put("365195","144400");
mappaBudgetDDFIIIAnno.put("266008","96140");
mappaBudgetDDFIIIAnno.put("125412","218500");
mappaBudgetDDFIIIAnno.put("128613","450110");
mappaBudgetDDFIIIAnno.put("1512303","155800");
mappaBudgetDDFIIIAnno.put("226125","404130");
mappaBudgetDDFIIIAnno.put("235979","353400");
mappaBudgetDDFIIIAnno.put("122636","38000");
mappaBudgetDDFIIIAnno.put("201870","247000");
mappaBudgetDDFIIIAnno.put("267000","774250");
mappaBudgetDDFIIIAnno.put("199965","541880");
mappaBudgetDDFIIIAnno.put("122042","131100");
mappaBudgetDDFIIIAnno.put("178087","366700");
mappaBudgetDDFIIIAnno.put("152823","109250");
mappaBudgetDDFIIIAnno.put("231256","218500");
mappaBudgetDDFIIIAnno.put("269925","100510");
mappaBudgetDDFIIIAnno.put("903097","205390");
mappaBudgetDDFIIIAnno.put("238553","311600");




	//**** VALORIZZAZIONE CAMPI dei DATI GENERICI
		values.put('NumeroPratica', values.get('idPratica'));
		values.put('Bando_Descrizione', descrizioneBando);
		values.put('Bando_Nome', nomeBando);
		values.put('Bando_Annualita', annualita);
		values.put('CatalogoNome', catalogoNome);
		values.put('CatalogoBando', catalogoBando);

		values.put('Bando_DotazioneFinCorsi_Iniziale',''+mappaDotazioneFinCorsi.get(catalogoBando));
		values.put('Bando_DotazioneFinDisabilita_Iniziale',''+mappaDotazioneFinDisabilita.get(catalogoBando));

		values.put('Bando_DotazioneFinCorsi_SogliaPrimoModulo', ''+parseFloat(mappa_DotazioneFinCorsi_SogliaPrimoModulo.get(catalogoBando)));
		values.put('Bando_DotazioneFinDisabilita_SogliaPrimoModulo', ''+parseFloat(mappa_DotazioneFinDisabilita_SogliaPrimoModulo.get(catalogoBando)));
		values.put('Bando_DotazioneFinOperatore_SogliaPrimoModulo', ''+parseFloat(mappa_DotazioneFinOperatore_SogliaPrimoModulo.get(catalogoBando)));

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
			if (user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf() != null) {
			values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
			logger.info("XXXXX Natura Giuridica ricavata : "+values.get( 'Richiedente_NaturaGiuridica'));
			}

			//**** LETTURA da SGPROF
			var mappaValoriSgProf = ricercaProfiloSgProf(user);
			if ((mappaValoriSgProf != null) ) {
				logger.info("XXXXX Lettura da SgProf - mappaValoriSgProf: "+mappaValoriSgProf);
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
			var m_accreditamentoOperatore = verificaAccreditamentoOperatoreFormazioneSezioneA(CF_Oper);
			logger.info("XXXXX DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.success:"+m_accreditamentoOperatore.success);
			if (m_accreditamentoOperatore.success) {
				logger.info("XXXXX DOTE IFP: verificaAccreditamentoOperatore per il CF "+CF_Oper+": m_accreditamentoOperatore.result:"+m_accreditamentoOperatore.result);
				items.get('Avviso_AccreditamentoOperatoreNonVerificabile').setHidden(true);
				values.put('isQueryAlboAccreditatiOk','true');
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
				values.put('QueryAlboAccreditatiOk','false');
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
						values.put('isQueryVerificaSedeAccreditataOk','true');
						items.get('Avviso_AccreditamentoSedeNonVerificabile').setHidden(true);

					}
					else { // interrogazione gefo accreditamento Sede non andata a buon fine
						logger.info("XXXXX interrogazione gefo accreditamento sede non andata a buon fine");
						values.put('isQueryVerificaSedeAccreditataOk','false');
						items.get('Avviso_AccreditamentoSedeNonVerificabile').setHidden(false);
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
		 if((idOperatore != null)&&(idOperatore !='')) {  // se ha funzionato l'integrazione con gefo e conosco quindi idOperatore
			logger.info('XXXXX DOTI  idOperatore:' + idOperatore);
			if (catalogoBando =='DDFIanni') {
				 values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIAnno.get(idOperatore));
				 logger.info('XXXXX DOTI  mappaBudgetDDFIAnno[idOperatore] ' + mappaBudgetDDFIAnno.get(idOperatore));
			} else if (catalogoBando =='DDFIIanni') {
				values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIIAnno.get(idOperatore));
				 logger.info('XXXXX DOTI  mappaBudgetDDFIIAnno[idOperatore] ' + mappaBudgetDDFIIAnno.get(idOperatore));
			}else if (catalogoBando =='DDFIIIanni') {
				values.put('Bando_DotazioneFinOperatore_Iniziale',''+mappaBudgetDDFIIIAnno.get(idOperatore));
				 logger.info('XXXXX DOTI  mappaBudgetDDFIIIAnno[idOperatore] ' + mappaBudgetDDFIIIAnno.get(idOperatore));
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
		 if((idOperatore != null)&&(idOperatore !='')) {  // se ha funzionato l'integrazione con gefo
		 	values.put('Bando_DotazioneFinOperatore_Rimanente',''+operatoreDF);
		 }
		 else {
			values.put('Bando_DotazioneFinOperatore_Rimanente','');
		 }
     var is_DotazioneFinCorsi_Esaurita = (corsiDF < parseFloat(values.get('Bando_DotazioneFinCorsi_SogliaPrimoModulo')));
     var is_DotazioneFinDisabilita_Esaurita = (disabilitaDF < parseFloat(values.get('Bando_DotazioneFinDisabilita_SogliaPrimoModulo')));
     var is_DotazioneFinOperatore = (operatoreDF < parseFloat(values.get('Bando_DotazioneFinOperatore_SogliaPrimoModulo')));

		 items.get('Avviso_DotazioneFinCorsi_Rimanente_Esaurita').setHidden(!is_DotazioneFinCorsi_Esaurita);
		 items.get('Avviso_DotazioneFinDisabilita_Rimanente_Esaurita').setHidden(!is_DotazioneFinDisabilita_Esaurita);
		 items.get('Avviso_DotazioneFinOperatore_Rimanente_Esaurita').setHidden(!is_DotazioneFinOperatore);

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
		if ((dataAtto!= null) && (numeroAtto!= null) &&(dataAtto!= '') && (numeroAtto!= '')) {
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
	idItemDichiarazioni = items.get('Dichiaraz_0001'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0002'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0003'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0004'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0005'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0007'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0008'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0009');
	if (idItemDichiarazioni != null) {
		if ((catalogoBando=='DDFIanni'  )||(catalogoBando=='DDFIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0009_1');
	if (idItemDichiarazioni != null) {
		if ((catalogoBando=='DDFIIIanni'  )||(catalogoBando=='DDFIVanni' )||(catalogoBando=='PPDIanni' )||(catalogoBando=='PPDIIanni' )||(catalogoBando=='PPDIIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0010');
	if (idItemDichiarazioni != null) {
		if ((catalogoBando=='DDFIanni'  )||(catalogoBando=='DDFIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0010_1');
	if (idItemDichiarazioni != null) {
		if ((catalogoBando=='DDFIIIanni'  )||(catalogoBando=='DDFIVanni' )||(catalogoBando=='PPDIanni' )||(catalogoBando=='PPDIIanni' )||(catalogoBando=='PPDIIIanni' )) {
			idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);
		} else {
			idItemDichiarazioni.setHidden(true);
			idItemDichiarazioni.setRequired(false);
		}
	}

	idItemDichiarazioni = items.get('Dichiaraz_0011'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0012'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}
	idItemDichiarazioni = items.get('Dichiaraz_0013'); if (idItemDichiarazioni != null) {idItemDichiarazioni.setRequired(!isAttoUnicoPresentato);}

	var isMostrareDotazionePerDisabilita =(catalogoBando=='DDFIVanni');
	items.get('Bando_DotazioneFinDisabilita_Rimanente').setHidden(!isMostrareDotazionePerDisabilita);

logger.info("XXXXXMMMMM DOTE IFP: FINE Script ONLOAD su IdPratica - Modulo 1");

	}  // fine if iamInRoot() e sono nel modulo 1
}
