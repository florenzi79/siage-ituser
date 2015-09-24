// Modulo   Pagamento imposta di bollo
// validazione
if( (values.get('PagamentoBollo_Modalita') == 'virtuale') && (values.get('PagamentoBollo_esito_label') != 'Positivo') ) {
  errors.put('PagamentoBollo_dataPagamento', 'PagamentoBollo_idOrdine_val');
}
// errori
{
  'PagamentoBollo_idOrdine_val': "Per proseguire è necessario assolvere al pagamento dell'imposta di bollo"
}
// Sezione    Informazioni di pagamento
// Fieldset     Selezione della modalità di pagamento
// Item           PagamentoBollo_Modalita
{
  label: "Selezionare la modalità di pagamento",
  tipo: 'Radio',
  required: true,
  options: {
    'virtuale': 'Pagamento con bollo virtuale',
    'assolto': 'Dichiarazione di bollo già assolto',
    'esente': 'Dichiarazione di esenzione'
  }
}
// onload
var isEsente = (values.get('PagamentoBollo_Modalita') == 'esente');
fieldsets.get('21a2acf3755f471298c9c5403414d131').setHidden(!isEsente);
items.get('PagamentoBollo_MotivazioneEsenzione').setRequired(isEsente);
var isVirtuale = (values.get('PagamentoBollo_Modalita') == 'virtuale');
fieldsets.get('ce1adbac6a5c4763b2946d96fd613997').setHidden(!isVirtuale);
items.get('PagamentoBollo_inserzionista').setRequired(isVirtuale);
items.get('PagamentoBollo_email').setRequired(isVirtuale);
items.get('PagamentoBollo_importo').setRequired(isVirtuale);
items.get('PagamentoBollo_oggetto').setRequired(isVirtuale);
items.get('PagamentoBollo_ente').setRequired(isVirtuale);
var isAssolto = (values.get('PagamentoBollo_Modalita') == 'assolto');
fieldsets.get('deb42b47d9b241c898c11b77b4ae4f77').setHidden(!isAssolto);
items.get('BolloAssolto_DataPagamento').setRequired(isAssolto);
items.get('BolloAssolto_IdOrdine').setRequired(isAssolto);
// onchange
var isEsente = (values.get('PagamentoBollo_Modalita') == 'esente');
fieldsets.get('21a2acf3755f471298c9c5403414d131').setHidden(!isEsente);
items.get('PagamentoBollo_MotivazioneEsenzione').setRequired(isEsente);
var isVirtuale = (values.get('PagamentoBollo_Modalita') == 'virtuale');
fieldsets.get('ce1adbac6a5c4763b2946d96fd613997').setHidden(!isVirtuale);
items.get('PagamentoBollo_inserzionista').setRequired(isVirtuale);
items.get('PagamentoBollo_email').setRequired(isVirtuale);
items.get('PagamentoBollo_importo').setRequired(isVirtuale);
items.get('PagamentoBollo_oggetto').setRequired(isVirtuale);
items.get('PagamentoBollo_ente').setRequired(isVirtuale);
var isAssolto = (values.get('PagamentoBollo_Modalita') == 'assolto');
fieldsets.get('deb42b47d9b241c898c11b77b4ae4f77').setHidden(!isAssolto);
items.get('BolloAssolto_DataPagamento').setRequired(isAssolto);
items.get('BolloAssolto_IdOrdine').setRequired(isAssolto);
// Fieldset     Informazioni di pagamento già assolto
// Item           BolloAssolto_DataPagamento
{
  label: "Data di pagamento",
  tipo: 'Calendario'
}
// Item           BolloAssolto_IdOrdine
{
  label: "Numero identificativo dell'ordine di pagamento",
  tipo: 'Testo'
}
// Fieldset     Bollo virtuale
// Item           Avviso_pulsantePostPagamentoBollo
{
  label: "Attenzione",
  tipo: 'Testo esteso',
  hidden: true,
  readOnly: true
}
// onload
values.put('Avviso_pulsantePostPagamentoBollo','Il bollo è stato correttamente pagato. Premere il pulsante INVIA AL PROTOCOLLO per confermare i dati e inviare la domanda.');
var pagato = values.get('PagamentoBollo_esito') == '1';
items.get('Avviso_pulsantePostPagamentoBollo').setHidden(!pagato);
// Item           PagamentoBollo_inserzionista
{
  label: "Soggetto richiedente",
  tipo: 'Testo',
  readOnly: true,
}
// onload
values.put('PagamentoBollo_inserzionista', user.getNome() + ' ' + user.getCognome());
// Item           PagamentoBollo_email
{
  label: "Email",
  tipo: 'Testo',
  readOnly: true,
}
// onload
values.put('PagamentoBollo_email', user.getEmail());
// Item           PagamentoBollo_idOrdine
{
  label: "Numero ordine",
  tipo: 'Testo',
  hidden: true,
  readOnly: true
}
// Item           PagamentoBollo_dataPagamento
{
  label: "Data di Pagamento",
  tipo: 'Calendario',
  readOnly: true
}
// Item           PagamentoBollo_importo
{
  label: "Importo",
  tipo: 'Valuta',
  readOnly: true,
}
// onload
values.put('PagamentoBollo_importo','16.00');
// Item           PagamentoBollo_esito_label
{
  label: "Esito",
  tipo: 'Testo',
  readOnly: true
}
// onload
if(isEmpty('PagamentoBollo_esito')) {
  values.put('PagamentoBollo_esito_label', 'Da pagare');
} else if(values.get('PagamentoBollo_esito') == '1') {
  values.put('PagamentoBollo_esito_label', 'Positivo');
  items.get('PagamentoBollo_Modalita').setReadonly(true);
} else if(values.get('PagamentoBollo_esito') == '0') {
  values.put('PagamentoBollo_esito_label', 'Negativo');
}
// Item           PagamentoBollo_bottonePagamento
{
  label: "Paga bollo",
  tipo: 'Pagamento'
}
// onload
caricaPagamentiIstanza('PagamentoBolloModule');
// Item           PagamentoBollo_oggetto
{
  label: "Oggetto",
  tipo: 'Testo',
  hidden: true,
  readOnly: true,
}
// onload
values.put('PagamentoBollo_oggetto', 'SiAge - Pagamento imposta di bollo');
// Item           PagamentoBollo_ente
{
  label: "Ente",
  tipo: 'Testo',
  hidden: true,
}
// onload
values.put('PagamentoBollo_ente', '#AGORA#');
// Fieldset     Motivazioni esenzione
// Item           PagamentoBollo_MotivazioneEsenzione
{
  label: "Motivazione di esenzione dall'imposta di bollo",
  tipo: 'Testo esteso'
}
