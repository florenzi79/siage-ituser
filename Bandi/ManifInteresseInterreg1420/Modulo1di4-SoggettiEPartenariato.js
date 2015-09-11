//onLoad


//onChange
//RichiedenteIT_CodiceFiscale
if (isEmpty('RichiedenteIT_CodiceFiscale')) {
  values.remove('RichiedenteIT_Denominazione');
  values.remove('RichiedenteIT_RappresentanteLegaleNome');
  values.remove('RichiedenteIT_RappresentanteLegaleCognome');
  values.remove('RichiedenteIT_RappresentanteLegaleCodiceFiscale');
  values.remove('RichiedenteIT_SedeLegaleProvinciaDn');
  values.remove('RichiedenteIT_SedeLegaleComuneDn');
  values.remove('RichiedenteIT_SedeLegaleCap');
  values.remove('RichiedenteIT_SedeLegaleIndirizzo');
  values.remove('RichiedenteIT_NaturaGiuridica');
  items.get('RichiedenteIT_Denominazione').setHidden(true);
  items.get('RichiedenteIT_NaturaGiuridicaDn').setHidden(true);
  items.get('RichiedenteIT_NaturaGiuridica').setHidden(true);
  items.get('RichiedenteIT_RappresentanteLegaleNome').setHidden(true);
  items.get('RichiedenteIT_RappresentanteLegaleCognome').setHidden(true);
  items.get('RichiedenteIT_RappresentanteLegaleCodiceFiscale').setHidden(true);
  items.get('RichiedenteIT_RappresentanteLegalePec').setHidden(true);
  items.get('RichiedenteIT_RappresentanteLegaleEmail').setHidden(true);
  items.get('RichiedenteIT_RappresentanteLegaleRecapito').setHidden(true);
  items.get('RichiedenteIT_SedeLegaleProvinciaDn').setHidden(true);
  items.get('RichiedenteIT_SedeLegaleComuneDn').setHidden(true);
  items.get('RichiedenteIT_SedeLegaleCap').setHidden(true);
  items.get('RichiedenteIT_SedeLegaleIndirizzo').setHidden(true);
  items.get('RichiedenteIT_SedeOperativaIsSedeLegale').setHidden(true);
  items.get('RichiedenteIT_Tipologia').setHidden(true);
  items.get('RichiedenteIT_CompetezeSettore').setHidden(true);
  items.get('RichiedenteIT_Avviso').setHidden(true);
} else {
  var codiceFiscaleDestinatario = values.get('RichiedenteIT_CodiceFiscale');
  var mappaValoriSgProf = ricercaProfiloValidoSgProfByCodFiscale(user,codiceFiscaleDestinatario);
  var profiloSgProfRicerca = ricercaProfiloValidoSgProfByCodFiscaleObject(user,codiceFiscaleDestinatario);
  if ((mappaValoriSgProf.size()>0) && (profiloSgProfRicerca !== null))	{
    if (profiloSgProfRicerca.getDati().getCodiceNaturaGiuridica() !== null) values.put('RichiedenteIT_NaturaGiuridica',''+profiloSgProfRicerca.getDati().getCodiceNaturaGiuridica());
    if( mappaValoriSgProf.get('AA037') !== null ) values.put( 'RichiedenteIT_Denominazione', mappaValoriSgProf.get('AA037').toString() );
    if( mappaValoriSgProf.get('AA206') !== null ) values.put( 'RichiedenteIT_CodiceFiscale', mappaValoriSgProf.get('AA206').toString() );
    if( mappaValoriSgProf.get('AA061') !== null ) {
      values.put( 'RichiedenteIT_SedeLegaleComune', mappaValoriSgProf.get('AA061').toString());
      values.put( 'RichiedenteIT_SedeLegaleComuneDn', getAnaDenominazione('comune_istat', values.get('RichiedenteIT_SedeLegaleComune')) );
    }
    if( mappaValoriSgProf.get('AA062') !== null ) {
      values.put( 'RichiedenteIT_SedeLegaleProvincia', mappaValoriSgProf.get('AA062').toString() );
      values.put( 'RichiedenteIT_SedeLegaleProvinciaDn', getAnaDenominazione('provincia_istat', values.get('RichiedenteIT_SedeLegaleProvincia')) );
    }
    if( mappaValoriSgProf.get('AA060') !== null ) values.put( 'RichiedenteIT_SedeLegaleIndirizzo', mappaValoriSgProf.get('AA060').toString() );
    if( mappaValoriSgProf.get('AA063') !== null ) values.put( 'RichiedenteIT_SedeLegaleCap',  mappaValoriSgProf.get('AA063').toString() );
    if( mappaValoriSgProf.get('AA142') !== null ) values.put( 'RichiedenteIT_RappresentanteLegaleCodiceFiscale', mappaValoriSgProf.get('AA142').toString() );
    if( mappaValoriSgProf.get('AA029') !== null ) values.put( 'RichiedenteIT_RappresentanteLegaleCognome', mappaValoriSgProf.get('AA029').toString() );
    if( mappaValoriSgProf.get('AA030') !== null ) values.put( 'RichiedenteIT_RappresentanteLegaleNome', mappaValoriSgProf.get('AA030').toString() );
  } else {
    values.remove('RichiedenteIT_NaturaGiuridicaDn');
    values.remove('RichiedenteIT_Denominazione');
    values.remove('RichiedenteIT_RappresentanteLegaleNome');
    values.remove('RichiedenteIT_RappresentanteLegaleCognome');
    values.remove('RichiedenteIT_RappresentanteLegaleCodiceFiscale');
    values.remove('RichiedenteIT_SedeLegaleProvinciaDn');
    values.remove('RichiedenteIT_SedeLegaleComuneDn');
    values.remove('RichiedenteIT_SedeLegaleCap');
    values.remove('RichiedenteIT_SedeLegaleIndirizzo');
    items.get('RichiedenteIT_Denominazione').setHidden(true);
    items.get('RichiedenteIT_NaturaGiuridica').setHidden(true);
    items.get('RichiedenteIT_RappresentanteLegaleNome').setHidden(true);
    items.get('RichiedenteIT_RappresentanteLegaleCognome').setHidden(true);
    items.get('RichiedenteIT_RappresentanteLegaleCodiceFiscale').setHidden(true);
    items.get('RichiedenteIT_RappresentanteLegalePec').setHidden(true);
    items.get('RichiedenteIT_RappresentanteLegaleEmail').setHidden(true);
    items.get('RichiedenteIT_RappresentanteLegaleRecapito').setHidden(true);
    items.get('RichiedenteIT_SedeLegaleProvinciaDn').setHidden(true);
    items.get('RichiedenteIT_SedeLegaleComuneDn').setHidden(true);
    items.get('RichiedenteIT_SedeLegaleCap').setHidden(true);
    items.get('RichiedenteIT_SedeLegaleIndirizzo').setHidden(true);
    items.get('RichiedenteIT_SedeOperativaIsSedeLegale').setHidden(true);
    items.get('RichiedenteIT_Tipologia').setHidden(true);
    items.get('RichiedenteIT_CompetezeSettore').setHidden(true);
    items.get('RichiedenteIT_Avviso').setHidden(false);
  }
}
//Validazione


//Operations
