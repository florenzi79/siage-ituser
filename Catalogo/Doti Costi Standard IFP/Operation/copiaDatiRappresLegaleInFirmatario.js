// *************************************************************
//  copiaDatiRappresLegaleInFirmatario.js
// *************************************************************
// DESCRIZIONE:
// nel caso in cui il firmatario coincide con il rappresentante legale, copio i dati del rappresentante legale su quelli del firmatario
// in modo che ogni modifica fatta sul rappresentante legale venga riportata nei campi nascosti del firmatario
var isLegaleRappresentante = (values.get('Richiedente_FirmatarioRappresentanteLegale')=='true');
if (isLegaleRappresentante) {
    values.put('Richiedente_FirmatarioCodiceFiscale', values.get('Richiedente_RappresentanteLegaleCodiceFiscale'));
    values.put('Richiedente_FirmatarioCognome', values.get('Richiedente_RappresentanteLegaleCognome'));
    values.put('Richiedente_FirmatarioNome', values.get('Richiedente_RappresentanteLegaleNome'));
    values.put('Richiedente_FirmatarioNascitaData', values.get('Richiedente_RappresentanteLegaleNascitaData'));
    values.put('Richiedente_FirmatarioNascitaProvincia', values.get('Richiedente_RappresentanteLegaleNascitaProvincia'));
    values.put('Richiedente_FirmatarioNascitaProvinciaDn', values.get('Richiedente_RappresentanteLegaleNascitaProvinciaDn'));
    values.put('Richiedente_FirmatarioNascitaComune', values.get('Richiedente_RappresentanteLegaleNascitaComune'));
    values.put('Richiedente_FirmatarioNascitaComuneDn', values.get('Richiedente_RappresentanteLegaleNascitaComuneDn'));
    values.put('Richiedente_FirmatarioGenere', values.get('Richiedente_RappresentanteLegaleGenere'));

  }
