/**
 * facadeLibrary.js libreria di funzioni javascript da utilizzare nell'ambito delle state operations.
 * 
 * DISPONBILI:
 * instance
 * facade
 * values
 * attachments
 * 
 * le seguenti funzioni javascript, insieme alle istanze embedded di oggetti indicati sopra, rappresentano il set di risorse
 * utilizzabili nella definizione delle state operations della macchina a stati.
 * 
 * ATTENZIONE: queste funzione sono utilizzate per la definizione delle state operations. Cambiando le loro interfacce, vanno
 * cambiate anche le state operation stesse sul DB.
 * 
 *  ES. 
 *  
 *  - per la definizione di una operation che effettua il salvataggio del modello di un istanza di 
 *  macchina a stati è sufficiente definire il seguente statement:
 *  	save();
 *
 */

/**
 * Effettua il salvataggio su db dei dati di modello, presenti nella sessione utente, per l'istanza corrente.
 */
function save() {
	facade.save(instance, values, attachments);
}

function saveInstance(inst) {
	facade.save(inst, inst.getDataEntries(), inst.getDataFiles());
}

/**
 * Effettua l'invio di un documento su EDMA per la sua protocollazione.
 * 
 * @param fileIdDataProperty - path del campo di modello che conterrà l'id del documento restituito da EDMA a seguito della sua protocollazione
 * @param fileIdProperty - path del campo di modello contenente id del file da prelevare da staging area per il suo invio ad EDMA
 * @param nameProperty - path del campo di modello contenente il nome del firmatario 
 * @param surnameProperty - path del campo di modello contenente il cognome del firmatario 
 * @param fiscalCodeProperty - path del campo di modello contenente il codice fiscale del firmatario 
 * @param subjectProperty - path del campo di modello contenente il soggetto del documento da protocollare
 * @param registrationDateProperty - path del campo di modello che conterrà la data di registrazione restituita da EDMA 
 * @param registrationNumberProperty - path del campo di modello che conterrà il numero di registrazione(numero di protocollo) restituito da EDMA 
 */
function edmaSend(fileIdDataProperty, fileIdProperty, 
		nameProperty, surnameProperty, fiscalCodeProperty, subjectProperty, 
		registrationDateProperty, registrationNumberProperty) {
	
	facade.edmaSend(false, fileIdDataProperty, fileIdProperty, 
			nameProperty, surnameProperty, fiscalCodeProperty, subjectProperty, registrationDateProperty, registrationNumberProperty,
			instance, values, attachments);

}

/**
 * Effettua l'invio di un documento firmato su EDMA per la sua protocollazione.
 * 
 * @param fileIdDataProperty - path del campo di modello che conterrà l'id del documento restituito da EDMA a seguito della sua protocollazione
 * @param fileIdProperty - path del campo di modello contenente id del file da prelevare da staging area per il suo invio ad EDMA
 * @param nameProperty - path del campo di modello contenente il nome del firmatario 
 * @param surnameProperty - path del campo di modello contenente il cognome del firmatario 
 * @param fiscalCodeProperty - path del campo di modello contenente il codice fiscale del firmatario 
 * @param subjectProperty - path del campo di modello contenente il soggetto del documento da protocollare
 * @param registrationDateProperty - path del campo di modello che conterrà la data di registrazione restituita da EDMA 
 * @param registrationNumberProperty - path del campo di modello che conterrà il numero di registrazione(numero di protocollo) restituito da EDMA 
 */
function edmaSendSigned(fileIdDataProperty, fileIdProperty, 
		nameProperty, surnameProperty, fiscalCodeProperty, subjectProperty, 
		registrationDateProperty, registrationNumberProperty) {
	
	facade.edmaSend(true, fileIdDataProperty, fileIdProperty, 
			nameProperty, surnameProperty, fiscalCodeProperty, subjectProperty, registrationDateProperty, registrationNumberProperty,
			instance, values, attachments);

}

