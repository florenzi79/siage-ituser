
function log(text) {
	manager.log(text);
}

/**
 * Recupera i timemillis associati ad una data
 * @param date come testo
 * @param format formato usato
 * @returns {String}
 */
function getTimemillis(date, format) {
	return ''+manager.parseDate(date, format).getTime();
}

/*
 * Ritorna un valore dalla cache del modello.
 * fieldJSONPath : string - path JSON
 */
function getValue(fieldJSONPath) {
	return values.get(fieldJSONPath);
}

/*
 * Imposta un valore nella cache del modello.
 * fieldJSONPath : string -path JSON
 * newValue : string - nuovo valore da impostare
 */
function setValue(fieldJSONPath, newValue) {
	values.put(fieldJSONPath, newValue);
}

function isEmpty(fieldJSONPath) {
	var val = getValue(fieldJSONPath);
	if (val == null || val.toString().trim().length == 0) {
		return true;
	}
	else {
		return false;
	}
}

function isTrue(fieldJSONPath) {
	var val = getValue(fieldJSONPath);
	return 'true' == val;
}

function isFalse(fieldJSONPath) {
	var val = getValue(fieldJSONPath);
	return 'false' == val;
}

/*
 * Notifica un errore di validazione.
 * fieldJSONPath : string - path JSON del campo per il quale notificare l'errore di validazioen
 * errorLabelId : identificativo della label di mostrare (dalla mappa errors)
 */
function setError(fieldJSONPath, errorLabelId) {
	errors.put(fieldJSONPath, errorLabelId);
}

/*
 * Effettua la chiamata ad un servizio rest censito a sistema.
 */
function callService(serviceName, jsonrequest) {
	requestObject = JSON.stringify(jsonrequest);
	response = externalService.request(serviceName, requestObject);

	obj = { __source: JSON.parse(response) };

	//obj['A001'];

	for (var i = 0; i < obj.__source.data.attributi.length; i++) {
		if (obj.__source.data.attributi[i].cardinalita == 'SINGOLO') {
			obj[obj.__source.data.attributi[i].codice] = obj.__source.data.attributi[i].valore;
		}
		else {
			if (obj.__source.data.attributi[i].valore == null) {
				obj[obj.__source.data.attributi[i].codice] = null;
			} else {
				obj[obj.__source.data.attributi[i].codice] = obj.__source.data.attributi[i].valore.split("#");
			}
		}
	}

	return obj;
}


/*
 * Old
 */

function err(field, errmessageid) {
	errors.put(field, errmessageid);
}

function getVal(field) {
	return values.get(field);
}

function getArrayVal(field, i) {
	return values.get(field + '[' + i + ']');
}

function isValidEmail(field) {
	return field.match(/^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9._%+-]{3,}.[A-Za-z0-9._%+-]{2,}$/);
}

/**
 * Verifica se il field è un iban italiano valido
 *
 * @param field valore da controllare
 * @returns {Boolean} esito del controllo
 */
function isValidIbanIta(field) {
	return field.match(/^IT\d{2}[A-Z]\d{10}[0-9A-Z]{12}$/);
}

/**
 * Verifica se il field è un CAP italiano valido
 *
 * @param field valore da controllare
 * @returns {Boolean} esito del controllo
 */
function isValidCap(field) {
	return field.match(/^\d{5}$/);
}

/**
 * Verifica se il field è un intero
 *
 * @param field valore da controllare
 * @returns {Boolean} estito del controllo
 */
function isInteger(field) {
	return field.match(/^\d+$/);
}

/**
 * Verifica se il field è un intero ed è in un dato intervallo di valori.
 *
 * @param field valore da controllare
 * @param min estremo minore incluso
 * @param max estremo superriore incluso
 * @returns {Boolean} estito del controllo
 */
function isIntegerInRange(field, min, max) {
	if (field.match(/^\d+$/)) {
		var value = parseInt(field);
		var minValue = parseInt(min);
		var maxValue = parseInt(max);
		return minValue <= value && value <= maxValue;
	} else {
		return false;
	}
}

function isValidCf(field) {
	return field.match(/^[A-Za-z]{6}[0-9]{2}[A-Za-z][0-9]{2}[A-Za-z][0-9]{3}[A-Za-z]$/);
}

function isValidIVA(field) {
	return field.match(/^[0-9]{11}$/);
}

function isValidCForIVA(field) {
	return isValidCf(field) || isValidIVA(field);
}

/**
 *
 * Formatta il codice ATECO ricevuto dal servizio SGPROF in modo da
 * renderlo confrontabile con quello salvato nella tabella AG_ANAGRAFICA
 *
 * @param field
 * @returns {String}
 */
function encodeCodAteco(field) {
//	logger.info("codice ATECO senza punti: "+field);
	field = manager.encodeCodAteco(field);
//	logger.info("codice ATECO con punti: "+field);
	return field;
}

//function formatCodAteco(value) {
//	logger.info("formatCodAteco="+value);
//	var formatted;
//
//	if(value!=null && !value.contains(".")){
//			formatted = value.replaceAll("(\\w{2})","$1.");
//
//		if (formatted.length() % 2 == 0){
//			formatted = formatted.replaceAll("\\.$", "");
//		}
//
//		logger.info("codAtecoFormatted= "+formatted);
//	}
//	return formatted;
//}

function itemValueIsEmpty(itemName){
	var itemValue = values.get(itemName);
	if(itemValue==null || itemValue.trim()==''){
		return true;
	}
	return false;
}


/**
 *
 * Formatta il codice ATECO salvato nella tabella AG_ANAGRAFICA in modo da renderlo
 * confrontabile con quello del servizio SGPROF
 *
 * @param field
 * @returns {String}
 */
function decodeCodAteco(field) {
	return field.replaceAll('.','');
}


function checkEmailMultiField(multiField, errmessage) {
	var i = 0;
	while (values.get(multiField + '[' + i + ']') != null ) {
		if (!manager.checkEmail(multiField + '[' + i + ']')) {
			errors.put(multiField, errmessage);
		}
		i++;
	}
}

function checkEmailField(field, errmessage) {
	if (values.get(field) != null) {
		if (!manager.checkEmail(field)) {
			errors.put(field, errmessage);
		}
	}
}

function checkCfMultiField(multiField, errmessage) {
	var i = 0;
	while (values.get(multiField + '[' + i + ']') != null ) {
		if (!manager.checkCf(multiField + '[' + i + ']')) {
			errors.put(multiField, errmessage);
		}
		i++;
	}
}

function checkCfField(field, errmessage) {
	if (values.get(field) != null) {
		if (!manager.checkCf(field)) {
			errors.put(field, errmessage);
		}
	}
}


/**
 * Valorizza la lista delle options di un SELECT item per le nature giuridiche.
 *
 * @param itemName nome che identifica l'item.
 * @param codice che identifica il padre
 */
