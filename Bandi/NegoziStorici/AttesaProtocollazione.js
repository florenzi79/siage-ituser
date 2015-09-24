//onLoad
//Avviso_attesaProtocollazione
values.put('Avviso_attesaProtocollazione','La domanda è stata inviata al protocollo di Regione Lombardia. Selezionare la voce di menu "Pratiche / Tutte" per prendere visione del numero di protocollo assegnato alla sua pratica.');
//onChange

//Validazione

//operations
// setDatiPraticaPresentata
save();
values.put('statoPratica','Presentata');
values.put('SedeProgetto_Provincia',values.get('IndirizzoNegozio_Provincia'));
values.put('SedeProgetto_Comune',values.get('IndirizzoNegozio_Citta'));
values.put('SedeProgetto_Cap',values.get('IndirizzoNegozio_Cap'));
values.put('CoordinateBancarie_IstitutoDiCredito',values.get('CoordBancarie_Istituto'));
values.put('CoordinateBancarie_Agenzia',values.get('CoordBancarie_Agenzia'));
values.put('CoordinateBancarie_Intestatario',values.get('CoordBancarie_Intestatario'));
values.put('CoordinateBancarie_IBAN',values.get('CoordBancarie_Iban'));
values.put('SedeIndirizzo',values.get('IndirizzoNegozio_Via'));
values.put('SedeCAP',values.get('IndirizzoNegozio_Cap'));
values.put('SedeComune',values.get('IndirizzoNegozio_Citta'));
values.put('SedeComuneDn',values.get('IndirizzoNegozio_CittaDn'));
values.put('SedeProvincia',values.get('IndirizzoNegozio_Provincia'));
values.put('SedeProvinciaDn',values.get('IndirizzoNegozio_ProvinciaDn'));
values.put('Richiedente_Denominazione',values.get('SoggettoRichiedente_DenominazioneImpresa'));
values.put('Richiedente_CodiceFiscale',values.get('SoggettoRichiedente_CodiceFiscale'));
var percentualeRichiesta = 0;
if ((values.get('Contributo_Concedibile') !== null) && (values.get('Contributo_Concedibile') !== '') && (values.get('Totale_CostoProgetto') !== null) && (values.get('Totale_CostoProgetto') !== '') && (values.get('Totale_CostoProgetto') !== '0')) {
  percentualeRichiesta = (parseFloat(values.get('Contributo_Concedibile')) / parseFloat(values.get('Totale_CostoProgetto')));
}
var spesa0 = 0;
if ((values.get('SpeseCapitale_Allestimenti') !== null) && (values.get('SpeseCapitale_Allestimenti') !== '') && (values.get('SpeseCapitale_Allestimenti') !== '0')) {
  spesa0 = parseFloat(values.get('SpeseCapitale_Allestimenti'));
}
var spesa1 = 0;
if ((values.get('SpeseCapitale_Immobili') !== null) && (values.get('SpeseCapitale_Immobili') !== '') && (values.get('SpeseCapitale_Immobili') !== '0')) {
  spesa1 = parseFloat(values.get('SpeseCapitale_Immobili'));
}
var spesa2 = 0;
if ((values.get('SpeseCapitale_Hardware') !== null) && (values.get('SpeseCapitale_Hardware') !== '') && (values.get('SpeseCapitale_Hardware') !== '0')) {
  spesa2 = parseFloat(values.get('SpeseCapitale_Hardware'));
}
var spesa3 = 0;
if ((values.get('SpeseCapitale_Software') !== null) && (values.get('SpeseCapitale_Software') !== '') && (values.get('SpeseCapitale_Software') !== '0')) {
  spesa3 = parseFloat(values.get('SpeseCapitale_Software'));
}
var spesa4 = 0;
if ((values.get('SpeseCapitale_Connettivita') !== null) && (values.get('SpeseCapitale_Connettivita') !== '') && (values.get('SpeseCapitale_Connettivita') !== '0')) {
  spesa4 = parseFloat(values.get('SpeseCapitale_Connettivita'));
}
var spesa5 = 0;
if ((values.get('SpeseCapitale_OpereMurarie') !== null) && (values.get('SpeseCapitale_OpereMurarie') !== '') && (values.get('SpeseCapitale_OpereMurarie') !== '0')) {
  spesa5 = parseFloat(values.get('SpeseCapitale_OpereMurarie'));
}
var spesa6 = 0;
if ((values.get('SpeseCapitale_Rinnovamento') !== null) && (values.get('SpeseCapitale_Rinnovamento') !== '') && (values.get('SpeseCapitale_Rinnovamento') !== '0')) {
  spesa6 = parseFloat(values.get('SpeseCapitale_Rinnovamento'));
}
var spesa7 = 0;
if ((values.get('SpeseCapitale_InteventiInnovativi') !== null) && (values.get('SpeseCapitale_InteventiInnovativi') !== '') && (values.get('SpeseCapitale_InteventiInnovativi') !== '0')) {
  spesa7 = parseFloat(values.get('SpeseCapitale_InteventiInnovativi'));
}
var spesa8 = 0;
if ((values.get('SpeseCapitale_Impianti') !== null) && (values.get('SpeseCapitale_Impianti') !== '') && (values.get('SpeseCapitale_Impianti') !== '0')) {
  spesa8 = parseFloat(values.get('SpeseCapitale_Impianti'));
}
var spesa9 = 0;
if ((values.get('SpeseCorrente_Progettazione') !== null) && (values.get('SpeseCorrente_Progettazione') !== '') && (values.get('SpeseCorrente_Progettazione') !== '0')) {
  spesa9 = parseFloat(values.get('SpeseCorrente_Progettazione'));
}
var spesa10 = 0;
if ((values.get('SpeseCorrente_Comunicazione') !== null) && (values.get('SpeseCorrente_Comunicazione') !== '') && (values.get('SpeseCorrente_Comunicazione') !== '0')) {
  spesa10 = parseFloat(values.get('SpeseCorrente_Comunicazione'));
}
var spesa11 = 0;
if ((values.get('SpeseCorrente_AttivitaFormativa') !== null) && (values.get('SpeseCorrente_AttivitaFormativa') !== '') && (values.get('SpeseCorrente_AttivitaFormativa') !== '0')) {
  spesa11 = parseFloat(values.get('SpeseCorrente_AttivitaFormativa'));
}
var spesa12 = 0;
if ((values.get('SpeseCorrente_Consulenza') !== null) && (values.get('SpeseCorrente_Consulenza') !== '') && (values.get('SpeseCorrente_Consulenza') !== '0')) {
  spesa12 = parseFloat(values.get('SpeseCorrente_Consulenza'));
}
var spesa13 = 0;
if ((values.get('SpeseCorrente_ProgettazioneDigitale') !== null) && (values.get('SpeseCorrente_ProgettazioneDigitale') !== '') && (values.get('SpeseCorrente_ProgettazioneDigitale') !== '0')) {
  spesa13 = parseFloat(values.get('SpeseCorrente_ProgettazioneDigitale'));
}
var spesa14 = 0;
if ((values.get('SpeseCorrente_Pianificazione') !== null) && (values.get('SpeseCorrente_Pianificazione') !== '') && (values.get('SpeseCorrente_Pianificazione') !== '0')) {
  spesa14 = parseFloat(values.get('SpeseCorrente_Pianificazione'));
}
var spesa15 = 0;
if ((values.get('SpeseCorrente_AnalisiMercato') !== null) && (values.get('SpeseCorrente_AnalisiMercato') !== '') && (values.get('SpeseCorrente_AnalisiMercato') !== '0')) {
  spesa15 = parseFloat(values.get('SpeseCorrente_AnalisiMercato'));
}
var spesa16 = 0;
if ((values.get('SpeseCorrente_Personale') !== null) && (values.get('SpeseCorrente_Personale') !== '') && (values.get('SpeseCorrente_Personale') !== '0')) {
  spesa16 = parseFloat(values.get('SpeseCorrente_Personale'));
}
values.put('DettaglioCosti[0].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[0].VoceDiCostoSecondoLivello','acquisto di allestimenti innovativi per spazi espositivi interni ed esterni');
values.put('DettaglioCosti[0].TipoAiuto','De minimis');
values.put('DettaglioCosti[0].Presentato',''+spesa0);
values.put('DettaglioCosti[0].QuotaPubblicaRichiesta',''(spesa0 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[0].FormaAiuto','Contributo');
values.put('DettaglioCosti[1].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[1].VoceDiCostoSecondoLivello','acquisto di immobili, locali, attrezzature, arredi, impianti e macchinari funzionali a interventi di innovazione');
values.put('DettaglioCosti[1].TipoAiuto','De minimis');
values.put('DettaglioCosti[1].Presentato',''+spesa1);
values.put('DettaglioCosti[1].QuotaPubblicaRichiesta',''(spesa1 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[1].FormaAiuto','Contributo');
values.put('DettaglioCosti[2].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[2].VoceDiCostoSecondoLivello','acquisto di hardware e di dispositivi per installazioni multimediali');
values.put('DettaglioCosti[2].TipoAiuto','De minimis');
values.put('DettaglioCosti[2].Presentato',''+spesa2);
values.put('DettaglioCosti[2].QuotaPubblicaRichiesta',''(spesa2 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[2].FormaAiuto','Contributo');
values.put('DettaglioCosti[3].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[3].VoceDiCostoSecondoLivello','acquisto di software');
values.put('DettaglioCosti[3].TipoAiuto','De minimis');
values.put('DettaglioCosti[3].Presentato',''+spesa3);
values.put('DettaglioCosti[3].QuotaPubblicaRichiesta',''(spesa3 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[3].FormaAiuto','Contributo');
values.put('DettaglioCosti[4].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[4].VoceDiCostoSecondoLivello','spese per installazione di connettività dedicata');
values.put('DettaglioCosti[4].TipoAiuto','De minimis');
values.put('DettaglioCosti[4].Presentato',''+spesa4);
values.put('DettaglioCosti[4].QuotaPubblicaRichiesta',''(spesa4 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[4].FormaAiuto','Contributo');
values.put('DettaglioCosti[5].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[5].VoceDiCostoSecondoLivello','spese per opere murarie e assimilate, funzionali a interventi di innovazione');
values.put('DettaglioCosti[5].TipoAiuto','De minimis');
values.put('DettaglioCosti[5].Presentato',''+spesa5);
values.put('DettaglioCosti[5].QuotaPubblicaRichiesta',''(spesa5 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[5].FormaAiuto','Contributo');
values.put('DettaglioCosti[6].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[6].VoceDiCostoSecondoLivello','spese per il rinnovamento di insegne, decori, arredi, vetrine, attrezzature e macchinari, funzionali a interventi di innovazione');
values.put('DettaglioCosti[6].TipoAiuto','De minimis');
values.put('DettaglioCosti[6].Presentato',''+spesa6);
values.put('DettaglioCosti[6].QuotaPubblicaRichiesta',''(spesa6 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[6].FormaAiuto','Contributo');
values.put('DettaglioCosti[7].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[7].VoceDiCostoSecondoLivello','spese per interventi innovativi di efficientamento energetico');
values.put('DettaglioCosti[7].TipoAiuto','De minimis');
values.put('DettaglioCosti[7].Presentato',''+spesa7);
values.put('DettaglioCosti[7].QuotaPubblicaRichiesta',''(spesa7 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[7].FormaAiuto','Contributo');
values.put('DettaglioCosti[8].VoceDiCostoPrimoLivello','Spese in conto capitale');
values.put('DettaglioCosti[8].VoceDiCostoSecondoLivello','spese di realizzazione o rifacimento di impianti funzionali a interventi di innovazione');
values.put('DettaglioCosti[8].TipoAiuto','De minimis');
values.put('DettaglioCosti[8].Presentato',''+spesa8);
values.put('DettaglioCosti[8].QuotaPubblicaRichiesta',''(spesa8 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[8].FormaAiuto','Contributo');
values.put('DettaglioCosti[9].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[9].VoceDiCostoSecondoLivello','spese di progettazione, direzione lavori e collaudo');
values.put('DettaglioCosti[9].TipoAiuto','De minimis');
values.put('DettaglioCosti[9].Presentato',''+spesa9);
values.put('DettaglioCosti[9].QuotaPubblicaRichiesta',''(spesa9 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[9].FormaAiuto','Contributo');
values.put('DettaglioCosti[10].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[10].VoceDiCostoSecondoLivello','spese di comunicazione');
values.put('DettaglioCosti[10].TipoAiuto','De minimis');
values.put('DettaglioCosti[10].Presentato',''+spesa10);
values.put('DettaglioCosti[10].QuotaPubblicaRichiesta',''(spesa10 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[10].FormaAiuto','Contributo');
values.put('DettaglioCosti[11].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[11].VoceDiCostoSecondoLivello','spese per attività formativa, di aggiornamento professionale e manageriale');
values.put('DettaglioCosti[11].TipoAiuto','De minimis');
values.put('DettaglioCosti[11].Presentato',''+spesa11);
values.put('DettaglioCosti[11].QuotaPubblicaRichiesta',''(spesa11 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[11].FormaAiuto','Contributo');
values.put('DettaglioCosti[12].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[12].VoceDiCostoSecondoLivello','spese per servizi di consulenza');
values.put('DettaglioCosti[12].TipoAiuto','De minimis');
values.put('DettaglioCosti[12].Presentato',''+spesa12);
values.put('DettaglioCosti[12].QuotaPubblicaRichiesta',''(spesa12 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[12].FormaAiuto','Contributo');
values.put('DettaglioCosti[13].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[13].VoceDiCostoSecondoLivello','spese per servizi di progettazione di strumenti digitali');
values.put('DettaglioCosti[13].TipoAiuto','De minimis');
values.put('DettaglioCosti[13].Presentato',''+spesa13);
values.put('DettaglioCosti[13].QuotaPubblicaRichiesta',''(spesa13 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[13].FormaAiuto','Contributo');
values.put('DettaglioCosti[14].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[14].VoceDiCostoSecondoLivello','spese per pianificazione e strategia di eventi e strumenti di comunicazione');
values.put('DettaglioCosti[14].TipoAiuto','De minimis');
values.put('DettaglioCosti[14].Presentato',''+spesa14);
values.put('DettaglioCosti[14].QuotaPubblicaRichiesta',''(spesa14 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[14].FormaAiuto','Contributo');
values.put('DettaglioCosti[15].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[15].VoceDiCostoSecondoLivello','spese per analisi di mercato, ricerche e studi, banche dati');
values.put('DettaglioCosti[15].TipoAiuto','De minimis');
values.put('DettaglioCosti[15].Presentato',''+spesa15);
values.put('DettaglioCosti[15].QuotaPubblicaRichiesta',''(spesa15 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[15].FormaAiuto','Contributo');
values.put('DettaglioCosti[16].VoceDiCostoPrimoLivello','Spese correnti');
values.put('DettaglioCosti[16].VoceDiCostoSecondoLivello','spese per il personale impiegato nei progetti');
values.put('DettaglioCosti[16].TipoAiuto','De minimis');
values.put('DettaglioCosti[16].Presentato',''+spesa16);
values.put('DettaglioCosti[16].QuotaPubblicaRichiesta',''(spesa16 * percentualeRichiesta).toFixed(2));
values.put('DettaglioCosti[16].FormaAiuto','Contributo');
generatePdf('Pdf_Adesione', 'd5ad251e2d4a4d2eb437052fee2c2645', 'DatiAdesione.pdf');
save();