/**
 * Effettua la ricezione di un documento da EDMA, comprensivo del suo salvataggio nella staging area.
 * 
 * @param fileIdDataProperty - path del campo di modello che contiene l'id del documento da richiedere ad EDMA
 * @param fileIdProperty - path del campo di modello che conterrà l'id del file, ricevuto da EDMA, che verrà inserito nella staging area
 * @param registrationDateProperty - path del campo di modello che conterrà la data di registrazione restituita da EDMA 
 * @param registrationNumberProperty - path del campo di modello che conterrà il numero di registrazione(numero di protocollo) restituito da EDMA 
 */
function edmaReceive(fileIdDataProperty, fileIdProperty, 
		registrationDateProperty, registrationNumberProperty) {
	
	var edmaResponse = facade.edmaGetDocument(fileIdDataProperty, fileIdProperty, values);
	
	if (edmaResponse != null) {
		var stagingId = edmaResponse.getDocumentoFile().getOggetto();
		
		facade.edmaPutStaging(edmaResponse, fileIdDataProperty, fileIdProperty,
				registrationDateProperty, registrationNumberProperty,
				instance, values, attachments, stagingId);
	}
	
}

/**
 * Verifica che i dati provenienti da edma sono stati inseriti.
 * @param fileIdDataProperty
 * @param fileIdProperty
 * @param registrationDateProperty
 * @param registrationNumberProperty
 */
function edmaCheckDocumentSynchronized(fileIdDataProperty, fileIdProperty, 
		registrationDateProperty, registrationNumberProperty) {
	return facade.edmaCheckDocumentSynchronized(fileIdDataProperty, fileIdProperty, 
			registrationDateProperty, registrationNumberProperty, values);
}

function edmaCheckSignature(fileIdProperty, nameProperty, surnameProperty, fiscalCodeProperty, mailProperty, notificaMessage) {
	/*var virusResponse = facade.edmaCheckVirus(fileIdProperty, nameProperty, surnameProperty, fiscalCodeProperty, values, attachments);
	if (virusResponse != null) {
		var filename = attachments.get(values.get(fileIdProperty)).getFileName();
		facade.sendVirusVerificationEmail(instance, "La verifica del file " + filename + " ha avuto il seguente esito: " + virusResponse, values.get(mailProperty));
		return false;
	}*/
	if (!facade.edmaCheckSignature(fileIdProperty, nameProperty, surnameProperty, fiscalCodeProperty, values, attachments)) {
		facade.sendVerificationEmail(instance, notificaMessage, values.get(mailProperty));
		return false;
	}
	return true;
}

function edmaCheckSignatureOperation(fileIdProperty, nameProperty, surnameProperty, fiscalCodeProperty) {
	facade.edmaCheckSignature(fileIdProperty, nameProperty, surnameProperty, fiscalCodeProperty, values, attachments);
}

function sendEmail(subject, message, mailProperty) {
	facade.sendGenericEmail(instance, subject, message, values.get(mailProperty));
}

function sendEmailAddress(subject, message, mailAddress) {
	facade.sendGenericEmail(instance, subject, message, mailAddress);
}

function formatMessage(values, message, attributes) {
	var args = [];
	var index = 0;
	for (index=0; index<attributes.length; index++) {
		args.push(values.get(attributes[index]));
	}
	return java.lang.String.format(message, args);
}

