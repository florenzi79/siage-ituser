// *************************************************************
//  copiaDatiRappresLegaleInFirmatarioPerAttoUnico.js
// *************************************************************
// DESCRIZIONE:
// nel caso in cui il firmatario coincide con il rappresentante legale, copio i dati del rappresentante legale su quelli del firmatario
// in modo che ogni modifica fatta sul rappresentante legale venga riportata nei campi nascosti del firmatario
var isLegaleRappresentante = (values.get('AttoUnico_FirmatarioRappresentanteLegale')=='true');
if (isLegaleRappresentante) {
    values.put('AttoUnico_FirmatarioCodiceFiscale', values.get('AttoUnico_RappresentanteLegaleCodiceFiscale'));
    values.put('AttoUnico_FirmatarioCognome', values.get('AttoUnico_RappresentanteLegaleCognome'));
    values.put('AttoUnico_FirmatarioNome', values.get('AttoUnico_RappresentanteLegaleNome'));
    values.put('AttoUnico_FirmatarioNascitaData', values.get('AttoUnico_RappresentanteLegaleNascitaData'));
    values.put('AttoUnico_FirmatarioNascitaProvincia', values.get('AttoUnico_RappresentanteLegaleNascitaProvincia'));
    values.put('AttoUnico_FirmatarioNascitaProvinciaDn', values.get('AttoUnico_RappresentanteLegaleNascitaProvinciaDn'));
    values.put('AttoUnico_FirmatarioNascitaComune', values.get('AttoUnico_RappresentanteLegaleNascitaComune'));
    values.put('AttoUnico_FirmatarioNascitaComuneDn', values.get('AttoUnico_RappresentanteLegaleNascitaComuneDn'));
    values.put('AttoUnico_FirmatarioGenere', values.get('AttoUnico_RappresentanteLegaleGenere'));
  }
