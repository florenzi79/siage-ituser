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
  var sqlDisponibilita = "SELECT SUM(contributo_concesso) AS contributo_concesso "+
  "FROM ( "+
  "  SELECT SM_ID AS id_pratica, "+
  "  CASE "+
  "    WHEN inst.CURRENT_STATE IN ('92be108f05424435b95add2fd35728f1', 'fdbc5d4259524fc785ef7b2d439ed700', 'da19d78504164967bac98fa0bfb042eb', '608db556dd354830b66eb0095a9a6621', 'a1cf2e34d51c46feaebded83bc8595d7') "+
  "    THEN 0 "+
  "    WHEN inst.CURRENT_STATE IN ('8e96cc52ae7a4141867441eb055d7996', '1d676b4674fe4bb8b1b8b7b0ce75fded') "+
  "    THEN ( "+
  "      SELECT nvl(cast (V.DAT_VL AS number), 0) "+
  "      FROM ( "+
  "        SELECT FK_ID,DAT_VL "+
  "        FROM AG_SM_DATA_ENTRIES "+
  "        INNER JOIN ( "+
  "          SELECT SM_ID "+
  "          FROM AG_SM_INSTANCES "+
  "          WHERE SM_TMPL_DN = 'Adolescenti in difficolta''' "+
  "          AND CURRENT_STATE IN ('8e96cc52ae7a4141867441eb055d7996', '1d676b4674fe4bb8b1b8b7b0ce75fded') "+
  "        ) SM ON SM.SM_ID = FK_ID "+
  "        WHERE DAT_PTH = 'SintesiCosti_ContributoRichiesto' "+
  "      ) V "+
  "      LEFT OUTER JOIN ( "+
  "        SELECT FK_ID,DAT_VL "+
  "        FROM AG_SM_DATA_ENTRIES "+
  "        WHERE DAT_PTH = 'Richiedente_ASL' "+
  "        AND DAT_VL = '"+descrizioneProfilo+"' "+
  "      ) ASL ON V.FK_ID = ASL.FK_ID "+
  "    ) "+
  "    ELSE 0 "+
  "  END AS contributo_concesso "+
  "  FROM AG_SM_INSTANCES inst "+
  "  INNER JOIN ( "+
  "    SELECT FK_ID AS cdPratica "+
  "    FROM AG_SM_DATA_ENTRIES "+
  "    WHERE DAT_VL = '"+descrizioneProfilo+"' "+
  "  )  ON cdPratica = inst.SM_ID "+
  "  WHERE SM_TMPL_DN = 'Adolescenti in difficolta''' "+
  ")";
  var esitoQuery = dizionarioService.getSingle(null, sqlDisponibilita);
  var contrConcessi = 0;
  if (esitoQuery != null) {
    contrConcessi = parseFloat(esitoQuery);
  }
  var dispResidua = 0;
  if (nomeProfilo == 'ASL-BG') {
    dispResidua = 361162 - contrConcessi;
  } else if (nomeProfilo == 'ASL-BS') {
    dispResidua = 370650 - contrConcessi;
  } else if (nomeProfilo == 'ASL-CO') {
    dispResidua = 182765 - contrConcessi;
  } else if (nomeProfilo == 'ASL-CR') {
    dispResidua = 107742 - contrConcessi;
  } else if (nomeProfilo == 'ASL-LC') {
    dispResidua = 107153 - contrConcessi;
  } else if (nomeProfilo == 'ASL-LO') {
    dispResidua = 71919 - contrConcessi;
  } else if (nomeProfilo == 'ASL-MN') {
    dispResidua = 120205 - contrConcessi;
  } else if (nomeProfilo == 'ASL-MI') {
    dispResidua = 426104 - contrConcessi;
  } else if (nomeProfilo == 'ASL-MI-1') {
    dispResidua = 288208 - contrConcessi;
  } else if (nomeProfilo == 'ASL-MI-2') {
    dispResidua = 193427 - contrConcessi;
  } else if (nomeProfilo == 'ASL-MB') {
    dispResidua = 259961 - contrConcessi;
  } else if (nomeProfilo == 'ASL-PV') {
    dispResidua = 152418 - contrConcessi;
  } else if (nomeProfilo == 'ASL-SO') {
    dispResidua = 58647 - contrConcessi;
  } else if (nomeProfilo == 'ASL-VA') {
    dispResidua = 268364 - contrConcessi;
  } else if (nomeProfilo == 'ASL-VS') {
    dispResidua = 31275 - contrConcessi;
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