function initEdmaDocumentManager() {
	var dm = {};
	dm.primaryDocument = null;
	dm.attachments = [];
	dm.messageAttributes = [];
	dm.cc = [];
	dm.ccMessage = null;
	dm.ccMessageAttributes = [];
	dm.addMessageAttributes = function(messageAttributesArray) {
		dm.messageAttributes = messageAttributesArray;
	}
	dm.addCC = function(ccMailPropertiesArray) {
		dm.cc = ccMailPropertiesArray;
	}
	dm.addCCMessage = function(ccMessage) {
		dm.ccMessage = ccMessage;
	}
	dm.addCCMessageAttributes = function(ccMessageAttributesArray) {
		dm.ccMessageAttributes = ccMessageAttributesArray;
	}
	dm.setPrimaryDocument = function(fileIdDataProperty, fileIdProperty, 
			subjectProperty, 
			registrationDateProperty, registrationNumberProperty) {
		var doc = {};
		doc.fileIdDataProperty = fileIdDataProperty;
		doc.fileIdProperty = fileIdProperty;
		doc.nameProperty = null;
		doc.surnameProperty = null;
		doc.fiscalCodeProperty = null;
		doc.subjectProperty = subjectProperty;
		doc.registrationDateProperty = registrationDateProperty;
		doc.registrationNumberProperty = registrationNumberProperty;
		this.primaryDocument = doc;
	}
	dm.addAttachmentDocument = function(fileIdDataProperty, fileIdProperty) {
		var doc = {};
		doc.fileIdDataProperty = fileIdDataProperty;
		doc.fileIdProperty = fileIdProperty;
		this.attachments.push(doc);
	}
	dm.isRegistrered = function() {
		return edmaCheckDocumentSynchronized(
				this.primaryDocument.fileIdDataProperty, 
				this.primaryDocument.fileIdProperty, 
				this.primaryDocument.registrationDateProperty, 
				this.primaryDocument.registrationNumberProperty);
	}
	dm.doRegistration = function(subject, message, mailProperty) {
		if (!this.isRegistrered()) {
			var i = 0;
			var fileIdDataPropertyAttachments = [];
			var fileIdPropertyAttachments = [];
			for (i = 0; i < this.attachments.length; i++) {
				doc = this.attachments[i];
				if (values.get(doc.fileIdProperty) != null) {
					fileIdDataPropertyAttachments.push(doc.fileIdDataProperty);
					fileIdPropertyAttachments.push(doc.fileIdProperty);
				}
			}
			facade.edmaSendPacket(false, 
				this.primaryDocument.fileIdDataProperty, 
				this.primaryDocument.fileIdProperty, 
				this.primaryDocument.nameProperty, 
				this.primaryDocument.surnameProperty, 
				this.primaryDocument.fiscalCodeProperty, 
				this.primaryDocument.subjectProperty, 
				this.primaryDocument.registrationDateProperty, 
				this.primaryDocument.registrationNumberProperty,
				fileIdDataPropertyAttachments, 
				fileIdPropertyAttachments,
				instance, values, attachments);
			if (this.isRegistrered()) {
				var formattedMessage = formatMessage(values, message, dm.messageAttributes);
				sendEmail(subject, formattedMessage, mailProperty);
				if (dm.cc != null && dm.cc.length > 0) {
					var ccMessage = formattedMessage;//message;
					if (dm.ccMessage != null && dm.ccMessage != "") {
						ccMessage = formatMessage(values, dm.ccMessage, dm.ccMessageAttributes);//dm.ccMessage;
					}
					sendEmailAddress(subject, ccMessage, dm.cc);
				}
			}
		}
	}
	return dm;
}

function notifyOrRepeat(stateId, notifyAction, operationRepeatName) {
	if(isState(stateId)) {
		//notify(username, notifyAction);
		notifyMessage(username, notifyAction);
	} else {
		message(username, operationRepeatName);
	}
}

