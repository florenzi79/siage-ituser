if (iamIn('Azione')) {
    items.get('Azione.Richiedente_CodiceFiscale').setReadonly(false);
    if (path == 'Azione[0].') {
        values.put('Azione[0].Richiedente_Denominazione',values.get('Richiedente_Denominazione'));
        values.put('Azione[0].Richiedente_CodiceFiscale',values.get('Richiedente_CodiceFiscale'));
        values.put('Azione[0].Capofila','true');
        values.put('Azione[0].TipologiaSoggetto',values.get('Richiedente_TipologiaSoggetto'));
        items.get('Azione.Richiedente_CodiceFiscale').setReadonly(true);
    }
}