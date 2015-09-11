// onLoad
// Firmatario_CoincideLegaleRappresentante
var isNotFirmatarioRappresentante = (values.get('Firmatario_CoincideLegaleRappresentante') == 'false');
items.get('Firmatario_CodiceFiscale').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Telefono').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Mail').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Fax').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_CodiceFiscale').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Telefono').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Mail').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Fax').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setRequired(isNotFirmatarioRappresentante);

items.get('ReferentePratica_CoincideLegaleRapprFirmatario').clearOptions();
items.get('ReferentePratica_CoincideLegaleRapprFirmatario').addOption('rappresentante','Il rappresentante legale');
if (isNotFirmatarioRappresentante) {
    items.get('ReferentePratica_CoincideLegaleRapprFirmatario').addOption('firmatario','Il firmatario');
}
items.get('ReferentePratica_CoincideLegaleRapprFirmatario').addOption('false','Nessuno dei precedenti');

var isNotRappresentanteFirmatarioReferente = (values.get('ReferentePratica_CoincideLegaleRapprFirmatario') == 'false');
items.get('ReferentePratica_CodiceFiscale').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Cognome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Nome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Telefono').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Mail').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Fax').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Ruolo').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_CodiceFiscale').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Cognome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Nome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Telefono').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Mail').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Fax').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Ruolo').setRequired(isNotRappresentanteFirmatarioReferente);
// SedeLegale_ProvinciaDn
//La sede legale ricavata dal profilo non è in Lombardia, si intende dichiararne un'altra?
//Non sono ammessi soggetti che abbiano sede legale fuori Lombardia
var provinciaSedeNonPresente = isEmpty('SedeLegale_Provincia');
items.get('SedeLegale_Indirizzo').setHidden(provinciaSedeNonPresente);
items.get('SedeLegale_ProvinciaDn').setHidden(provinciaSedeNonPresente);
items.get('SedeLegale_ComuneDn').setHidden(provinciaSedeNonPresente);
var provinciaProfilo = values.get('SedeLegale_Provincia');
var isProfiloLombardo = ((provinciaProfilo == '012') || (provinciaProfilo == '013') || (provinciaProfilo == '014') || (provinciaProfilo == '015') || (provinciaProfilo == '016') || (provinciaProfilo == '017') || (provinciaProfilo == '018') || (provinciaProfilo == '019') || (provinciaProfilo == '020') || (provinciaProfilo == '097') || (provinciaProfilo == '098') || (provinciaProfilo == '108'));
items.get('SedeLegale_DomandaPerFuoriRegione').setHidden(isProfiloLombardo);
items.get('SedeLegale_DomandaPerFuoriRegione').setRequired(!isProfiloLombardo);
// SedeLegale_DomandaPerFuoriRegione
var provinciaDichiarata = (values.get('SedeLegale_DomandaPerFuoriRegione') == 'true');
fieldsets.get('cb199ae39188491689bcc23bab2312eb').setHidden(!provinciaDichiarata);
items.get('SedeLegaleDichiarata_Indirizzo').setRequired(provinciaDichiarata);
items.get('SedeLegaleDichiarata_Provincia').setRequired(provinciaDichiarata);
items.get('SedeLegaleDichiarata_Comune').setRequired(provinciaDichiarata);
//SedeLegaleDichiarata_Provincia
var provinceLombarde = dizionarioService.getMap('provincia_istat','03');
items.get('SedeLegaleDichiarata_Provincia').clearOptions();
items.get('SedeLegaleDichiarata_Provincia').addOption('','- seleziona -');
items.get('SedeLegaleDichiarata_Provincia').addOptions(provinceLombarde);
setSelectDependedOptionsAndShowCached('SedeLegaleDichiarata_Comune', 'comune_istat', path+'SedeLegaleDichiarata_Provincia');

// onChange
//Firmatario_CoincideLegaleRappresentante
values.remove('Firmatario_CodiceFiscale');
values.remove('Firmatario_Cognome');
values.remove('Firmatario_Nome');
values.remove('Firmatario_Telefono');
values.remove('Firmatario_Mail');
values.remove('Firmatario_Fax');
values.remove('Firmatario_Ruolo');
var idAttoDelegaToRemove = values.remove('Adesione_File_AttoDelega');
attachments.remove(idAttoDelegaToRemove);

