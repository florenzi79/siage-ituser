//onLoad

//Validazione
//pratica duplicata

//Operations
// setDatiPraticaPresentata
values.put('statoPratica','Presentata');
values.put('SedeProgetto_Provincia',values.get('Richiedente_SedeLegaleProvincia'));
values.put('SedeProgetto_Comune',values.get('Richiedente_SedeLegaleComune'));
values.put('SedeProgetto_Cap',values.get('Richiedente_SedeLegaleCap'));
values.put('DomandaDiAdesione_dataProtocollo',values.get('DomandaAdesione_DataProtocollo'));
values.put('SedeIndirizzo',values.get('Richiedente_SedeLegaleIndirizzo'));
values.put('SedeCap',values.get('Richiedente_SedeLegaleCap'));
values.put('SedeComune',values.get('Richiedente_SedeLegaleComune'));
values.put('SedeComuneDn',values.get('Richiedente_SedeLegaleComuneDn'));
values.put('SedeProvincia',values.get('Richiedente_SedeLegaleProvincia'));
values.put('SedeProvinciaDn',values.get('Richiedente_SedeLegaleProvinciaDn'));
// creaPdfDomanda
generatePdf('Adesione_File_DomandaDiContributoFirmato', '5ea89d85f5aa46219046d0a032639c63', 'DomandaDiAdesione.pdf');
