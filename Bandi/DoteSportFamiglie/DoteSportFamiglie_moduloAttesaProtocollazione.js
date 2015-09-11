//onLoad
//Adesione_File_DomandaDiContributoModello
values.put('Avviso_attesaProtocollazione','La domanda di contributo è stata inviata al protocollo di Regione Lombardia. Selezionare la voce di menu "Pratiche / Tutte" per prendere visione del numero di protocollo assegnato alla sua pratica.');

//Validazione

//Operations
//setDatiPraticaPresentata
values.put('statoPratica','Presentata');
values.put('SedeProgetto_Provincia',values.get('Richiedente_ProvinciaResidenza'));
values.put('SedeProgetto_Comune',values.get('Richiedente_ComuneResidenza'));
values.put('SedeIndirizzo',values.get('Richiedente_IndirizzoResidenza'));
values.put('SedeComune',values.get('Richiedente_ComuneResidenza'));
values.put('SedeComuneDn',values.get('Richiedente_ComuneResidenzaDn'));
values.put('SedeProvincia',values.get('Richiedente_ProvinciaResidenza'));
values.put('SedeProvinciaDn',values.get('Richiedente_ProvinciaResidenzaDn'));
values.put('Richiedente_Denominazione',values.get('Richiedente_Cognome') + ' ' + values.get('Richiedente_Nome'));
values.put('DettaglioCosti[0].VoceDiCostoPrimoLivello','Livello unico');
values.put('DettaglioCosti[0].VoceDiCostoSecondoLivello','Contributo per frequenza di primo minore a corso o attività sportiva');
values.put('DettaglioCosti[0].TipoAiuto','Nessun aiuto');
values.put('DettaglioCosti[0].Presentato',values.get('PrimoMinore_CostoCorso'));
values.put('DettaglioCosti[0].QuotaPubblicaRichiesta',values.get('PrimoMinore_DoteAssegnabile'));
values.put('DettaglioCosti[0].FormaAiuto','Contributo');
if (values.get('PrimoMinore_SecondaDote') == 'true') {
  values.put('DettaglioCosti[1].VoceDiCostoPrimoLivello','Livello unico');
  values.put('DettaglioCosti[1].VoceDiCostoSecondoLivello','Contributo per frequenza di primo minore a corso o attività sportiva');
  values.put('DettaglioCosti[1].TipoAiuto','Nessun aiuto');
  values.put('DettaglioCosti[1].Presentato',values.get('SecondoMinore_CostoCorso'));
  values.put('DettaglioCosti[1].QuotaPubblicaRichiesta',values.get('SecondoMinore_DoteAssegnabile'));
  values.put('DettaglioCosti[1].FormaAiuto','Contributo');
}
