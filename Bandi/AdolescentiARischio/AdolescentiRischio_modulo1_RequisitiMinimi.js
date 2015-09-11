//onLoad
//Richiedente_ASL
values.put('statoPratica','In bozza');
values.put('fasePratica','Adesione');
values.put('title',values.get('idPratica') );
items.get('title').setHidden(true);
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
  var nomeProfilo = user.getProfiloQualificaCorrente().getProfilo().getName();
  var descrizioneProfilo = user.getProfiloQualificaCorrente().getProfilo().getDescription();
  values.put('Richiedente_ASL',''+descrizioneProfilo);
  var sqlImportiRichiesti = "SELECT NVL(SUM(CAST(DAT_VL AS NUMBER)), 0) importo_richiesto "+
                            "FROM ag_sm_data_entries en "+
                            "WHERE DAT_PTH = 'SintesiCosti_ContributoRichiesto' "+
                            "AND FK_ID IN ( "+
                            "  SELECT inst.SM_ID "+
                            "  FROM ag_sm_instances inst "+
                            "  WHERE inst.SM_TMPL_DN = 'Adolescenti in difficolta''' "+
                            "  AND inst.CURRENT_STATE IN ( "+
                            "    '8e96cc52ae7a4141867441eb055d7996', "+
                            "    '1d676b4674fe4bb8b1b8b7b0ce75fded' "+
                            "  ) "+
                            "  AND EXISTS ( "+
                            "    SELECT null "+
                            "    FROM ag_sm_data_entries e "+
                            "    WHERE e.FK_ID = inst.SM_ID "+
                            "    AND DAT_PTH = 'Richiedente_ASL' "+
                            "    AND DAT_VL = '"+descrizioneProfilo+"' "+
                            "  ) "+
                            ") ";
  var importiRichiesti = parseFloat(dizionarioService.getSingle(null, sqlImportiRichiesti));
  var dispResidua = 0;
  if (nomeProfilo == 'ASL-BG') {
    dispResidua = 361162 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-BS') {
    dispResidua = 370650 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-CO') {
    dispResidua = 182765 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-CR') {
    dispResidua = 107742 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-LC') {
    dispResidua = 107153 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-LO') {
    dispResidua = 71919 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-MN') {
    dispResidua = 120205 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-MI') {
    dispResidua = 426104 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-MI-1') {
    dispResidua = 288208 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-MI-2') {
    dispResidua = 193427 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-MB') {
    dispResidua = 259961 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-PV') {
    dispResidua = 152418 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-SO') {
    dispResidua = 58647 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-VA') {
    dispResidua = 268364 - importiRichiesti;
  } else if (nomeProfilo == 'ASL-VS') {
    dispResidua = 31275 - importiRichiesti;
  }
  values.put('Budget_ASL', ''+dispResidua);
}
values.put('Richiedente_Denominazione',values.get('Richiedente_ASL'));
values.put('Titolo',values.get('idPratica') + ' ' + values.get('Richiedente_ASL'));
//Beneficiario_ProvinciaNascita
setSelectOptionsCached('Beneficiario_ProvinciaNascita','provincia_istat');
setSelectDependedOptionsAndShowCached('Beneficiario_ComuneNascita', 'comune_istat', path+'Beneficiario_ProvinciaNascita');
//Beneficiario_ProvinciaResidenza
setSelectOptionsCached('Beneficiario_ProvinciaResidenza','provincia_istat');
setSelectDependedOptionsAndShowCached('Beneficiario_ComuneResidenza', 'comune_istat', path+'Beneficiario_ProvinciaResidenza');
//SedeProgetto_Provincia
setSelectOptionsCached('SedeProgetto_Provincia','provincia_istat');
setSelectDependedOptionsAndShowCached('SedeProgetto_Comune', 'comune_istat', path+'SedeProgetto_Provincia');
//Beneficiario_DomicilioResidenza
var isDomicilioResidenza = (values.get('Beneficiario_DomicilioResidenza') == 'true');
fieldsets.get('82a5696790ed401eaebe8ea511cdb24a').setHidden((isDomicilioResidenza) || (isEmpty('Beneficiario_DomicilioResidenza')));
items.get('SedeProgetto_Provincia').setRequired(!isDomicilioResidenza);
items.get('SedeProgetto_Comune').setRequired(!isDomicilioResidenza);
items.get('SedeProgetto_Cap').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_IndirizzoDomicilio').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_CivicoDomicilio').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_TelefonoDomicilio').setRequired(!isDomicilioResidenza);