var isNotFirmatarioRappresentante = (values.get('Firmatario_CoincideLegaleRappresentante') == 'false');
items.get('Firmatario_CodiceFiscale').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Telefono').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Mail').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Fax').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setHidden(!isNotFirmatarioRappresentante);
items.get('Firmatario_CodiceFiscale').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Cognome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Nome').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Telefono').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Mail').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Fax').setRequired(isNotFirmatarioRappresentante);
items.get('Firmatario_Ruolo').setRequired(isNotFirmatarioRappresentante);

items.get('ReferentePratica_CoincideLegaleRapprFirmatario').clearOptions();
items.get('ReferentePratica_CoincideLegaleRapprFirmatario').addOption('rappresentante','Il rappresentante legale');
if (isNotFirmatarioRappresentante) {
    items.get('ReferentePratica_CoincideLegaleRapprFirmatario').addOption('firmatario','Il firmatario');
}
items.get('ReferentePratica_CoincideLegaleRapprFirmatario').addOption('false','Nessuno dei precedenti');

if ((values.get('Firmatario_CoincideLegaleRappresentante') == 'true') && (values.get('ReferentePratica_CoincideLegaleRapprFirmatario') == 'firmatario')) {
    values.remove('ReferentePratica_CoincideLegaleRapprFirmatario');
}
//ReferentePratica_CoincideLegaleRapprFirmatario
values.remove('ReferentePratica_CodiceFiscale');
values.remove('ReferentePratica_Cognome');
values.remove('ReferentePratica_Nome');
values.remove('ReferentePratica_Telefono');
values.remove('ReferentePratica_Mail');
values.remove('ReferentePratica_Fax');
values.remove('ReferentePratica_Ruolo');

var isNotRappresentanteFirmatarioReferente = (values.get('ReferentePratica_CoincideLegaleRapprFirmatario') == 'false');
items.get('ReferentePratica_CodiceFiscale').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Cognome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Nome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Telefono').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Mail').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Fax').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Ruolo').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_CodiceFiscale').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Cognome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Nome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Telefono').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Mail').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Fax').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('ReferentePratica_Ruolo').setRequired(isNotRappresentanteFirmatarioReferente);
// SedeLegale_DomandaPerFuoriRegione
values.remove('SedeLegaleDichiarata_Indirizzo');
values.remove('SedeLegaleDichiarata_Provincia');
values.remove('SedeLegaleDichiarata_ProvinciaDn');
values.remove('SedeLegaleDichiarata_Comune');
values.remove('SedeLegaleDichiarata_ComuneDn');
var provinciaDichiarata = (values.get('SedeLegale_DomandaPerFuoriRegione') == 'true');
fieldsets.get('cb199ae39188491689bcc23bab2312eb').setHidden(!provinciaDichiarata);
items.get('SedeLegaleDichiarata_Indirizzo').setRequired(provinciaDichiarata);
items.get('SedeLegaleDichiarata_Provincia').setRequired(provinciaDichiarata);
items.get('SedeLegaleDichiarata_Comune').setRequired(provinciaDichiarata);
//SedeLegaleDichiarata_Provincia
values.put('SedeLegaleDichiarata_ProvinciaDn', getOptionLabel('SedeLegaleDichiarata_Provincia', values.get(path+'SedeLegaleDichiarata_Provincia')));
values.put(path+'SedeLegaleDichiarata_Comune', '');
values.remove('SedeLegaleDichiarata_ComuneDn');
setSelectDependedOptionsAndShowCached('SedeLegaleDichiarata_Comune', 'comune_istat', path+'SedeLegaleDichiarata_Provincia');
//SedeLegaleDichiarata_Comune
values.put('SedeLegaleDichiarata_ComuneDn', getOptionLabel('SedeLegaleDichiarata_Comune', values.get(path+'SedeLegaleDichiarata_Comune')));