function setSelectNatureGiuridicheOptions(itemName, parentCode) {
	var sql = "select NAT_CD, NAT_DN from AG_PROF_NATURE_GIURIDICHE where NAT_PARENT_CD = '"+parentCode+"' order by NAT_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un SELECT item per le nature giuridiche.
 *
 * @param itemName nome che identifica l'item.
 * @param codice che identifica il padre
 */
function setSelectAllNatureGiuridicheOptions(itemName) {
	var sql = "select NAT_CD, NAT_DN from AG_PROF_NATURE_GIURIDICHE order by NAT_CD";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un SELECT item per le nature giuridiche selezionata per famiglia.
 *
 * @param itemName nome che identifica l'item.
 * @param codice che identifica la famiglia (1=natura privata, 2=natura pubblica)
 */
function setSelectNatureGiuridicheByFamilyOptions(itemName, familyCode) {
	var sql = "select NAT_CD, NAT_DN from AG_PROF_NATURE_GIURIDICHE where NAT_PARENT_CD like '"+familyCode+".%' order by NAT_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

function checkOptionsExist(itemName){

	var selectedItemValue = values.get(itemName);
	if(selectedItemValue==null)return false;

	var options = items.get(itemName).getOptions();
	var found = false;
	if(options!=null){
		var index = 0;
		while(index<options.size() && options.get(index)!=null) {
			var code = options.get(index).getValue();
			index++;
			if(code.trim()==selectedItemValue.trim()){
				found = true;
				break;
			}
		}
	}

	return found;
}


function existsCodAteco(itemName){
	//logger.info("values.get(itemName): "+values.get(itemName));
	//var codAtecoFormatted = formatCodAteco(values.get(itemName));
	var codAtecoFormatted = values.get(itemName);
	logger.info("codAtecoFormatted "+codAtecoFormatted);
	var sql = "select ANA_DN from (select NULL as ANA_DN from DUAL where not exists(select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = 'ATECO2007' and ANA_CD = '"+codAtecoFormatted+"') union select ANA_DN from AG_ANAGRAFICHE where exists(select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = 'ATECO2007' and ANA_CD = '"+codAtecoFormatted+"') and ANA_TIPO = 'ATECO2007' and ANA_CD = '"+codAtecoFormatted+"' )";

	var atecoDescription = dizionarioService.getSingle(null, sql);
	//logger.info("atecoDescription="+atecoDescription);

	if(atecoDescription==null){
		//logger.info("ateco is null");
		return false;
	}

	return true;
}

//function removeFile(itemName){
//	var itemValue = values.get(itemName);
//	if(itemValue != null){
//		DataFile attachment = attachments.remove(itemValue);
//		var property = attachment.getPath();
//		values.remove(property);
//	}
//}

function loadDescriptionCodAteco(itemName){
	//logger.info("loadDescriptionCodAteco itemName: "+values.get(itemName));
	var codAteco = values.get(itemName);
	var atecoDescription = null;
	if(codAteco!=null){
		//var sql = "select ANA_DN from (select NULL as ANA_DN from DUAL where not exists(select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = 'ATECO2007' and ANA_CD = '"+codAteco+"') union select ANA_DN from AG_ANAGRAFICHE where exists(select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = 'ATECO2007' and ANA_CD = '"+codAteco+"') and ANA_TIPO = 'ATECO2007' and ANA_CD = '"+codAteco+"' )";
		//atecoDescription = dizionarioService.getSingle(null, sql);
		var options = items.get(itemName).getOptions();
		if(options!=null){
			var index = 0;
			while(index<options.size() && options.get(index)!=null) {
				var code = options.get(index).getValue();
				var label = options.get(index).getLabel();
				index++;
				if(code.trim()==codAteco.trim()){
					atecoDescription = label;
				}
			}
		}
		//logger.info("loadDescriptionCodAteco="+atecoDescription);
	}
	return atecoDescription;
}

function removeItemValue(itemName){
	var onLoad = items.get(itemName).getOnload();
	//logger.info("onLoad: " + onLoad);
	if(onLoad!=null){
		var newOnLoad = onLoad.replaceAll("values\\.put\\(('\\w+',*\\s*)+\\);", "");
		//logger.info("newOnLoad: " + newOnLoad);
		items.get(itemName).setOnload(newOnLoad);
	}
}

/**
 * Valorizza la lista delle options di un SELECT item.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 */
function setSelectOptions(itemName, anagrafica) {
	var sql = "select ANA_CD, ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' order by ANA_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

function setSelectOptionsWithDescription(itemName, anagrafica) {
	var sql = "select TRIM(ANA_DN) AS COD, ANA_DN AS DESCR from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' order by DESCR";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}


function setSelectOptionsCached(itemName, anagrafica) {
	var dizionario = dizionarioService.getMap(anagrafica);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

function setSelectOptionChecked(itemName, anagrafica) {
	var dizionario = dizionarioService.getMap(anagrafica);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
	if (!dizionario.containsKey(values.get(itemName))) {
		//logger.info("setSelectOptionsCached: setting readonly for: " + itemName);
		items.get(itemName).setReadonly(false);
	}
}


/**
 * Valorizza la lista delle options di un SELECT item.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 */
function setSelectWithoutDependedOptions(itemName, anagrafica) {
	var sql = "select ANA_CD, ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' and ANA_PARENT_CD is NULL order by ANA_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un SELECT item.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 * @param itemPathnameParent pathname dell'item padre con cui filtrare l'anagrafica
 */
function setSelectDependedOptions(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var sql = "select ANA_CD, ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' and ANA_PARENT_CD = '"+parent+"' order by ANA_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

function setSelectDependedOptionsFromParentDescription(itemName, anagrafica, parentItemName, anagraficaParent) {
	var parentDescription = values.get(parentItemName);
	var sql = "SELECT ANA_CD, ANA_DN FROM AG_ANAGRAFICHE WHERE ANA_TIPO = '"+anagrafica+"' AND ANA_PARENT_CD in (SELECT ANA_CD FROM AG_ANAGRAFICHE where ANA_TIPO  = '"+anagraficaParent+"' and ANA_DN like '%"+parentDescription+"%') ORDER BY ANA_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

function setSelectDependedOptionsCached(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var dizionario = dizionarioService.getMap(anagrafica, parent);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

function setSelectFilteredOptionsCached(itemName, anagrafica, filter) {
	var dizionario = dizionarioService.getMap(anagrafica, filter);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un SELECT item.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 * @param parent padre con cui filtrare l'anagrafica
 */
function setSelectOptionsByParent(itemName, anagrafica, parent, excludeCods) {
	var sql = "select ANA_CD, ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' and ANA_PARENT_CD = '"+parent+"' and ANA_CD not in ('"+excludeCods+"') order by ANA_DN";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

//FUNZIONI PER LA SELEZIONE DEL CUP

function setSelectNaturaCUP(itemName) {
	var sql = "select CUP_NATURA_ID as CODE, CUP_NATURA_CD_MISE || ' ' || CUP_NATURA_DN as LABEL from AG_TASS_CUP_NATURE order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}


/**
 * Seleziona le tipologie a seconda della natura e popola le options dell'item con il risultato
 * @param itemName
 * @param natura
 */
function setSelectTipologiaCUP(itemName, natura) {
	var sql = "select TIPOLOGIE.CUP_TIPOLOGIA_ID as CODE, TIPOLOGIE.CUP_TIPOLOGIA_CD_CIPE || ' ' || TIPOLOGIE.CUP_TIPOLOGIA_DN as LABEL from AG_TASS_CUP_TIPOLOGIE TIPOLOGIE, AG_TASS_CUP_NATURE_TIPOLOGIE NAT_TIP  where TIPOLOGIE.CUP_TIPOLOGIA_ID = NAT_TIP.CUP_TIPOLOGIA_ID and NAT_TIP.CUP_NATURA_ID = '" + natura + "' order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Seleziona i settori e popola le options dell'item con il risultato
 * @param itemName
 */
function setSelectSettoreCUP(itemName) {
	var sql = "select CUP_SETT_ID as CODE, CUP_SETT_CD_MISE || ' ' || CUP_SETT_DN as LABEL from AG_TASS_CUP_SETTORI order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Seleziona i sottosettori a seconda del settore e popola le options dell'item con il risultato
 * @param itemName
 * @param settore
 */
function setSelectSottosettoreCUP(itemName, settore) {
	var sql = "select CUP_SOTTOSETT_ID as CODE, CUP_SOTTOSETT_CD_MISE || ' ' || CUP_SOTTOSETT_DN as LABEL from AG_TASS_CUP_SOTTOSETTORI where CUP_SETT_ID = '" + settore + "' order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Seleziona le categorie a seconda del sottosettore e popola le options dell'item con il risultato
 * @param itemName
 * @param sottosettore
 */
function setSelectCategoriaCUP(itemName, sottosettore) {
	var sql = "select CUP_CAT_ID as CODE, CUP_CAT_CD_MISE || ' ' || CUP_CAT_DN as LABEL from AG_TASS_CUP_CATEGORIE where CUP_SOTTOSETT_ID = '"+ sottosettore +"' order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * setSelectStrumentoDiProgrammazione
 * @param itemName
 */
function setSelectStrumentoDiProgrammazione(itemName) {
	var sql = "select CUP_PROGR_ID as CODE, CUP_PROGR_CD_MISE || ' ' || CUP_PROGR_DN as LABEL from AG_TASS_CUP_PROGRAMMAZIONI order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * setSelectFinalita
 * @param itemName
 */
function setSelectFinalita(itemName) {
	var sql = "select CUP_FINALITA_ID as CODE, CUP_FINALITA_CD_MISE || ' ' || CUP_FINALITA_DN as LABEL from AG_TASS_CUP_FINALITA order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * setSelectCoperturaFinanziaria
 * @param itemName
 */
function setSelectCoperturaFinanziaria(itemName) {
	var sql = "select CUP_COP_FINANZ_ID as CODE, CUP_COP_CD_MISE || ' ' || CUP_COP_DN as LABEL from AG_TASS_CUP_COP_FINANZ order by LABEL";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	//items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}


/**
 * Svuota la lista delle options e nasconde l'item.
 *
 * @param itemName
 * @param anagrafica
 * @param itemPathnameParent
 */
function clearOptionsAndHidden(itemName) {
	items.get(itemName).clearOptions();
	items.get(itemName).setHidden(true);
}

/**
 * nasconde l'item e lo rende opzionale
 * @param itemName
 */
function setHiddenAndOptional(itemName) {
	items.get(itemName).setHidden(true);
	items.get(itemName).setRequired(false);
}

/**
 * nasconde l'item e lo rende opzionale se è null
 * @param itemPathName
 * @param itemName
 */
function setHiddenIfNull(itemPathName, itemName) {
	if(values.get(itemPathName) == null || values.get(itemPathName) == '') {
		setHiddenAndOptional(itemName);
	}
}

/**
 * Valorizza la lista delle options di un SELECT item ed eventualmente non lo visualizza se l'item padre non è valorizzato.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 * @param itemPathnameParent pathname dell'item padre con cui filtrare l'anagrafica
 */
function setSelectDependedOptionsAndShow(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var parentSelected  = (parent != null && parent.trim() != '');
	if (parentSelected == true) {
		setSelectDependedOptions(itemName, anagrafica, itemPathnameParent);
		items.get(itemName).setHidden(false);
	} else {
		items.get(itemName).setHidden(true);
	}
}

function setSelectDependedOptionsAndShowCached(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var parentSelected  = (parent != null && parent.trim() != '');
	if (parentSelected == true) {
		setSelectDependedOptionsCached(itemName, anagrafica, itemPathnameParent);
		items.get(itemName).setHidden(false);
	} else {
		items.get(itemName).setHidden(true);
	}
}

/**
 * Valorizza la lista delle options di un SELECT item in I18N.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 */
function setI18NSelectOptions(itemName, anagrafica) {
	var sql = "select ANA_CD, ANAI18N_DN from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = nvl((select distinct ANAI18N_CD as locale from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = '"+lang+"'), 'it')";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un SELECT item in I18N.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 * @param itemPathnameParent pathname dell'item padre con cui filtrare l'anagrafica
 */
function setI18NSelectDependedOptions(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var sql = "select ANA_CD, ANAI18N_DN from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_PARENT_CD = '"+parent+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = nvl((select distinct ANAI18N_CD as locale from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = '"+lang+"'), 'it')";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOption('','- seleziona -');
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un SELECT item in I18N ed eventualmente non lo visualizza se l'item padre non è valorizzato.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 * @param itemPathnameParent pathname dell'item padre con cui filtrare l'anagrafica
 */
function setI18NSelectDependedOptionsAndShow(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var parentSelected  = (parent != null && parent.trim() != '');
	if (parentSelected == true) {
		setI18NSelectDependedOptions(itemName, anagrafica, itemPathnameParent);
		items.get(itemName).setHidden(false);
	} else {
		items.get(itemName).setHidden(true);
	}
}

/**
 * Valorizza la lista delle options di un CHECK/RADIO item in I18N.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 */
function setI18NRadioCheckOptions(itemName, anagrafica) {
	var sql = "select ANA_CD, ANAI18N_DN from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = nvl((select distinct ANAI18N_CD as locale from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = '"+lang+"'), 'it')";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOptions(dizionario);
}

/**
 * Valorizza la lista delle options di un CHECK/RADIO item in I18N.
 *
 * @param itemName nome che identifica l'item.
 * @param anagrafica nome che identifica l'anagrafica/dizionario da cui recuperare la lista delle options
 * @param itemPathnameParent pathname dell'item padre con cui filtrare l'anagrafica
 */
function setI18NRadioCheckDependedOptions(itemName, anagrafica, itemPathnameParent) {
	var parent = values.get(itemPathnameParent);
	var sql = "select ANA_CD, ANAI18N_DN from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_PARENT_CD = '"+parent+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = nvl((select distinct ANAI18N_CD as locale from AG_ANAGRAFICHE, AG_ANAGRAFICHE_I18N where ANA_TIPO = '"+anagrafica+"' and ANA_CD = ANAI18N_PARENT_CD and ANAI18N_CD = '"+lang+"'), 'it')";
	var dizionario = dizionarioService.get(null, sql);
	items.get(itemName).clearOptions();
	items.get(itemName).addOptions(dizionario);
}

function caricaPagamentiIstanza(nomeModulo) {
	var pagamenti = pagamentoService.estraiPagamentiPratica(instance.getId());
	manager.caricaPagamenti(pagamenti, nomeModulo);
}

/**
 * Ricerca Profilo SgProf dell'utente
 *
 * @param utente
 * @returns
 */
function ricercaProfiloSgProf(utente) {
	return manager.ricercaProfiloSgProf(utente, externalService);
}

/**
 * Ricerca Profilo SgProf da CodFiscale e Natura Giuridica
 *
 * @param utente
 * @param codiceFiscale
 * @param naturaGiuridica
 * @returns
 */
function ricercaProfiloSgProfByCodFiscaleAndNaturaGiuridica(utente, codiceFiscale, naturaGiuridica) {
	return manager.ricercaProfiloSgProfByCodFiscaleAndNaturaGiuridica(codiceFiscale, naturaGiuridica, utente, externalService);
}

/**
 * Ricerca Profilo Valido SgProf
 *
 * @param utente
 * @param codiceFiscale
 * @param naturaGiuridica
 * @returns
 */
function ricercaProfiloValidoSgProfByCodFiscale(utente, codiceFiscale) {
	return manager.ricercaProfiloValidoSgProfByCodFiscale(codiceFiscale, utente,externalService);
}

/**
 * Ricerca dettaglio APE
 *
 * @param utente
 * @param codiceAPE
 * @returns mappa contenente dati attestato
 */
function ricercaAPE(utente, codiceAPE) {
	return manager.call_CENED_WS(codiceAPE, cenedService);
}

/**
 * Recupera la descrizione di una option.
 *
 * @param itemName
 * @param itemPathname
 * @returns
 */
function getDescriptionOfOption(itemName, itemPathname) {
	var value = values.get(itemPathname);
	var index = 0;
	while(items.get(itemName).getOptions().get(index)!=null && index<items.get(itemName).getOptions().size()) {
		var code = items.get(itemName).getOptions().get(index).getValue();
		if (code == value) {
			return items.get(itemName).getOptions().get(index).getLabel();
		}
		index++;
	}
	return null;
}

/**
 * Recupera il path di contesto dell'applicazione web
 * @returns
 */
function getContextPath() {
	return contextPath;
}

function __isPraticaPresentabile(templateName, cfFieldName, statesStr) {
	/* modelName = 'FrimFesr2014Model' */
	var retfunc = function() {

		//var codiceFiscaleAzienda = values.get('Azienda_codiceFiscale');
		var codiceFiscaleAzienda = values.get(cfFieldName);

		/*var sql = 'select count(SM_ID) PRATICA_BLOCCANTE '+
		'from AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO '+
		'where '+
		'DETTAGLIO.DAT_MDL = \'FrimFesr2014Model1\' and '+
		'DETTAGLIO.DAT_PTH like \'Azienda_codiceFiscale\' and '+
		'DETTAGLIO.DAT_VL = \''+codiceFiscaleAzienda+'\' and '+
		'DETTAGLIO.FK_ID = PRATICA.SM_ID and '+
		'not(PRATICA.CURRENT_STATE in (\'f97593d7777148f49da7150f14fcb0b5\', \'0ecd539d75e94adf9bd36725e650c7e2\', \'fb6ba8e8d322458b992e9bbcdbe2d4d1\', \'3ccfdb29a07844c79a55dc4a1f2f8a6b\', \'88cb7a56d11142be9fd525ded8f733f6\'))';*/

		/* statesStr = '' */

		var sql =
//		'select count(SM_ID) PRATICA_BLOCCANTE '+
//		'from AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO '+
//		'where '+
//		'DETTAGLIO.DAT_MDL = \''+modelName+'\' and '+
//		'DETTAGLIO.DAT_PTH like \''+cfFieldName+'\' and '+
//		'DETTAGLIO.DAT_VL = \''+codiceFiscaleAzienda+'\' and '+
//		'DETTAGLIO.FK_ID = PRATICA.SM_ID and '+
//		'not(PRATICA.CURRENT_STATE in ' + statesStr + ')';

		'select count(SM_ID) PRATICA_BLOCCANTE '+
		  'from AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO, ag_sm_template_maps template '+
		  'where '+
		  'DETTAGLIO.DAT_PTH like \''+cfFieldName+'\' and '+
		  'DETTAGLIO.DAT_VL = \''+codiceFiscaleAzienda+'\' and '+
		  'DETTAGLIO.FK_ID = PRATICA.SM_ID and '+
		  'pratica.sm_tmpl_dn = template.sm_tmpl_dn '+
		  'and template.sm_tmpl_dn = \''+templateName+'\' and '+
		  'not(PRATICA.CURRENT_STATE in ' + statesStr + ') ';

		var numero = dizionarioService.getSingle(null, sql);

		return (numero == 0);

	}

	return retfunc;

}

/**
 * Controlla se esiste una userName e se e associata ad un ente
 *
 * @param uName
 * @param codEnte
 */
function isSelezioneEsperto(uName, codEnte) {
	var userName = values.get(uName);
	var codiceUtente = values.get(codEnte);
	var idGruppo = gruppoService.estraiGruppoPersonaleBO(userName, codiceUtente);
	return idGruppo != null;

}

/**
 * Carica la lista delle Options considerando i dati del genitore
 *
 * @param itemName
 * @param anagrafica
 * @param itemParentName
 */
function setDependedOptionsAndShowFromParent(itemName, anagrafica, itemParentName) {
	var parents = "";
	var infos = itemParentName.split('.');
	var index = 0;
	while (values.get(infos[0]+'['+index+'].'+infos[1])!=null) {
		var parentCode = values.get(infos[0]+'['+index+'].'+infos[1]);
		parents = parents + ", '"+parentCode+"'";
		index++;
	}
	parents = parents.substring(2);
	if(parents != "") {
		var sql = "select ANA_CD, ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' and ANA_PARENT_CD in ("+parents+") order by ANA_DN";
		var dizionario = dizionarioService.get(null, sql);
		items.get(itemName).clearOptions();
		items.get(itemName).addOptions(dizionario);
	}
}

/**
 * Verifica se ci si trova nel modulo
 *
 * @param moduleName
 * @returns {Boolean}
 */
function iamIn(moduleName) {
	return 0==path.indexOf(moduleName+'['); }

/**
 * Recupera il dato associato ad un attributo del sottomodulo corrente.
 *
 * @param objectName
 * @param attributeName
 * @returns
 */
function getAttribute(objectName, attributeName) {
	var data = null;
	if (iamIn(objectName)) {
		data = values.get(path+attributeName);
	}
	return data;
}

/**
 * Associa ad un attributo del sottomodulo corrente un valore.
 *
 * @param objectName
 * @param attributeName
 * @param data
 */
function putAttribute(objectName, attributeName, data) {
	if (iamIn(objectName)) {
		data = values.put(path+attributeName, data);
	}
}

/**
 * Verifica se ci si trova nella root
 *
 * @returns {Boolean}
 */
function iamInRoot() {
	return path=='';
}

function isProvinciaRegione(codiceProvincia, nomeRegione) {
	return dizionarioService.getSingle(null, "SELECT ANA_NOTE FROM AG_ANAGRAFICHE WHERE ANA_TIPO = 'provincia' AND ANA_CD = '"+codiceProvincia+"'") == nomeRegione;
}

/**
 * Verifica se la procincia appartiene ad una specifica regione
 * @param codiceProvincia
 * @param codiceRegione
 * @returns {Boolean}
 */
function isProvinciaInRegioneIstat(codiceIstatProvincia, codiceIstatRegione) {
	return dizionarioService.getSingle(null, "select ANA_PARENT_CD from AG_ANAGRAFICHE where ANA_TIPO = 'provincia_istat' and ANA_CD = '"+codiceIstatProvincia+"'") == codiceIstatRegione;
}

/**
 * Verifica se la procincia appartiene ad una specifica regione
 * @param codiceProvincia
 * @param codiceRegione
 * @returns {Boolean}
 */
function isComuneInProvinciaIstat(codiceIstatComune, codiceIstatProvincia) {
	return dizionarioService.getSingle(null, "select ANA_PARENT_CD from AG_ANAGRAFICHE where ANA_TIPO = 'comune_istat' and ANA_CD = '"+codiceIstatComune+"'") == codiceIstatProvincia;
}

/**
 * Calcola i mesi esistenti tra 2 dati (arrotondato per eccesso).
 *
 * @param itemDateMinPathname
 * @param itemDateMaxPathname
 */
function calcolaMesi(itemDateMinPathname, itemDateMaxPathname) {
	return manager.calcolaMesi(itemDateMinPathname, itemDateMaxPathname);
}

/**
 * Calcola i giorni esistenti tra 2 date.
 *
 * @param itemDateMinPathname
 * @param itemDateMaxPathname
 */
function calcolaGiorni(itemDateMinPathname, itemDateMaxPathname) {
	return manager.calcolaGiorni(itemDateMinPathname, itemDateMaxPathname);
}

/**
 * Calcola i mesi esistenti tra 2 dati (arrotondato per eccesso).
 *
 * @param itemDateMinPathname
 * @param itemDateMaxPathname
 */
function calcolaMesiPerFileXsl(itemDateMinPathname, itemDateMaxPathname) {
	return manager.calcolaMesiPerFileXsl(itemDateMinPathname, itemDateMaxPathname);
}

/**
* Verifica che una list contenga object
*/
function objectInList(object, list) {
	var i;
	for(i = 0; i < list.length; i++) {
        if(list[i] == object) {
            return true;
        }
    }
	return false;
}

/**
 * Restituisce la somma dei valori contenuti nell'attributo di uno specifico po.
 *
 * @param poName
 * @param attributeName
 * @returns
 */
function sum(poName, attributeName) {
	logger.info('in sum');
	var sum = 0.0;
	var i = 0;
	while(values.get(poName+'['+i+'].'+attributeName) != null) {
		logger.info('in while: '+values.get(poName+'['+i+'].'+attributeName));
		//var number = parseFloat(values.get(poName+'['+i+'].'+attributeName));
		var number = values.get(poName+'['+i+'].'+attributeName);
		sum = sumVarArgs(''+sum, number.toString());
		//logger.info('number= '+number);
		//sum = sum + number;
		i++;
	}
	//FIXED: fissiamo a due cifre decimali
	var sumNew = new Number((sum)+'').toFixed(2);
	return parseFloat(sumNew);
}

/**
 * Restituisce la somma dei valori passati in input (come varArgs di Stringhe)
 *
 * @param poName
 * @param attributeName
 * @returns
 */
function sumVarArgs(){
	logger.info('sumVarArgs');
	var sum = 0.0;
	if(arguments!=null){
		for (var i = 0; i < arguments.length; i++){
			logger.info('arguments= '+arguments[i]);
			var number = parseFloat(arguments[i]);
			sum = sum + number;
			logger.info('sum='+sum);
		}
	}
	//FIXED: fissiamo a due cifre decimali
	var sumNew = new Number((sum)+'').toFixed(2);
	return parseFloat(sumNew);
}



/*function sum(poName, attributeName) {
	logger.info('in sum');
	var sum = 0.0;
	var i = 0;
	while(values.get(poName+'['+i+'].'+attributeName) != null) {
		logger.info('in while: '+values.get(poName+'['+i+'].'+attributeName));
		var number = parseFloat(values.get(poName+'['+i+'].'+attributeName));
		sum = manager.sum(sum, number);
		logger.info('number= '+number);
		i++;
	}
	return sum;
}*/


/**
 * Elimina po.
 * @param poName
 */
function clearModule(poName) {
	var  it = values.keySet().iterator();
	while (it.hasNext()) {
		var property = it.next();
		if (property.startsWith(poName+'[')){
			it.remove();
		}
	}
}

/**
 *
 * Controlla se esiste almeno un elemento nel sottomodulo
 * @param poName
 */
function existsModule(poName) {
	var found = false;
	var  it = values.keySet().iterator();
	while (it.hasNext()) {
		var property = it.next();
		if (property.startsWith(poName+'[')){
			found = true;
			break;
		}
	}
	return found;
}

/**
 * Restituisce il codice natura giuridica del profilo corrente
 * @param user
 * @returns codice natura giuridica SgProf
 */
function getCodiceNaturaGiuridicaProfiloCorrente(user) {
	return user.getProfiloQualificaCorrente().getCodiceNaturaGiuridicaSgProf();
}

/**
 * Restituisce la label associata ad una specifica option.
 * @param itemName
 * @param code
 * @returns {String}
 */
function getOptionLabel(itemName, code) {
  var label = '';
  var options = items.get(itemName).getOptions();
  if(options != null){
	  for(var index=0; index<options.size(); index++) {
	    if (options.get(index).getValue()==code) {
	      label = options.get(index).getLabel();
	      break;
	    }
	  }
  }

  return label;
}

/**
 * Recupera la denominazione di una specifica anagrafica.
 * @param anagrafica
 * @param codice
 * @returns {String}
 */
function getAnaDenominazione(anagrafica, codice) {
	var sql = "select ANA_DN from (select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO = '"+anagrafica+"' and ANA_CD = '"+codice+"' and exists(select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO ='"+anagrafica+"' and ANA_CD = '"+codice+"') union select 'n.d.'  as ANA_DN from DUAL where NOT exists(select ANA_DN from AG_ANAGRAFICHE where ANA_TIPO ='"+anagrafica+"' and ANA_CD = '"+codice+"'))";
	return dizionarioService.getSingle(null, sql);
}

/**
 * Recupera l'identificativo del gruppo gestore asl dell'istanza corrente.
 * Analogo a facadeLibrary.js: getGestoreAsl()
 * @returns
 */
function getGestoreAsl() {
	return dizionarioService.getCodice('asl-gestione', dizionarioService.getParent('asl-centri', instance.getOwner()));
}

/**
 * Recupera il gruppo gestore asl dell'istanza corrente
 * @returns
 */
function getGruppoGestoreAsl() {
	return gruppoService.estraiGruppo(getGestoreAsl());
}

/**
 * Recupera il budget.
 * Analogo a facadeLibrary.js: getBudget(alias, trimestre, anno)
 * @param alias - nasko, cresco, sostengo
 * @param trimestre - 1, 2, 3, 4
 * @param anno
 * @returns
 */
function getBudget(alias, trimestre, anno) {
	profilo = dizionarioService.getParent('asl-centri', instance.getOwner());
	codice = alias + "_" + trimestre + "_" + anno + "_" + profilo;
	return dizionarioService.getDenominazioneRoot(codice, 'budget_NCS');
}

/**
 * lista di tutte le richieste ricarica di una pratica
 * @param dossierId
 */
function recuperaRichiesteRicarica(dossierId) {
	return richiestaRicaricaService.estraiRichiesteRicaricheByDossierId(dossierId);
}

/**
 * GESTIONE SEDI
 */
var ACC_FORM_B = "Formazione sez. B"
var ACC_LAVORO = "Accreditato lavoro"
var ACC_FORM_A = "Formazione sez. A"

/**
 * Ritorna le informazioni della sede associata alla pratica.
 * OUTPUT:
 * 		mappa di informazioni estraibili con mappa.get("nome campo"):
 *			cap
 * 			cf
 * 			denominazionesede
 * 			email
 * 			fax
 * 			idoperatore
 * 			idsede
 * 			indirizzo
 * 			istatcomune
 * 			reanum
 * 			telefono
 * 			tipologia
 * 			www
 */
function recuperaSedePratica() {
	idSede = gruppoService.estraiGruppo(instance.getOwner()).getSede();
	//codiceFiscale = __get_current_profile_cf();
	codiceFiscale = __get_owner_profile_cf();
	return sedeService.estraiInformazioniSede(codiceFiscale, idSede.getId());
}

/*
 * 1 Accreditamento Operatore
 */

/**
 * Verifica se un operatore è accreditato.
 * INPUT
 * 		codiceFiscale - stringa - codice fiscale operatore
 * 		accreditamenti - array di stringhe - nomi albi accreditamento
 * 		and - booleano (true o false) - verifica in and per l'inclusione negli albi accreditamento specificati
 * OUTPUT
 * 		booleano (true o false)
 */
function __verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, and) {
	return sedeService.verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, and);
}

/**
 * Verifica se un operatore è accreditato (in qualsiasi albo tra quelli prestabiliti - Formazione sez. A, Formazione sez. B, Accreditato lavoro)
 * INPUT
 * 		codiceFiscale - stringa - codice fiscale operatore
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoOperatore(codiceFiscale) {
	accreditamenti = [ACC_FORM_A, ACC_FORM_B, ACC_LAVORO];
	return __verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, false);
}

/**
 * Verifica se un operatore è accreditato (in tutti gli albi tra quelli prestabiliti - Formazione sez. A, Formazione sez. B, Accreditato lavoro)
 * INPUT
 * 		codiceFiscale - stringa - codice fiscale operatore
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoOperatoreMultiplo(codiceFiscale) {
	accreditamenti = [ACC_FORM_A, ACC_FORM_B, ACC_LAVORO];
	return __verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, true);
}

/**
 * Verifica se un operatore è accreditato nell'albo Formazione sez. A
 * INPUT
 * 		codiceFiscale - stringa - codice fiscale operatore
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoOperatoreFormazioneSezioneA(codiceFiscale) {
	accreditamenti = [ACC_FORM_A];
	return __verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, false);
}

/**
 * Verifica se un operatore è accreditato nell'albo Formazione sez. B
 * INPUT
 * 		codiceFiscale - stringa - codice fiscale operatore
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoOperatoreFormazioneSezioneB(codiceFiscale) {
	accreditamenti = [ACC_FORM_B];
	return __verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, false);
}

/**
 * Verifica se un operatore è accreditato nell'albo Accreditato lavoro
 * INPUT
 * 		codiceFiscale - stringa - codice fiscale operatore
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoOperatoreLavoro(codiceFiscale) {
	accreditamenti = [ACC_LAVORO];
	return __verificaAccreditamentoOperatore(codiceFiscale, accreditamenti, false);
}

/*
 * 2 Accreditamento Sede
 */

/**
 * Ritorna il codice fiscale dell'utente che sta lavorando la pratica
 * OUTPUT
 * 		stringa
 */
function __get_current_profile_cf() {
	//return user.getProfiloQualificaCorrente().getCodiceFiscale();
	return profiloService.estraiProfiloFrontOffice(user.getUsername(), instance.getProfileLocker()).getName().replace('#', '');
}

/**
 * Ritorna il codice fiscale del gruppo owner della pratica
 * OUTPUT
 * 		stringa
 */
function __get_owner_profile_cf() {
	return gruppoService.recuperaGruppiProfili(instance.getOwner()).get(0).getProfile().replace('#', '');
}

/**
 * Verifica se una sede è accreditata.
 * INPUT
 * 		codiceFiscale - codice fiscale dell'ente
 * 		idSede - stringa - id della sede
 * 		accreditamenti - array di stringhe - nomi albi accreditamento
 * 		and - booleano (true o false) - verifica in and per l'inclusione negli albi accreditamento specificati
 * OUTPUT
 * 		booleano (true o false)
 */
function __verificaAccreditamentoSedeByCF(codiceFiscale, idSede, accreditamenti, and) {
	return sedeService.verificaAccreditamentoSede(codiceFiscale, idSede, accreditamenti, and);
}

/**
 * Verifica se una sede è accreditata. Prende come codice fiscale quello del profilo dell'utente che sta lavorando la pratica.
 * INPUT
 * 		idSede - stringa - id della sede
 * 		accreditamenti - array di stringhe - nomi albi accreditamento
 * 		and - booleano (true o false) - verifica in and per l'inclusione negli albi accreditamento specificati
 * OUTPUT
 * 		booleano (true o false)
 */
function __verificaAccreditamentoSede(idSede, accreditamenti, and) {
	return __verificaAccreditamentoSedeByCF(__get_current_profile_cf(), idSede, accreditamenti, and);
}

/**
 * Verifica se una sede è accreditata (in qualsiasi albo tra quelli prestabiliti - Formazione sez. A, Formazione sez. B, Accreditato lavoro)
 * INPUT
 * 		idSede - stringa - id della sede
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoSede(idSede) {
	accreditamenti = [ACC_FORM_A, ACC_FORM_B, ACC_LAVORO];
	return __verificaAccreditamentoSede(idSede, accreditamenti, false);
}

/**
 * Verifica se una sede è accreditata (in tutti gli albi tra quelli prestabiliti - Formazione sez. A, Formazione sez. B, Accreditato lavoro)
 * INPUT
 * 		idSede - stringa - id della sede
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoSedeMultiplo(idSede) {
	accreditamenti = [ACC_FORM_A, ACC_FORM_B, ACC_LAVORO];
	return __verificaAccreditamentoSede(idSede, accreditamenti, true);
}

/**
 * Verifica se una sede è accreditata nell'albo Formazione sez. A
 * INPUT
 * 		idSede - stringa - id della sede
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoSedeFormazioneSezioneA(idSede) {
	accreditamenti = [ACC_FORM_A];
	return __verificaAccreditamentoSede(idSede, accreditamenti, false);
}

/**
 * Verifica se una sede è accreditata nell'albo Formazione sez. B
 * INPUT
 * 		idSede - stringa - id della sede
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoSedeFormazioneSezioneB(idSede) {
	accreditamenti = [ACC_FORM_B];
	return __verificaAccreditamentoSede(idSede, accreditamenti, false);
}

/**
 * Verifica se una sede è accreditata nell'albo Accreditato lavoro
 * INPUT
 * 		idSede - stringa - id della sede
 * OUTPUT
 * 		booleano (true o false)
 */
function verificaAccreditamentoSedeLavoro(idSede) {
	accreditamenti = [ACC_LAVORO];
	return __verificaAccreditamentoSede(idSede, accreditamenti, false);
}

/*
 * 3 Elenco doti già assegnate
 */

function estraiBeneficiario(codiceFiscale, idBando) {
	return sedeService.estraiBeneficiario(codiceFiscale, idBando);
}

function estraiDotiBeneficiario(codiceFiscale, idBando) {
	var doti = [];
	var beneficiario = estraiBeneficiario(codiceFiscale, idBando);
	if (beneficiario != null) {
		var bandi = beneficiario.get('bandi');
		if (bandi != null) {
			var i = 0;
			for (i = 0; i < bandi.length; i++) {
				var progetti = bandi[i].get('progetti');
				if (progetti != null) {
					var j = 0;
					for (j = 0; j < progetti.length; j++) {
						doti.push(progetti[j]);
					}
				}
			}
		}
	}

	return doti;
}

/*
 * 4 Iscrizioni
 */

/**
 * Recupera le informazioni sullo stato delle iscrizioni
 * INPUT
 * 		cfDestinatario - stringa - codice fiscale dello studente
 * 		[OPZIONALE] offerteFormative - array di stringhe - elenco di numeri di offerta formativa
 * OUTPUT
 * 		mappa di informazioni estraibili con mappa.get("nome campo")
 * 			datiAnagrafici - mappa
 * 				capdomicilio - stringa
 * 				capresidenza - stringa
 * 				codicefiscale - stringa
 * 				cognome - stringa
 * 				datanascita - stringa
 * 				genere - stringa
 * 				indirizzodomicilio - stringa
 * 				indirizzoresidenza - stringa
 * 				comunedomicilio - stringa
 * 				istatcomunenascita - stringa
 * 				istatcomuneresidenza - stringa
 * 				nome - stringa
 * 			iscrizioni - array di mappe
 * 				idcorso - stringa
 * 				iddote - stringa
 * 				idiscrizione - stringa
 * 				numeroofferta - stringa
 * 				statoiscrizione - stringa
 */
function estraiStatoIscrizioni(cfDestinatario, offerteFormative) {
	return sedeService.verificaIscrizioni(cfDestinatario, offerteFormative);
}

/**
 * Dalla mappa ricevuta da estraiStatoIscrizioni() restituisce l'elenco delle iscrizioni che hanno stato iscrizione 'I'
 * INPUT
 * 		statoIscrizioni - mappa - oggetto ricevuto dalla funzione estraiStatoIscrizioni()
 * OUTPUT
 * 		array di mappe
 * 			idcorso - stringa
 * 			iddote - stringa
 * 			idiscrizione - stringa
 * 			numeroofferta - stringa
 * 			statoiscrizione - stringa
 */
function filtraIscrizioniStatoIscritto(statoIscrizioni) {
	var i = 0;
	var elements = [];
	for (i = 0; i < statoIscrizioni.get('iscrizioni').length; i++) {
		if (statoIscrizioni.get('iscrizioni')[i].get('statoiscrizione') == 'I') {
			elements.push(statoIscrizioni.get('iscrizioni')[i]);
		}
	}
	return elements;
}

/*
 * 5 dettagli corsi
 */

/**
 * Recupera le informazioni sullo stato delle iscrizioni, compresi i dettagli sui corsi
 * INPUT
 *		idOperatore - stringa - id operatore
 * 		cfDestinatario - stringa - codice fiscale dello studente
 * 		offerteFormative - array di stringhe - elenco di numeri di offerta formativa
 * 		[OPZIONALE] idSede - stringa - id della sede
 * OUTPUT
 * 		mappa di informazioni estraibili con mappa.get("nome campo")
 * 			datiAnagrafici - mappa
 *		  		capdomicilio - stringa
 *		  		capresidenza - stringa
 *		  		codicefiscale - stringa
 *		  		cognome - stringa
 *		  		datanascita - stringa
 *		  		genere - stringa
 *		  		indirizzodomicilio - stringa
 *		  		indirizzoresidenza - stringa
 *		  		comunedomicilio - stringa
 *		  		istatcomunenascita - stringa
 *		  		istatcomuneresidenza - stringa
 *		  		nome - stringa
 *		  iscrizioni - array di mappe
 *		  		idcorso - stringa
 *		  		iddote - stringa
 *		  		idiscrizione - stringa
 *		  		numeroofferta - stringa
 *		  		statoiscrizione - stringa
 *		  "idcorso" (una voce per ogni idcorso) - mappa
 *		  		alternanza - stringa
 *		  		annocorso - stringa
 *		  		area - stringa
 *		  		autofinanziato - stringa
 *		  		datafine - stringa
 *		  		datainizio - stringa
 *		  		descrizionepercorsoabilitante - stringa
 *		  		descrizionepercorsoregolamentato - stringa
 *		  		durata - stringa
 *		  		idcorso - stringa
 *		  		idoperatore - stringa
 *		  		idpadre - stringa
 *		  		idpercorsoabilitante - stringa
 *		  		idpercorsoregolamentato - stringa
 *		  		idsede - stringa
 *		  		idstato - stringa
 *		  		ndotimax - stringa
 *		  		numoffertaformativa - stringa
 *		  		percorsoabilitante - stringa
 *		  		percorsoregolamentato - stringa
 *		  		stato - stringa
 *		  		tipologia - stringa
 *		  		titolo - stringa
 *		  		totaleannualita - stringa
 *		  		descrizionearea - stringa - equivalente a mappa.get("idcorso").get("descrizionearea")[0]
 *		  		descrizioneindirizzo - stringa - equivalente a mappa.get("idcorso").get("descrizioneindirizzo")[0]
 *		  		descrizionequalifica - stringa - equivalente a mappa.get("idcorso").get("descrizionequalifica")[0]
 *		  		idarea - stringa - equivalente a mappa.get("idcorso").get("idarea")[0]
 *		  		idindirizzo - stringa - equivalente a mappa.get("idcorso").get("idindirizzo")[0]
 *		  		idqualifica - stringa - equivalente a mappa.get("idcorso").get("idqualifica")[0]
 *		  		competenze - array di mappe
 *		  			descrizionearea - stringa
 *		  			descrizioneindirizzo - stringa
 *		  			descrizionequalifica - stringa
 *		  			idarea - stringa
 *		  			idindirizzo - stringa
 *		  			idqualifica - stringa
 */
function estraiDettagliCorsi(idOperatore, cfDestinatario, offerteFormative, idSede) {
	return sedeService.estraiDettagliCorsiIscrizioni(idOperatore, cfDestinatario, offerteFormative, idSede, 0);
}

/*
 * 6 getOffertaFormativa
 */

/**
 * Recupera le informazioni sull'offerta formativa per un operatore
 * INPUT
 * 		idoperatoreaccreditato - stringa - id operatore
 * 		offerteFormative - array di stringhe - elenco di numeri di offerta formativa
 * 		[OPZIONALE] idSede - id della sede
 * OUTPUT
 *		array di mappe di informazioni estraibili con array[indice].get("nome campo")
 *			alternanza - stringa
 *			annocorso - stringa
 *			area - stringa
 *			autofinanziato - stringa
 *			datafine - stringa
 *			datainizio - stringa
 *			descrizionepercorsoabilitante - stringa
 *			descrizionepercorsoregolamentato - stringa
 *			durata - stringa
 *			idcorso - stringa
 *			idoperatore - stringa
 *			idpadre - stringa
 *			idpercorsoabilitante - stringa
 *			idpercorsoregolamentato - stringa
 *			idsede - stringa
 *			idstato - stringa
 *			ndotimax - stringa
 *			numoffertaformativa - stringa
 *			percorsoabilitante - stringa
 *			percorsoregolamentato - stringa
 *			stato - stringa
 *			tipologia - stringa
 *			titolo - stringa
 *			totaleannualita - stringa
 *			descrizionearea - stringa - equivalente a mappa.get("idcorso").get("descrizionearea")[0]
 *			descrizioneindirizzo - stringa - equivalente a mappa.get("idcorso").get("descrizioneindirizzo")[0]
 *			descrizionequalifica - stringa - equivalente a mappa.get("idcorso").get("descrizionequalifica")[0]
 *			idarea - stringa - equivalente a mappa.get("idcorso").get("idarea")[0]
 *			idindirizzo - stringa - equivalente a mappa.get("idcorso").get("idindirizzo")[0]
 *			idqualifica - stringa - equivalente a mappa.get("idcorso").get("idqualifica")[0]
 *			competenze - array di mappe
 *				descrizionearea - stringa
 *				descrizioneindirizzo - stringa
 *				descrizionequalifica - stringa
 *				idarea - stringa
 *				idindirizzo - stringa
 *				idqualifica - stringa
 */
function estraiOffertaFormativa(idoperatoreaccreditato, offerteFormative, idSede) {
	return sedeService.estraiOffertaFormative(idoperatoreaccreditato, offerteFormative, idSede, 0);
}

/**
 * Recupera le informazioni sull'offerta formativa per un operatore
 * INPUT
 * 		codicefiscale - stringa - codice fiscale operatore
 * 		offerteFormative - array di stringhe - elenco di numeri di offerta formativa
 * 		[OPZIONALE] idSede - id della sede
 * OUTPUT
 *		array di mappe di informazioni estraibili con array[indice].get("nome campo")
 *			alternanza - stringa
 *			annocorso - stringa
 *			area - stringa
 *			autofinanziato - stringa
 *			datafine - stringa
 *			datainizio - stringa
 *			descrizionepercorsoabilitante - stringa
 *			descrizionepercorsoregolamentato - stringa
 *			durata - stringa
 *			idcorso - stringa
 *			idoperatore - stringa
 *			idpadre - stringa
 *			idpercorsoabilitante - stringa
 *			idpercorsoregolamentato - stringa
 *			idsede - stringa
 *			idstato - stringa
 *			ndotimax - stringa
 *			numoffertaformativa - stringa
 *			percorsoabilitante - stringa
 *			percorsoregolamentato - stringa
 *			stato - stringa
 *			tipologia - stringa
 *			titolo - stringa
 *			totaleannualita - stringa
 *			descrizionearea - stringa - equivalente a mappa.get("idcorso").get("descrizionearea")[0]
 *			descrizioneindirizzo - stringa - equivalente a mappa.get("idcorso").get("descrizioneindirizzo")[0]
 *			descrizionequalifica - stringa - equivalente a mappa.get("idcorso").get("descrizionequalifica")[0]
 *			idarea - stringa - equivalente a mappa.get("idcorso").get("idarea")[0]
 *			idindirizzo - stringa - equivalente a mappa.get("idcorso").get("idindirizzo")[0]
 *			idqualifica - stringa - equivalente a mappa.get("idcorso").get("idqualifica")[0]
 *			competenze - array di mappe
 *				descrizionearea - stringa
 *				descrizioneindirizzo - stringa
 *				descrizionequalifica - stringa
 *				idarea - stringa
 *				idindirizzo - stringa
 *				idqualifica - stringa
 */
function estraiOffertaFormativaCF(codicefiscale, offerteFormative, idSede) {
	var op = sedeService.estraiInformazioniOperatore(codicefiscale);
	return sedeService.estraiOffertaFormative(op.get("idoperatoreaccreditato"), offerteFormative, idSede, 0);
}

/*
 * 7 get Informazioni dettagliate relative ad una sede, compreso il IdOperatore
 */

/**
 * Recupera le informazioni di una sede.
 * INPUT
 * 		codicefiscale - stringa - codice fiscale operatore
 * 		idSede - string - id della sede
 * OUTPUT
 * 		mappa di informazioni estraibili con mappa.get("nome campo")
 * 			cap - stringa
 * 			cf - stringa
 * 			denominazionesede - stringa
 * 			email - stringa
 * 			fax - stringa
 * 			idoperatore - stringa
 * 			idsede - stringa
 * 			indirizzo - stringa
 * 			istatcomune - stringa
 * 			reanum - stringa
 * 			telefono - stringa
 * 			tipologia - stringa
 * 			www - stringa
 */
function estraiInformazioniSede(codicefiscale, idSede) {
	return sedeService.estraiInformazioniSede(codicefiscale, idSede);
}
