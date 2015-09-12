//onLoad
//Richiedente_NaturaGiuridica
values.put('statoPratica','In bozza');
values.put('fasePratica','Adesione');
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
	var mappaValoriSgProf = ricercaProfiloSgProf(user);
	if (mappaValoriSgProf != null) {
		values.put( 'Richiedente_NaturaGiuridica', user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf());
		if( mappaValoriSgProf.get('AA037') != null ) values.put( 'SoggettoRichiedente_Denominazione', mappaValoriSgProf.get('AA037').toString() );
		if( mappaValoriSgProf.get('AA206') != null ) {
			values.put( 'SoggettoRichiedente_CodiceFiscale', mappaValoriSgProf.get('AA206').toString() );
		} else if ( mappaValoriSgProf.get('AA241') != null ) {
			values.put( 'SoggettoRichiedente_CodiceFiscale', mappaValoriSgProf.get('AA241').toString() );
		}
		if( (mappaValoriSgProf.get('AA038') != null) && (values.get('SoggettoRichiedente_Piva') == null) ) values.put( 'SoggettoRichiedente_Piva', mappaValoriSgProf.get('AA038').toString() );
		if( (mappaValoriSgProf.get('AA208') != null) && (values.get('SoggettoRichiedente_Pec') == null) ) values.put( 'SoggettoRichiedente_Pec', mappaValoriSgProf.get('AA208').toString() );
		// Sede legale
		if( (mappaValoriSgProf.get('AA061') != null)  && (values.get('SedeLegale_Comune') == null)) {
			values.put( 'SedeLegale_Comune', mappaValoriSgProf.get('AA061').toString());
			values.put( 'SedeLegale_ComuneDn', getAnaDenominazione('comune_istat', values.get('SedeComune')) );
		}
		if( (mappaValoriSgProf.get('AA062') != null) && (values.get('SedeLegale_Provincia') == null)) {
			values.put( 'SedeLegale_Provincia', mappaValoriSgProf.get('AA062').toString() );
			values.put( 'SedeLegale_ProvinciaDn', getAnaDenominazione('provincia_istat', values.get('SedeProvincia')) );
		}
		if( (mappaValoriSgProf.get('AA060') != null) && (values.get('SedeLegale_Indirizzo') == null) ) values.put( 'SedeLegale_Indirizzo', mappaValoriSgProf.get('AA060').toString() );
		// Rappresentante legale
		if( mappaValoriSgProf.get('AA142') != null ) values.put( 'Richiedente_RappresentanteLegaleCf', mappaValoriSgProf.get('AA142').toString() );
		if( mappaValoriSgProf.get('AA029') != null ) values.put( 'Richiedente_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
		if( mappaValoriSgProf.get('AA030') != null ) values.put( 'Richiedente_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
	}
}
	//titolo pratica
values.put('title',values.get('SoggettoRichiedente_Denominazione') );
items.get('title').setHidden(true);
	//dati ASD
var cfEccellenze = ["80143690156","13388220157","01766410169","05252350961","91005500151",
										"04932110960","90006250170","95035030121","03201460171","00444670194",
										"95007940133","96028090189","98028250177","01891620203","03240740120",
										"92006910183","04498980152","91004580121","01790870164","13137360155"];
var cfRichiedente = values.get('SoggettoRichiedente_CodiceFiscale');
var i = 0;
var cfPresente = false;
while (i<cfEccellenze.length) {
  if (cfRichiedente == cfEccellenze[i]) {
    cfPresente = true;
  }
  i++;
}
items.get('Avviso_SoggettoNonAmmissibile').setHidden(cfPresente);
items.get('Richiedente_FsnDsaAppartenenza').setHidden(!cfPresente);
items.get('Richiedente_Affiliazione').setHidden(!cfPresente);
items.get('Richiedente_IscrizioneConiCip').setHidden(!cfPresente);
if (cfRichiedente == '80143690156') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA DI ATLETICA LEGGERA');
	values.put('Richiedente_Affiliazione','MI080');
	values.put('Richiedente_IscrizioneConiCip','48344');
} else if (cfRichiedente == '13388220157') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA DI ATLETICA LEGGERA');
	values.put('Richiedente_Affiliazione','MI221');
	values.put('Richiedente_IscrizioneConiCip','7507');
} else if (cfRichiedente == '01766410169') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA DI ATLETICA LEGGERA');
	values.put('Richiedente_Affiliazione','BG003');
	values.put('Richiedente_IscrizioneConiCip','27288');
} else if (cfRichiedente == '05252350961') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA DI ATLETICA LEGGERA');
	values.put('Richiedente_Affiliazione','MI089');
	values.put('Richiedente_IscrizioneConiCip','17702');
} else if (cfRichiedente == '91005500151') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE GINNASTICA D’ITALIA');
	values.put('Richiedente_Affiliazione','000610');
	values.put('Richiedente_IscrizioneConiCip','687');
} else if (cfRichiedente == '04932110960') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE GINNASTICA D’ITALIA');
	values.put('Richiedente_Affiliazione','000046');
	values.put('Richiedente_IscrizioneConiCip','1996');
} else if (cfRichiedente == '90006250170') {
	values.put('Richiedente_FsnDsaAppartenenza','FISDIR LOMBARDIA');
	values.put('Richiedente_Affiliazione','BS001');
	values.put('Richiedente_IscrizioneConiCip','518');
} else if (cfRichiedente == '95035030121') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA TIRO CON L’ARCO');
	values.put('Richiedente_Affiliazione','04/006');
	values.put('Richiedente_IscrizioneConiCip','27719');
} else if (cfRichiedente == '03201460171') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE GINNASTICA D’ITALIA');
	values.put('Richiedente_Affiliazione','000967');
	values.put('Richiedente_IscrizioneConiCip','25172');
} else if (cfRichiedente == '00444670194') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA PALLAVOLO');
	values.put('Richiedente_Affiliazione','040150042');
	values.put('Richiedente_IscrizioneConiCip','20825');
} else if (cfRichiedente == '95007940133') {
	values.put('Richiedente_FsnDsaAppartenenza','FISDIR LOMBARDIA');
	values.put('Richiedente_Affiliazione','co001');
	values.put('Richiedente_IscrizioneConiCip','542');
} else if (cfRichiedente == '96028090189') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA DI ATLETICA LEGGERA');
	values.put('Richiedente_Affiliazione','PV110');
	values.put('Richiedente_IscrizioneConiCip','49303');
} else if (cfRichiedente == '98028250177') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA NUOTO PARALIMPICO');
	values.put('Richiedente_Affiliazione','BS006');
	values.put('Richiedente_IscrizioneConiCip','180982');
} else if (cfRichiedente == '01891620203') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA TENNISTAVOLO');
	values.put('Richiedente_Affiliazione','2922');
	values.put('Richiedente_IscrizioneConiCip','127037');
} else if (cfRichiedente == '03240740120') {
	values.put('Richiedente_FsnDsaAppartenenza','FIB COMITATO REGIONALE LOMBARDIA');
	values.put('Richiedente_Affiliazione','RVA000168');
	values.put('Richiedente_IscrizioneConiCip','64025');
} else if (cfRichiedente == '92006910183') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA HOCKEY');
	values.put('Richiedente_Affiliazione','030702');
	values.put('Richiedente_IscrizioneConiCip','21729');
} else if (cfRichiedente == '04498980152') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA SPORT PARALIMPICI E SPERIMENTALI');
	values.put('Richiedente_Affiliazione','MI010');
	values.put('Richiedente_IscrizioneConiCip','MI010');
} else if (cfRichiedente == '91004580121') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA CANOA KAYAK');
	values.put('Richiedente_Affiliazione','03020');
	values.put('Richiedente_IscrizioneConiCip','8583');
} else if (cfRichiedente == '01790870164') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA SPORT INVERNALI');
	values.put('Richiedente_Affiliazione','BG33');
	values.put('Richiedente_IscrizioneConiCip','33279');
} else if (cfRichiedente == '13137360155') {
	values.put('Richiedente_FsnDsaAppartenenza','FEDERAZIONE ITALIANA PALLAVOLO');
	values.put('Richiedente_Affiliazione','04170191');
	values.put('Richiedente_IscrizioneConiCip','1976');
}

