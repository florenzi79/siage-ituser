//onLoad
//Beneficiario_Cittandinanza
if (isEmpty('Beneficiario_Cittandinanza')) {
  items.get('Beneficiario_StatoCittandinanza').setHidden(true);
} else {
  items.get('Beneficiario_StatoCittandinanza').setHidden(false);
  setSelectDependedOptions('Beneficiario_StatoCittandinanza', 'cittadinanza_doti', 'Beneficiario_Cittandinanza');
}

//onChange
//Beneficiario_Cittandinanza
values.put('Beneficiario_StatoCittandinanza','');
values.remove('Beneficiario_StatoCittandinanzaDn');
items.get('Beneficiario_StatoCittandinanza').setHidden(false);
setSelectDependedOptions('Beneficiario_StatoCittandinanza', 'cittadinanza_doti', 'Beneficiario_Cittandinanza');
//Beneficiario_StatoCittandinanza
values.put('Beneficiario_StatoCittandinanzaDn', getOptionLabel('Beneficiario_StatoCittandinanza', values.get(path+'Beneficiario_StatoCittandinanza')));

//Validazione