//Validazione
if (!isValidEmail(values.get('Richiedente_RappresentanteLegaleMail'))) {
    errors.put('Richiedente_RappresentanteLegaleMail','Richiedente_RappresentanteLegaleMail_val');
}
if (values.get('Firmatario_CoincideLegaleRappresentante') == 'false') {
    if (!isValidCf(values.get('Firmatario_CodiceFiscale'))) {
        errors.put('Firmatario_CodiceFiscale','Firmatario_CodiceFiscale_val');
    }
    if (!isValidEmail(values.get('Firmatario_Mail'))) {
        errors.put('Firmatario_Mail','Firmatario_Mail_val');
    }
}
if (values.get('ReferentePratica_CoincideLegaleRapprFirmatario') == 'false') {
    if (!isValidCf(values.get('ReferentePratica_CodiceFiscale'))) {
        errors.put('ReferentePratica_CodiceFiscale','ReferentePratica_CodiceFiscale_val');
    }
    if (!isValidEmail(values.get('ReferentePratica_Mail'))) {
        errors.put('ReferentePratica_Mail','ReferentePratica_Mail_val');
    }
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
	errors.put('Richiedente_RappresentanteLegaleCf', 'PraticaDuplicata_val');
}
// provincia e comune dichiarati
if (values.get('SedeLegale_DomandaPerFuoriRegione') == 'false') {
  errors.put('SedeLegale_DomandaPerFuoriRegione','SedeLegale_DomandaPerFuoriRegione_val');
}
if (values.get('SedeLegale_DomandaPerFuoriRegione') == 'true') {
  if (values.get('SedeLegaleDichiarata_Provincia') == '') {
    errors.put('SedeLegaleDichiarata_Provincia','SedeLegaleDichiarata_Provincia_val');
  }
  if (values.get('SedeLegaleDichiarata_Comune') == '') {
    errors.put('SedeLegaleDichiarata_Comune','SedeLegaleDichiarata_Comune_val');
  }
}

//Operation
//setDatiReferentiAdesione
if (values.get('Firmatario_CoincideLegaleRappresentante') == 'true') {
    values.put('Firmatario_CodiceFiscale',values.get('Richiedente_RappresentanteLegaleCf'));
    values.put('Firmatario_Cognome',values.get('Richiedente_RappresentanteLegaleCognome'));
    values.put('Firmatario_Nome',values.get('Richiedente_RappresentanteLegaleNome'));
    values.put('Firmatario_Telefono',values.get('Richiedente_RappresentanteLegaleTelefono'));
    values.put('Firmatario_Mail',values.get('Richiedente_RappresentanteLegaleMail'));
    values.put('Firmatario_Fax',values.get('Richiedente_RappresentanteLegaleFax'));
    values.put('Firmatario_Ruolo','Rappresentante legale');
}
if (values.get('ReferentePratica_CoincideLegaleRapprFirmatario') == 'rappresentante') {
    values.put('ReferentePratica_CodiceFiscale',values.get('Richiedente_RappresentanteLegaleCf'));
    values.put('ReferentePratica_Cognome',values.get('Richiedente_RappresentanteLegaleCognome'));
    values.put('ReferentePratica_Nome',values.get('Richiedente_RappresentanteLegaleNome'));
    values.put('ReferentePratica_Telefono',values.get('Richiedente_RappresentanteLegaleTelefono'));
    values.put('ReferentePratica_Mail',values.get('Richiedente_RappresentanteLegaleMail'));
    values.put('ReferentePratica_Fax',values.get('Richiedente_RappresentanteLegaleFax'));
    values.put('ReferentePratica_Ruolo','Rappresentante legale');
}
if (values.get('ReferentePratica_CoincideLegaleRapprFirmatario') == 'firmatario') {
    values.put('ReferentePratica_CodiceFiscale',values.get('Firmatario_CodiceFiscale'));
    values.put('ReferentePratica_Cognome',values.get('Firmatario_Cognome'));
    values.put('ReferentePratica_Nome',values.get('Firmatario_Nome'));
    values.put('ReferentePratica_Telefono',values.get('Firmatario_Telefono'));
    values.put('ReferentePratica_Mail',values.get('Firmatario_Mail'));
    values.put('ReferentePratica_Fax',values.get('Firmatario_Fax'));
    values.put('ReferentePratica_Ruolo',values.get('Firmatario_Ruolo'));
}
