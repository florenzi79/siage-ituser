// onLoad
// Firmatario_RappresentanteLegale
var isNotFirmatarioRappresentante = (values.get('Firmatario_RappresentanteLegale') == 'false');
fieldsets.get('9d57e479e764413b803faa75f3fcc792').setHidden(!isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCodiceFiscale').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCognome').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNome').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioTelefono').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioPec').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioMail').setRequired(isNotFirmatarioRappresentante);

fieldsets.get('ebd5a3d792dd4f69ac8070390d4b46ec').setHidden(isEmpty('Firmatario_RappresentanteLegale'));

items.get('Richiedente_Rup').clearOptions();
items.get('Richiedente_Rup').addOption('rappresentante','Il rappresentante legale');
if (isNotFirmatarioRappresentante) {
  items.get('Richiedente_Rup').addOption('firmatario','Il firmatario');
}
items.get('Richiedente_Rup').addOption('false','Nessuno dei precedenti');

var isNotRappresentanteFirmatarioReferente = (values.get('Richiedente_Rup') == 'false');
items.get('Richiedente_RupCodiceFiscale').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupNome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupCognome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupTelefono').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupPec').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupMail').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupCodiceFiscale').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupNome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupCognome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupTelefono').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupPec').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupMail').setRequired(isNotRappresentanteFirmatarioReferente);

// onChange
//Firmatario_RappresentanteLegale
values.remove('Richiedente_FirmatarioCodiceFiscale');
values.remove('Richiedente_FirmatarioCognome');
values.remove('Richiedente_FirmatarioNome');
values.remove('Richiedente_FirmatarioTelefono');
values.remove('Richiedente_FirmatarioPec');
values.remove('Richiedente_FirmatarioMail');
var idAttoDelegaToRemove = values.remove('Adesione_File_AttoDelega');
attachments.remove(idAttoDelegaToRemove);

var isNotFirmatarioRappresentante = (values.get('Firmatario_RappresentanteLegale') == 'false');
fieldsets.get('9d57e479e764413b803faa75f3fcc792').setHidden(!isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCodiceFiscale').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioCognome').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioNome').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioTelefono').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioPec').setRequired(isNotFirmatarioRappresentante);
items.get('Richiedente_FirmatarioMail').setRequired(isNotFirmatarioRappresentante);

fieldsets.get('ebd5a3d792dd4f69ac8070390d4b46ec').setHidden(false);

items.get('Richiedente_Rup').clearOptions();
items.get('Richiedente_Rup').addOption('rappresentante','Il rappresentante legale');
if (isNotFirmatarioRappresentante) {
    items.get('Richiedente_Rup').addOption('firmatario','Il firmatario');
}
items.get('Richiedente_Rup').addOption('false','Nessuno dei precedenti');

if ((values.get('Firmatario_RappresentanteLegale') == 'true') && (values.get('Richiedente_Rup') == 'firmatario')) {
    values.remove('Richiedente_Rup');
    values.remove('Richiedente_RupCodiceFiscale');
    values.remove('Richiedente_RupNome');
    values.remove('Richiedente_RupCognome');
    values.remove('Richiedente_RupTelefono');
    values.remove('Richiedente_RupPec');
    values.remove('Richiedente_RupMail');
    items.get('Richiedente_RupCodiceFiscale').setHidden(true);
    items.get('Richiedente_RupNome').setHidden(true);
    items.get('Richiedente_RupCognome').setHidden(true);
    items.get('Richiedente_RupTelefono').setHidden(true);
    items.get('Richiedente_RupPec').setHidden(true);
    items.get('Richiedente_RupMail').setHidden(true);
}
//Richiedente_Rup
values.remove('Richiedente_RupCodiceFiscale');
values.remove('Richiedente_RupNome');
values.remove('Richiedente_RupCognome');
values.remove('Richiedente_RupTelefono');
values.remove('Richiedente_RupPec');
values.remove('Richiedente_RupMail');

var isNotRappresentanteFirmatarioReferente = (values.get('Richiedente_Rup') == 'false');
items.get('Richiedente_RupCodiceFiscale').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupNome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupCognome').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupTelefono').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupPec').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupMail').setHidden(!isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupCodiceFiscale').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupNome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupCognome').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupTelefono').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupPec').setRequired(isNotRappresentanteFirmatarioReferente);
items.get('Richiedente_RupMail').setRequired(isNotRappresentanteFirmatarioReferente);