//onChange
//Beneficiario_ProvinciaNascita
values.put('Beneficiario_ProvinciaNascitaDn', getOptionLabel('Beneficiario_ProvinciaNascita', values.get(path+'Beneficiario_ProvinciaNascita')));
values.put(path+'Beneficiario_ComuneNascita', '');
values.remove('Beneficiario_ComuneNascitaDn');
setSelectDependedOptionsAndShowCached('Beneficiario_ComuneNascita', 'comune_istat', path+'Beneficiario_ProvinciaNascita');
//Richiedente_ProvinciaResidenza
values.put('Beneficiario_ProvinciaResidenzaDn', getOptionLabel('Beneficiario_ProvinciaResidenza', values.get(path+'Beneficiario_ProvinciaResidenza')));
values.put(path+'Beneficiario_ComuneResidenza', '');
values.remove('Beneficiario_ComuneResidenzaDn');
setSelectDependedOptionsAndShowCached('Beneficiario_ComuneResidenza', 'comune_istat', path+'Beneficiario_ProvinciaResidenza');
//SedeProgetto_Provincia
values.put('SedeProgetto_ProvinciaDn', getOptionLabel('SedeProgetto_Provincia', values.get(path+'SedeProgetto_Provincia')));
values.put(path+'SedeProgetto_Comune', '');
values.remove('SedeProgetto_ComuneDn');
setSelectDependedOptionsAndShowCached('SedeProgetto_Comune', 'comune_istat', path+'SedeProgetto_Provincia');
//Richiedente_ComuneNascita
values.put('Beneficiario_ComuneNascitaDn', getOptionLabel('Beneficiario_ComuneNascita', values.get(path+'Beneficiario_ComuneNascita')));
//Richiedente_ComuneResidenza
values.put('Beneficiario_ComuneResidenzaDn', getOptionLabel('Beneficiario_ComuneResidenza', values.get(path+'Beneficiario_ComuneResidenza')));
//SedeProgetto_Comune
values.put('SedeProgetto_ComuneDn', getOptionLabel('SedeProgetto_Comune', values.get(path+'SedeProgetto_Comune')));
//Beneficiario_DomicilioResidenza
values.remove('SedeProgetto_Provincia');
values.remove('SedeProgetto_ProvinciaDn');
values.remove('SedeProgetto_Comune');
values.remove('SedeProgetto_ComuneDn');
values.remove('SedeProgetto_Cap');
values.remove('Beneficiario_IndirizzoDomicilio');
values.remove('Beneficiario_CivicoDomicilio');
values.remove('Beneficiario_TelefonoDomicilio');
var isDomicilioResidenza = (values.get('Beneficiario_DomicilioResidenza') == 'true');
fieldsets.get('82a5696790ed401eaebe8ea511cdb24a').setHidden(isDomicilioResidenza);
items.get('SedeProgetto_Provincia').setRequired(!isDomicilioResidenza);
items.get('SedeProgetto_Comune').setRequired(!isDomicilioResidenza);
items.get('SedeProgetto_Cap').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_IndirizzoDomicilio').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_CivicoDomicilio').setRequired(!isDomicilioResidenza);
items.get('Beneficiario_TelefonoDomicilio').setRequired(!isDomicilioResidenza);

//Validazione
//disponibilita Budget_ASL
var nomeProfilo = user.getProfiloQualificaCorrente().getProfilo().getName();
var descrizioneProfilo = values.get('Richiedente_ASL');
var sqlImportiRichiesti = "SELECT NVL(SUM(CAST(DAT_VL AS NUMBER)), 0) importo_richiesto "+
                          "FROM ag_sm_data_entries en "+
                          "WHERE DAT_PTH = 'SintesiCosti_ContributoRichiesto' "+
                          "AND FK_ID IN ( "+
                          "  SELECT inst.SM_ID "+
                          "  FROM ag_sm_instances inst "+
                          "  WHERE inst.SM_TMPL_DN = 'Adolescenti in difficolta''' "+
                          "  AND inst.CURRENT_STATE IN ( "+
                          "    '8e96cc52ae7a4141867441eb055d7996', "+
                          "    '1d676b4674fe4bb8b1b8b7b0ce75fded' "+
                          "  ) "+
                          "  AND EXISTS ( "+
                          "    SELECT null "+
                          "    FROM ag_sm_data_entries e "+
                          "    WHERE e.FK_ID = inst.SM_ID "+
                          "    AND DAT_PTH = 'Richiedente_ASL' "+
                          "    AND DAT_VL = '"+descrizioneProfilo+"' "+
                          "  ) "+
                          ") ";