function initDocumentManager() {
	dm = {};
	dm.documents = [];
	dm.selectedDocument = null;
	dm.isSingleDocumentComplete = function() {
		doc = dm.selectedDocument;
		return edmaCheckDocumentSynchronized(doc.fileIdDataProperty, doc.fileIdProperty, doc.registrationDateProperty, doc.registrationNumberProperty);
	};
	dm.isComplete = function() {
		var i = 0;
		for (i = 0; i < dm.documents.length; i++) {
			doc = dm.documents[i];
			if (!edmaCheckDocumentSynchronized(doc.fileIdDataProperty, doc.fileIdProperty, doc.registrationDateProperty, doc.registrationNumberProperty)) {
				return false;
			}
		}
		return true;
	};
	dm.sendAll = function() {
		var i = 0;
		for (i = 0; i < dm.documents.length; i++) {
			doc = dm.documents[i];
			if (!edmaCheckDocumentSynchronized(doc.fileIdDataProperty, doc.fileIdProperty, doc.registrationDateProperty, doc.registrationNumberProperty)) {
				doc.sendFunc(doc.fileIdDataProperty, doc.fileIdProperty, doc.nameProperty, doc.surnameProperty, doc.fiscalCodeProperty, doc.subjectProperty, doc.registrationDateProperty, doc.registrationNumberProperty);
			}
		}
	};
	dm.doRegisterSingleDocument = function(name) {
		var i = 0;
		var selectedDoc = null;
		var fileIdDataPropertyAttachments = [];
		var fileIdPropertyAttachments = [];
		for (i = 0; i < dm.documents.length; i++) {
			doc = dm.documents[i];
			if (name == doc.fileIdProperty) {
				selectedDoc = doc;
				dm.selectedDocument = doc;
			} else if (values.get(doc.fileIdProperty) != null) {
				fileIdDataPropertyAttachments.push(doc.fileIdDataProperty);
				fileIdPropertyAttachments.push(doc.fileIdProperty);
			}
		}
		if (!dm.isSingleDocumentComplete()) {
			facade.edmaSendPacket(false, selectedDoc.fileIdDataProperty, selectedDoc.fileIdProperty, selectedDoc.nameProperty, selectedDoc.surnameProperty, selectedDoc.fiscalCodeProperty, selectedDoc.subjectProperty, selectedDoc.registrationDateProperty, selectedDoc.registrationNumberProperty,
					fileIdDataPropertyAttachments, fileIdPropertyAttachments,
					instance, values, attachments);
		}
	};
	dm.addDocument = function(sendFunc, fileIdDataProperty, fileIdProperty, 
			nameProperty, surnameProperty, fiscalCodeProperty, subjectProperty, 
			registrationDateProperty, registrationNumberProperty) {
		doc = {};
		doc.sendFunc = sendFunc;
		doc.fileIdDataProperty = fileIdDataProperty;
		doc.fileIdProperty = fileIdProperty; 
		doc.nameProperty = nameProperty;
		doc.surnameProperty = surnameProperty;
		doc.fiscalCodeProperty = fiscalCodeProperty;
		doc.subjectProperty = subjectProperty;
		doc.registrationDateProperty = registrationDateProperty;
		doc.registrationNumberProperty = registrationNumberProperty;
		this.documents.push(doc);
	};
	return dm;
}

/**
 * genera il pdf da template xsl
 * @param destinationDataFilePropertyName
 * @param templateId
 * @param destinationPdfFileName
 */
function generatePdf(destinationDataFilePropertyName, templateId, destinationPdfFileName) {
	facade.generatePdf(destinationDataFilePropertyName, templateId, destinationPdfFileName, instance, values, attachments);
}

function error(message) { 
	facade.error(message);
}

function unlock() {
	facade.unlock(instance);
}

function generateModulePDF(nameModule, fileIdProperty) {
	facade.generateModulePDF(instance, nameModule, fileIdProperty);
}

function createChildInstance(templateName, username) {
	return facade.createChildInstance(instance, templateName, username);
}

function createChildInstanceOwner(templateName, username, ownerGroupId) {
	return facade.createChildInstanceOwner(instance, templateName, username, ownerGroupId);
}

function getParent(username) {
	return facade.getParent(username, instance);
}