//onChange
//Validazione
var cfEccellenze = ["80143690156","13388220157","01766410169","05252350961","91005500151",
										"04932110960","90006250170","95035030121","03201460171","00444670194",
										"95007940133","96028090189","98028250177","01891620203","03240740120",
										"92006910183","04498980152","91004580121","01790870164","13137360155"];
var cfRichiedente = values.get('SoggettoRichiedente_CodiceFiscale');
var i = 0;
var cfPresente = false;
while (i<cfEccellenze.length) {
  if (cfRichiedente == cfEccellenze[i]) {
    cfPresente = true;
  }
  i++;
}
if (!cfPresente) {
    errors.put('SoggettoRichiedente_CodiceFiscale','SoggettoNonAmmesso_val');
}
//pratica duplicata
var codiceFiscaleRichiedente = values.get('SoggettoRichiedente_CodiceFiscale');
var sql =
"  select SM_ID PRATICA_BLOCCANTE"+
"  from AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO"+
"  where"+
"  DETTAGLIO.DAT_PTH like 'SoggettoRichiedente_CodiceFiscale' and"+
"  DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' and"+
"  DETTAGLIO.FK_ID = PRATICA.SM_ID and"+
"  PRATICA.SM_TMPL_DN = 'Contributi ASD Eccellenze Linea 3' and"+
"  PRATICA.CURRENT_STATE in ('63549fd5d8c64e519a29e8788755fc0a', '5a8a62f27a704dc2a3afa45a164ff7c1')"
//							  						Attesa protocollazione			  			Presentata
;
var pratiche = dizionarioService.getList(null, sql);
if(pratiche.size() > 0) {
	errors.put('SoggettoRichiedente_AvvisiPresentazione', 'PraticaDuplicata_val');
}
	//formato mail