//Validazione
//pratica duplicata
var codiceFiscaleRichiedente = values.get('Richiedente_CodiceFiscale');
var sqlPraticheDuplicate =
"  SELECT SM_ID ID_PRATICA "+
"  FROM AG_SM_INSTANCES PRATICA, AG_SM_DATA_ENTRIES DETTAGLIO "+
"  WHERE DETTAGLIO.DAT_PTH = 'Richiedente_CodiceFiscale' "+
"  AND DETTAGLIO.DAT_VL = '" + codiceFiscaleRichiedente +"' "+
"  AND DETTAGLIO.FK_ID = PRATICA.SM_ID "+
"  AND PRATICA.SM_TMPL_DN = 'Rigenerazione urbana' "+
"  AND PRATICA.CURRENT_STATE in ('b6eb1d6973c8432281d3de1f66272093', 'a849d6d6b98040f092fbb7b814f1da06')"
//							  					    	Attesa protocollazione			  			Presentata
;
var praticheDuplicate = dizionarioService.getList(null, sqlPraticheDuplicate);
if(praticheDuplicate.size() > 0) {
	errors.put('Richiedente_RappresentanteLegaleCodiceFiscale', 'PraticaDuplicata_val');
}

if (!isValidEmail(values.get('Richiedente_RappresentanteLegaleMail'))) {
    errors.put('Richiedente_RappresentanteLegaleMail','eMail_val');
}
if (!isValidEmail(values.get('Richiedente_RappresentanteLegalePec'))) {
    errors.put('Richiedente_RappresentanteLegalePec','Pec_val');
}
if (values.get('Firmatario_RappresentanteLegale') == 'false') {
    if (!isValidCf(values.get('Richiedente_FirmatarioCodiceFiscale'))) {
        errors.put('Richiedente_FirmatarioCodiceFiscale','CodiceFiscale_val');
    }
    if (!isValidEmail(values.get('Richiedente_FirmatarioMail'))) {
        errors.put('Richiedente_FirmatarioMail','eMail_val');
    }
    if (!isValidEmail(values.get('Richiedente_FirmatarioPec'))) {
        errors.put('Richiedente_FirmatarioPec','Pec_val');
    }
}
if (values.get('Richiedente_Rup') == 'false') {
    if (!isValidCf(values.get('Richiedente_RupCodiceFiscale'))) {
        errors.put('Richiedente_RupCodiceFiscale','CodiceFiscale_val');
    }
    if (!isValidEmail(values.get('Richiedente_RupMail'))) {
        errors.put('Richiedente_RupMail','eMail_val');
    }
    if (!isValidEmail(values.get('Richiedente_RupPec'))) {
        errors.put('Richiedente_RupPec','Pec_val');
    }
}


//Operation
//SetDatiPersoneAdesione
if (values.get('Firmatario_RappresentanteLegale') == 'true') {
    values.put('Richiedente_FirmatarioCodiceFiscale',values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
    values.put('Richiedente_FirmatarioCognome',values.get('Richiedente_RappresentanteLegaleCognome'));
    values.put('Richiedente_FirmatarioNome',values.get('Richiedente_RappresentanteLegaleNome'));
    values.put('Richiedente_FirmatarioTelefono',values.get('Richiedente_RappresentanteLegaleTelefono'));
    values.put('Richiedente_FirmatarioPec',values.get('Richiedente_RappresentanteLegalePec'));
    values.put('Richiedente_FirmatarioMail',values.get('Richiedente_RappresentanteLegaleMail'));
}
if (values.get('Richiedente_Rup') == 'rappresentante') {
  values.put('Richiedente_RupCodiceFiscale',values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
  values.put('Richiedente_RupCognome',values.get('Richiedente_RappresentanteLegaleCognome'));
  values.put('Richiedente_RupNome',values.get('Richiedente_RappresentanteLegaleNome'));
  values.put('Richiedente_RupTelefono',values.get('Richiedente_RappresentanteLegaleTelefono'));
  values.put('Richiedente_RupPec',values.get('Richiedente_RappresentanteLegalePec'));
  values.put('Richiedente_RupMail',values.get('Richiedente_RappresentanteLegaleMail'));
}
if (values.get('Richiedente_Rup') == 'firmatario') {
    values.put('Richiedente_RupCodiceFiscale',values.get('Richiedente_FirmatarioCodiceFiscale'));
    values.put('Richiedente_RupCognome',values.get('Richiedente_FirmatarioCognome'));
    values.put('Richiedente_RupNome',values.get('Richiedente_FirmatarioNome'));
    values.put('Richiedente_RupTelefono',values.get('Richiedente_FirmatarioTelefono'));
    values.put('Richiedente_RupMail',values.get('Richiedente_FirmatarioPec'));
    values.put('Richiedente_RupFax',values.get('Richiedente_FirmatarioMail'));
}