function replicateData(instanceFrom, instanceTo, dataList) {
	
	/*
	 * Estraggo i data entries sorgente e destinazione
	 */
	var dataEntriesFrom = instanceFrom.getDataEntries();
	var dataEntriesTo = instanceTo.getDataEntries();
	
	var dataFilesFrom = instanceFrom.getDataFiles();
	var dataFilesTo = instanceTo.getDataFiles();
	
	var i = 0;
	for (i = 0; i < dataList.length; i++) {
		/*
		 * Scorro gli elementi che voglio replicare
		 */
		
		var fieldList = facade.normalizeField(dataList[i], instanceFrom.getDataEntries());
		
		/*
		 * fieldList è un singolo elemento (nel caso di un dato di modello di root)
		 * oppure una serie di elementi (nel caso di un po - per il po vengono inclusi tutti i figli)
		 */
		var j = 0;
		for (j = 0; j < fieldList.length; j++) {
			var fieldName = fieldList[j];
			
			if (facade.isDataFile(fieldName, dataEntriesFrom, dataFilesFrom)) {
				facade.putDataFile(fieldName, instanceTo.getId(), dataEntriesFrom, dataEntriesTo, dataFilesFrom, dataFilesTo);
			} else {
				var valueFrom = dataEntriesFrom.get(fieldName);
				dataEntriesTo.put(fieldName, valueFrom);
			}
		}
	}
}

function manageChildrenState(childTemplateName, childStateIn, childInput, dataList) {
	var childInstances = facade.getChildren(username, instance, childTemplateName, childStateIn);
	var i = 0;
	for (i = 0; i < childInstances.size(); i++) {
		var childInstance = childInstances.get(i);
		replicateData(instance, childInstance, dataList);
		saveInstance(childInstance);
	}
	facade.changeStates(username, childInstances, childInput);
}

function notifyParent(username, parentResponse) {
	facade.notifyParent(username, instance, parentResponse);
}

function notify(username, response) {
	facade.notify(username, instance, response);
}

function notifyMessage(username, response) {
	facade.notifyMessage(username, instance, response);
}

function isState(state) {
	return facade.isState(username, instance, state);
}

function message(username, operationName) {
	facade.message(username, instance, operationName);
}

function countSiblingStates(statesElements) {
	return facade.countSiblingStates(username, instance, statesElements);
}

function countChildStates(templateName, statesElements) {
	return facade.countChildStates(username, instance, templateName, statesElements);
}

function getParentState() {
	return facade.getParentState(username, instance);
}

//function syncInstance() {
//	return facade.syncInstance(instance);
//}

function terminate() {
	facade.terminate(instance);
}

function checkLoanActive(statesList) {
	return facade.checkLoanActive(loan, instance, statesList);
}

function call_CENED_WS(ape) {
	return facade.call_CENED_WS(ape);
}

function inserisciRichiestaRicarica(
	aliasBando, // "nasko", "cresco" o "sostengo"
	dossierId,
	numeroCarta,
	intestatario,
	importo,
	codiceFiscaleIntestatario) {
	facade.inserisciRichiestaRicarica(
			dossierId,
			numeroCarta,
			intestatario,
			importo,
			numeroMensilita,
			codiceFiscaleIntestatario);
}

/**
 * lista di tutte le richieste ricarica di una pratica
 * @param dossierId
 */
function recuperaRichiesteRicarica(dossierId) {
	return facade.recuperaRichiesteRicarica(dossierId);
}

/**
 * richiesta ricarica specifica
 * @param codiceRichiestaOperazione
 */
function recuperaRichiestaRicarica(codiceRichiestaOperazione) {
	return facade.recuperaRichiestaRicarica(codiceRichiestaOperazione);
}

function stringReplace(s1, s2, s3) {
	return facade.stringReplace(s1, s2, s3);
}

/**
 * Recupera l'identificativo del gruppo gestore asl dell'istanza corrente.
 * Analogo a library.js: getGestoreAsl()
 * @returns
 */
function getGestoreAsl() {
	return facade.getGestore('asl-gestione', 'asl-centri', instance);
}

/**
 * Recupera il budget.
 * Analogo a library.js.js: getBudget(alias, trimestre, anno)
 * @param alias - nasko, cresco, sostengo
 * @param trimestre - 1, 2, 3
 * @param anno
 * @returns
 */
function getBudget(alias, trimestre, anno) {
	profilo = facade.getParent(instance.getOwner(), 'asl-centri');
	codice = alias + "_" + trimestre + "_" + anno + "_" + profilo;
	return facade.getCodice(codice, 'budget_NCS');
}
