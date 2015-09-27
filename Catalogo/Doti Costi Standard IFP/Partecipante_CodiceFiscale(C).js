function nascondiCampiDestinatario(flag) {
  items.get('Partecipante_Cognome').setHidden(flag);
  items.get('Partecipante_Nome').setHidden(flag);
  items.get('Partecipante_Genere').setHidden(flag);
  items.get('Partecipante_NascitaData').setHidden(flag);
  items.get('Partecipante_Eta').setHidden(flag);
  items.get('Partecipante_NascitaProvincia').setHidden(flag);
  //items.get('Partecipante_NascitaComune').setHidden(flag);
  //items.get('dichiarazione_frequenza').setHidden(flag);
}
nascondiCampiDestinatario ((values.get('Partecipante_Cognome') == null) ||
                           (values.get('Partecipante_Cognome') == '')
                          );
setSelectOptionsCached('Partecipante_NascitaProvincia', 'provincia_istat');
setSelectDependedOptionsCached('Partecipante_NascitaComune', 'comune_istat', path+'Partecipante_NascitaProvincia');