if (!isEmpty('SoggettoRichiedente_Mail')) {
	if (!isValidEmail(values.get('SoggettoRichiedente_Mail'))) {
		errors.put('SoggettoRichiedente_Mail','FormatoEmail_val');
	}
}
if (!isEmpty('SoggettoRichiedente_Pec')) {
	if (!isValidEmail(values.get('SoggettoRichiedente_Pec'))) {
		errors.put('SoggettoRichiedente_Pec','FormatoEmail_val');
	}
}
	//dichiarazioni
{
    var dichiarazioni_value=  values.get('Dichiarazioni_Dpr');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_Dpr', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_CondizioniProvvedimento');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_CondizioniProvvedimento', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_CondannaIllecito');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_CondannaIllecito', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_CondannaDoping');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_CondannaDoping', 'Dichiarazioni_val');
    }
}
{
    var dichiarazioni_value=  values.get('Dichiarazioni_SanzioneConi');
    if(dichiarazioni_value=='false') {
        errors.put('Dichiarazioni_SanzioneConi', 'Dichiarazioni_val');
    }
}
if (values.get('Dichiarazioni_VeridicitaDati') == 'false') {
	errors.put('Dichiarazioni_VeridicitaDati', 'Dichiarazioni_val');
}
if (values.get('Dichiarazioni_PresaVisione') == 'false') {
	errors.put('Dichiarazioni_PresaVisione', 'Dichiarazioni_val');
}
if (values.get('Dichiarazioni_PresaAttoCondizioni') == 'false') {
	errors.put('Dichiarazioni_PresaAttoCondizioni', 'Dichiarazioni_val');
}
if (values.get('Dichiarazioni_CaricamentoDocumenti') == 'false') {
	errors.put('Dichiarazioni_CaricamentoDocumenti', 'Dichiarazioni_val');
}
if (values.get('Dichiarazioni_PossessoRequisiti') == 'false') {
	errors.put('Dichiarazioni_PossessoRequisiti', 'Dichiarazioni_val');
}
