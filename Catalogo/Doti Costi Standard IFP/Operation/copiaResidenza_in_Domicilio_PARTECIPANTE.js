// *************************************************************
//  copiaResidenza_in_Domicilio_PARTECIPANTE
// *************************************************************
var isDomicilioComeResidenza = (values.get('Partecipante_DomicilioComeResidenza')=='true');
if (isDomicilioComeResidenza) {
  values.put('Partecipante_DomicilioProvincia', values.get('Partecipante_ResidenzaProvincia'));
  values.put('Partecipante_DomicilioProvinciaDn', values.get('Partecipante_ResidenzaProvinciaDn'));
  values.put('Partecipante_DomicilioComune', values.get('Partecipante_ResidenzaComune'));
  values.put('Partecipante_DomicilioComuneDn', values.get('Partecipante_ResidenzaComuneDn'));
  values.put('Partecipante_DomicilioCap', values.get('Partecipante_ResidenzaCap'));
  values.put('Partecipante_DomicilioIndirizzo', values.get('Partecipante_ResidenzaIndirizzo'));
  values.put('Partecipante_DomicilioTelefono', values.get('Partecipante_ResidenzaTelefono'));
}