var importiRichiesti = parseFloat(dizionarioService.getSingle(null, sqlImportiRichiesti));
var dispResidua = 0;
if (nomeProfilo == 'ASL-BG') {
  dispResidua = 361162 - importiRichiesti;
} else if (nomeProfilo == 'ASL-BS') {
  dispResidua = 370650 - importiRichiesti;
} else if (nomeProfilo == 'ASL-CO') {
  dispResidua = 182765 - importiRichiesti;
} else if (nomeProfilo == 'ASL-CR') {
  dispResidua = 107742 - importiRichiesti;
} else if (nomeProfilo == 'ASL-LC') {
  dispResidua = 107153 - importiRichiesti;
} else if (nomeProfilo == 'ASL-LO') {
  dispResidua = 71919 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MN') {
  dispResidua = 120205 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MI') {
  dispResidua = 426104 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MI-1') {
  dispResidua = 288208 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MI-2') {
  dispResidua = 193427 - importiRichiesti;
} else if (nomeProfilo == 'ASL-MB') {
  dispResidua = 259961 - importiRichiesti;
} else if (nomeProfilo == 'ASL-PV') {
  dispResidua = 152418 - importiRichiesti;
} else if (nomeProfilo == 'ASL-SO') {
  dispResidua = 58647 - importiRichiesti;
} else if (nomeProfilo == 'ASL-VA') {
  dispResidua = 268364 - importiRichiesti;
} else if (nomeProfilo == 'ASL-VS') {
  dispResidua = 31275 - importiRichiesti;
}
var contributoRichiesto = 0;
if (!isEmpty('SintesiCosti_ContributoRichiesto')) {
  contributoRichiesto = parseFloat(values.get('SintesiCosti_ContributoRichiesto'));
}
var dispASL = dispResidua - contributoRichiesto;
if ((dispResidua <= 0) || (dispASL < 0)) {
  errors.put('Budget_ASL','disponibilita_val');
}
  //Il budget disponibile per l'ASL è esaurito: non è possibile procedere con la domanda
//pratica duplicata
var codiceFiscaleBeneficiario = values.get('Beneficiario_CodiceFiscale');
var sql =
"  SELECT SM_ID PRATICA_BLOCCANTE "+
"  FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
"  WHERE DETTAGLIO.DAT_PTH = 'Beneficiario_CodiceFiscale' "+
"  AND DETTAGLIO.DAT_VL = '" + codiceFiscaleBeneficiario +"' "+
"  AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
"  AND PRATICA.SM_TMPL_DN = 'Adolescenti in difficolta''' "+
"  AND PRATICA.CURRENT_STATE in ('8e96cc52ae7a4141867441eb055d7996', '1d676b4674fe4bb8b1b8b7b0ce75fded') "
//							  						    Attesa protocollazione			  			Presentata
;
var pratiche = dizionarioService.getList(null, sql);
if(pratiche.size() > 0) {
	errors.put('Beneficiario_CodiceFiscale', 'PraticaDuplicata_val');
}
//È già stata presentata una pratica per il beneficiario indicato, non è possibile presentarne una seconda

if (!isEmpty('Beneficiario_CodiceFiscale')) {
  if (!isValidCf(values.get('Beneficiario_CodiceFiscale'))) {
    errors.put('Beneficiario_CodiceFiscale','Beneficiario_CodiceFiscale_val');
  }
}
if (!isEmpty('Beneficiario_DataNascita')) {
  var millisPerAnno = ((60000 * 60) * 24) * 365.25;
  var dataOdierna = new Date();
  var dataOdiernaMillis = parseFloat(dataOdierna.getTime());
  var dataNascita = parseFloat(values.get('Beneficiario_DataNascita'));
  var etaRichiedente = (dataOdiernaMillis - dataNascita) / millisPerAnno;
  if ((etaRichiedente < 13) || (etaRichiedente > 25)) {
    errors.put('Beneficiario_DataNascita', 'Beneficiario_DataNascita_val');
  }
}
if (!isEmpty('Beneficiario_MailResidenza')) {
  if (!isValidEmail(values.get('Beneficiario_MailResidenza'))) {
    errors.put('Beneficiario_MailResidenza','Beneficiario_MailResidenza_val');
  }
}
if (!isEmpty('Beneficiario_CapResidenza')) {
  if (!isValidCap(values.get('Beneficiario_CapResidenza'))) {
    errors.put('Beneficiario_CapResidenza','Beneficiario_CapResidenza_val');
  }
}
if ((values.get('Beneficiario_DomicilioResidenza') == 'false') && (!isEmpty('SedeProgetto_Cap'))) {
  if (!isValidCap(values.get('SedeProgetto_Cap'))) {
    errors.put('SedeProgetto_Cap','SedeProgetto_Cap_val');
  }
}

//Operations
//setDomicilioResidenza
if (values.get('Beneficiario_DomicilioResidenza') == 'true') {
  values.put('SedeProgetto_Provincia',values.get('Beneficiario_ProvinciaResidenza'));
  values.put('SedeProgetto_ProvinciaDn',values.get('Beneficiario_ProvinciaResidenzaDn'));
  values.put('SedeProgetto_Comune',values.get('Beneficiario_ComuneResidenza'));
  values.put('SedeProgetto_ComuneDn',values.get('Beneficiario_ComuneResidenzaDn'));
  values.put('SedeProgetto_Cap',values.get('Beneficiario_CapResidenza'));
  values.put('Beneficiario_IndirizzoDomicilio',values.get('Beneficiario_IndirizzoResidenza'));
  values.put('Beneficiario_CivicoDomicilio',values.get('Beneficiario_CivicoResidenza'));
  values.put('Beneficiario_TelefonoDomicilio',values.get('Beneficiario_TelefonoResidenza'));
}
