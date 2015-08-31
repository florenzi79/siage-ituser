// onLoad
// Avviso_EsenzioneBollo
var isEsente = (values.get('Dichiarazioni_EsenzioneBollo') == 'true');
fieldsets.get('c1ca67cc1dd9427c8443d9971f57e243').setHidden(isEsente);
fieldsets.get('d292ed3300294753a0a8351b992733d8').setHidden(!isEsente);
//Avviso_pulsantePostPagamentoBollo    Tipo:Testo esteso  Label:Attenzione    hidden    readonly
values.put('Avviso_pulsantePostPagamentoBollo','Il bollo è stato correttamente pagato. Premere il pulsante INVIA AL PROTOCOLLO per confermare i dati e inviare la domanda.');
var pagato = values.get('PagamentoBollo_esito') == '1';
items.get('Avviso_pulsantePostPagamentoBollo').setHidden(!pagato);
//PagamentoBollo_inserzionista    Tipo:Testo      Label:Soggetto richiedente  readonly  required
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
    values.put('PagamentoBollo_inserzionista', user.getNome() + ' ' + user.getCognome());
}
//PagamentoBollo_email            Tipo:Testo      Label:Email                 readonly  required
if (instance.getOwner() == user.getGruppoCorrente().getGroup().getId()) {
    values.put('PagamentoBollo_email', user.getEmail());
}
//PagamentoBollo_idOrdine         Tipo:Testo      Label:Numero ordine         hidden    readonly
//PagamentoBollo_dataPagamento    Tipo:Calendario Label:Data di pagamento     readonly
//PagamentoBollo_importo          Tipo:Valuta     Label:Importo               readonly  required
values.put('PagamentoBollo_importo','16.00');
//PagamentoBollo_esito_label      Tipo:Testo      Label:Esito                 readonly
{
  var esito = values.get('PagamentoBollo_esito');
  if(esito == null || esito == '') {
    values.put('PagamentoBollo_esito_label', 'Da pagare');
  } else
  if(esito == '1') {
    values.put('PagamentoBollo_esito_label', 'Positivo');
  } else
  if(esito == '0') {
     values.put('PagamentoBollo_esito_label', 'Negativo');
  }
}
//PagamentoBollo_bottonePagamento Tipo:Pagamento  Label:Pagamento bollo
caricaPagamentiIstanza('db3dde70da464c3fa22235588c7ac30d');
//PagamentoBollo_oggetto          Tipo:Etichetta  Label:Oggetto               hidden    readonly  required
values.put('PagamentoBollo_oggetto', 'SiAge - Pagamento imposta di bollo');
//PagamentoBollo_ente             Tipo:Testo      Label:Ente                  hidden    required
values.put('PagamentoBollo_ente', '#AGORA#');

// Validazione
if((values.get('Dichiarazioni_EsenzioneBollo') == 'false') && (values.get('PagamentoBollo_esito_label') != 'Positivo')) {
	errors.put('PagamentoBollo_esito_label', 'PagamentoBollo_idOrdine_val');
}
//PagamentoBollo_idOrdine_val Non è possibile continuare al passo successivo. È necessario assolvere al pagamento del bollo virtuale.
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
  //							  					Attesa protocollazione			  			Presentata
;
var pratiche = dizionarioService.getList(null, sql);
if(pratiche.size() > 0) {
  if (values.get('Dichiarazioni_EsenzioneBollo') == 'true') {
  errors.put('Avviso_EsenzioneBollo', 'PraticaDuplicata_val');
  } else {
    errors.put('PagamentoBollo_Inserzionista', 'PraticaDuplicata_val');
  }
}
